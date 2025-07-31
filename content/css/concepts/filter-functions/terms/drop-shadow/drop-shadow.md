---
Title: 'drop-shadow()'
Description: 'Creates a drop shadow effect behind an element that follows the actual shape of the element.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'CSS'
  - 'Design'
  - 'Effects'
  - 'Filters'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

CSs **`drop-shadow()`** is a filter function that creates a drop shadow effect behind an element. Unlike the `box-shadow` property that creates a shadow around an element's entire box, the `drop-shadow()` function creates a shadow that follows the actual shape of the element, including transparent areas and complex shapes like images with cut-out backgrounds.

## Syntax

```pseudo
filter: drop-shadow(offset-x offset-y blur-radius color);
```

**Parameters:**

- `offset-x`: Sets the horizontal offset of the shadow. Positive values move the shadow to the right, negative values move it to the left.
- `offset-y`: Sets the vertical offset of the shadow. Positive values move the shadow down, negative values move it up.
- `blur-radius`: Optional parameter that sets the blur radius of the shadow, creating a softer edge. Larger values create more blur. If omitted, the shadow has a sharp edge.
- `color`: Optional parameter that sets the color of the shadow. If omitted, the shadow defaults to black.

The `drop-shadow()` function returns a filtered version of the input element with the specified shadow effect applied.

## Example 1: Using CSS `drop-shadow()` to Create a Basic Drop Shadow

This example demonstrates how to apply a basic drop shadow to a text element using the `drop-shadow()` function.

The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Basic Drop Shadow Example</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>

  <body>
    <h1>Basic Drop Shadow Example</h1>
    <div class="text-element">Sample Text</div>
  </body>
</html>
```

The CSS code is:

```css
body {
  text-align: center;
  padding: 50px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

.text-element {
  font-size: 48px;
  font-weight: bold;
  color: #333;
  filter: drop-shadow(5px 5px 10px gray);
  margin: 20px;
}
```

The output of this code is:

![Text element with a gray drop shadow offset 5 pixels right and down with 10-pixel blur radius](https://raw.githubusercontent.com/Codecademy/docs/main/media/drop-shadow1.png)

The image will display with a gray drop shadow offset 5 pixels to the right and 5 pixels down, with a 10-pixel blur radius. This creates a subtle shadow effect that adds depth to the image.

## Example 2: Colored Shadow Effect With CSS `drop-shadow()`

This example shows how to create a vibrant colored shadow effect for design elements, commonly used in modern web design.

The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Colored Drop Shadow Example</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>

  <body>
    <h1>Colored Drop Shadow Example</h1>
    <div class="card colored-shadow">Modern Card Design</div>
  </body>
</html>
```

The CSS code is:

```css
body {
  text-align: center;
  padding: 50px;
  background-color: #1a1a1a;
}

h1 {
  color: white;
}

.colored-shadow {
  filter: drop-shadow(0 8px 16px rgba(255, 0, 150, 0.6));
  margin: 20px;
  border-radius: 10px;
}

.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 250px;
  height: 150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
```

The output of this code is:

![Modern gradient card with vibrant pink-purple colored drop shadow creating a floating effect](https://raw.githubusercontent.com/Codecademy/docs/main/media/drop-shadow2.png)

This example creates a modern card with a pink-purple colored shadow that enhances the visual appeal and creates a floating effect commonly seen in contemporary web design.

## Example 3: Creating Multiple Shadow Layers Using CSS `drop-shadow()`

This example demonstrates how to create complex shadow effects by combining multiple `drop-shadow()` functions for a more realistic depth effect.

The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Multiple Drop Shadow Example</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>

  <body>
    <h1>Multiple Drop Shadow Example</h1>
    <div class="icon multiple-shadows">★</div>
    <p>This icon uses multiple shadow layers to create realistic depth</p>
  </body>
</html>
```

The CSS code is:

```css
body {
  text-align: center;
  padding: 50px;
  background-color: #f5f5f5;
}

.multiple-shadows {
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(
      6px 6px 12px rgba(0, 0, 0, 0.2)
    )
    drop-shadow(12px 12px 24px rgba(0, 0, 0, 0.1));
  margin: 30px;
}

.icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
}
```

The output of this code is:

![Star icon with three layered drop shadows creating realistic depth and lighting effects](https://raw.githubusercontent.com/Codecademy/docs/main/media/drop-shadow3.png)

This example combines three different shadow layers with varying blur radii and opacity levels to create a realistic, multi-layered shadow effect that simulates natural lighting conditions.

## Frequently Asked Questions

### 1. What's the difference between `drop-shadow()` and `box-shadow`?

The `drop-shadow()` function creates a shadow that follows the actual shape of the element, including transparent areas, while `box-shadow` creates a shadow around the element's rectangular bounding box.

### 2. Can I use negative values for the offset parameters?

Yes, negative values for `offset-x` will move the shadow to the left, and negative values for `offset-y` will move the shadow upward.

### 3. Is it possible to create an inset shadow with `drop-shadow()`?

No, `drop-shadow()` does not support inset shadows. Use `box-shadow` with the `inset` keyword for inset shadow effects.

### 4. What happens if I don't specify a color for the shadow?

If no color is specified, the shadow will use the current text color of the element as defined by the `color` property.

### 5. Can I animate the `drop-shadow()` effect?

Yes, `drop-shadow()` can be animated using CSS transitions or animations by changing the offset, blur radius, or color values.
