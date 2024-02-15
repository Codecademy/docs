---
Title: 'Status'
Description: 'The git status command shows the state of the working directory, staging area, and which files are untracked or tracked.'
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

In Git, the `status` command shows the state of the working directory, staging area, and which files are untracked (names shown in red and not staged) or tracked (shown in green and staged). The tracked files, shown in green, are found in the staging area and will be saved with the next commit.

## Example

Below is a short example of how the `git status` command works. Assuming a change was saved in a text file, **example.txt**, running `git status` will show that:

```shell
$ git status

On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
  example.txt

nothing added to commit but untracked files present (use "git add" to track)
```
