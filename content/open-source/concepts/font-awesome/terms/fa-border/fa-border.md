---
Title: 'fa-border'
Description: 'Used to place a border around an icon.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'World Wide Web'
  - 'Fonts'
  - 'Icons'
  - 'Style'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`fa-border`** class is used to place a border around an icon. For additional control there are [CSS](https://www.codecademy.com/resources/docs/css) custom properties associated with the border that can be set:

- `--fa-border-color`: Sets the CSS [`border-color`](https://www.codecademy.com/resources/docs/css/borders/border-color) value.
- `--fa-border-padding`: Sets the CSS [`padding`](https://www.codecademy.com/resources/docs/css/padding) value.
- `--fa-border-radius`: Sets the CSS [`border-radius`](https://www.codecademy.com/resources/docs/css/borders/border-radius) value.
- `--fa-border-style`: Sets the CSS [`border-style`](https://www.codecademy.com/resources/docs/css/borders/border-style) value.
- `--fa-border-width`: Sets the CSS [`border-width`](https://www.codecademy.com/resources/docs/css/borders/border-width) value.

## Example

```html
<i class="fas fa-chess-pawn fa-border"></i>
<i
  class="fas fa-chess-pawn fa-border"
  style="--fa-border-radius: 100%;--fa-border-color: red;"
></i>
<i
  class="fas fa-chess-pawn fa-border"
  style="--fa-border-width: 3px; --fa-border-color:  black; --fa-border-style: dotted;"
></i>
```

![Font Awesome Border Examples](https://raw.githubusercontent.com/Codecademy/docs/main/media/font-awesome-border.png)
