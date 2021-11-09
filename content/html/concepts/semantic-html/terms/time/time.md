---
Title: '<time>'
Description: 'Represents a time-related piece of information and can take a datetime attribute that makes it machine-readable.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<time>` semantic HTML element represents a time-related piece of information, including:

- A specific date in the Gregorian calendar.
- The time on a 24-hour clock.
- A [valid time duration](https://www.w3.org/TR/2014/REC-html5-20141028/infrastructure.html#valid-duration-string).
  The `<time>` element accepts a `datetime` attribute that translates the info to a machine-readable format.

## Syntax

```html
<time>
  <!-- Date and/or time info goes inside the tag -->
</time>
```

The `<time>` element requires opening and closing tags that wrap around a block of text.

Its `datetime` attribute should be in a valid format for it to be translated to machine-readable info, see below examples.

## Example

Using the `<time>` element inside of another element:

```html
<p>
  Our flight is scheduled on
  <time datetime="2021-12-20">December 20th, 2021</time> at
  <time datetime="18:00">6:00pm</time>.
</p>
```
