---
Title: '<dt>'
Description: 'Describes a term found inside a <dl> tag. It usually comes with at least one corresponding <dd> details tag.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Lists'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<dt>`** element describes a term found inside a `<dl>` element. It usually comes with at least one corresponding `<dd>` details element.

## Syntax

```html
<dl>
  <dt>Term</dt>
  <!-- <dd> detail(s) here -->
</dl>
```

In order to render correctly, the `<dt>` element must be placed inside a `<dl>` element.

## Example

In the example below, the `<dt>` element is used (and highlighted with some styling):

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Styles are omitted in this example. -->
  </head>
  <body>
    <dl>
      <dt class="term">Aardvark</dt>
      <dd class="detail">
        A large burrowing African mammal that feeds on ants and termites with
        its long sticky tongue.
      </dd>
    </dl>
  </body>
</html>
```

The following output would be rendered:

![Example of d t tag](https://raw.githubusercontent.com/Codecademy/docs/main/media/dt-tag-example.png)
