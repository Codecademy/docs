---
Title: '<kbd>'
Description: 'Makes characters look like keys on a keyboard.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Style'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<kbd>` tag makes characters look like they are keys on a keyboard.

## Syntax

The `<kbd>` tag has no attributes. Text is placed in between the opening and closing `<kbd>` tags and will render in the browser's default monospace font. `<kbd>` can be nested but the result will be the same.

```pseudo
<kbd><!-- Text goes here --></kbd>
```
  
## Example 1

```html
<p>You can copy text by pressing <kbd>CTRL</kbd> + <kbd>c</kbd>.</p>
```

Result:

![picture of the <kbd> in action](https://raw.githubusercontent.com/ethan-master-coding/docs/kdb-tag/media/kdb%20tag%20example%201.png)
  
## Example 2

```html
<p>You can peaste text by pressing <kbd><kbd>CTRL</kbd>+<kbd>v</kbd></kbd>.</p>
```
  
Result:

![picture of the <kbd> tag in action](https://raw.githubusercontent.com/ethan-master-coding/docs/kdb-tag/media/kdb%20tag%20example%202.png)
