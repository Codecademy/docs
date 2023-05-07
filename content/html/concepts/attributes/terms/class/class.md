---
Title: 'class'
Description: 'An HTML attribute used to select one or more elements for the application of styling or logic.'
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

A **`class`** is an HTML attribute used to select one or more elements for CSS styling or JavaScript purposes.

## For Styling

The `class` attribute is used for assigning styles to elements. Multiple classes can be assigned to a single element in a space-separated list. (e.g. `class="class1 class2 class3"`)

Inside the stylesheet, a class name is selected with the following syntax:

```css
.class-1 {
}
```

A class selector is a name preceded by a period (`.`).

Below is some markup with the classes `header-1` and `P1` and `P2`. Elements with the `header-1`, `P1` and `P2` class names receive different styling.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      .header-1 {
        background-color: lightblue;
        font-size: 40px;
      }
      .P1 {
        background-color: white;
        font-size: 25px;
      }
      .P2 {
        background-color: blue;
        font-size: 20px;
      }
    </style>
    <title>Classes</title>
  </head>
  <body>
    <!--HEADER-->
    <p>
      <img
        src="images/android-chrome-512x512.png"
        width="360px"
        height="240px"
      />
    </p>

    <div class="title">
      <h1 class="header-1">PIZZA MAN</h1>
    </div>
    <!--HISTORY-->
    <p class="P1">
      Pizza Man is a family-owned business since 1964. Our goal is to make the
      best pizza and have it delivered to your place.
    </p>
    <p class="P2">We have 3 locations so far and growing.</p>
  </body>
</html>
```

## For JavaScript

The `class` attribute is used to perform [JavaScript](https://www.codecademy.com/resources/docs/javascript) operations on HTML elements. Through the Document Object Model ("DOM") there are various JavaScript methods built for selecting elements via their class.

Assuming the markup from the last example is linked to a JavaScript file:

```js
const innerDiv = document.getElementsByClassName('header-1');
console.log(innerDiv);
```

The code above gets an element with a class property and prints it to the console.
