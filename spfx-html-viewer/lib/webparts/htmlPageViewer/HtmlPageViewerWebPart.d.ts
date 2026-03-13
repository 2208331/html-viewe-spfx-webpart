import { Version } from '@microsoft/sp-core-library';
import { type IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IHtmlPageViewerWebPartProps {
    linkText: string;
    htmlFileUrl: string;
    imagesFolderUrl: string;
    resourcesFolderUrl: string;
}
export default class HtmlPageViewerWebPart extends BaseClientSideWebPart<IHtmlPageViewerWebPartProps> {
    render(): void;
    private _isDarkTheme;
    protected onInit(): Promise<void>;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=HtmlPageViewerWebPart.d.ts.map