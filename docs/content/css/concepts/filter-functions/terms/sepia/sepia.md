---
Title: 'sepia()'
Description: 'Changes the color of an element to sepia.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Images'
  - 'Functions'
  - 'Colors'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Changes the color of an element to sepia.

## Syntax

```css
filter: sepia(<value>);
```

where a required `<value>` can be one of the following:

- Number value: `0`, `1`
- Percentage value: `10%`, `50%`

**Note:** Value defaults to `1` or `100%` turning the element to sepia. A value of `0` and `0%` will leave element unchanged. Negative values as well as values greater than `1` or `100%` are not allowed.

## Example 1

Set sepia to `100%`:

```css
.banner-image {
  filter: sepia(100%);
}
```
# Sepia Filter

The `sepia` function converts the input image to sepia tones. This effect is achieved by applying a sepia tone to the image, giving it a warm brown tint reminiscent of early photography.

## Example

### Original Image
![Original Image](images/original-image.jpg)

### Sepia Filtered Image
![Sepia Filtered Image](images/sepia-image.jpg)

## Code Example

```html
<img src="images/original-image.jpg" alt="Original Image" class="original">
<img src="images/original-image.jpg" alt="Sepia Filtered Image" class="sepia">

.sepia {
    filter: sepia(1%);
} 
```