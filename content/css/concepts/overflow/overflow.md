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

The `overflow` property controls what happens to content that spills, or overflows, outside its box.

The most commonly used values are:

- `hidden`: When set to this value, any content that overflows will be hidden from view.
- `scroll`: When set to this value, a scrollbar will be added to the element’s box so that the rest of the content can be viewed by scrolling.
- `visible`: When set to this value, the overflow content will be displayed outside of the containing element. Note, this is the default value.

```css
p {
  overflow: scroll;
}
```

Here, if any of the paragraph content overflows (perhaps a user resizes their browser window), a scrollbar will appear so that users can view the rest of the content.
