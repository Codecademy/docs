---
Title: 'Box Model'
Description: 'Defines how element dimensions and spacing are calculated on a webpage.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Box Model'
  - 'CSS'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **box model** is a fundamental concept in CSS that defines how element dimensions and spacing are calculated on a webpage. It treats every HTML element as a rectangular box consisting of four distinct areas: content, padding, border, and margin. Understanding the box model is essential for creating precise layouts, controlling element spacing, and achieving consistent visual designs across different browsers.

The box model provides a standardized approach to calculating an element's total space on a page. It is used extensively in responsive web design, grid layouts, flexbox implementations, and any scenario where precise control over element dimensions and positioning is required. Web developers rely on the box model to create complex layouts, maintain visual consistency, and ensure elements display correctly across various screen sizes and devices.

![An image showing the how box model defines the element dimensions](https://raw.githubusercontent.com/Codecademy/docs/main/media/box-model.png)

The box model can be controlled through various CSS properties:

- `width`: Sets the width of the content area
- `height`: Sets the height of the content area
- `padding`: Controls the transparent space between content and border
- `border`: Defines the line surrounding the padding and content
- `margin`: Sets the transparent space outside the border
- `box-sizing`: Determines how total width and height are calculated

**Return value:**

The box model doesn't return a value, as it's not a function — instead, it defines how an element's total size is calculated based on its content, padding, border, and margin.

## Example 1: Basic Box Model Implementation

The following example demonstrates the fundamental structure of the CSS box model with visible borders and spacing:

```css
.box-example {
  width: 200px; /* Content area width */
  height: 100px; /* Content area height */
  padding: 20px; /* Space around content */
  border: 5px solid #333; /* Border around padding */
  margin: 15px; /* Space outside border */
  background-color: #f0f0f0;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basic Box Model Example</title>
    <style>
      .box-example {
        width: 200px;
        height: 100px;
        padding: 20px;
        border: 5px solid #333;
        margin: 15px;
        background-color: #f0f0f0;
      }
    </style>
  </head>
  <body>
    <div class="box-example">
      This content demonstrates the box model structure.
    </div>
  </body>
</html>
```

This generates the following output:

![A gray box with dark border displaying text, demonstrating total width of 250px with visible padding and border spacing.](https://raw.githubusercontent.com/Codecademy/docs/main/media/box-model-output1.png)

In the above example, the total width calculation is: 200px (content) + 40px (left + right padding) + 10px (left + right border) = 250px. The margin adds an additional 30px of spacing around the element but doesn't contribute to the element's rendered size. The background color fills the content and padding areas, while the border creates a visible boundary.

## Example 2: Responsive Card Layout

The following example shows how the box model applies to real-world responsive card components commonly used in modern web design:

```css
.card {
  width: 100%;
  max-width: 300px; /* Responsive width constraint */
  padding: 24px; /* Internal spacing for content */
  border: 1px solid #ddd; /* Subtle border definition */
  border-radius: 8px; /* Rounded corners */
  margin: 16px auto; /* Center alignment with spacing */
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
  margin: 0 0 12px 0; /* Remove top margin, add bottom spacing */
  font-size: 1.25rem;
  font-weight: bold;
}

.card-content {
  margin: 0; /* Remove default paragraph margins */
  line-height: 1.5;
  color: #666;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Card Layout</title>
    <style>
      .card {
        width: 100%;
        max-width: 300px;
        padding: 24px;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin: 16px auto;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .card-title {
        margin: 0 0 12px 0;
        font-size: 1.25rem;
        font-weight: bold;
      }

      .card-content {
        margin: 0;
        line-height: 1.5;
        color: #666;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h3 class="card-title">Product Feature</h3>
      <p class="card-content">
        This card demonstrates how the box model creates consistent spacing and
        structure in component-based designs.
      </p>
    </div>
  </body>
</html>
```

This generates the following output:

![A centered white card with rounded corners, subtle shadow, and organized content layout demonstrating professional spacing.](https://raw.githubusercontent.com/Codecademy/docs/main/media/box-model-output2.png)

This card example showcases practical box model usage where the padding creates comfortable internal spacing, the border defines the component boundary, and margins provide separation between multiple cards. The `max-width` property ensures responsive behavior while maintaining the box model calculations.

## Example 3: Box-Sizing Property Control

This example illustrates the difference between `content-box` and `border-box` sizing models and their practical applications.

```css
.container {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}

.content-box-example {
  box-sizing: content-box; /* Default behavior */
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #e74c3c;
  background-color: #fadbd8;
}

.border-box-example {
  box-sizing: border-box; /* Alternative model */
  width: 200px; /* Total width including padding and border */
  height: 100px; /* Total height including padding and border */
  padding: 20px;
  border: 5px solid #3498db;
  background-color: #d6eaf8;
}

/* Global border-box for consistent layouts */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Box-Sizing Property Control</title>
    <style>
      .container {
        display: flex;
        gap: 20px;
        margin: 20px 0;
      }

      .content-box-example {
        box-sizing: content-box;
        width: 200px;
        height: 100px;
        padding: 20px;
        border: 5px solid #e74c3c;
        background-color: #fadbd8;
      }

      .border-box-example {
        box-sizing: border-box;
        width: 200px;
        height: 100px;
        padding: 20px;
        border: 5px solid #3498db;
        background-color: #d6eaf8;
      }

      /* Global border-box for consistent layouts */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="content-box-example">
        Content Box: Total width = 250px (200 + 40 + 10)
      </div>
      <div class="border-box-example">
        Border Box: Total width = 200px (padding and border included)
      </div>
    </div>
  </body>
</html>
```

This generates the following output:

![Two side-by-side boxes showing size difference - red box (250px total) vs blue box (200px total) demonstrating box-sizing impact.](https://raw.githubusercontent.com/Codecademy/docs/main/media/box-model-output3.png)

The `content-box` element has a total width of 250px because padding and border are added to the specified width. The `border-box` element maintains exactly 200px total width with padding and border calculated within that constraint. The global rule at the bottom applies `border-box` to all elements, which is a common practice for predictable layouts.

## Frequently Asked Questions

### 1. What's the difference between padding and margin?

Padding is space inside an element between content and border. Margin is space outside the border that separates elements.

### 2. Why do my element widths seem larger than expected?

By default, CSS adds padding and border to the specified width. Use `box-sizing: border-box` to include them within the width.

### 3. What happens if I set negative padding or margin?

Negative padding is invalid and ignored. Negative margins are valid and pull elements closer or cause overlap.
