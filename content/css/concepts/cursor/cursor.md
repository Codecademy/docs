---
Title: 'cursor'
Description: 'Sets the appearance of the mouse cursor when hovering over an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Style'
  - 'UI'
CatalogContent:
  - 'learn-css'
  - 'learn-intermediate-css'
---

The `cursor` property sets the appearance of the mouse cursor when hovering over an element. The appearance can be set by specifying the type of cursor, or by loading a specific icon. When using an icon, fallback images can be used, ending with a mandatory keyword fallback.

## Syntax

The `cursor` property can be set a specific `keyword` value:

```pseudo
cursor: keyword;
```

It can also accept one or more URLs:

```pseudo
cursor: url(cursor_image), url(fallback_cursor_image), keyword;
```

If the primary `cursor_image` fails to load, an optional `fallback_cursor_image` can be applied instead. However, in case all the image URLs fail to load, the mandatory `keyword` will be used as a last resort.

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

## Example

In the example below, a `pointer` hand will appear whenever the cursor hovers over the [paragraph](https://www.codecademy.com/resources/docs/html/elements/p):

```html
<p style="cursor: pointer;">The cursor is pointing at this paragraph!</p>
```

![cursor-example](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-cursor-example.gif)
