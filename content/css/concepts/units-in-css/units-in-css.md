---
Title: "Units in CSS"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Responsive"
  - "Style"
  - "Units"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

CSS uses units to measure the values of various properties in a stylesheet. 

## Absolute and Relative Units

The two main types of units are: 

* Absolute Units
* Relative Units

Absolute units are CSS units that are of fixed lengths and not relative to any other styles. This includes: 

* `px`: Pixels (most common)
* `pt`: Points 
* `mm`: Millimeters

Relative units are CSS units whose size is relative to some other length. They could relate to things like:

* The font-size of a direct parent element
* The default font-size of the HTML body
* The size of the viewport

Some common relative units include: 

* `em`: Property size relative to property size of direct parent element (most common)
* `rem`: Property size relative to property size of direct root element
* `vw`: Percentage based on width of screen
* `vh`: Percentage based on height of screen


## Syntax

```css
<length>: <length-unit>;
```

A `<length>` is any measurable property, such as `border`, `background-color`, and `margin`.

A `<length-unit>` is the value assigned to a measurable property, such as `2px`, `30em`, and `10pt`.

```css
border-width: 30px;
```

