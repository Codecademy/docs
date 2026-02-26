---
Title: "hwb"
Description: "Defines the color of an element by specifying a hue and adjusting it with whiteness and blackness to create lighter or darker variations." 
Subjects:
  - "Web Design"
  - "Web Development"
  - "Developer Tools"
Tags:
  - "CSS"
  - "Colors"
  - "Style"
  - "Browsers"
CatalogContent:
  - "learn-css-colors"
  - "learn-css"
---

The **hwb( )** function defines the color of an [element](https://www.codecademy.com/resources/docs/html/elements) by specifying a hue and adjusting it with whiteness and blackness to create lighter or darker variations. As part of the CSS Color Module, hwb( ) provides a paint‑mixing model for generating color variations and can be used anywhere a color value is accepted, including text, backgrounds, borders, shadows, and gradients.

## Syntax

```pseudo
hwb(hue whiteness blackness / alpha)
```

### Arguments
| Argument | Description |
| --- | --- |
|*hue* | Specifies a base color as an angle on the color wheel or as a relative color reference. |
|*whiteness* | Specifies the amount of white mixed into the base color. |
|*blackness* | Specifies the amount of black mixed into the base color. |
| *alpha* | Controls the opacity of the resulting color. |

### Values

- *hue*  
  - Required argument
  - Accepted values: 
    - A degree (e.g., 200deg)
    - A number (e.g., 200, interpreted as a degree)  
    - A radian (e.g., 3.49rad) 
    - A turn (e.g., 0.555turn) 
    - A referential CSS named color or CSS color function
- *whiteness* 
  - Required argument
  - Accepted values: 
    - a percentage (e.g., 15%)
- *blackness*  
  - Required argument
  - Accepted values: 
    - a percentage (e.g., 15%)
- *alpha*  
  - Optional argument
  - Accepted values: 
    - a percentage (e.g., 15%)
    - a number between 0 and 1 (e.g., .15)  

> **Note:** If the sum of whiteness and blackness is 100% or greater, the hue has no effect and the resulting color is clamped to a shade of gray.

### Relative Syntax

```pseudo
hwb(from color whiteness blackness / alpha)
```

```pseudo
hwb(from CSS-color-function() whiteness blackness / alpha)
```

> **Note:** The relative hue syntax used in the hwb() function is part of the CSS Color Module Level 5 specification and is not yet supported in most browsers. When unsupported, declarations such as hwb(from red 0% 0%) are ignored, and the property computes to no color. 

### Hue wheel by degrees
![Hue wheel by degrees](https://raw.githubusercontent.com/Codecademy/docs/main/media/color-wheel.png)

## Examples

### Produce a Hue
Demonstrates a pure hue with no white or black added.

```css
hwb(200 0% 0%);
```

![Produce a hue](https://raw.githubusercontent.com/Codecademy/docs/main/media/produce-a-hue.png)

### Lighten a Hue
Demonstrates how whiteness lightens and softens the hue.

```css
hwb(200 30% 0%);
```

![Lighten a hue](https://raw.githubusercontent.com/Codecademy/docs/main/media/lighten-a-hue.png)

### Darken a Hue
Demonstrates how blackness darkens and deepens the hue.

```css
hwb(200 0% 40%);
```

![Darken a hue](https://raw.githubusercontent.com/Codecademy/docs/main/media/darken-a-hue.png)

### Tone a Hue
Demonstrates how mixing whiteness and blackness can create muted or toned colors.

```css
hwb(200 20% 20%);
```

![Tone a hue](https://raw.githubusercontent.com/Codecademy/docs/main/media/tone-a-hue.png)

### Adjust Opacity
Demonstrates the optional opacity component.

```css
hwb(200 0% 0% / 0.5);
```

![Adjust opacity](https://raw.githubusercontent.com/Codecademy/docs/main/media/adjust-opacity.png)

### Using hwb( )
Demonstrates hwb( ) in a use case context.

```css
.element {
  width: 150px;
  height: 150px;
  background-color: hwb(200 20% 0%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}
```
