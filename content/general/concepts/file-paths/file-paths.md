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

## Paths and Path Separators

In general, a path is a string of characters which specifies a unique location in a directory or page hierarchy. For file systems, each level in the hierarchy is a directory. For [URLs](https://www.codecademy.com/resources/docs/general/url), each level in the hierarchy is a page. Different sections of the path are separated by a path separator, such as a forward slash (/). These different sections represent the separate directories or pages in the hierarchy, as shown below:

`/home/user/python/test.py`

In this file path, the `test.py` file is inside the `python` directory. The `python` directory is a subdirectory of the `user` directory, which is a subdirectory of the `home` directory. File paths are one example of a path. Paths are also an important component of URLs.

In [Unix](https://www.codecademy.com/resources/docs/general/unix)-based operating systems, such as Linux or macOS, the path separator is a forward slash (/). In Windows, the path separator is a back slash (\\).

> **Note:** URLs follow a standard format that always uses a forward slash (/) as the path separator regardless of the operating system.

## URLs and File Paths

URLs specify the location where data and websites are hosted on the web. URLs and file paths both function similarly and provide the location a computer must go to to find a particular resource. However, a major difference is that URLs locate resources which are hosted on the Internet, and file paths locate resources which are stored locally or on a local network.

## Absolute and Relative File Paths

Absolute file paths specify the location of a file from the root directory in the file system structure. They are also called "full file paths" or "full paths." Some examples of absolute file paths are:

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

Relative file paths use a dot notation at the start of the path, followed by a path separator and the location of the file. A single dot (.) indicates the current directory, and a double dot (..) indicates the parent directory. For example, in Linux, `./` tells the program to look for the file from the current directory, and `../` tells the program to go up to the parent directory before looking for the file.
