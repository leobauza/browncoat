### colours
```css
/* colours */
$white: #fff;
/* end */
```
---
### vars
```css
/* colours */
$white: #fff;
/* typography */
$boldFont: 700;
/* end */
```
---
### utils
```css
@mixin something ($width) {
  width: $width
}
```
---
### sprites
```css
/* sprite mixin */
@mixin sprite($sprite) {
  @include sprite-image($sprite);
  @include sprite-position($sprite);
  @include sprite-width($sprite);
  @include sprite-height($sprite);
  .lt-ie9 & {
    @include sprite-png-image($sprite);
  }
}
/*
 * Usage
 * For file "icon_twitter.svg"
 */
.icon.-twitter {
  display: block;
  @include sprite($icon_twitter);
}
```
