---
Title: 'jQuery'
Description: 'jQuery is a popular JavaScript library intended to simplify JavaScript programming.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'DOM'
  - 'Events'
  - 'jQuery'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

**jQuery** is a JavaScript library that simplifies common tasks that once required many lines of code (e.g., [AJAX](https://www.codecademy.com/resources/docs/javascript/ajax), DOM manipulation, and [event handling](https://www.codecademy.com/resources/docs/javascript/events)), and wraps them inside a single method call. It is free and [open-source software](https://www.codecademy.com/resources/docs/open-source/open-source-software).

## Usage

jQuery can be added to a website by either downloading the library from [jQuery.com](https://jquery.com/download/) or including it from a [CDN](https://www.codecademy.com/resources/docs/general/cdn).

Including a downloaded library looks like this (downloaded into the same directory as the page using it):

```html
<head>
  <script src="jquery-3.6.0.min.js"></script>
</head>
```

Including from a CDN (in this case Google) looks like this:

```html
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
```

## Syntax

jQuery syntax consists of selecting [HTML elements](https://www.codecademy.com/resources/docs/html/elements) and then performing some sort of action on them.

```pseudo
$(selector).action()
```

The following syntax is used:

- `$()`: A leading function used to access jQuery.
- `selector`: Uses [CSS selector](https://www.codecademy.com/resources/docs/css/selectors) syntax for selecting HTML elements.
- `action`: One of the many jQuery methods to be performed on the selected element(s).

It is best practice to perform jQuery actions only after the document is finished loading, otherwise, some actions might fail. To insure this, it is best to enclose jQuery code inside a document-ready event:

```pseudo
$(document).ready(function(){
  // jQuery code goes here
});
```

Below is a list of jQuery methods:
