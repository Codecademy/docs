---
Title: "Links"
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

The `<link>` is used to connect the document to an outside resource, most commonly stylesheets. Unlike most elements, which come as opening and closing tags, the `<link />` is self-closing and only contains attributes. 

The two primary attributes are: 

* A `rel` to describe the format of the external source.
* An `href` that contains the filepath to the external source.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Links in HTML</title>
  <link rel="stylesheet" href="some/outside/source.css">
</head>
<body>
  ...
</body>
</html>
```
