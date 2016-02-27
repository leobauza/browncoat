### folders
```bash
/scss
  styles.scss # aggregates all files
  00_bits # variables and utilities
  01_elements # basic html elements and resets
  02_items # extended basic elements
  03_collections # groups that may contain items and/or elements
  04_sections # logical page sections
  05_layouts # control overall structure of the page
```
---
### structure
```css
/* bits */
$h1: 5em;
/* elements */
h1 {
  font-size: $h1;
}
/* items */
.btn {
  @extend %btn;
}
/* collections */
.box {
  @extend %box;
  .box__heading {
    font-size: $h1;
  }
}
/* sections */
.site__header {
  padding: 20px 0px;
}
/* layouts */
.container {
  padding: 0px 20px;
}
/* end */
```
---
### generics
```css
/* button generic placeholder */
%btn {
  @include inlineBlock(20);
  @include marpad(0 0 20px, 10px 15px);
  color: $text_colour;
  border: 1px solid $default;
  font-size: $text_size;
  text-align: center;
  cursor: pointer;
  &:hover, &.active {
    background: $default;
    color: $text_colour;
    text-decoration: none;
  }
  &:focus {
    border: 1px solid $default;
  }
}

/*
 * create a basic button (instance of the generic)
 * then extend the generic with .-main and -.alt
 * these 2 differ in background colour and colour
 */
.btn {
  @extend %btn;
  &.-main {
    background: $brand;
    color: $white;
    &:hover, &.active {
      /* hover & active styles */
    }
  }
  &.-alt {
    background: $info;
    color: $white;
    &:hover, &.active {
      /* hover & active styles */
    }
  }
}
```
---
### childrenAndModifiers
```css
%box {
  /*
   * child relationship
   * note: the implied parent class is below (ie. .box and its modifiers)
   */
  .box__header {
    font-weight: $boldFont;
  }
}
.box {
  @extend %box;
  /* modifier relationship */
  &.-main {
    background: $brand;
  }
}
```