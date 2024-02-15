---
Title: 'Lists'
Description: 'In HTML, lists are used to group pieces of related data together in a certain format.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Lists'
  - 'Paragraphs'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

In HTML, **lists** are used to group pieces of related data together in a certain format. List items are represented by the [`<li>`](https://www.codecademy.com/resources/docs/html/elements/li) tag while the lists themselves are represented by the following:

- [Ordered lists](https://www.codecademy.com/resources/docs/html/elements/ol) with items preceded by numbers.
- [Unordered lists](https://www.codecademy.com/resources/docs/html/elements/ul) with items preceded by dots by default.
- Unordered [menus](https://www.codecademy.com/resources/docs/html/elements/menu) with more semantic meaning than `<ul>` and user-interactive list items.
- [Definition lists](https://www.codecademy.com/resources/docs/html/elements/dl) with [terms](https://www.codecademy.com/resources/docs/html/elements/dt) and [details](https://www.codecademy.com/resources/docs/html/elements/dd).

## Nesting Lists

Lists can be nested, meaning one list of one kind can be placed inside another list of another kind:

```html
<ol>
  <li>Fruits</li>
  <ul>
    <li>Apples 🍎</li>
    <li>Oranges 🍊</li>
  </ul>
  <li>Vegetables</li>
  <ul>
    <li>Tomatoes 🍅</li>
  </ul>
</ol>
```

This way, multilevel lists can be created with different indentations.

![Rendered nested lists example](https://raw.githubusercontent.com/Codecademy/docs/main/media/nested-lists-example.png)
