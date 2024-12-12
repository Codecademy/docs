---
Title: 'gitignore' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Learn how and why we should use a .gitignore file to make cleaner and more secure code changes!' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
  - 'Developer Tools'
  - 'Information Technology'
  - 'Web Design'
  - 'Web Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Git'
  - 'GitHub'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-git'
---

When pushing your project to GitHub, there are often files you do not want to be shared with others. A **.gitignore** file is used to specify which files or folders you want Git to ignore when staging. Follow the steps below to include this file in your GitHub project, which can result in cleaner staging areas and prevent sensitive information from accidentally being pushed.

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

## Subsection 1
[Text about subsection 1]

## Subsection 2

[Text about subsection 2]

## Subsection n

[Text about subsection n]