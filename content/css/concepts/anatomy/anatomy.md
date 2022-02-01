---
Title: 'Anatomy'
Description: ''
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

There are two syntaxes used to apply CSS to a web-page. The first is as a *ruleset*, the second is as an *inline style*. A ruleset is defined within a block inside an HTML document, or in a separate file (called a stylesheet), and an inline style is applied as an attribute of the element the style is being applied to. The main difference between the two other than the syntax itself, is that CSS applied as an inline style only affects the one element it's applied to, whereas a CSS style defined in a ruleset can affect many elements at once. Also a ruleset can have many different styles defined, where an inline style can have only one.

CSS defined in a ruleset can also target elements in multiple different ways:

- Element type
- Class of the element
- ID of the element
- Parent of the Element

Typically an inline style is used mainly for unique situations in HTML code where the style won't be repeated, in cases where HTML is dynamically generated and the CSS stylesheet is static, or in other situations where it isn't advisable (or possible) to edit the stylesheet(s) for a page.

## Syntax

Stylesheet/ruleset syntax (this will affect every `<p>` element in the HTML this apples to):

```css
p {
  color:blue;
}
```

Inline style syntax (this only affects this single `<p>` element):

```html
<p style="color:blue;">Hello World"</p>
```

## Anatomy

There are several parts to the CSS in the above two examples. 

![Ruleset Anatomy](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-anatomy-1.png)

![Inline Style Anatomy](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-anatomy-2.png)

In the ruleset example, the initial `p` is known as a selector. In its simplest form, the selector can just be the element tag it applies to, i.e. `img`, `div`, `span`, `p`, though the selector can be much more specific about the elements it targets. 

Next in the ruleset syntax is the block of declarations between the two braces `{...}`. This is the block of code that defines the style that will be applied. In the inline style example, this is equivalent to the `style` attribute value.

The declaration block, or attribute value, is made up of one or more declarations. In the examples, `color:blue;` is a declaration. A declaration is made up of a CSS property name, followed by a colon (`color:`) then a value, followed by a semicolon, (`blue;`). In either syntax, there can be an arbitrary number of declarations. Whitespace does not affect the declarations, but typically ruleset declarations are set off on their own lines, while inline style declarations are all placed on the same line.

