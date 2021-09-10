---
Title: 'Borders'
Description: 'A border is a line that surrounds an element, like a frame around a painting. Borders can be set with a specific width, style, and color: - width: The thickness of the border. A border’s thickness can be set in pixels or with one of the following keywords: thin, medium, or thick. - style: The design of the border. Web browsers can render any of 10 different styles. Some of these styles include: none, dotted, and solid. - color: The color of the border. Web browsers can render colors using a few different formats, including 140 built-in color keywords. css p {'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Borders'
  - 'Properties'
  - 'Elements'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

A border is a line that surrounds an element, like a frame around a painting.

Borders can be set with a specific width, style, and color:

- `width`: The thickness of the border. A border’s thickness can be set in pixels or with one of the following keywords: `thin`, `medium`, or `thick`.
- `style`: The design of the border. Web browsers can render any of 10 different styles. Some of these styles include: `none`, `dotted`, and `solid`.
- `color`: The color of the border. Web browsers can render colors using a few different formats, including 140 built-in color keywords.

```css
p {
  border: 3px solid coral;
}
```

In the example above, the `border` has a width of 3 pixels, a style of solid, and a color of coral. All three properties are set in one line of code.

The default border is `medium none color`, where `color` is the current color of the element. If `width`, `style`, or `color` are not set in the CSS file, the web browser assigns the default value for that property.

```css
p.content-header {
  height: 80px;
  width: 240px;
  border: solid coral;
}
```

In this example, the `border` style is set to `solid` and the color is set to `coral`. The width is not set, so it defaults to `medium`.
