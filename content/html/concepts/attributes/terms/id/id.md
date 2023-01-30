---
Title: 'id'
Description: 'The HTML `id` attribute is used to specify a unique id for an HTML element, which cannot be shared across multiple elements within the same HTML document.'
Subjects:
  - 'Web development'
Tags:
  - 'id'
  - 'Attributes'
  - 'HTML'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The HTML global **`id`** attribute is used to specify a unique id identifier for an HTML element, which cannot be shared across multiple elements within the same HTML document. The `id` attribute can be used as a bookmark to navigate to the specific point at a document. It can also serve as a selector in CSS to style the element or to manipulate the element in JavaScript. Contrary to the [`class`](https://www.codecademy.com/resources/docs/html/classes) attribute, elements can only have one id value.

## Syntax

```pseudo
<div id="myElement">My Element</div>
```

Syntax consists of `id` followed by the `=` assignment operator and an id name in `" "` quotation marks. Id name is case sensitive and must contain at least one character. It cannot start with a number or contain whitespaces.

## Navigation Using Bookmarks

Bookmarks allow users to navigate on a webpage using links leading to another location on a page (i.e. to another element) with a specific `id`.

### Example:

Element with a defined `id` attribute that serves as a bookmark:

```html
<h3 id="my-city">About my city</h3>
```

Link to the bookmark:

```html
<a href="#my-city">Navigate to the section about my city</a>
```

Link can also target location in another page:

```html
<a href="city.html#my-city">Jump to the section about my city in another page</a>
```

Clicking on the link in the examples above will direct the browser screen to the location with `"my-city"` id either on the same page or on another page.

## Styling With `id`

Similarly to the `class` attribute, `id` is typically used to assign styles to the element it identifies. However, only one specific element can be targeted with `id` (compared to the `class` attribute which can be used to target multiple elements at once).

### Example:
Styling via `id` in a stylesheet:
```css
#my-city {

}
```

The HTML element with `id` is selected in CSS for styling using `#` followed by the id value. This applies to internal or external ruleset styling methods. For an overview of all styling methods, please see [CSS Anatomy](https://www.codecademy.com/resources/docs/css/anatomy).


## Using `id` With JavaScript

The `id` attribute is also used to manipulate the element through DOM (Document Object Model) with JavaScript.

### Example:

```js
function changeColor(newColor) {
    let element = document.getElementById("idOfElement");
    element.style.color = newColor;
}
```

In the example above, the element is selected using the `getElementById()` method. We then change the color of that element by assigning a new value (passed in as an argument of the function) to the `style.color` property.