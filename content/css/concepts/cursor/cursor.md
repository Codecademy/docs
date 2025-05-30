---
Title: 'cursor'
Description: 'Sets the appearance of the mouse cursor when hovering over an element.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Style'
  - 'UI'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

In CSS, the `cursor` property sets the appearance of the mouse cursor when hovering over an [element](https://www.codecademy.com/resources/docs/html/elements). The appearance can be set by specifying the type of cursor, or by loading a specific icon. When using an icon, fallback [images](https://www.codecademy.com/resources/docs/html/images) can be used, ending with a mandatory keyword fallback.

## Syntax

The `cursor` property can be set a specific `keyword` value:

```pseudo
cursor: keyword;
```

It can also accept one or more URLs:

```pseudo
cursor: url(cursor_image), url(fallback_cursor_image), keyword;
```

If the primary `cursor_image` fails to load, an optional `fallback_cursor_image` can be applied instead. However, in case all the image URLs fail to load, the mandatory `keyword` will be used as the last resort.

### Common Keywords

These are some common keywords used to specify the type of cursor to display:

| Keyword       |                                                   Example Cursor                                                   | Description                                                  |
| ------------- | :----------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------ |
| auto          |                                                                                                                    | Determines the cursor to display based on context.           |
| none          |                                                                                                                    | No cursor is displayed.                                      |
| default       |       ![Default Cursor](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-default.png)       | The default system cursor, usually an arrow.                 |
| context-menu  |  ![Context Menu Cursor](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-context-menu.png)  | Indicates a context menu is available.                       |
| help          |          ![Help Cursor](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-help.png)          | Indicates help information is available.                     |
| pointer       |       ![Pointer Cursor](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-pointer.png)       | Indicates a link.                                            |
| progress      |      ![Progress Cursor](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-progress.png)      | System is busy in the background but interaction is allowed. |
| wait          |          ![Wait Cursor](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-wait.png)          | System is busy and interaction is not allowed.               |
| cell          |          ![Cell Cursor](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-cell.png)          | Indicates a table cell or cells can be selected.             |
| crosshair     |     ![Crosshair Cursor](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-crosshair.png)     | Used to mark selections in an image.                         |
| text          |          ![Text Cursor](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-text.png)          | Used to indicate editable text.                              |
| vertical-text | ![Vertical Text Cursor](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-vertical-text.png) | Used to indicate editable vertical text.                     |

## Example 1: Pointer Cursor

In this example, a `pointer` cursor will appear whenever the cursor hovers over the target [paragraph](https://www.codecademy.com/resources/docs/html/elements/p).

Here is the HTML code:

```html
<p class="pg">The cursor is pointing at this paragraph!</p>
```

Here is the CSS code:

```css
.pg {
  cursor: pointer;
}
```

The output will be:

![A GIF that shows how the cursor turns into a pointer cursor whenever it hovers over the paragraph](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-example.gif)

## Example 2: Help Cursor

In this example, a `help` cursor will appear whenever the cursor hovers over the target paragraph.

Here is the HTML code:

```html
<p class="pg">The cursor is pointing at this paragraph!</p>
```

Here is the CSS code:

```css
.pg {
  cursor: help;
}
```

The output will be:

![A GIF that shows how the cursor turns into a help cursor whenever it hovers over the paragraph](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-example1.gif)

## Example 3: Not-Allowed Cursor

In this example, a `not-allowed` cursor will appear whenever the cursor hovers over the target paragraph.

Here is the HTML code:

```html
<p class="pg">The cursor is pointing at this paragraph!</p>
```

Here is the CSS code:

```css
.pg {
  cursor: not-allowed;
}
```

The output will be:

![A GIF that shows how the cursor turns into a not-allowed cursor whenever it hovers over the paragraph](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-example2.gif)

## Frequently Asked Questions

### 1. Can I use animated cursors in CSS?

Yes, but browser support is limited for these types of cursors. You can use `.ani` files in Internet Explorer. Modern browsers typically support `.cur` and `.png`.

### 2. Does the `cursor` property affect touch devices?

No. Touch devices don't use cursors, so this property has no visible effect on mobile interfaces.

### 3. Can I chain multiple custom cursors?

You can specify multiple `url()` cursors with fallbacks. The browser uses the first one it can load successfully.
