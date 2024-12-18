---
Title: 'gitignore' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'A `.gitignore` file is a plain text file that tells Git which files or directories to ignore in a repository, preventing them from being tracked or staged.'
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code Foundations'
  - 'Computer Science'
  - 'Developer Tools'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Git'
  - 'GitHub'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-git'
  - 'paths/computer-science'
---

A **.gitignore** file is used in Git to specify which files or directories version control should ignore. This file helps maintain cleaner repositories by preventing unnecessary or sensitive files, such as configuration files, logs, or system-generated files, from being tracked or committed.


## Why use a `.gitignore` file?

- **Clean Staging Areas**: Excludes files that don’t need to be staged or committed.
- **Security**: Prevents accidental exposure of sensitive information like API keys or passwords.
- **Efficiency**: Avoids tracking bulky or frequently changing files, such as compiled binaries or dependencies.

## Creating a `.gitignore` file

We can easily create a `.gitignore` file using a terminal editor like Nano or Emacs or just File Explorer.

`.gitignore` is usually placed in the root directory of the repository. The filenames inside a `.gitignore` file can be written relative to the location of the `.gitignore` file. 

For example, to ignore the file `main.js` under the `src/` directory, we can write as follows:
```
src/main.js

```

![A screenshot of a Linux terminal showing the creation of a .gitignore file using the command `touch .gitignore`. Next, the commands `ls` and `ls -a` are used to show that since `.gitignore` is a hidden file, the `-a` flag is necessary.](https://static-assets.codecademy.com/Courses/learn-git-github/gitignore/create-gitignore.png)

> **Note**: Since `.gitignore` is a hidden file, we must add the `-a` flag to `ls` to see it.

## Ignore a directory with .gitignore

Sometimes, we want to ignore entire directories or specify certain files in a directory. Common directories to leave out of a Git repository are `node_modules` or `logs` folders. We can ignore an entire directory by simply adding its name to `.gitignore`:
```
node_modules/
```
This will ignore the `node_modules` directory, and all subdirectories and files inside them. The forward slash `/` specifies that we are ignoring the directory.

## `.gitignore` Patterns

We can take advantage of patterns to match multiple filenames. These help us handle special cases such as ignoring specific file types or ignoring all but one file inside a directory. The possible patterns are:
- `*` matches zero or more characters.
- `**` matches files in all subdirectories.
- `!` negates an ignore rule.
- `/` specifies a directory.

Examples of usage:
* Ignore all files ending with the `.html` extension
    * `*.html`
* Ignore any file starting with `example`
    * `example*`
* Negation any file that would otherwise be ignored
    * ```
      index*
      !public/index.css
      ```
* Ignore all files in the `temp` directory where a `temp` folder exists inside all folders in the root directory
    * `**/temp/**`

GitHub provides predefined `.gitignore` templates for different languages and frameworks, available at [GitHub’s gitignore repository](https://github.com/github/gitignore).
