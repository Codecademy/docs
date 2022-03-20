---
Title: 'cursor'
Description: 'Sets the appearance of the mouse cursor when hovering over an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'UI'
CatalogContent:
  - 'learn-css'
  - 'learn-intermediate-css'
---

The `cursor` property sets the appearance of the mouse cursor when hovering over an element. The appearance can be set by specifying the type of cursor, or by loading a specific icon. When using an icon, fallback images can be used, ending with a mandatory keyword fallback.

These are common keywords used to specify the type of cursor to display:

![Cursors](https://raw.githubusercontent.com/Codecademy/docs/main/media/cursors-1.png)

## Syntax

Without a URL:

```pseudo
cursor: keyword;
```

With one or more URLs:

```pseudo
cursor url(cursor_image),url(fallback_cursor_image), keyword;
```

Where `cursor_image` is the URL to the primary image to use for the cursor, `fallback_cursor_image` is optional. It is the URL to load if the first fails. There can be any number of fallback images. `keyword` is a mandatory cursor specifier in case all the image URLs fail to load.

## Example

```html
<p style="cursor: pointer;">The cursor is pointing at this paragraph!</p>
```
