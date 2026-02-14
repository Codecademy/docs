---
Title: CSS background-position-x
Description: Sets the inital horizontal position of a background image.
Subjects:
    - 'Web Design'
    - 'Web Development'
Tags:
    - 'CSS'
    - 'Background'
    - 'Positioning'
    - 'Properties'
    - 'Layout'
CatalogContent: 
    - 'learn-css'
    - 'paths/front-end-engineer-career-path'
---
The CSS **background-position-x** property sets the initial horizontal position (the x axis) of a background image. This position is defined relative to the coordinate system established by the [background-origin](https://www.codecademy.com/resources/docs/css/background/background-origin) property.

Note that the value of background-position-x is overridden by any subsequent declarations of the background or [background-position](https://www.codecademy.com/resources/docs/css/background/background-position) shorthand properties. By default, a background image is placed at the top-left corner of an element and repeated both vertically and horizontally.

## Syntax
```pseudo
background-position-x: value;
```

### Parameters
Value can be one of the following:
- Position keyword: `left`, `right`, `center`
- Length and percentage values: `64px`, `5em`, `1cm`, `25%`
- Global values: `inherit`, `initial`, `revert`, `revert-layer`, `unset`

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
    width: 300px;    
    height: 300px;
    background-color: grey;
    background-image: url("../../../../../../media/cc_logo.png");
    background-repeat: no-repeat;
    background-position-x: center;
}
```

### Result
![alt text](../../../../../../media/css_background_position_x_example.png "Example result")