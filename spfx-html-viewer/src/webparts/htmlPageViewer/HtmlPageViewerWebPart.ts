import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneLabel
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import HtmlPageViewer from './components/HtmlPageViewer';
import { IHtmlPageViewerProps } from './components/IHtmlPageViewerProps';
import * as strings from 'HtmlPageViewerWebPartStrings';

export interface IHtmlPageViewerWebPartProps {
  linkText: string;
  htmlFileUrl: string;
  imagesFolderUrl: string;
  resourcesFolderUrl: string;
}

export default class HtmlPageViewerWebPart extends BaseClientSideWebPart<IHtmlPageViewerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHtmlPageViewerProps> = React.createElement(
      HtmlPageViewer,
      {
        linkText: this.properties.linkText || 'View Report',
        htmlFileUrl: this.properties.htmlFileUrl || '',
        imagesFolderUrl: this.properties.imagesFolderUrl || '',
        resourcesFolderUrl: this.properties.resourcesFolderUrl || '',
        isDarkTheme: this._isDarkTheme,
        hasTeamsContext: !!this.context.sdks.microsoftTeams
      }
    );

    ReactDom.render(element, this.domElement);
  }

  private _isDarkTheme: boolean = false;

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
