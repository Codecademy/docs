---
Title: 'Images'
Description: 'While many websites are primarily text, embedding images within a site allows for more lively pages that can be more attractive and informative to visitors.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Semantic'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

While many websites are primarily text, embedding images within a site allows for more lively pages that can be more attractive and informative to visitors. However, when serving images there are concerns of the impact to page loading speeds as well as to accessibility, so knowledge on how images can be best served to users is critical for good development.

## Choosing an Image Format

As images make up most of the bandwidth for a standard webpage, and therefore can slow the speed of page loads, it is best to optimize the size of images as much as possible ahead of time. While there are a myriad of image formats available, only a few key formats are needed for most use cases:

- JPEG: Best for minimizing image sizes at the cost of some graphical fidelity
- PNG: Best for images where graphical fidelity is of the upmost importance
- SVG: Best for vector images, such as simple symbols and shapes

There are also new image formats such as `AVIF` and `WebP` that are attempting to replace JPEG. While their browser support may currently be limited, their reductions in file sizes are significant.

## Inserting and Sizing an Image

Below is an example of how an image is commonly inserted into a page:

```html
<img src="logo.png" alt="Codecademy logo">
```

It is recommended to describe image dimensions using percents of the current screen size to best support both smaller mobile devices as well larger workstations. The below image would take up the top half of any screen, regardless of its size:

```html
<img src="logo.png" alt="Codecademy logo" height="50%" width="100%">
```

However, this may lead to stretched images on wider screens, so setting a maximum width may be preferred:

```html
<img src="logo.png" alt="Codecademy logo" height="50%" max-width="800px">
```

To only serve higher resolution images to certain devices with higher resolution screens, the `srcset` attribute can be used. `srcset` allows the browser to choose an image based on the given amount of pixels on the screen. For example, to serve users with ultra-wide screens a larger, high-resolution image of a logo, as well as provide support for standard desktop and mobile sizes, the following `<img>` element can be used:

```html
<img
  src="logo-mobile.png"
  srcset="logo-desktop.png 1000w, logo-ultra-wide-hires.png 2000w"
  alt="Codecademy logo"
>
```

Note that `srcset` is intended only to serve the same image at different resolutions. This is to save bandwidth by providing higher-quality images only to the devices that can support it. To serve different images for other uses, such as for artistic direction or to support cutting-edge filetypes such as AVIF and WebP, it is best to use the `<picture>` element. `<picture>` elements are a collection of `<source>` elements ordered in terms of preference with an `<img>` element as fallback. For example, to prefer to serve an `AVIF` image, that falls back to a `WebP` image if that is not supported, and finally resort to a `JPEG` image if neither of those are available, use the following `<picture>` element:

```html
<picture>
  <source srcset="logo.avif" type="image/avif">
  <source srcset="logo.webp" type="image/webp">
  <img src="logo.jpeg" alt="Codecademy logo">
</picture>
```

## Accessibility with Images and Semantic HTML

The goal of creating accessible images is to convey the same content and function that the image would normally provide to those people that are not able to view it. Images are an important tool for communication. Accessible images should not impede that goal, but instead communicate that content to even more users.

This is best done by the alternate text attribute required with each image. As an image is typically intended to convey a message, to best serve the users who cannot view that image, the same message needs to be conveyed in textual form. This should leave any user able to properly consume the entirety of the content, regardless of ability.

The semantic `<figure>` element serves a similar purpose to the alternate text attribute by providing additional context to browsers and screen readers. It is a self-contained image within the main flow of content, and usually paired with a `<figcaption>` child element to provide additional context to the reader. Note that the use of the `<figcaption>` does not replace the need for an `alt` attribute for the corresponding image.

```html
<figure>
  <img src="logo.png" alt="Codecademy logo">
  <figcaption>The Codecademy logo</figcaption>
</figure>
```
