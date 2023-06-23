---
Title: 'dir'
Description: 'Sets the direction of the text of an HTML element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Attributes'
  - 'Elements'
  - 'Style'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The HTML global **`dir`** attribute sets the direction of an [HTML element](https://www.codecademy.com/resources/docs/html/elements)'s text. This is useful for languages that use right-to-left scripts like Adlam, Arabic, Dhivehi, Hebrew, Mandinka, N'Ko, Pashto, Persian, Pular, Sindhi, Syriac, Thaana, Urdu, Yiddish, etc.

## Syntax

```pseudo
<element  dir="direction">
```

`dir` can be set to the following values:

| Direction | Description                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| `ltr`     | Default left-to-right text direction, i.e., English.                                                                 |
| `rtl`     | Right-to-left text direction, i.e., Arabic.                                                                          |
| `auto`    | The browser figures out the text direction based on the content (only recommended if the text direction is unknown). |

> **Note:** Always declare the language using the `lang` attribute in conjunction with setting the text direction with the `dir` attribute. Language declarations do not imply directionality or vice versa. The two must be set separately.

## Example 1

The following example sets the `dir` attribute on a [`<p>` element](https://www.codecademy.com/resources/docs/html/elements/p) to `rtl`:

```html
<p dir="rtl">
  This paragraph is in English but incorrectly goes right to left.
</p>
```

This results in the following output:

![Incorrect use of dir attribute](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-dir-incorrect.png)

> **Note:** The punctuation mark, `.`, is placed at the front of the sentence when using `rtl` direction. The LRM control character `&lrm;` can be placed at the end of the sentence to display the punctuation as if the text is left-to-right.

## Example 2

The following example sets the `dir` attribute on a `<p>` element to `ltr`:

```html
<p dir="ltr">This paragraph is in English and correctly goes left to right.</p>
```

This results in the following output:

![Correct use of dir attribute](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-dir-correct.png)
