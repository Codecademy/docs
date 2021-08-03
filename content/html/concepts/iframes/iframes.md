---
Title: "IFrames"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Files"
  - "Link"
  - "Tags"
  - "URL"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-html"
  - "https://www.codecademy.com/learn/paths/web-development"
---

The `iframe` element provides a smaller version of a browser window that contains various media. These smaller windows are known as "browsing contexts" because the URL passed to the `iframe` is still functional as a web page. This makes their usage somewhat controversial as many commercial websites have safeguards against their URL being passed to this particular element.

## Example 

The example features an `iframe` element with the URL from the National Park Service passed to the `src` attribute. Additionally, it is advisable to include alternative text inside the element in the event a problem occurs.

```html
<iframe class="i-frame-element" src="https://www.nps.gov/caco/index.htm" width=1000 height=1000>
  Alt-text for iFrame
</iframe>
```

![Screenshot of rendered page with i-frame element](https://i.imgur.com/vunCiar.png)
