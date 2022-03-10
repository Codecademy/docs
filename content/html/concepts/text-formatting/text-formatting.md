---
Title: 'Text Formatting'
Description: 'There are two ways to format text with HTML. One is to use HTML tags, the other is to use CSS.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
  - 'Semantic'
  - 'Style'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

There are two ways to format text with HTML. One way is to use [HTML tags](https://www.codecademy.com/resources/docs/html/tags), which specify some characteristic of the text that should cause it to render differently. The other way is to use [CSS typography properties](https://www.codecademy.com/resources/docs/css/typography) to define specific formatting for a text element.

**Note:** Modern HTML specifications eschew using HTML tags to specify specific formatting of elements (bold, underline, italic etc.), instead using HTML to describe the characteristics of the text, allowing the software rendering the HTML to decide how tags are displayed. Best practice to define specific styling of text is to use [CSS](https://www.codecademy.com/resources/docs/css).

## HTML Tags

The following HTML tags can affect the formatting of text:

- [`<b>`](https://www.codecademy.com/resources/docs/html/tags/b): Represents text that the reader's attention should be directed to, without signifying any importance. Usually displayed with boldface.
- [`<i>`](https://www.codecademy.com/resources/docs/html/tags/i): Represents text set off as an idiomatic expression, technical term, taxonomical designation and so on. Usually displayed with italics.
- [`<u>`](https://www.codecademy.com/resources/docs/html/tags/u): Represents text to be displayed with a non-textual annotation. Usually displayed using a solid underline.
- [`<strong>`](https://www.codecademy.com/resources/docs/html/tags/strong) Represents text that is urgent or important. Usually displayed with boldface.
- [`<em>`](https://www.codecademy.com/resources/docs/html/tags/em): Represents text which is emphasized. Usually displayed with italics.
- [`<h1> - <h6>`](https://www.codecademy.com/resources/docs/html/tags/h1-h6): Represents various heading levels for text. Usually affects font size and weight.

While historically `<b>`,`<i>` and `<u>` tags were used to explicitly format text in a HTML document, that use has been depreciated. These tags now indicate characteristics of the text without specifying a definitive format for how it is rendered. If a specific specified format is required, CSS should be used.

## CSS

To render text with some specific format, CSS is used. CSS can be applied using a stylesheet or using the `style` attribute. (see [CSS Anatomy](https://www.codecademy.com/resources/docs/css/anatomy)) The following CSS properties can be used to format text:

- [`@font-face`](https://www.codecademy.com/resources/docs/css/typography/font-face) Specifies a custom font to be used to display text.
- [`font`](https://www.codecademy.com/resources/docs/css/typography/font) Shorthand property that sets different properties for an element's font in a single declaration.
- [`font-family`](https://www.codecademy.com/resources/docs/css/typography/font-family) Specify the typeface in a rule set.
- [`font-size`](https://www.codecademy.com/resources/docs/css/typography/font-size) Sets the text size. Font size values can be in different units like absolute lengths and relative lengths.
- [`font-style`](https://www.codecademy.com/resources/docs/css/typography/font-style) To set the font style in which text will appear. Should be used instead of `<i>` to display italics.
- [`font-weight`](https://www.codecademy.com/resources/docs/css/typography/font-weight) To set the text to be thicker or thinner. Should be used instead of `<b>` to make text bold.
- [`text-decoration`](https://www.codecademy.com/resources/docs/css/typography/text-decoration) To add lines on the text. Should be used instead of `<u>` to underline text.
- [`text-shadow`](https://www.codecademy.com/resources/docs/css/typography/text-shadow) Adds shadow to text.
