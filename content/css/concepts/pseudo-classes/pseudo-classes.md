---
Title: 'Pseudo-classes'
Description: A pseudo-class is a keyword added to selectors that specifies a special state of the selected element(s).
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
 - 'Elements'
 - 'Classes'
 - 'Style'
 - 'Selectors'
 - 'Properties'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'

---

A pseudo-class is a keyword added to [selectors](https://www.codecademy.com/resources/docs/css/selectors) that specifies a special state of the selected element(s). For example, you can use it to style an element when a user hovers over it, or when a user clicks it. CSS pseudo-classes can also be used to allow styling based on elements that are in a certain state, such as being disabled or having been visited before.

So, what makes a pseudo-class different from a regular class? In general, classes are used to target specific elements on the page, while pseudo-classes are used to target elements based on their state or position.

## Syntax

A pseudo-class starts with a colon (:) followed by the keyword.
```pseudo
selector:pseudo-class {  
  /* your style here */  
}
```

Some of the most commonly used pseudo-classes are: 

| Pseudo-class | Description |
| -------- | ------- |
|:hover | This is used when a user hovers an element with the mouse pointer.|
|:active | This is used to style an element when it is clicked.|
|:focus | This is used to highlight elements when they are selected or focused on by the user.|
|:visited | This is used to style elements that have been previously visited.|
|:first-child |  This is used to style an element that is the first child of its parent element.|
|:last-child | This is used to style an element that is the last child of its parent element.|
|:not | This is used to target elements that do not match a given selector. |
|:enabled | This is used to style an element when it is enabled.|
|:disabled | This is used to style an element when it is disabled.|

## Example

```css
a {
    color: purple;
    text-decoration: underline dotted;
  }
a:hover {
    color: yellow;
    text-decoration: underline;  }
```

In the example above, when a user hovers over a link, it will change from purple to yellow and from dotted underline to regular underline. This is accomplished by using the `:hover` pseudo-class. 

Another example would be to style all disabled buttons on the page by using the `:disabled` pseudo-class. 

```css
button:disabled {
    opacity: 0.5;
} 
```

In this example, when a button is disabled, it becomes slightly less visible by reducing its opacity to 50%. 