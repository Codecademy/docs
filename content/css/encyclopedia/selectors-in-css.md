---
Title: "Selectors in CSS"
Subjects:
  - "Web Development"
  - "Web Design"
Tags: 
  - "Selectors"
  - "Elements"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-csss"
  - "https://www.codecademy.com/learn/paths/web-development"
---

CSS selectors are used to "find" (or select) the HTML elements you want to style.

## Element Selector

The element selector selects HTML elements based on the element name.

Here, all `<p>` elements on the page will be center-aligned, with a red text color: 

```css
p {
  text-align: center;
  color: red;
}
```

## Id Selector

The id selector uses the id attribute of an HTML element to select a specific element.

The id of an element is unique within a page, so the id selector is used to select one unique element!

To select an element with a specific id, write a hash (`#`) character, followed by the id of the element.

The CSS rule below will be applied to the HTML element with id="para1": 

```css
#para1 {
  text-align: center;
  color: red;
}
```

**Note:** An id name cannot start with a number!

## Class Selector

The class selector selects HTML elements with a specific class attribute.

To select elements with a specific class, write a period (`.`) character, followed by the class name.

In this example, all HTML elements with `class="center"` will be red and center-aligned: 

```css
.center {
  text-align: center;
  color: red;
}
```

You can also specify that only specific HTML elements should be affected by a class.

In this example only `<p>` elements with `class="center"` will be center-aligned: 

```css
p.center {
  text-align: center;
  color: red;
}
```