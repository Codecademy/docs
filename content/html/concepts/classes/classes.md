---
Title: 'Classes'
Description: 'Classes are HTML attributes used to select one or more elements for CSS styling or JavaScript purposes. The class attribute is commonly used for assigning styles to one or more elements. Inside the stylesheet, a class name is selected with the following syntax: css .class-name { }  A class selector is a name preceded by a period (.).'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Attributes'
  - 'Classes'
  - 'Style'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Classes are HTML attributes used to select one or more elements for CSS styling or JavaScript purposes.

## For Styling

The `class` attribute is commonly used for assigning styles to one or more elements. Multiple classes can be assigned to a single element in a space-separated list. (e.g. `class="class1 class2 class3"`)

Inside the stylesheet, a class name is selected with the following syntax:

```css
.class-name {
}
```

A class selector is a name preceded by a period (`.`).

Below is some markup with an outer `wrapper-div`, containing a level 1 `heading` and three level 2 `sub-heading`s. The styling for the `heading` will be unique. However, all elements with the `sub-heading` class name received the same styling.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      .heading {
        background-color: lightcoral;
      }

      .sub-heading {
        background-color: lightskyblue;
        margin: 5px;
      }
    </style>
    <title>Classes</title>
  </head>
  <body>
    <div class="wrapper-div">
      <h1 class="heading">Welcome to Class!</h1>

      <h2 class="sub-heading">_</h2>

      <h2 class="sub-heading">_</h2>

      <h2 class="sub-heading">_</h2>
    </div>
  </body>
</html>
```

![Screenshot of styling for heading and sub-headings.](https://i.imgur.com/fMWV8DY.png)

## For JavaScript

The `class` attribute can also be used to perform JavaScript operations on HTML elements. Through the Document Object Model ("DOM"), there are various JavaScript methods built for selecting elements via their class.

Assuming the markup from the last example is linked to a JavaScript file:

```js
window.onload = function () {
  const subheadings = document.getElementsByClassName('sub-heading');

  for (let i = 0; i < subheadings.length; i++) {
    subheadings.item(i).innerText = `Sub-heading ${i + 1}`;
  }
};
```

The code above is assigning an event handler to the `onload` property of the global `window` object in the browser. When the window as loaded, the elements with `class=sub-heading` are collected in `subheadings`. They are then looped over, their `innerText` property being changed each iteration.

![Screenshot of selecting heading and sub-headings with JavaScript](https://i.imgur.com/2uIJMAq.png)
