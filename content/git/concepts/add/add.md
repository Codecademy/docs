---
Title: 'Add'
Description: 'In Git, adding is used to add changes from the working tree to the staging area or where changes are saved for the next commit.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

In Git, adding is used to add changes from the working tree to the staging area or where changes are saved for the next commit. The filename now appears in green, indicating that it is tracked and will be staged for the next commit.

## Example

Below is a short example of how the `git add` command works. Assuming a change was saved in a text file, **example.txt**, running `git status` will show that:

```git
git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
  example.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Since the file (in red) is untracked, `git add` can be used to stage it for the next commit. Afterwards, running `git status` again should yield the following:

```git
git add example.txt
git status

On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
  new file:   example.txt
```

The file now appears in green when running `git status` and will be pushed to the staging area and will be saved with the next commit.
