---
Title: '<time>'
Description: 'Represents a specific date, time or duration. It can take a ```datetime``` attribute that makes it machine-readable'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'HTML'
  - 'Semantic'
  - 'Syntax'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<time>` semantic tag represents a specific date (in the Gregorian calendar), time (on a 24-hour clock) or a [valid time duration](https://www.w3.org/TR/2014/REC-html5-20141028/infrastructure.html#valid-duration-string). Its `datetime` attribute translates the info to a machine-readable format.

## Syntax

```html
<time>
  <!-- Date and/or time info goes inside the tag -->
</time>
```

`<time>` requires a closing tag and wraps around a block of text.
Its `datetime` attribute should be a in a valid format for it to be translated to machine-readable info, see below examples.

## Example

### Time string

```html
05:50:30
```

### Week string

```html
1995-W32
```

### Date string

```html
2021-10-24
```

### Duration string

```html
10h 35m 24s
```

### Local date and time string

```html
2021-10-24 18:38
```

### Global date and time string

```html
2021-10-24 18:39-0100
```

### Yearless date string

```html
10-24
```

### Year string

```html
2021
```

### Month string

```html
2021-10
```
