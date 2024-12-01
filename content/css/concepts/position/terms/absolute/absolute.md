---
Title: 'absolute'
Description: 'Places an element relative to its nearest positioned ancestor or the browser window.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'CSS'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

Places an element relative to its nearest positioned ancestor or the browser window. If an element has `position: absolute`; declared, it is removed from the normal document flow, so it does not affect the layout of surrounding elements.

## Syntax

```css
position: absolute;
```

When an element is set to `position: absolute`, the `top`, `right`, `bottom`, and `left` properties can be used to offset it from its normal position:

```css
selector {
  position: absolute;
  top: <length>;
  right: <length>;
  bottom: <length>;
  left: <length>;
}
```

- A `<length>` is a measurable property it can have values such as `2px`, `30em`, and `10pt`.

## Example 1

This example shows how absolute positioning works when the element is positioned relative to its parent container. By setting `top: 0` and `left: 0`, the `.box` sticks to the top-left corner of its parent. The `top`, `left`, `right`, or `bottom` can be adjusted to move it anywhere within the parent.

```html
<div class="container">
  <div class="box">Absolutely Positioned</div>
</div>
```

```css
.container {
  position: relative; /* Important: This makes .box position relative to .container */

  /* Optional styles for the example */
  width: 500px;
  height: 300px;
  background-color: #e9ecef;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  margin: 100px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.box {
  position: absolute;
  top: 0px;
  left: 0px;

  /* Optional styles for the example */
  width: 200px;
  height: 120px;
  background-color: #495057;
  color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

Here's what the above example's output would look like:

![Box at top-left of parent](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-position-absolute-ex1.png)

## Example 2

In the below example the parent container doesn't have `position: relative` (or any positioning), so the element with `position: absolute` will stick to the browser window.

```html
<div class="container">
  <div class="box">Absolutely Positioned</div>
</div>
```

```css
.container {
  /* position: relative; */

  /* Optional styles for the example */
  width: 500px;
  height: 300px;
  background-color: #e9ecef;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  margin: 100px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.box {
  position: absolute;
  top: 0px;
  left: 0px;

  /* Optional styles for the example */
  width: 200px;
  height: 120px;
  background-color: #495057;
  color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

Here's what the above examples look like:

![Box at top-left of the window](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-position-absolute-ex2.png)
