---
Title: '<blink>'
Description: 'Used to make text flash on and off and is now obsolete, deprecated, and non-standard.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Elements'
  - 'Obsolete'
  - 'Style'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The HTML **`<blink>`** element is an obsolete [tag](https://www.codecademy.com/resources/docs/html/tags) that was historically used to make text flash on and off. However, it is now considered to be obsolete and non-standard.

> **Note:** This is now deprecated from most browsers and is not part of the current [HTML specifications](https://html.spec.whatwg.org/). Using this tag is a bad design practice and is heavily discouraged by [accessibility standards](https://www.w3.org/WAI/standards-guidelines/wcag/). The [CSS specification](https://www.w3.org/TR/css-2021/) allows browsers to ignore this tag.

## HTML `<blink>` Syntax

```pseudo
<blink>Blinking Text</blink>
```

## Example 1: Basic Usage of HTML `<blink>`

This example demonstrates the basic usage of the HTML `<blink>` element:

```html
<blink>Blinking Text</blink>
```

This used to make the specified text blink in old browsers. However, it has no effect in modern browsers today.

## Example 2: Using CSS instead of HTML `<blink>`

This example uses [CSS](https://www.codecademy.com/resources/docs/css) instead of HTML `<blink>` to create a blinking effect:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Blink</title>
    <style>
      @keyframes blink {
        0%,
        49% {
          opacity: 1;
        }
        50%,
        100% {
          opacity: 0;
        }
      }

      .blink {
        animation: blink 1s steps(1, start) infinite;
      }

      @media (prefers-reduced-motion: reduce) {
        .blink {
          animation: none;
        }
      }
    </style>
  </head>
  <body>
    <p class="blink">This text blinks using CSS animation</p>
  </body>
</html>
```

Here is the output:

![Blinking text using CSS instead of HTML `<blink>`](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-blink-1.gif)

## Example 3: Using CSS + JS instead of HTML `<blink>`

This example uses CSS and [JS](https://www.codecademy.com/resources/docs/javascript) instead of HTML `<blink>` to create a blinking effect:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JS blink</title>
    <style>
      .hidden {
        visibility: hidden;
      }
    </style>
  </head>
  <body>
    <p id="alertText">This text will blink via JS</p>

    <script>
      const el = document.getElementById('alertText');

      let blinking = true;
      let interval = setInterval(() => {
        el.classList.toggle('hidden');
      }, 700);
    </script>
  </body>
</html>
```

Here is the output:

![Blinking text using CSS and JS instead of HTML `<blink>`](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-blink-2.gif)

## Frequently Asked Questions

### 1. Does the Blink tag still work?

No. The HTML `<blink>` tag is obsolete and no longer works in modern browsers like Chrome, Firefox, or Edge. It was only supported in some older browsers and now it's ignored by HTML parsers.

### 2. Why was blink removed from HTML?

HTML `<blink>` was removed because it caused accessibility problems, distracted readers, and offered no real semantic or functional benefit. The World Wide Web Consortium (W3C) deprecated it in HTML 4.01 and excluded it from HTML5 standards.

### 3. What is the blink HTML trick?

The old `<blink>` tag made text flash on and off in some early browsers, but it’s deprecated and no longer supported. If you need the effect today, use a short CSS animation instead—though blinking text is generally discouraged for accessibility reasons.
