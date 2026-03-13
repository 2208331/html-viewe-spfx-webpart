var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField, PropertyPaneLabel } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import HtmlPageViewer from './components/HtmlPageViewer';
import * as strings from 'HtmlPageViewerWebPartStrings';
var HtmlPageViewerWebPart = /** @class */ (function (_super) {
    __extends(HtmlPageViewerWebPart, _super);
    function HtmlPageViewerWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        return _this;
    }
    HtmlPageViewerWebPart.prototype.render = function () {
        var element = React.createElement(HtmlPageViewer, {
            linkText: this.properties.linkText || 'View Report',
            htmlFileUrl: this.properties.htmlFileUrl || '',
            imagesFolderUrl: this.properties.imagesFolderUrl || '',
            resourcesFolderUrl: this.properties.resourcesFolderUrl || '',
            isDarkTheme: this._isDarkTheme,
            hasTeamsContext: !!this.context.sdks.microsoftTeams
        });
        ReactDom.render(element, this.domElement);
    };
    HtmlPageViewerWebPart.prototype.onInit = function () {
        return _super.prototype.onInit.call(this);
    };
    HtmlPageViewerWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(HtmlPageViewerWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    HtmlPageViewerWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('linkText', {
                                    label: 'Link Display Text',
                                    description: 'The text shown as a clickable link on the page.',
                                    placeholder: 'e.g. View Marketplace Report'
                                }),
                                PropertyPaneTextField('htmlFileUrl', {
                                    label: 'HTML File URL',
                                    description: 'Full URL of the HTML file in your SharePoint document library.',
                                    placeholder: 'https://tenant.sharepoint.com/sites/site/Shared Documents/report.html',
                                    multiline: true,
                                    rows: 3
                                }),
                                PropertyPaneLabel('separator1', {
                                    text: '── Optional: Asset Path Overrides ──'
                                }),
                                PropertyPaneTextField('imagesFolderUrl', {
                                    label: 'Images / Assets Base URL (Optional)',
                                    description: 'If images are in a different folder than the HTML file, provide the base URL here. Leave empty if the folder structure matches (recommended).',
                                    placeholder: 'https://tenant.sharepoint.com/sites/site/Shared Documents/Reports/',
                                    multiline: true,
                                    rows: 3
                                }),
                                PropertyPaneTextField('resourcesFolderUrl', {
                                    label: 'Resources Base URL (Optional)',
                                    description: 'Base URL for CSS url() references and other linked resources. Leave empty if not needed.',
                                    placeholder: 'https://tenant.sharepoint.com/sites/site/SiteAssets/resources/',
                                    multiline: true,
                                    rows: 3
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HtmlPageViewerWebPart;
}(BaseClientSideWebPart));
export default HtmlPageViewerWebPart;
//# sourceMappingURL=HtmlPageViewerWebPart.js.map