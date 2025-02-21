---
Title: 'scrollBy()'
Description: 'Scrolls the window's content by a specified number of pixels, relative to the current scroll position.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`scrollBy()`** method is a function provided by the browser's window object. The method will scroll the user's window down, right, left, or up, depending on the parameters input into the method. The scrolling occurs relative to the current scroll position, meaning that if the user has already scrolled 100 pixels down a page, using `scrollBy()` to scroll a further 100 pixels down will cause the user to be 200 pixels down the page.

## Syntax

`scrollBy()` receives up to two parameters. The first is a number, which represents the number of pixels the user desires to scroll horizontally, for the x-coordinate. The second is a number, which represents the number of pixels the user desires to scroll vertically, for the y-coordinate.

These numbers can be **positive** or **negative**. Positive numbers in the x-coordinate parameter will scroll right, and positive numbers in the y-coordinate parameter will scroll down. Negative numbers in the x-coordinate parameter will scroll left, and negative numbers in the y-coordinate parameter will scroll up.

Below are some examples of how `scrollBy()` is composed:

```pseudo

window.scrollBy(x-coordinate,y-coordinate);
```

## Example 1

The following example uses the `scrollBy()` function to scroll a window down when a button is pressed.

```js
// Creating a reference to a scroll button on an external HTML document.
const scrollButton = document.getElementById("scrollButton");

// When the button is pressed, the window scrolls down by 200 pixels.
scrollButton.addEventListener("click", function() {
	window.scrollBy(0,200); 
});
```
## Example 2

The following example uses the `scrollBy()` function to scroll a window to the left and up 100 pixels each. This syntax demonstrates using `scrollBy()` with negative numbers.

```js
// Creating a reference to a scroll button on an external HTML document.
const scrollButton2 = document.getElementById("scrollButton2");

// When the button is pressed, the window scrolls left by 100 pixels and up by 100 pixels.
scrollButton2.addEventListener("click", function() {
	window.scrollBy(-100,-100);
});
```