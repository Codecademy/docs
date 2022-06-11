---
Title: 'Combinators'
Description: 'Combinators are CSS selectors that are used to style elements that have a certain relationship with other selected elements.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Selectors'
  - 'Elements'
  - 'Style'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

**Combinators** are CSS [selectors](https://www.codecademy.com/resources/docs/css/selectors) that are used to style elements that have a certain relationship with other selected elements.

## Syntax

```pseudo
selector1 selector2 ... selectorN {
  /* declarations here */
}

selector1 > selector2 ... > selectorN {
  /* declarations here */
}

selector1 + selector2 ... + selectorN {
  /* declarations here */
}

selector1 ~ selector2 ... ~ selectorN {
  /* declarations here */
}
```

<!-- markdownlint-disable MD038 -->

- The space selector (` `) matches all descendants of a specified element.
<!-- markdownlint-enable MD038 -->
- The child selector (`>`) matches all children of a specified element.
- The adjacent sibling selector (`+`) matches all elements directly after the preceding element.
- The general sibling selector (`~`) matches all elements that are next to the preceding element.

## Example

The example below shows how these combinators can be used:

```css
div p {
  background-color: blue;
  color: #fff;
}

div > p {
  background-color: blue;
  color: #fff;
}

h3 + p {
  background-color: blue;
  color: #fff;
}

h3 ~ p {
  background-color: blue;
  color: #fff;
}
```

The rendered output may look like this:

![Rendered CSS combinators](https://raw.githubusercontent.com/Codecademy/docs/main/media/rendered-css-combinators.png)
