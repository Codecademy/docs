---
Title: 'Images'
Description: 'Images in Markdown are a crucial feature for supporting and visually improving the overall content.'
Subjects:
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Documentation'
  - 'GitHub'
  - 'Images'
  - 'URL'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Images are an essential part of modern digital content, helping to explain ideas, illustrate examples, and enhance visual appeal. In Markdown, images are a crucial feature for supporting and visually improving the overall content.

## Adding Images in Markdown

In Markdown, the syntax for adding an image is:

```pseudo
![Alt text](image-url)
```

In the syntax:

- `Alt text`: A description of the image (used for accessibility and shown if the image fails to load).
- `image-url`: The path or URL to the image file.

Here is an example:

```md
![A mushroom-head robot drinking bubble tea](https://raw.githubusercontent.com/Codecademy/docs/main/media/codey.jpg)
```

The output would be:

![A mushroom-head robot drinking bubble tea](https://raw.githubusercontent.com/Codecademy/docs/main/media/codey.jpg)

An optional title can be added after the URL, still in the parentheses:

```md
![A mushroom-head robot drinking bubble tea](https://raw.githubusercontent.com/Codecademy/docs/main/media/codey.jpg 'Codey, the Codecademy mascot, drinking bubble tea')
```

## Linked Images in Markdown

The syntax for adding a linked image in Markdown is:

```pseudo
[![Alt text](image-url)](target-url)
```

In the syntax, `target-url` is the link to be navigated to upon clicking the image.

Here is an example:

```md
[![A mushroom-head robot drinking bubble tea](https://raw.githubusercontent.com/Codecademy/docs/main/media/codey.jpg 'Codey, the Codecademy mascot, drinking bubble tea')](https://codecademy.com)
```

The output will be:

[![A mushroom-head robot drinking bubble tea](https://raw.githubusercontent.com/Codecademy/docs/main/media/codey.jpg 'Codey, the Codecademy mascot, drinking bubble tea')](https://codecademy.com)

## Resizing Images in Markdown

Since Markdown doesn't support resizing images, inline [HTML](https://www.codecademy.com/resources/docs/html) can be used here to accomplish this task.

The syntax for resizing an image in Markdown is:

```pseudo
<img src="image-url" alt="Alt text" width="<width>" height="<height>">
```

In the syntax:

- `<width>`: The total width of the image in pixels.
- `<height>`: The total height of the image in pixels.

Here is an example:

```md
<img src="https://raw.githubusercontent.com/Codecademy/docs/main/media/codey.jpg" alt="A mushroom-head robot drinking bubble tea" width="100" height="100">
```

The output will be:

<img src="https://raw.githubusercontent.com/Codecademy/docs/main/media/codey.jpg" alt="A mushroom-head robot drinking bubble tea" width="100" height="100">

## HTML Images vs. Markdown Images

| Feature       | Markdown Images                  | HTML Images                                       |
| ------------- | -------------------------------- | ------------------------------------------------- |
| Simplicity    | Very simple                      | More verbose                                      |
| Custom Size   | Not supported                    | Fully customizable                                |
| CSS Styling   | Not possible                     | Supports styles and classes                       |
| Accessibility | Alt text supported               | Alt text and ARIA roles supported                 |
| Compatibility | Works in most Markdown renderers | May not work in strict Markdown-only environments |

## Alt Text Best Practices

Here's a list of best practices for writing alt text:

- **Be descriptive but concise**: "Company logo" is better than just "logo".
- **Avoid redundancy**: Don’t start with "Image of..." or "Picture of...".
- **Context matters**: Write alt text based on the image’s purpose in the content.
- **Decorative images**: Keep alt text empty if the image is purely decorative.

## Frequently Asked Questions

### 1. Can I use local images in Markdown?

Yes. If you're working locally (like in a README file), you can use relative paths:

```md
![Local image](./images/example.png)
```

Make sure the image file is in the correct path relative to the Markdown file.

### 2. Do Markdown images support captions?

Markdown doesn't natively support image captions. However, you can simulate captions using text below the image or use HTML:

```md
<figure>
  <img src="image.png" alt="Example image" width="200" height="200">
  <figcaption>This is a caption for the image.</figcaption>
</figure>
```

### 3. Can I style Markdown images with CSS?

Only if the Markdown is rendered in an environment that allows custom HTML and CSS. Use HTML `<img>` tags and assign classes for styling.
