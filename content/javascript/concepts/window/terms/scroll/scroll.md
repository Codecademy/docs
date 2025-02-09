---
Title: 'scroll()'
Description: 'Scrolls the document to a specific position on the page.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Window'
  - 'Scrolling'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**`scroll()`** is a method of the global `window` object that allows users to programmatically scroll the document to a specified position.

## Syntax  

The `scroll()` method accepts either two numerical parameters (`x` and `y` coordinates) or an object with specific properties that control scrolling behavior.
## Syntax  

The `scroll()` method accepts either two numerical parameters (`x` and `y` coordinates) or an object with specific properties that control scrolling behavior.

```pseudo
window.scroll(x, y)

window.scroll(options) 
```

## Example 1
The following example scrolls the page to the top-left corner:

window.scroll(0, 0);


## Example 2
The following example scrolls smoothly to 500 pixels down the page:

window.scroll({
  top: 500,
  left: 0,
  behavior: "smooth"
});


## Codebyte Example
In the following example, the scroll() method moves the page down by 300 pixels:

console.log('Scrolling down...');
setTimeout(() => {
  window.scroll({
    top: 300,
    behavior: 'smooth'
  });
}, 2000);
