### boxes
```html
<article class="box">
  <header class="box__header">
    <h4 class="box__heading">Sample Box</h4>
  </header>
  <div class="box__body">
    <p>Sample box body. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
  <footer class="box__footer">
    <code>Can be extended with -success, -warning, -error, -info</code>
  </footer>
</article>
```
---
### btns
```html
<nav class="btn-group">
  <a href="#" class="btn -link">Button</a>
  <a href="#" class="btn -link">Button</a>
  <a href="#" class="btn -link">Button</a>
  <a href="#" class="btn -link">Button</a>
  <a href="#" class="btn -link l">Button</a>
</nav>
<nav class="btn-stack">
  <a href="#" class="btn -link">Button</a>
  <a href="#" class="btn -link">Button</a>
  <a href="#" class="btn -link">Button</a>
  <a href="#" class="btn -link">Button</a>
  <a href="#" class="btn -link l">Button</a>
</nav>
```
---
### dropdowns
```html
<nav class="dropdown -hover">
  <a href="#" class="btn">
    <span class="dropdown__selected">Dropdown</span>
    <i class="arrow -down"></i>
    <ul class="list-group">
      <li>Option One</li>
      <li>Option Two</li>
      <li>Option Three</li>
    </ul>
  </a>
</nav>
<nav class="dropdown -js">
  <a href="#" class="btn">
    <span class="dropdown__selected">Dropdown</span>
    <i class="arrow -down"></i>
    <ul class="list-group">
      <li>Option One</li>
      <li>Option Two</li>
      <li>Option Three</li>
    </ul>
  </a>
</nav>
```
---
### listgroups
```html
<ul class="list-group">
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
```
---
### formgroups
```html
<form>
  <div class="form__group">
    <label for="name">Name</label>
    <input type="text">
  </div>
  <div class="radio">
    <label><input type="radio" name="truthiness" value="true">True</label>
    <label><input type="radio" name="truthiness" value="false">False</label>
  </div>
  <div class="checkbox">
    <label for="check"><input type="checkbox" name="check">Check</label>
  </div>
  <input type="submit" class="btn" name="submit">
</form>
```