---
Title: '<dir>'
Description: 'The dir global attribute specifies the text direction of the element's content.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<dir>`** global attribute specifies the text direction of an HTML element's content.
The dir attribute is used to set the base direction of text for display. It is essential to support languages that use right-to-left scripts such as Adlam, Arabic, Hebrew, N'Ko, Syriac, and Thaana. Many different languages are written with these scripts, including Arabic, Dhivehi, Hebrew, Mandinka, Pashto, Persian, Pular, Sindhi, Syriac, Urdu, Yiddish, etc.

## Syntax

```html
<*element* dir = "ltr | rtl | auto">
```

Attribute Values

| **Value** | **Description**                                                                                                                                                                                     |
|-------   |------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ltr        | Default. Left-to-right text direction, such as English|
| rtl        | Right-to-left text direction, such as Arabic |
| auto    | Let the browser figure out the text direction, based on the content (only recommended if the text direction is unknown) |

## Declare the Language
While you are declaring the directionality of the document in the html tag, don't forget to also declare the language of the document using the lang attribute. However, do not make the mistake of assuming that language declarations indicate directionality, or vice versa! Even if the language declaration has a script tag it won't affect the directionality of the text in the user agent. You must always declare the directionality using the dir attribute.


## Example

<p dir="rtl">This paragraph is in English but incorrectly goes right to left.</p>

