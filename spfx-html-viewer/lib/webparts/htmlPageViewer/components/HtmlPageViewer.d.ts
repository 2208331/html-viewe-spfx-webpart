import * as React from 'react';
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
declare const HtmlPageViewer: React.FC<IHtmlPageViewerProps>;
export default HtmlPageViewer;
//# sourceMappingURL=HtmlPageViewer.d.ts.map