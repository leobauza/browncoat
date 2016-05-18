### tasks
```bash
# Default task [default.js]
# Runs the watch task
npm run gulp

# Docs task [watch.js]
# Like the default task but compiles docs.js instead of app.js
npm run gulp docs

# Watch task [watch.js]
# Sets up browserSync
# Watches /src/scss and Runs css task on change
# Watches /web/*.html files and browserSync reloads on change
# Runs js task (webpack watches js files)
npm run gulp watch

# Sass task [css.js] (called by watch task)
# Compiles from src/scss/styles.scss to web/assets/css/styles.css
npm run gulp css

# Js task [webpack.js] (called by watch task)
# Uses webpack to compile js
# from src/js/ng-app.js to web/assets/css/ng-main.js
npm run gulp js

# Sprite task (not called by watch task)
# Uses sprite-template.scss file to create src/scss/00_bits/_sprites.scss
# Takes all .svg files in src/icons directory
# Creates web/assets/img/sprite.svg and web/assets/img/sprite.png
npm run gulp sprite
```
---
### utils
```js
// handleErrors.js
var handleErrors = require('<path>/handleErrors');

// logger.js
var logger = require('<path>/logger'),

// prettifyTime.js
var prettifyTime = require('<path>/prettifyTime'),
```
---
### config
```js
{
  // Directory configurations
  "root": {
    "src": "./src",
    "dest": "./web",
    "docs": "./docs",
    "base": "."
  },
  // Task specific configurations
  "tasks": {
    // js task configurations
    "js": {
      "src": "./js",
      "dest": "./assets/js",
      "entries": {
        "main": "./app.js"
      },
      "doc_entries": {
        "docs": "./docs.js"
      }
    },
    // css task configurations
    "css": {
      "src": "./scss/styles.scss",
      "dest": "./assets/css"
    },
    // sprite task configurations
    "sprite": {
      "entry": "./icons/*.svg",
      "fileName": "sprite.svg",
      "spriteDest": "./assets/img",
      "scssDest": "./scss/00_bits/_sprites.scss"
    }

  }
}
```
---
### index
```js
// Use require directory node module
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./tasks', { recurse: true });
```