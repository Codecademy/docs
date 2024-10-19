---
Title: 'Variables'
Description: 'CSS variables are custom properties that are defined in one place and used in multiple places throughout the stylesheet. CSS variables are used in two principle steps: 1. Define the custom variable inside a selected element css element { --custom-variable: red; }'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Style'
  - 'Variables'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

CSS variables are custom properties that are defined in one place and used in multiple places throughout the stylesheet.

## Syntax

CSS variables are used in two principle steps:

1. Define the custom variable inside a selected element

   ```css
   element {
     --custom-variable: red;
   }
   ```

2. Use the `var()` function to allow `--custom-variable` to be assigned to a property in multiple elements:

   ```css
   elementA {
     background-color: var(--custom-variable);
   }

   .elementBWithClass {
     background-color: var(--custom-variable);
   }

   #elementCWithId {
     background-color: var(--custom-variable);
   }
   ```

## CSS Variables and the Cascade

CSS cascade rules makes custom variable properties inheritable. This means that any child or grandchild element can inherit that variable value.

In the samples below, there are 3 `div` elements with classes `divA`, `divB`, and `divC`. The hierarchy is as follows:

- `divA` is the topmost parent in the body
- `divB` is a child of `divA`
- `divC` is a child of `divB` (and a grand-child of `divA`)

```html
<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="./csspractice.css" />
    <title>CSS Practice</title>
  </head>

  <body>
    <div class="divA">
      A
      <div class="divB">
        B
        <div class="divC">C</div>
      </div>
    </div>
  </body>
</html>
```

The CSS variable `--custom-bg-color-saffron` is defined in the selector for `divB`.

```css
.divA {
  width: 40em;
  height: 40em;
}

.divB {
  --custom-bg-color-saffron: #f4c430;
  background-color: var(--custom-bg-color-saffron);
  position: relative;
  margin: 2em;
  width: 35em;
  height: 35em;
}

.divC {
  position: absolute;
  width: 25em;
  height: 25em;
  bottom: 1em;
  right: 1em;
}
```

The rendered image below shows that the background color for `divB` is set to `--custom-bg-color-saffron`. While its child, `divC`, doesn't have background color specified, it inherits the property from its parent. On the other hand, `divA`, the parent of `divB`, has a default white background color because it exists outside the scope of `--custom-bg-color-saffron`.

![Image of cascading divs using CSS variables for background color](https://i.imgur.com/D8RwBsM.png)
