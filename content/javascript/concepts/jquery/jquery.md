---
Title: 'jQuery'
Description: 'jQuery is a popular JavaScript library intended to simplify JavaScript programming.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'jQuery'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

**jQuery** is a popular JavaScript library intended to simplify JavaScript programming. It takes many common tasks that would otherwise require many lines of JavaScript to accomplish and wraps them inside a single method call.

jQuery can be added to a website by either downloading the library from [jQuery.com](https://jquery.com/download/), or including it from a [CDN](https://www.codecademy.com/resources/docs/general/cdn).

Including a downloaded library looks like this (downloaded into the same directory as the page using it):

```html
<head>
  <script src="jquery-3.6.0.min.js"></script>
</head>
```

Including from a CDN (in this case Google) looks like this:

```html
<head>
  <script src="jquery-3.6.0.min.js"></script>
</head>
```

## Syntax

jQuery syntax consists of selecting HTML elements and then performing some sort of action on them.

The basic syntax looks like this:

```pseudo
$(selector).action()
```

- `$`: A leading `$` to access jQuery.
- `selector`: A `selector` that uses [CSS syntax](https://www.codecademy.com/resources/docs/css/selectors) for selecting HTML elements.
- `action` : one of the many jQuery methods to be performed on the selected element(s).

It is best practice to perform jQuery actions only after the document is finished loading, otherwise some actions might fail. To insure this, it is best to enclose jQuery code inside a document ready event:

```pseudo
$(document).ready(function(){
  // jQuery code goes here
});
```

Below is a list of jQuery methods:
