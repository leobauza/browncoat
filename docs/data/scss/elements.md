### headings
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```
---
### ap
```html
<p>Lorem ipsum <a href="#">A link</a> sit amet, consectetur adipisicing elit. Quasi debitis ratione possimus beatae officiis cumque. Numquam similique at quidem consectetur debitis, enim consequuntur atque vero corrupti temporibus accusamus libero quo.</p>

```
---
### lists
```html
<!-- unordered lists -->
<ul>
  <li>Unordered List Item One</li>
  <li>
    Unordered List Item Two
    <ul>
      <li>
        Nested item
        <ul>
          <li>Double nested item</li>
          <li>Double nested item</li>
        </ul>
      </li>
      <li>Nested item</li>
    </ul>
  </li>
  <li>Unordered List Item Three</li>
</ul>

<!-- ordered lists -->
<ol>
  <li>Ordered List Item One</li>
  <li>
    Ordered List Item Two
    <ol>
      <li>
        Nested item
        <ol>
          <li>Double nested item</li>
          <li>Double nested item</li>
        </ol>
      </li>
      <li>Nested item</li>
    </ol>
  </li>
  <li>Ordered List Item Three</li>
</ol>
```
---
### forms
```html
<form>
  <legend>Fieldset Legend</legend>
  <fieldset>
    <label for="name">Name</label>
    <input type="text" name="name">
  </fieldset>
  <fieldset>
    <label for="password">Password</label>
    <input type="password" name="password">
  </fieldset>
  <fieldset>
    <label for="email">Email</label>
    <input type="email" name="email">
  </fieldset>
  <fieldset>
    <label for="select">Select</label>
    <select name="select">
      <option value="one">One</option>
      <option value="two">Two</option>
    </select>
  </fieldset>
  <fieldset>
    <label for="file">File</label>
    <input type="file">
  </fieldset>
  <fieldset>
    <label for="textarea">Textarea</label>
    <textarea name="textarea"></textarea>
  </fieldset>
  <fieldset>
    <input type="submit" value="Submit Input">
    <button>Submit Button</button>
  </fieldset>
</form>
```
---
### tables
```html
<table>
  <caption>Optional table caption.</caption>
  <thead>
    <tr>
      <th>#</th>
      <th>Head 1</th>
      <th>Head 2</th>
      <th>Head 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Col 1 Row 1</td>
      <td>Col 2 Row 1</td>
      <td>Col 3 Row 1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Col 1 Row 2</td>
      <td>Col 2 Row 2</td>
      <td>Col 3 Row 2</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Col 1 Row 3</td>
      <td>Col 2 Row 3</td>
      <td>Col 3 Row 3</td>
    </tr>
  </tbody>
</table>
```
