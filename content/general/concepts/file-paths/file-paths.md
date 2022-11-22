---
Title: 'File Paths'
Description: 'File paths specify the location of a file in the file system structure of a computer.'
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

A **file path** specifies the location of a file in a computer's [file system structure](https://www.codecademy.com/resources/docs/general/file-system-structure). They can be used to locate files and web resources, including:

- Media files, such as images
- Links to [CSS stylesheets](https://www.codecademy.com/resources/docs/css) for a web page
- Files that may link to programs, such as [CDNs](https://www.codecademy.com/resources/docs/general/cdn), [frameworks](https://www.codecademy.com/resources/docs/general/cdn), or [Node applications](https://www.codecademy.com/resources/docs/open-source/node-js)
- Other files, such as [JSON](https://www.codecademy.com/resources/docs/general/json) or plain text

## URLs and File Paths

[URLs](https://www.codecademy.com/resources/docs/general/url) specify the location where data and websites are hosted on the web. URLs and file paths both provide the location a computer must go to to find a particular resource. A major difference between URLs and file paths is that URLs locate resources which are hosted on the Internet, and file paths locate resources which are stored locally or on a local network.

## Absolute and Relative File Paths

Absolute file paths specify the location of a file from the root directory in the file system structure. They are also called "full file paths" or "full paths". Some examples of absolute file paths are:

- `/home/user/website/main/about.html`
- `/home/user/projects/js/script.js`
- `/home/user/data-analysis/scripts/main.py`

In [Linux](https://www.codecademy.com/resources/docs/open-source/linux), the tilde (~) is commonly used to represent a user's home directory in a file path. For example, the above file paths could be changed to:

- `~/website/main/about.html`
- `~/projects/js/script.js`
- `~/data-analysis/scripts/main.py`

Relative file paths specify the location of a file in the same folder or on the same [server](https://www.codecademy.com/resources/docs/general/server). In other words, a relative file path specifies a location of a file that is relative to the current directory. Some examples of relative file paths are:

- `./about.html`
- `./js/script.js`
- `./scripts/main.py`

Relative file paths use a dot notation at the start of the path, followed by a path separator and the location of the file. A single dot (.) indicates the current directory, and a double dot (..) indicates the parent directory. In [Unix](https://www.codecademy.com/resources/docs/general/unix)-based operating systems, such as [Linux](https://www.codecademy.com/resources/docs/open-source/linux) or macOS, `./` tells the program to look for the file from the current directory. `../` tells the program to go up to the parent directory before looking for the file. In Windows, the path separator is a back slash (\\), so `.\` and `..\` are used instead.
