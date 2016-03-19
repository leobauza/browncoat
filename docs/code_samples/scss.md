### folders
```bash
/scss
  styles.scss # SHOULD aggregate all SCSS files
  00_bits # MUST contain variables and utilities
  01_elements # MUST contain plain html elements
  02_items # MUST contain augmented plain html elements
  03_collections # MUST contain groups that MAY contain items and/or elements
  04_sections # MUST contain logical page sections
  05_layouts # MUST deal with page structure
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
%btn {
  /* generic */
}
.btn {
  @extend %btn;
}
/* collections */
%box {
  /* generic */
}
.box {
  @extend %box;
}
.box__heading {
  font-size: $h1;
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
### modules
```css
/*
 * 02_items/btns
 * Buttons module
 * Specialized anchors and buttons
 */

%btn {
  /* code */
}
.btn {
  /* code */
}
.my-btn {
  /* code */
}

```
---
### generics
```css
/* button generic */
%btn{
  /* generic button code that will be shared */
}

/*
 * Initial extension of generic
 * Modified background and colour with .-main
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
}

/*
 * Additional extension of generic
 * Does not modify existing properties
 * Augments generic with a text-shadow property
 * (Optional) To retain .btn's modifiers extend .btn instead
 */
.my-btn {
  /* extend %btn or .btn */
  @extend %btn;
  text-shadow: 1px 1px 1px #000;
}
/* end */
```
---
### childrenAndModifiers
```css
%box {
  /* generic styles */
}
/*
 * child relationship
 */
.box__header {
  font-weight: $boldFont;
}
/*
 * Initial extension of generic
 */
.box {
  @extend %box;
  /* modifier */
  &.-main {
    background: $brand;
  }
}
/* end */
```