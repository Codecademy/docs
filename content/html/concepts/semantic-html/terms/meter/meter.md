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

> **Note**: The `<meter>` tag should not be used to indicate [progress](https://www.codecademy.com/resources/docs/html/semantic-html/progress).

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

> **Note**: The default values for the `min` and `max` attributes are `0` and `1`. These attributes should be updated to create the appropriate range for the given context.

## Example

Below is an example of the `<meter>` tag being used to display disk usage:

```html
<p>Disk Usage <meter min="0" max="100" value="70" title="GB"></meter></p>
```

This code results in the following display:

![Output of the meter tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/meter.png)
