### pages
```js
//
```
---
### main
```js
{
  "projectTitle": "My Title", // title in header of your docs
  "version": "0.0.0", // version in header of docs
  "projectNav": [ // array of nav objects
    {
      "name": "home", // nav text
      "path": "/" // page path (matches a route on docs.js)
    },
    ... // all top level nav items
  ],
  "sectionNavs": {
    "home": [], // include empty possible navs (ie. a route exists on docs.js)
    "scss": [
      {
        "name": "Bits", // subsection nav text
        "path": "/scss/bits" // subsection path (matches a route on docs.js)
      },
      ... // other subsections
    ],
    ... // all other section nav arrays (key must be in projectNav array)
  },
  "styleguideNavs": {
    "main": [
      {
        "name": "first", // styleguide nav text
        "path": "/first" // styleguide nav path (matches a route on docs.js)
      },
      ... // all other styleguide pages
    ]
  },
  "bundles": { // docs can be built with whatever...
    "angular": { // currently only using angular...
      "intro": "Intro" // angular app specific intro text (global)
    }
  }
}
```
---
### json
```js
{
  "title": "Page Title", // Title for doc page
  "description": [ // Body of the page before boxes
    "Page description in paragraph array form." // each array item turns into a p tag
  ],
  "sections": [ // boxes
    {
      "key": "mdkey", // matches a key in corresponding .md file
      "title": "Box Title", // section title
      "nav": "Override Title", // if missing or set to false the sidebar nav will use the box title
      "description": [ // section body
        "Box description." // also in paragraph array form
      ],
      "file": "/path/to/file.ext", // path to a file to display on the box footer
      "display": true || false // whether or not to render the code sample (used for rendering html elements that are being styled.)
    },
    ... // other sections
  ]
}
```
---
### md
```md
### key
\`\`\`lang
code...
\`\`\`
--- // add separator if there are more code samples
```
---
### paths
```js
// Home landing (resolves to "home").
"/"
// SCSS landing page and subpages.
"/scss/:name?"
// JS landing page and subpages.
"/js/:name?"
// Docs landing page (this page) and subpages (this page)
"/docs/:name?"
// Gulp landing page (has no subpages)
"/gulp"
// Home landing and subpages ("/" resolves as "home" to get home.json & home.md).
"/home/:name?"
// Styleguide landing and sections.
"/styleguide/:section?"
```
