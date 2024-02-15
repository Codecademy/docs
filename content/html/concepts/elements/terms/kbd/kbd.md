---
Title: '<kbd>'
Description: 'Emphasizes characters to look like keys on a keyboard.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Style'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<kbd>`** element emphasizes characters to look like keys on a keyboard.

## Syntax

The `<kbd>` element has no attributes. Text is placed in between the opening and closing `<kbd>` tags and will render in the browser's default monospace font. `<kbd>` can be nested but the result will be the same.

```pseudo
<kbd><!-- Text goes here --></kbd>
```

## Example 1

Leaving out an external `<kbd>` wrapper element is value and will have no effect.

```html
<p>You can copy text by pressing <kbd>CTRL</kbd>+<kbd>C</kbd>.</p>
```

![Keyboard Tag Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/kbd-tag-example-1.png)

## Example 2

However, nested `<kbd>` elements may be useful for certain stylesheet setups.

```html
<!-- prettier-ignore -->
<p>You can paste text by pressing <kbd><kbd>CTRL</kbd>+<kbd>V</kbd></kbd>.</p>
```

![Keyboard Tag Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/kbd-tag-example-2.png)
