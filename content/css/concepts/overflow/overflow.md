---
Title: 'Overflow'
Description: 'The overflow property controls what happens to content that spills, or overflows, outside its box.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Properties'
  - 'Elements'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The `overflow` shorthand property controls what happens to content that spills, or overflows, outside its box. It is shorthand for [overflow-x](https://www.codecademy.com/resources/docs/css/overflow/overflow-x) and [overflow-y](https://www.codecademy.com/resources/docs/css/overflow/overflow-y) and only applies to block-level elements.

The most commonly used values are:

- `hidden` When set to this value, any content that overflows will be hidden from view.
- `scroll`: When set to this value, a scrollbar will be added to the element’s box so that the rest of the content can be viewed by scrolling.
- `visible`: When set to this value, the overflow content will be displayed outside of the containing element. Note, this is the default value.

```css
div {
  overflow: scroll;
}
```

Here, if any of the div's content overflows (it has a fixed or maximum height or a user resizes their browser window), a scrollbar will appear so that users can view the rest of the content.

The following image demonstrates each of the `overflow` properties described above:

![Three examples of a div with a fixed height, each with a different overflow property](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-overflow.gif)
