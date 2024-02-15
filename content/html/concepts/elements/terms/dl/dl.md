---
Title: '<dl>'
Description: 'Displays terms and details, commonly for metadata purposes.'
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

The **`<dl>`** element is a description list that displays terms and details, commonly for metadata purposes.

## Syntax

```html
<dl>
  <!-- <dt> terms here -->
  <!-- <dd> details here -->
</dl>
```

Inside the `<dl>` element, one or more `<dt>` and `<dd>` elements can be used.

**Note**: For Apple VoiceOver, the `<dl>` tag will be recognized and announced as a "list" on macOS devices whereas it [will not](https://cdpn.io/pen/debug/NzGaKP) be recognized on iOS devices.

## Example

The `<dl>` tag also supports nesting `<dt>`-`<dd>` pairs inside a [`<div>`](https://www.codecademy.com/resources/docs/html/elements/div) tag when working with content microdata, global attributes, or general [CSS](https://www.codecademy.com/resources/docs/css) styling.

In the example below, this technique is used inside the `<dl>` tag. Additionally, some default styling is in place to highlight the list itself:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Styles are omitted in this example. -->
  </head>
  <body>
    <dl>
      <div>
        <dt id="term-a" class="term">Aardvark</dt>
        <dd class="detail">
          A large burrowing African mammal that feeds on ants and termites with
          its long sticky tongue.
        </dd>
      </div>

      <div>
        <dt id="term-b" class="term">Aback</dt>
        <dd class="detail">By surprise; suddenly, unaware(s).</dd>
      </div>
    </dl>
  </body>
</html>
```

The rendered output is shown below:

![Example of d l tag](https://raw.githubusercontent.com/Codecademy/docs/main/media/dl-tag-example.png)
