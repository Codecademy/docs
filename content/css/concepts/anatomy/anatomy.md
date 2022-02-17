---
Title: 'Anatomy'
Description: 'There are two syntaxes used to apply CSS to a web-page. The first is as a _ruleset_, the second is as an _inline style_. A ruleset is defined within a block inside an HTML document, or in a separate file (called a stylesheet), and an inline style is applied as an attribute of the element the style is being applied to.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'DOM'
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

There are two syntaxes for the anatomy of [CSS](https://www.codecademy.com/resources/docs/css) styles that are applied to a web-page:

* A _ruleset_ that is defined within either an [HTML](https://www.codecademy.com/resources/docs/html) document or in a separate file (known as stylesheets) that uses the **.css** extension.

* _Inline styles_ can be applied [attributes](https://www.codecademy.com/resources/docs/html/attributes) for styling [HTML elements](https://www.codecademy.com/resources/docs/html/elements) directly.

While inline styles are directly applied to a single element, rulesets can define multiple styles across multiple elements. Another key difference between the two is that a ruleset can utilize `id` and `class` [selectors](https://www.codecademy.com/resources/docs/css/selectors) as well as children of specific parent-elements.

Inline styles are commonly used for situations such as the following:

* The style being applied in the markup is unique and won't be repeated.
* The HTML markup is dynamically generated and the CSS stylesheet is static.
* Other situations where it isn't advisable (or possible) to edit the stylesheet(s) for a page.

## Syntax

Rulesets use the following syntax for selecting and styling any and every instance of an existing element:

```css
/* Start of Ruleset */
selector:pseudo-class::pseudo-element {

  /* Declaration */
  property: value-or-keyword;

}
/* End of Ruleset */
```

Conversely, inline styles apply a visually-similar syntax to a single element:

```pseudo
<element style="property:value;">Hello World!</element>
```

## Anatomy

There are several parts to the CSS in the above two examples.

![Ruleset Anatomy](https://raw.githubusercontent.com/SSwiniarski/docs/css-anatomy/media/css-anatomy-1.png)

![Inline Style Anatomy](https://raw.githubusercontent.com/SSwiniarski/docs/css-anatomy/media/css-anatomy-2.png)

In the ruleset example, the initial `p` is a selector that can is applied to any and every valid instance of that element. Selectors possess a wide range of specificity, including:

* General selection by HTML element-name.
* Specific `class` and `id` selectors for elements.
* Pseudo-class and pseudo-element selectors.
* Reserved keyword rules like `!important` and `@media`.

Next in the ruleset syntax is the block of declarations between the two braces `{...}`. This is the block of code that defines the style that will be applied. In the inline style example, this is equivalent to the `style` attribute value.

The declaration block, or attribute value, is made up of one or more declarations. In the examples, `color:blue;` is a declaration. A declaration is made up of a CSS property name, followed by a colon (`color:`) then a value, followed by a semicolon, (`blue;`). In either syntax, there can be an arbitrary number of declarations. Whitespace does not affect the declarations, but typically ruleset declarations are set off on their own lines, while inline style declarations are all placed on the same line.
