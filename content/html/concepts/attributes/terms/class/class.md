---
Title: 'Classes'

Definition: 'Classes are HTML attributes used to select one or more elements for CSS styling or JavaScript purposes. The class attribute is commonly used for assigning styles to one or more elements. Inside the stylesheet, a class name is selected with the following syntax: css .class-name { }  A class selector is a name preceded by a period (.).'

Subjects:
  - 'Web Development'
  - 'Web Design'

Tags:
  - 'Attributes'
  - 'Classes'
  - 'Style'

Classes are HTML attributes used to select one or more elements for CSS styling or JavaScript purposes.

## For Styling

The `class` attribute is used for assigning styles to elements. Multiple classes can be assigned to a single element in a space-separated list. (e.g. `class="class1 class2 class3"`)

Inside the stylesheet, a class name is selected with the following syntax:

```css
.class-1 {
}
```

A class selector is a name preceded by a period (`.`).

Below is some markup with an outer `cover-div`, containing a level 1 `headling` and three level 2 `sub-heading`s. The styling for the `headine` will be unique. However, all elements with the `sub-headline` class name received the same styling.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      .headline {
        background-color: lightblue;
      }

      .sub-headline {
        background-color: lightskyblue;
        margin: 5px;
      }
    </style>
    <title>Classes</title>
  </head>
  <body>
    <div class="cover-div">
      <h1 class="headline">Welcome to Class!</h1>

      <h2 class="sub-headline">_</h2>

      <h2 class="sub-headline">_</h2>

      <h2 class="sub-headline">_</h2>
    </div>
  </body>
</html>
```

![Screenshot of styling for heading and sub-headings.](https://i.imgur.com/fMWV8DY.png)

## For JavaScript

The `class` attribute is used to perform JavaScript operations on HTML elements. Through the Document Object Model ("DOM"), there are various JavaScript methods built for selecting elements via their class.

Assuming the markup from the last example is linked to a JavaScript file:

```js
window.onload = function () {
  const subheadlines = document.getElementsByClassName('sub-headline');

  for (let i = 0; i < subheadlines.length; i++) {
    subheadlines.item(i).innerText = `Sub-headline ${i + 1}`;
  }
};
```

The code above is assigning an event handler to the `onload` property of the global `window` object in the browser. When the window as loaded, the elements with `class=sub-headilne` are collected in `subheadlines`. They are then looped over, their `innerText` property being changed each iteration.

![Screenshot of selecting heading and sub-headings with JavaScript](https://i.imgur.com/2uIJMAq.png)
