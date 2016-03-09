### container
```html
<div class="container">
  ...
</div>
```
---
### rows
```html
<h5>Basic Row</h5>
<section class="row">
  <article class="span4">
    <p>Span</p>
  </article>
  <article class="span4">
    <p>Span</p>
  </article>
  <article class="span4">
    <p>Span</p>
  </article>
</section>
<h5>Row without right/left padding and using overflow:hidden</h5>
<section class="row-alt">
  <article class="span4">
    <p>Span</p>
  </article>
  <article class="span4">
    <p>Span</p>
  </article>
  <article class="span4">
    <p>Span</p>
  </article>
</section>
<h5>Row without gutter</h5>
<section class="row-flush">
  <article class="span4">
    <p>Span</p>
  </article>
  <article class="span4">
    <p>Span</p>
  </article>
  <article class="span4">
    <p>Span</p>
  </article>
</section>
```
---
### makerows
```css
@mixin rows($gutter: 3.183, $columns: 12) {
  /* mixin code */
}

/*
 * Create a grid with 10 columsn with a gutter of 1% between them.
 */
.row-descriptor {
  @include rows(1, 10);
}
```