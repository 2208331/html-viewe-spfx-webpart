import * as React from 'react';
import styles from './HtmlPageViewer.module.scss';
import { IHtmlPageViewerProps } from './IHtmlPageViewerProps';

/**
 * HtmlPageViewer – SPFx React component
 *
 * Renders a styled text link. On click the HTML page opens in a new browser tab
 * in full-page view (no SharePoint chrome).
 *
 * Two rendering modes:
 *  1. **Direct link** – if no asset-override URLs are configured, the HTML URL
 *     is opened directly via `window.open`. Relative paths in the HTML resolve
 *     from the file's location in the document library.
 *  2. **Fetch + rewrite** – if Images or Resources base URLs are provided, the
 *     component fetches the HTML content, rewrites relative `src` / `url()` paths
 *     to point at the configured SharePoint folders, then renders the rewritten
 *     markup in a new tab.
 */
const HtmlPageViewer: React.FC<IHtmlPageViewerProps> = (props) => {
  const {
    linkText,
    htmlFileUrl,
    imagesFolderUrl,
    resourcesFolderUrl
  } = props;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  /* ── Path-rewriting helpers ───────────────────────────────────────── */

  /**
   * Rewrite relative `src="…"` attributes so images, scripts, etc.
   * resolve against the given SharePoint folder URL.
   */
  const resolveAssetPaths = (html: string, baseFolderUrl: string): string => {
    const base = baseFolderUrl.replace(/\/?$/, '/');
    return html.replace(
      /(\bsrc\s*=\s*["'])(?!https?:\/\/|data:|\/\/|blob:|mailto:|#)([^"']+)(["'])/gi,
      (_match: string, pre: string, path: string, post: string) =>
        `${pre}${base}${path}${post}`
    );
  };

  /**
   * Rewrite CSS `url()` references so that background images, fonts, etc.
   * resolve against the given SharePoint folder URL.
   */
  const resolveResourcePaths = (html: string, baseFolderUrl: string): string => {
    const base = baseFolderUrl.replace(/\/?$/, '/');
    return html.replace(
      /url\(\s*["']?(?!https?:\/\/|data:|\/\/|blob:)([^"')]+?)["']?\s*\)/gi,
      (_match: string, path: string) => `url("${base}${path}")`
    );
  };

  /* ── Click handler ────────────────────────────────────────────────── */

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement>
  ): Promise<void> => {
    e.preventDefault();
    setError('');

    if (!htmlFileUrl) {
      setError(
        'HTML file URL is not configured. Edit the web part properties to provide a URL.'
      );
      return;
    }

    // ── Simple mode ──────────────────────────────────────────────────
    // No asset-override URLs → open the HTML file directly in a new tab.
    // Relative paths resolve from the file's location in the doc library.
    if (!imagesFolderUrl && !resourcesFolderUrl) {
      window.open(htmlFileUrl, '_blank', 'noopener');
      return;
    }

    // ── Enhanced mode ────────────────────────────────────────────────
    // Fetch HTML content, rewrite relative paths, render in a new tab.
    try {
      setIsLoading(true);

      const response = await fetch(htmlFileUrl, {
        credentials: 'same-origin',
        headers: { Accept: 'text/html' }
      });

      if (!response.ok) {
        throw new Error(`Failed to load HTML file (HTTP ${response.status}).`);
      }

      let html = await response.text();

      // Rewrite relative src attributes (images, media embeds, etc.)
      if (imagesFolderUrl) {
        html = resolveAssetPaths(html, imagesFolderUrl);
      }

      // Rewrite CSS url() references (background images, fonts, etc.)
      if (resourcesFolderUrl) {
        html = resolveResourcePaths(html, resourcesFolderUrl);
      }

      // Open a blank tab and write the rewritten HTML
      const newTab = window.open('about:blank', '_blank');
      if (newTab) {
        newTab.document.open();
        newTab.document.write(html);
        newTab.document.close();
      } else {
        throw new Error(
          'Pop-up was blocked by the browser. Please allow pop-ups for this SharePoint site.'
        );
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[HtmlPageViewer]', msg);
      setError(`${msg}  — Falling back to direct link.`);
      // Fallback: open the URL directly
      window.open(htmlFileUrl, '_blank', 'noopener');
    } finally {
      setIsLoading(false);
    }
  };

  /* ── Render ───────────────────────────────────────────────────────── */

  // Placeholder state: no HTML URL configured yet
  if (!htmlFileUrl) {
    return (
      <div className={styles.htmlPageViewer}>
        <div className={styles.placeholder}>
          <div className={styles.placeholderIcon}>📄</div>
          <p className={styles.placeholderText}>
            HTML Page Viewer
          </p>
          <p className={styles.placeholderHint}>
            Edit the web part properties to set the{' '}
            <strong>Link Display Text</strong> and{' '}
            <strong>HTML File URL</strong>.
          </p>
        </div>
      </div>
    );
  }

  // Configured state: render the clickable link
  return (
    <div className={styles.htmlPageViewer}>
      <a
        href={htmlFileUrl}
        className={styles.pageLink}
        onClick={handleClick}
        title={`Open ${linkText} in a new tab`}
      >
        <span className={styles.linkIcon}>📄</span>
        <span className={styles.linkText}>
          {linkText || 'View HTML Page'}
        </span>
        <span className={styles.externalIcon}>↗</span>
      </a>

      {isLoading && (
        <div className={styles.loadingBar}>
          <div className={styles.loadingProgress} />
        </div>
      )}

      {error && (
        <div className={styles.errorMessage}>⚠ {error}</div>
      )}
    </div>
  );
};

export default HtmlPageViewer;
