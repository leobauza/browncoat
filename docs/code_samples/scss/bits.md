### colours
```css
/*
 * colours
 * colour values here may not match current colours (see styleguide).
 */
/* greyscale */
$black: #000;
$grey: #efefef;
$white: #fff;

/* general */
$brand: #c68143;
$brand_alt: darken($brand, 10);
$body_bg: $white;

/* links */
$link_colour: #428bca;
$link_hover_colour: darken($link_colour, 20);

/* focus */
$focus_border: rgba(82, 168, 236, 0.8);

/* text */
$text_colour: #2d2d2d;
$text_colour_light: #d6d7d8;

/* alets */
$default: $grey;
$info: #66d9ef;
$success: #5cb85c;
$warning: #e6db74;
$error: #d9534f;
/* end */
```
---
### typography
```css
/* typography */
$base_size: 62.5%;
$display: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
$sans_serif: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
$serif: "Georgia", "Times New Roman", Times, serif;
$code: Menlo,Monaco,Consolas,"Courier New",monospace;

/* not everything inherits from the body, use $global_family */
$global_family: $sans_serif;

/* paragraphs and lists */
$text_size: 1.6em;
$text_line_height: 1.5em;
$lists_font_size: $text_size;
$lists_line_height: $text_line_height;

/* headings */
$h1: 4.8em;
$h2: 3.6em;
$h3: 2.8em;
$h4: 2.2em;
$h5: 1.8em;
$h6: 1.4em;

/* weights */
$lightFont: 200;
$regularFont: 300;
$boldFont: 700;
/* end */
```
---
### grid
```css
/* grid */
$global_columns: 12;
$global_gutter: 3.183;
/* end */
```
---
### utils
```css
/* mixin */
@mixin myMixin ($value) {
  property: $value;
}
/* function */
@function myFn($value) {
  return $value;
}
/* placeholder */
%placeholder {
  property: value;
}
/* end */
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
