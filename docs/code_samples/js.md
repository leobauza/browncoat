### commonjs
```js
// modules/mymodule.js
module.exports = "Hello World!";

// app.js
var myModule = require("./modules/mymodule");
console.log(myModule); // outputs "Hellow World!" to console
```