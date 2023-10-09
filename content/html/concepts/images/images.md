---
Title: 'Images'
Description: 'While many websites are primarily text, embedding images using HTML within a site allows for more lively pages that can be more attractive and informative to visitors.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Images'
  - 'Semantic'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

While many websites are primarily text, embedding **images** using HTML within a site allows for more lively pages that can be more attractive and informative to visitors. However, when serving images, there are concerns about the impact on page loading speeds as well as accessibility, so knowledge of how images can be best served to users is critical for good development.

## Image Formats

Images make up most of the bandwidth for a standard webpage, and therefore can slow the speed of page loads. It is best to optimize the size of images as much as possible ahead of time. While there are a myriad of image formats available, only a few key formats are needed for most use cases:

- `JPEG`: Best for minimizing image sizes at the cost of some [graphical fidelity](https://en.wikipedia.org/wiki/Image_fidelity).
- `PNG`: Best for images where graphical fidelity is important.
- `SVG`: Best for vector images, such as simple symbols and shapes.

There are also new image formats such as `AVIF` and `WebP` that are attempting to replace `JPEG`. While their browser support may currently be limited, their reductions in file sizes are significant.

## Inserting and Sizing an Image

Below is an example of how an image is commonly inserted into a page using the HTML [`<img>`](https://www.codecademy.com/resources/docs/html/elements/img) element:

```html
<img src="logo.png" alt="Codecademy logo" />
```

The above code will render this:
![image example](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-image-example.png)

It is recommended to specify the image's [width and height](https://www.codecademy.com/resources/docs/uiux/width-height) using the percent of the current screen size to best support both smaller mobile devices as well as larger workstations. The image below would take up the top half of any screen, regardless of its size:

```html
<img src="logo.png" alt="Codecademy logo" style="height:50%; width: 100%;" />
```

However, this may lead to stretched images on wider screens, so setting a maximum width may be preferred:

```html
<img
  src="logo.png"
  alt="Codecademy logo"
  style="height:50%; max-width: 100%;"
/>
```

To only serve higher resolution images to certain devices with higher resolution screens, the `srcset` attribute can be used. `srcset` allows the browser to choose an image based on the given amount of pixels on the screen. For example, to serve users with ultra-wide screens a larger, high-resolution image of a logo, as well as provide support for standard desktop and mobile sizes, the following HTML `<img>` element can be used:

```html
<img
  src="logo-mobile.png"
  srcset="logo-desktop.png 1000w, logo-ultra-wide-hires.png 2000w"
  alt="Codecademy logo"
/>
```

**Note**: `srcset` is intended only to serve the same image at different resolutions. This is to save bandwidth by providing higher-quality images only to the devices that can support it. To serve different images for other uses, such as for artistic direction or to support cutting-edge filetypes such as AVIF and WebP, it is best to use the [`<picture>`](https://www.codecademy.com/resources/docs/html/elements/picture) element. `<picture>` elements are a collection of `<source>` elements ordered in terms of preference with an `<img>` element as a fallback. For example, to prefer to serve an `AVIF` image, that falls back to a `WebP` image if that is not supported, and finally, resort to a `JPEG` image if neither of those is available, use the following `<picture>` element:

```html
<picture>
  <source srcset="logo.avif" type="image/avif" />
  <source srcset="logo.webp" type="image/webp" />
  <img src="logo.jpeg" alt="Codecademy logo" />
</picture>
```

Image paths can also be used as [URLs](https://www.codecademy.com/resources/docs/general/url) to style the [`background-image`](https://www.codecademy.com/resources/docs/css/background/background-image) property of an element:

```html
<div style="background-image: url('logo.jpeg');"></div>
```

## Accessible Images and Semantic HTML

The goal of creating accessible images is to convey the same content and function that the image would normally provide to those people that are not able to view it. Images are an important tool for communication. Accessible images should not impede that goal, but instead, communicate that content to even more users.

This is best done by the alternate text `alt` attribute. As an image is intended to convey a message, to best serve the users who cannot view that image, the same message needs to be conveyed in textual form. This should leave any user able to properly consume the entirety of the content, regardless of ability.

The semantic [`<figure>`](https://www.codecademy.com/resources/docs/html/semantic-html/figure) element serves a similar purpose to the alternate text attribute by providing additional context to browsers and screen readers. It is a self-contained image within the main flow of content, and usually paired with a [`<figcaption>`](https://www.codecademy.com/resources/docs/html/semantic-html/figcaption) child element to provide additional context to the reader. Note that the use of the `<figcaption>` does not replace the need for an `alt` attribute for the corresponding image.

```html
<figure>
  <img src="logo.png" alt="Codecademy logo" />
  <figcaption>The Codecademy logo</figcaption>
</figure>
```

The figcaption looks like this:
![figcaption example](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-image-figcaption-example.png)
