# HTML Page Viewer – SPFx Web Part

A SharePoint Framework (SPFx) React web part that renders a **configurable text link**.  
When clicked, it opens an HTML page from a SharePoint document library **in a new browser tab** with full-page rendering (no SharePoint chrome).

---

## Features

| Capability | Details |
|---|---|
| **Clickable link** | Styled text link displayed inline on any SharePoint modern page |
| **Full-page view** | Opens the HTML file in a brand-new tab — full viewport, no SP navigation bars |
| **Dynamic configuration** | Property pane lets editors set link text, HTML URL, images folder, and resources folder per instance |
| **Multi-page reuse** | Add the web part to any page; each instance stores its own configuration |
| **Two rendering modes** | *Direct link* (simple) or *Fetch + rewrite paths* (advanced, for separate asset folders) |
| **Fallback on error** | If enhanced fetch fails, falls back to opening the raw URL directly |

---

## Property Pane Fields

| Property | Required | Description |
|---|---|---|
| **Link Display Text** | Yes | The clickable text shown on the page (e.g. *"View Marketplace Report"*) |
| **HTML File URL** | Yes | Full URL of the `.html` file in a SharePoint document library |
| **Images / Assets Base URL** | No | If images live in a separate folder, provide its URL. Leave empty to use relative paths from the HTML file's location. |
| **Resources Base URL** | No | Base URL for CSS `url()` references (fonts, backgrounds). Leave empty if not needed. |

---

## Rendering Modes

### 1. Direct Link (recommended)

Leave **Images Base URL** and **Resources Base URL** empty.  
The web part simply calls `window.open(htmlFileUrl, '_blank')`.  
Relative paths in the HTML (e.g. `_chart_captures/chart.png`) resolve from the file's location in the document library.

> **Requirement:** upload the HTML file **and** its asset folders to the same document library folder, preserving the relative structure.

### 2. Fetch + Rewrite (advanced)

Provide one or both override URLs. The web part will:

1. `fetch()` the HTML file content (same-origin, authenticated)
2. Rewrite every relative `src="…"` attribute → prepend the **Images Base URL**
3. Rewrite every CSS `url(…)` reference → prepend the **Resources Base URL**
4. Open `about:blank` in a new tab and `document.write()` the rewritten HTML

---

## Prerequisites

| Requirement | Version |
|---|---|
| Node.js | 16.x or 18.x |
| npm | 8+ |
| SPFx | 1.18.2 |
| SharePoint Online | Modern experience |

---

## Build & Deploy

```bash
# 1. Install dependencies
cd spfx-html-viewer
npm install

# 2. Build (development)
gulp build

# 3. Bundle for production
gulp bundle --ship

# 4. Create the .sppkg package
gulp package-solution --ship
```

The package is output to:  
`sharepoint/solution/spfx-html-viewer.sppkg`

### Deploy to SharePoint App Catalog

1. Navigate to your **SharePoint Admin Center → More features → Apps → App Catalog**
2. Upload `spfx-html-viewer.sppkg`
3. Trust the solution when prompted (check *"Make this solution available to all sites"* for tenant-wide deployment)
4. Go to any modern page → **Edit → Add a web part → search "HTML Page Viewer"**
5. Configure properties via the property pane

---

## Upload HTML & Assets to SharePoint

For the **Direct Link** mode, maintain the same folder structure:

```
Shared Documents/
└── Reports/
    ├── Trend Analysis Report_SPO.html
    ├── _chart_captures/
    │   ├── chartAWSAgents.png
    │   ├── chartCompetitors.png
    │   ├── chartDrivers.png
    │   ├── chartMarketGrowth.png
    │   ├── chartRoadmap.png
    │   └── chartTiers.png
    └── _extracted_images/
        └── image_0.png
```

Then set **HTML File URL** to:  
`https://<tenant>.sharepoint.com/sites/<site>/Shared%20Documents/Reports/Trend%20Analysis%20Report_SPO.html`

---

## Local Development

```bash
# Start the local workbench
gulp serve

# Open the SharePoint workbench
# https://<tenant>.sharepoint.com/sites/<site>/_layouts/workbench.aspx
```

---

## Project Structure

```
spfx-html-viewer/
├── config/                           # SPFx build configuration
│   ├── config.json
│   ├── package-solution.json
│   ├── serve.json
│   ├── write-manifests.json
│   └── deploy-azure-storage.json
├── src/
│   └── webparts/
│       └── htmlPageViewer/
│           ├── HtmlPageViewerWebPart.manifest.json
│           ├── HtmlPageViewerWebPart.ts          # Web part class + property pane
│           ├── components/
│           │   ├── IHtmlPageViewerProps.ts        # Props interface
│           │   ├── HtmlPageViewer.tsx             # React component (link + logic)
│           │   └── HtmlPageViewer.module.scss     # Scoped styles
│           └── loc/
│               ├── en-us.js                      # English strings
│               └── mystrings.d.ts                # TypeScript declarations
├── package.json
├── tsconfig.json
├── gulpfile.js
└── .yo-rc.json
```

---

## License

Internal use — Cognizant QEA AISO.
