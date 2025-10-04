---
Title: 'Borders'
Description: 'Defines decorative lines around HTML elements to create visual separation and emphasis.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Borders'
  - 'CSS'
  - 'Design'
  - 'Style'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

**Borders** are decorative lines that wrap around the padding and content of HTML elements, appearing between an element's [padding](https://www.codecademy.com/resources/docs/css/padding) and [margin](https://www.codecademy.com/resources/docs/css/margins). They provide visual separation and emphasis, helping to define the boundaries of elements on a webpage. Borders can be styled with different widths, colors, and line styles to create various visual effects.

CSS borders are essential for creating visually appealing layouts and improving user interface design. They are commonly used for buttons, form elements, cards, containers, image frames, navigation menus, and table styling. Borders help establish visual hierarchy, separate content sections, and guide user attention to important elements.

## Syntax

```pseudo
/* Shorthand property */
border: <width> <style> <color>;
```

**Parameters:**

- `width`: Specifies the thickness of the border (e.g., 1px, 2em, thin, medium, thick)
- `style`: Defines the line style - must be specified for border to appear (solid, dotted, dashed, double, groove, ridge, inset, outset, none, hidden)
- `color`: Sets the border color using any valid CSS color value

**Return value:**

This is a CSS declaration, not a function, so it doesn't return a value but rather applies a visual style.

## Borders vs Outlines

| Feature              | Borders                              | Outlines                            |
| -------------------- | ------------------------------------ | ----------------------------------- |
| **Space**            | Take up space in the layout          | Do not take up space                |
| **Box Model**        | Part of the CSS box model            | Drawn outside the element           |
| **Individual Sides** | Can style each side differently      | Cannot style sides individually     |
| **Curved Corners**   | Can be curved with border-radius     | Cannot be curved                    |
| **Layout Impact**    | Affect element's total dimensions    | Do not affect layout or positioning |
| **Primary Use**      | Visual styling and design            | Accessibility (focus indicators)    |
| **Clickable Area**   | Included in element's clickable area | Not included in clickable area      |

## Example: Basic Border Styling

The following example demonstrates how to apply basic border styles to elements.

```css
/* Basic solid border */
.basic-border {
  border: 2px solid #333;
  padding: 15px;
  margin: 10px;
}

/* Different border styles */
.dotted-border {
  border: 3px dotted #ff6b6b;
  padding: 10px;
}

.dashed-border {
  border: 2px dashed #4ecdc4;
  padding: 10px;
}

.double-border {
  border: 5px double #45b7d1;
  padding: 10px;
}
```

The following HTML code is the structure for the above CSS:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div class="basic-border">This element has a solid black border</div>
    <div class="dotted-border">This element has a dotted red border</div>
    <div class="dashed-border">This element has a dashed teal border</div>
    <div class="double-border">This element has a double blue border</div>
  </body>
</html>
```

The output of this code will be:

![Image illustrating various css borders](https://raw.githubusercontent.com/Codecademy/docs/main/media/border-output.png)

The above example shows different border styles applied to div elements. The solid border creates a clean, professional look, while dotted and dashed borders add visual interest. The double border creates a more decorative effect suitable for highlighting important content.

## Frequently Asked Questions

### 1. Why isn't my border showing up?

The most common reason is that the border style is not set. You must specify a style like `solid`, `dotted`, or `dashed` in the border property for it to appear.

### 2. Can I apply borders to only certain sides of an element?

Yes, you can use individual properties like `border-top`, `border-right`, `border-bottom`, and `border-left` to apply borders to specific sides only.

### 3. What's the difference between `border: none` and `border: 0`?

`border: none` removes the border style, while `border: 0` sets the border width to zero. Both effectively remove the border visually.

### 4. Can I make borders with rounded corners?

Yes, use the `border-radius` property along with your border to create rounded corners on bordered elements.

### 5. How do I create a border that changes on hover?

Use the `:hover` pseudo-class: `.element:hover { border: 2px solid #color; }`. For smooth transitions, add a `transition` property.
