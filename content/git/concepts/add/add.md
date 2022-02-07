---
Title: 'Add'
Description: 'In Git, adding is used to add changes from the working tree to the staging area. This iswhere changes are saved for the next commit.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'Version Control'
CatalogContent:
  - 'learn-the-command-line'
  - 'learn-git'
---

In Git, adding is used to add changes from the working tree to the staging area. This is where changes are saved for the next commit. When the file name appears in green, it indicates that the file is tracked and will be staged for the next commit.

## Example

Below is a short example of how the `git add` command works. Assuming a change was saved in a **message.txt** text file, running `git status` will show that:

```shell
$ git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
  message.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Since the file is untracked, `git add` can be used to stage it for the next commit. Afterwards, running `git status` again should yield the following:

```shell
$ git add message.txt
$ git status

On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
  new file:   message.txt
```

The file now appears in green when running `git status`, indicating that it is staged and will be saved with the next commit.

There are many extentions to the `git add` command such as:

1. `-n`: Where the file will not be added to the staging area but will show whether or not the file exists and/or if it will be ignored.
2. `-f`: Which stages all files including those which are ignored.
3. `.` : Which stages all the files in the current directory. If you are familiar with the command line, you will recognize the use of `.` to reference the directory you are currently in.
4. `-A`: Which stages all the files in the current directory as well as subdirectories.
