---
Title: 'Quotations'
Description: 'In HTML, a quotation is a portion of text that is attributed to a specific person or source.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Quotations'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

In HTML, a quotation is a portion of text that is attributed to a specific person or source. HTML provides several ways to mark up quotations on a web page, using specific [tags](https://www.codecademy.com/resources/docs/html/tags) for short and long quotations.

## Short Quotations

Short quotations such as a short sentence or fragment should be set off with the [`<q>`](https://www.codecademy.com/resources/docs/html/elements/q) tag. Here's an example of how to use the `<q>` tag:

```html
<p>
  According to Albert Einstein,
  <q>Imagination is more important than knowledge.</q>
</p>
```

![Short quote](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-quotations-1.png)

In this example, the text "Imagination is more important than knowledge" is enclosed in the `<q>` tag to indicate that it's a quotation. The quotation marks around "Imagination is more important than knowledge" are automatically added by the browser.

## Long Quotations

For longer quotations the [`<blockquote>`](https://www.codecademy.com/resources/docs/html/elements/blockquote) tag is used in lieu of `<q>`. Here's an example of how to use the `<blockquote>` tag:

```html
<blockquote>
  <p>
    "The greatest glory in living lies not in never falling, but in rising every
    time we fall. The way to get started is to quit talking and begin doing.
    Your time is limited, don't waste it living someone else's life. Don't be
    trapped by dogma, which is living the result of other people's thinking.
    Don't let the noise of other's opinions drown your own inner voice. And most
    important, have the courage to follow your heart and intuition. They somehow
    already know what you truly want to become. Everything else is secondary."
  </p>
  <footer>Steve Jobs</footer>
</blockquote>
```

![Long quote](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-quotations-2.png)

In this example, the text "The greatest glory in living ... secondary.", is enclosed in the `<blockquote>` tag to indicate that it's a quotation. The `<footer>` tag is used to specify the author of the quote.

Both the `<q>` and `<blockquote>` tags provide a semantic markup for quotations, which can be used by screen readers to distinguish quoted text from surrounding content, making it easier for visually impaired users to navigate web content.

In conclusion, HTML provides two types of quotation tags to address short quotations and long quotations. Short quotations can be created using the `<q>` tag, while long quotations can be created using the `<blockquote>` tag. By using these tags correctly, quotations can be added to web pages in the most explicit and accessible form possible.
