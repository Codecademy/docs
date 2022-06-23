---
Title: '<dd>'
Description: 'Describes details found inside a <dl> element. It usually comes with at least one corresponding <dt> term tag.'
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

The **`<dd>`** element describes details found inside a `<dl>` element. It usually comes with at least one corresponding `<dt>` term element.

## Syntax

```html
<dl>
  <!-- <dt> term(s) here -->
  <dd>Details</dd>
</dl>
```

In order to render correctly, the `<dd>` tag must be placed inside a `<dl>` tag.

## Example

In the example below, the `<dd>` is used (and highlighted with some styling):

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

The following output is shown below:

![Example of d d tag](https://raw.githubusercontent.com/Codecademy/docs/main/media/dd-tag-example.png)
