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

The `<meter>` semantic tag is used to represent a fractional or a scalar value within a known range. This form of representation is known as a gauge.

> **Note**: The `<meter>` tag should not be used to indicate progress (as in a progress bar).

## Syntax

The `<meter>` is written as `<meter></meter>` with any contents inserted between the start and end tags:

```html
<meter>
    <!-- Meter content goes here. -->
</meter>
```

```html
<meter min="number" max="number">
    <!-- Meter content goes here. -->
</meter>
```

> **Note**: When using the max and min attributes in the <meter> element, they should define the range so that the value's attribute can appear within it, except if the value is between 0 and 1.

## Example

Below is an example of the `<meter>` tag being used to display disk usage:

```html
<p>Disk Usage <meter min="100" max="1000" value="80" title="GB"></meter>.</p>
```
### Output of The Meter Tag Example

![Output of the meter tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media//meter.png)
