---
Title: CSS background-position-x
Description: Sets the inital horizontal position of a background image.
Subjects: 
    - CSS
    - Web design
    - Web Development
Tags:
    - Layout
    - Background
    - HTML
CatalogContent: 
    - Learn CSS
    - UX Designer
    - Learn Intermediate CSS
    - Front-End Engineer
    - Full-Stack Engineer
---
The CSS **background-position-x** property sets the initial horizontal position (the x axis) of a background image. This position is defined relative to the coordinate system established by the [background-origin](https://www.codecademy.com/resources/docs/css/background/background-origin) property.

Note that the value of background-position-x is overridden by any subsequent declarations of the background or [background-position](https://www.codecademy.com/resources/docs/css/background/background-position) shorthand properties. By default, a background image is placed at the top-left corner of an element and repeated both vertically and horizontally.

## Syntax
```css
/* Keyword values */
background-position-x: left;
background-position-x: right;
background-position-x: center;

/* Length and percentage values */
background-position-x: 64px;
background-position-x: 25%;
background-position-x: 5em;
background-position-x: 1cm;

/* Global values */
background-position-x: inherit;
background-position-x: initial;
background-position-x: revert;
background-position-x: revert-layer;
background-position-x: unset;
```

## Example
In the following example we use the HTML div tag to set the background image with CSS.

### HTML
```html
<div>
</div>
```

### CSS
```css
div {
    width: 500px;    
    height: 500px;
    background-image: url("https://i.pcmag.com/imagery/reviews/05XBKmNFYeHCMIn726Nohqb-10..v1627594235.png");
    background-repeat: no-repeat;
    background-position-x: center;
}
```