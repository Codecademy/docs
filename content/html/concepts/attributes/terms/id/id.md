---
Title: 'id'
Description: 'Used to specify a unique id for an HTML element, which cannot be shared across multiple elements within the same HTML document.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Attributes'
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The HTML global **`id`** attribute is used to specify a unique identifier for an [HTML element](https://www.codecademy.com/resources/docs/html/elements). It cannot be shared across multiple elements within the same HTML document. The `id` attribute can be used as a bookmark to navigate to a specific point in a document. It can also serve as a selector in [CSS](https://www.codecademy.com/resources/docs/css) to style the element or to manipulate the element in [JavaScript](https://www.codecademy.com/resources/docs/javascript). Contrary to the [`class`](https://www.codecademy.com/resources/docs/html/classes) attribute, elements can only have one id value.

## Syntax

```pseudo
<div id="myElement">My Element</div>
```

The syntax consists of `id` followed by the assignment operator (`=`) and an `id` name in quotation marks (`" "`). The `id` name is case-sensitive and must contain at least one character. It cannot start with a number or contain whitespaces.

## Unique ID Attributes

Specific and unique `id` attributes can be assigned to elements to differentiate them, and `id` values can be referenced in CSS and JavaScript to manipulate, format, and perform specific instructions on a single element alone, without affecting others of the same type.

Valid `id` attribute values begin with a letter and must comprise only letters (`a`-`Z`), digits (`0`-`9`), hyphens (`-`), underscores (`_`), and periods (`.`).

```html
<h1 id="th1s_is.v4lid">Hello World</h1>
```

> **Note:** While `th1s_is.v4lid` is indeed a valid `id` value, it's best to use a consistent naming scheme such as camel case (`thisIsValid`), dash case (`this-is-valid`), or snake case (`this_is_valid`).

## Example

In the example below, the `<p>` (paragraph) element is given a unique identifier in its `id` attribute, and the text color is set using the `style` attribute:

```html
<p id="my-paragraph" style="color: aqua;">
  Here's some text that is being altered by the HTML attributes
</p>
```

![Use of unique id attribute with inline CSS](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-attribute-id-example-img1.png)

## Navigation Using Bookmarks

Bookmarks allow users to navigate on a webpage using links leading to another location on a page (i.e., to another element) with a specific `id`.

### Example

Element with a defined `id` attribute that serves as a bookmark:

```html
<h3 id="my-city">About my city</h3>
```

Link to the bookmark:

```html
<a href="#my-city">Navigate to the section about my city</a>
```

A link can also target a location on another page:

```html
<a href="city.html#my-city">Jump to the section about my city</a>
```

Clicking on the link in the examples above will direct the browser screen to the location where `id` is `"my-city"` (either on the same page or on another page).

![Use of a unique id attribute for navigation on the same and other pages in the website](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-attribute-id-example2-gif.gif)

## Styling With `id`

Similarly to the `class` attribute, `id` is typically used to assign styles to the element it identifies. However, only one specific element can be targeted with `id` (compared to the `class` attribute which can be used to target multiple elements at once).

### Example

Styling via `id` in a stylesheet:

```css
#my-city {
  color: #ff0000;
}
```

The HTML element with `id` is selected in CSS for styling using `#` followed by the `id` value. This applies to internal or external ruleset styling methods. The example above applies a color to the designated element, for an overview of all styling methods, please see [CSS Anatomy](https://www.codecademy.com/resources/docs/css/anatomy).

![CSS styling using id selector](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-attribute-id-exampl3.png)

## Using `id` With JavaScript

The `id` attribute is also used to manipulate the element through DOM (Document Object Model) with [JavaScript](https://www.codecademy.com/resources/docs/javascript).

### Example

```js
function changeColor(newColor) {
  let element = document.getElementById('idOfElement');

  element.style.color = newColor;
}
```

In the example above, the element is selected using the `getElementById()` method. The color of that element is then changed by assigning a new value, that is passed in as an argument of the function, to the `style.color` property.

![Use of id attributes to style HTML elements in JavaScript](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-attribute-id-example4.png)
