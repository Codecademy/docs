---
Title: 'padding'
Description: "Adds space around an element's content, inside its borders."
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'CSS'
  - 'Box Model'
  - 'Padding'
  - 'Style'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`padding`** property in CSS Adds space around an element's content, inside its borders. It is part of the CSS box model, which is fundamental to the layout of web pages. Padding is the space between an element's content and its border, providing visual breathing room that enhances readability and improves the overall aesthetic appeal of the page.

Padding is commonly used to create spacing within elements such as buttons, cards, containers, and text blocks. By controlling the padding on different sides of an element, designers can create balanced layouts, emphasize content, and improve user experience by ensuring adequate spacing between content and container edges.

## Syntax

Padding can be specified using one of the following shorthand notations, depending on the number of sides being targeted:

```pseudo
/* All sides get the same padding */
padding: value;

/* Top and bottom, then left and right */
padding: vertical horizontal;

/* Top, right and left, then bottom */
padding: top horizontal bottom;

/* Top, right, bottom, and left (clockwise) */
padding: top right bottom left;
```

**Value types accepted:**

- `length`: Specifies padding as a fixed size (`px`, `em`, `rem`, etc.)
- `percentage`: Specifies padding as a percentage of the containing element's width
- `inherit`: Inherits padding from the parent element
- `initial`: Resets to the CSS initial value (`0`)
- `unset`: Removes any assigned value, reverting to inherited or initial as appropriate

> **Note:** The padding property does not accept negative values and is not inherited by child elements.

## Example 1: Basic Usage of Padding

This example demonstrates how to apply equal padding to all sides of an element:

```css
.box {
  /* Apply 20 pixels of padding to all sides */
  padding: 20px;
  background-color: #f0f0f0;
  border: 2px solid #333;
}
```

The output produced by this would be:

![Box with equal padding on all sides, light gray background, and solid border](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-padding-output-1.png)

In this example, a 20-pixel space is created between the content and the border on all sides of the element with the class "box". The background color extends into the padding area, but stops at the border. This creates a visual buffer around the content, making it easier to read and more visually appealing.

## Example 2: Different Padding for Each Side

This example shows how to set different padding values for each side of an element, creating an asymmetrical layout:

```css
.card {
  /* Order: top right bottom left */
  padding: 25px 15px 35px 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Alternatively, you could use individual properties: */
.card-alt {
  padding-top: 25px; /* Top padding */
  padding-right: 15px; /* Right padding */
  padding-bottom: 35px; /* Bottom padding */
  padding-left: 15px; /* Left padding */
  /* Other styling properties */
}
```

The output produced by this would be:

![Card with asymmetric padding, white background, rounded corners, and subtle shadow](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-padding-output-2.png)

The example creates a card-like container with more padding on the top and bottom than on the sides. This design pattern is common in cards and content containers where more vertical breathing room is desired while conserving horizontal space. The example also demonstrates the use of individual padding properties as an alternative to the shorthand.

## Example 3: Responsive Padding with Mixed Units

This example demonstrates how to create responsive padding using a combination of fixed and relative units:

```css
.responsive-container {
  /* Using both percentage and pixel values */
  padding: 2em 5% 2em 5%;

  /* Padding increases as viewport width increases */
  background-color: #e6f7ff;
  border: 1px solid #0099cc;
}
/* Additional responsive adjustments for smaller screens */
@media (max-width: 768px) {
  /* Reduce padding on smaller screens */
  padding: 1em 3% 1em 3%;
}
```

The output produced by this would be:

![Responsive container with padding that adjusts for screen size, light blue background, and blue border](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-padding-output-3.png)

In this example, the container uses a combination of `em` units (which scale with font size) for vertical padding and percentage values (which scale with parent width) for horizontal padding. This creates a layout that adapts to both the user's font size preferences and the screen width. The media query further adjusts the padding on smaller screens to maintain proper proportions.

> **Note:** The `.responsive-container` changes padding to provide more space on larger screens and less on smaller screens, ensuring better readability and layout across devices.

## Frequently Asked Questions

### 1. What's the difference between margin and padding?

Padding creates space inside an element (between content and border), while margin creates space outside an element (between the border and adjacent elements). Padding affects the element's background (the background extends into the padding area), whereas margin is always transparent.

### 2. Can padding values be negative?

No, padding values cannot be negative. If you need to create overlapping effects, you should use negative margins instead.

### 3. Does padding affect an element's total width and height?

Yes, by default, padding increases the total width and height of an element unless you set `box-sizing: border-box`, which causes the padding to be included within the specified width and height.
