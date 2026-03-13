var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import styles from './HtmlPageViewer.module.scss';
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
var HtmlPageViewer = function (props) {
    var linkText = props.linkText, htmlFileUrl = props.htmlFileUrl, imagesFolderUrl = props.imagesFolderUrl, resourcesFolderUrl = props.resourcesFolderUrl;
    var _a = React.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = React.useState(''), error = _b[0], setError = _b[1];
    /* ── Path-rewriting helpers ───────────────────────────────────────── */
    /**
     * Rewrite relative `src="…"` attributes so images, scripts, etc.
     * resolve against the given SharePoint folder URL.
     */
    var resolveAssetPaths = function (html, baseFolderUrl) {
        var base = baseFolderUrl.replace(/\/?$/, '/');
        return html.replace(/(\bsrc\s*=\s*["'])(?!https?:\/\/|data:|\/\/|blob:|mailto:|#)([^"']+)(["'])/gi, function (_match, pre, path, post) {
            return "".concat(pre).concat(base).concat(path).concat(post);
        });
    };
    /**
     * Rewrite CSS `url()` references so that background images, fonts, etc.
     * resolve against the given SharePoint folder URL.
     */
    var resolveResourcePaths = function (html, baseFolderUrl) {
        var base = baseFolderUrl.replace(/\/?$/, '/');
        return html.replace(/url\(\s*["']?(?!https?:\/\/|data:|\/\/|blob:)([^"')]+?)["']?\s*\)/gi, function (_match, path) { return "url(\"".concat(base).concat(path, "\")"); });
    };
    /* ── Click handler ────────────────────────────────────────────────── */
    var handleClick = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, html, newTab, err_1, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setError('');
                    if (!htmlFileUrl) {
                        setError('HTML file URL is not configured. Edit the web part properties to provide a URL.');
                        return [2 /*return*/];
                    }
                    // ── Simple mode ──────────────────────────────────────────────────
                    // No asset-override URLs → open the HTML file directly in a new tab.
                    // Relative paths resolve from the file's location in the doc library.
                    if (!imagesFolderUrl && !resourcesFolderUrl) {
                        window.open(htmlFileUrl, '_blank', 'noopener');
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    setIsLoading(true);
                    return [4 /*yield*/, fetch(htmlFileUrl, {
                            credentials: 'same-origin',
                            headers: { Accept: 'text/html' }
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to load HTML file (HTTP ".concat(response.status, ")."));
                    }
                    return [4 /*yield*/, response.text()];
                case 3:
                    html = _a.sent();
                    // Rewrite relative src attributes (images, media embeds, etc.)
                    if (imagesFolderUrl) {
                        html = resolveAssetPaths(html, imagesFolderUrl);
                    }
                    // Rewrite CSS url() references (background images, fonts, etc.)
                    if (resourcesFolderUrl) {
                        html = resolveResourcePaths(html, resourcesFolderUrl);
                    }
                    newTab = window.open('about:blank', '_blank');
                    if (newTab) {
                        newTab.document.open();
                        newTab.document.write(html);
                        newTab.document.close();
                    }
                    else {
                        throw new Error('Pop-up was blocked by the browser. Please allow pop-ups for this SharePoint site.');
                    }
                    return [3 /*break*/, 6];
                case 4:
                    err_1 = _a.sent();
                    msg = err_1 instanceof Error ? err_1.message : String(err_1);
                    console.error('[HtmlPageViewer]', msg);
                    setError("".concat(msg, "  \u2014 Falling back to direct link."));
                    // Fallback: open the URL directly
                    window.open(htmlFileUrl, '_blank', 'noopener');
                    return [3 /*break*/, 6];
                case 5:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    /* ── Render ───────────────────────────────────────────────────────── */
    // Placeholder state: no HTML URL configured yet
    if (!htmlFileUrl) {
        return (React.createElement("div", { className: styles.htmlPageViewer },
            React.createElement("div", { className: styles.placeholder },
                React.createElement("div", { className: styles.placeholderIcon }, "\uD83D\uDCC4"),
                React.createElement("p", { className: styles.placeholderText }, "HTML Page Viewer"),
                React.createElement("p", { className: styles.placeholderHint },
                    "Edit the web part properties to set the",
                    ' ',
                    React.createElement("strong", null, "Link Display Text"),
                    " and",
                    ' ',
                    React.createElement("strong", null, "HTML File URL"),
                    "."))));
    }
    // Configured state: render the clickable link
    return (React.createElement("div", { className: styles.htmlPageViewer },
        React.createElement("a", { href: htmlFileUrl, className: styles.pageLink, onClick: handleClick, title: "Open ".concat(linkText, " in a new tab") },
            React.createElement("span", { className: styles.linkIcon }, "\uD83D\uDCC4"),
            React.createElement("span", { className: styles.linkText }, linkText || 'View HTML Page'),
            React.createElement("span", { className: styles.externalIcon }, "\u2197")),
        isLoading && (React.createElement("div", { className: styles.loadingBar },
            React.createElement("div", { className: styles.loadingProgress }))),
        error && (React.createElement("div", { className: styles.errorMessage },
            "\u26A0 ",
            error))));
};
export default HtmlPageViewer;
//# sourceMappingURL=HtmlPageViewer.js.map