---
Title: 'background-attachment'
Description: 'Determines if the background image is fixed in relationship to the viewport or whether it will scroll along with the rest of the page.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Borders'
  - 'Box Model'
  - 'Colors'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Determines if the background image is fixed in relationship to the viewport or whether it will scroll along with the rest of the page.

## Syntax

```css
background-attachment: <value>;
```

Where `<value>` can be the following: `scroll` | `fixed` | `local` | `initial` | `inherit`

- `scroll` is the default value. The background image will scroll with the page.

- `fixed` will cause the background image to stay in the same position on the page.

- `local` will result in the background image scrolling within the elements contents.

## Example 1

Set background image to be fixed to the viewport:

```css
body {
  height: 1200px;
  background-image: url('fish.png');
  background-repeat: no-repeat;
  background-size: 400px 100px;
  background-attachment: fixed;
}
```

The following gif runs as a loop to demonstrate the code block above:

![CSS Background Attachment Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-attachment-example-1.gif)

## Example 2

Set background to scroll with the page:

```css
body {
  height: 1200px;
  background-image: url('fish.png');
  background-repeat: no-repeat;
  background-size: 400px 100px;
  background-attachment: scroll;
}
```

The following gif runs as a loop to demonstrate the code block above:

![CSS Background Attachment Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-attachment-example-2.gif)
