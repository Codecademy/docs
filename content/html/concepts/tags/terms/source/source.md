---
Title: '<source>'
Description: 'Represents an interface for adding source content to the page.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
  - 'DOM'
  - 'Elements'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<source>` element allows for multiple sources or file formats to be associated with the [`<audio>`](https://www.codecademy.com/resources/docs/html/tags/audio), [`<video>`](https://www.codecademy.com/resources/docs/html/tags/video), and `<picture>` tags. In case one source is incompatible with a given browser, another one can be referenced. If all else fails, the browser will attempt to display fallback content. The `<source>` tag is a child of an `<audio>`, `<video>`, or `<picture>` and has at least one [attribute](https://www.codecademy.com/resources/docs/html/attributes). 

## Syntax

`<source>` is an empty element. It has no child nodes and no closing tag.

```pseudo 
<audio>
  <source src="link-or-path.here" />
  <!-- Fallback content here. -->
</audio>

<video>
  <source src="link-or-path.here" />
  <!-- Fallback content here. -->
</video>

<picture>
  <source srcset="comma-separated-links, for-different-contexts" />
  <!-- Fallback content here. -->
</picture>
```

Attributes provide additional characteristics to the element. Certain attributes are available to the `<source>` tag, depending on which element it is nested in. Listed are some common `<source>` attributes and their compatibilities:

  - `src`: specifies the URL of the media; required when the parent element of `<source>` is an `<audio>` or `<video>` element, but not allowed when the parent is a `<picture>` element.
  - `srcset`: defines a set of images for the browser to choose from, used with `<picture>`  
  - `media`: tells which device the document is optimized for
  - `sizes`: sets out the size of visual media icons
  - `type`: specifies the content type e.g., `video/mp4` or `audio/ogg`

## Example

```html
<video controls>
  <source src="./video.mp4" type="video/mp4" />
  <source src="./video.webm" type="video/webm" />
  Video not supported
</video>
```

The browser will first try and play the **./video.mp4** file and if it can't it will try the **./video.webm** file. If neither of those work one of the following will happen:

* `<video>` will remain inline within the page's markup with only the controls visible (if they're enabled).
* Fallback content (like "Video not supported") is displayed for browsers that do not support HTML5, which includes the `<audio>` or `<video>` tags.

A large amount of `<source>` elements can be used as long as there is a valid file sourced for each one.
