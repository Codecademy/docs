---
Title: '<meter>'
Description: 'Represents either a fractional value or a scalar value within a known range.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Semantic'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<meter>` semantic tag represents either a fractional value or a scalar value within a known range. Also known as a gauge. Used to represent a range.

> **Note**: The `<meter>` tag should not be used to indicate progress (as in a progress bar).

## Syntax

The `<meter>` is written as `<meter></meter>` with any contents inserted between the start and end tags:

```pseudo
<meter>
    <!-- Meter content goes here. -->
</meter>
```

## Example

Below is an example of the `<meter>` tag being used to display disk usage:

```html
<p>Disk Usage <meter min="100" max="1000" value="80" title="GB"></meter>.</p>
```

![Output of the meter tag example](https://github.com/droffilc1/docs/blob/6b4653764614e33f5640a7fe0528eb015e758b86/media/meter.png)
