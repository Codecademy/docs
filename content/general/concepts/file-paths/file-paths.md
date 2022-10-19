---
Title: 'File Paths'
Description: 'File paths describe the location of a file in the folder structure of a computer.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'File Paths'
  - 'Files'
  - 'URL'
CatalogContent:
  - 'learn-html'
  - 'paths/computer-science'
---

A **file path** describes the location of a file in a computer's folder structure. They are used to locate files like:

- Media files such as images.
- Links to [CSS stylesheets](https://www.codecademy.com/resources/docs/css) for the web page.
- Files that may link to programs such as [CDNs](https://www.codecademy.com/resources/docs/general/cdn), [frameworks](https://www.codecademy.com/resources/docs/general/cdn), or [Node applications](https://www.codecademy.com/resources/docs/open-source/node-js).
- Other files such as [JSON](https://www.codecademy.com/resources/docs/general/json) or plain text.

## URLs and File Paths

[URLs](https://www.codecademy.com/resources/docs/general/url) are addresses where data and websites are hosted on the web and are more permanent. File paths are relative to where they are hosted normally on a [server](https://www.codecademy.com/resources/docs/general/server), inaccessible to most people, and are more temporary.

## Relative File Paths

Relative file paths link to a local file in the same folder or on the same server, for example:

- `./about.html`
- `./js/script.js`
- `./scripts/main.py`

Relative file paths begin with `./` followed by a path to the local file. `./` tells the program to look for the file path from the current folder. To go up one level in the file structure, two periods followed by a forward-slash are used: `../`.
