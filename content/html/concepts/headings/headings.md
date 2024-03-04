---
Title: 'Headings'
Description: 'There are 6 heading elements in HTML. They are labeled 1-6, with 1 being the largest sized heading and 6 being the smallest. These are great for labeling different sections in a website.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Headings'
  - 'Semantic'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Among the HTML elements are the 6 heading elements. They are labeled 1-6, with 1 being the largest sized heading and 6 being the smallest. These are great for labeling different sections in a website:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

## Changing Heading size

HTML Headings have default sizes but these can be changed using the CSS [style attribute](https://www.codecademy.com/resources/docs/html/attributes/style). Using the [font-size](https://www.codecademy.com/resources/docs/css/typography/font-size) property can customize how big or small headings will appear on the webpage. This is useful if the default size does not fill the available space correctly.

![Changing Heading size example](https://github.com/OhWilko/docs/blob/html-headings-edit/media/html-heading-resize-example.gif)

## Accessibility with Headings

Each heading has semantic meaning for the overall structure of a page. Headings have affects on how well a page performs with SEO and how devices like screen readers can access them. Here are a few best practices for using heading elements in an accessible and SEO-friendly way:

- Keep it to one `<h1>` element to one page. This element should be associated with the main topic of the page.
- Do not skip levels. Go from `<h1>` to `<h2>` and so on.
- Avoid nesting headings too deeply so they aren't skipped.
