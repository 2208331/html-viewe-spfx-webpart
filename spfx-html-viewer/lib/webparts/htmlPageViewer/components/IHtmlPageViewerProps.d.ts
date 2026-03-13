export interface IHtmlPageViewerProps {
    /** The clickable link text displayed in the web part */
    linkText: string;
    /** Full URL to the HTML file in a SharePoint document library */
    htmlFileUrl: string;
    /** Optional base URL for rewriting relative image/src paths */
    imagesFolderUrl: string;
    /** Optional base URL for rewriting CSS url() and other resource paths */
    resourcesFolderUrl: string;
    /** Whether the current SharePoint theme is dark */
    isDarkTheme: boolean;
    /** Whether the web part is running inside Microsoft Teams */
    hasTeamsContext: boolean;
}
//# sourceMappingURL=IHtmlPageViewerProps.d.ts.map