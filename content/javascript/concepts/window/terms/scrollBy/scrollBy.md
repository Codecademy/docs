---
Title: 'scrollBy()'
Description: 'Scrolls the window content by a specified number of pixels, relative to the current scroll position'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`scrollBy()`** method is a function provided by the browser's [window](https://www.codecademy.com/resources/docs/javascript/window) object. It scrolls the window content up, down, left, or right based on the specified parameters. The scrolling occurs relative to the current scroll position, meaning if the user has already scrolled 100 pixels down and `scrollBy(0, 100)` is called, the new scroll position will be 200 pixels down the page.

## Syntax

`scrollBy()` receives up to two parameters:
* `x-coordinate`: The number of pixels to scroll **horizontally**. A positive number will scroll *right*, and a negative number will scroll *left*.
* `y-coordinate`: The number of pixels to scroll **vertically**. A positive number will scroll *down*, and a negative number will scroll *up*.

Alternatively, `scrollBy*()` can be used with only one parameter, `options`:
* `options`: An object that takes up to three properties: 
	* `top`: The number of pixels to scroll **vertically**.
	* `left`: The number of pixels to scroll **horizontally**.
	* `behavior`: Determines the scrolling animation. This can either be `instant`, `smooth`, or `auto`.

```pseudo
window.scrollBy(x-coordinate,y-coordinate);
window.scrollBy(options);
```

Below are some examples of how `scrollBy()` is composed:

## Example 1

The following example scrolls the window _200_ pixels down:

```js
// Get a reference to the button element.
const scrollButton = document.getElementById("scrollButton");

// Scroll down by 200 pixels when the button is clicked.
scrollButton.addEventListener("click", function() {
	window.scrollBy(0,200); 
});
```
## Example 2

The following example scrolls the window _100_ pixels to the left and _100_ pixels up using negative values:

```js
// Get a reference to the button element.
const scrollButton2 = document.getElementById("scrollButton2");

// Scroll left by 100 pixels and up by 100 pixels when the button is clicked.
scrollButton2.addEventListener("click", function() {
	window.scrollBy(-100,-100);
});
```

## Example 3

The following example scrolls the window _200_ pixels to the right, _150_ pixels down, and uses smooth scrolling, implemented by the `options` parameter:

```js
// Get a reference to the button element.
const scrollButton3 = document.getElementById("scrollButton3");

// Scrolls smoothly right by 200 pixels and down by 150 pixels when the button is clicked.
window.scrollBy({
	top: 150,
	left: 200,
	behavior: "smooth",
});
```



