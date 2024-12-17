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

## What is a `.gitignore` file?

What happens when our Git repository contains certain files we never want to commit to a shared or public codebase? We want to be careful that git add doesn’t accidentally move them to the staging area. That’s where a **.gitignore** file comes in. **.gitignore** is a plain text file that tells Git to intentionally ignore changes in certain files. This also ensures that no other contributor in the repository accidentally commits those files.

## Why use a `.gitignore` file?

Each line in .gitignore corresponds to a file, directory, or pattern we would like to ignore when staging. Using a .gitignore file results in cleaner staging areas and prevent files containing sensitive information from being committed. Some of the files or folders we should ignore include:
* Configuration files with API or secret keys such as **.env**
* Compiled binary files or production directories such as **build** or **dist**
* Log files
* Dependencies downloaded from a package manager such as **node_modules**
* System files such as **thumbs.db** on Windows or **.DS_Store** on macOS

## Creating a `.gitignore` file

We can create a **.gitignore** file easily using a terminal editor like *nano* or *emacs*, or just using a File explorer. Don’t forget the `.` before the filename!

**.gitignore** is usually placed in the root directory of the repository. The filenames inside a **.gitignore** file can be written relative to the location of the **.gitignore** file. For example, we could add the line
```
src/main.js

```
to ignore the file **main.js** under the **src/** directory.

![alt text](https://static-assets.codecademy.com/Courses/learn-git-github/gitignore/create-gitignore.png "A screenshot of a Linux terminal showing the creation of a .gitignore file using the command "touch .gitignore". Next, the commands "ls" and "ls -a" are used to show that since .gitignore is a hidden file, the "-a" flag is necessary")

**Note:** since **.gitignore** is a hidden file, we will need to add the `-a` flag to `ls` to see it.

## Ignore a directory with .gitignore

Sometimes we want to ignore entire directories or specify certain files in a directory. Common directories to leave out of a Git repository are **node_modules** or **logs** folder. We can ignore an entire directory by simply adding its name to **.gitignore**:
```
node_modules/
```
This will ignore the **node_modules** directory, and all subdirectories and files inside them. The forward slash `/` specifies that we are ignoring the directory.

## `.gitignore` Patterns

We can take advantage of patterns to match multiple filenames. These help us handle special cases such as ignoring specific file types or ignoring all but one file inside a directory. Some examples of things that make up patterns are:

* Wildcard * to match 0 or more characters except for /. For example, adding `*.html` to **.gitignore** would ignore all files ending with the `.html` extension. `example*` would match any file starting with example such as `example.txt` or `exampleHtmlFile.html`.
* Negation `!` as a prefix to negate any file that would otherwise be ignored. For example,
```
index*
!public/index.css
```
will ignore all files starting with *index* except for *src/index.css*. But, we cannot negate a file inside an ignored directory.

* Square brackets `[]` can be used to match a single character from a set of characters or a range of characters. Note that the range can be alphabetical: `[a-z]` or `[A-Z]`, numeric `[0-9]`, or a set of characters. If we added `index.[a-i]*` with both the square bracket and wildcard to **.gitignore**, we would ignore *index.css* and *index.html* but not *index.js*, since “j” is outside of the `[a-i]` range.
* Double asterisk `**` is used to match 0 or more directories. If we had a temp folder inside all of the folders in the root directory and we only wanted to match files with the `.log` extension, we could use the pattern `**/temp/*.log`.

## GitHub Provided Templates

When we create a new repository on GitHub, we have the option to add a .gitignore file from a list of templates. These templates are pulled from [GitHub’s gitignore repository](https://github.com/github/gitignore). For example, below is the template for Java projects.
```
# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar
```