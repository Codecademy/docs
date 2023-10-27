---
Title: 'Stash'
Description: 'The changes made to the current working file are temporarily stored using the git stash command, which makes it simple to switch to a different branch and work on different feature without losing modifications.'
Subjects:
  - 'Bash/Shell'
  - 'Developer tools'
Tags:
  - 'Git'
  - 'Version Control'
  - 'GitHub'
CatalogContent:
  - 'learn-git'
  - 'paths/computer-science'
---

The **`git stash`** temporarily stores the changes made in the current working file to the hidden directory called .git/refs/stash and we can use **`git stash apply`** to restore the changes done.

## Example

In the following example, `git stash` is used to save changes locally and then re-apply those changes when the developer is ready. First, `git status` is used to check the status of the working branch. Then, `git stash` is used to save those changes locally. Finally, `git status` is used again to show that the working tree is clean and the developer can switch branches.

```shell

$ git stash

Saved working directory and index state WIP on adds_git_stash_#3708: 9f5f09ab adds git stash
```

```shell
$ git stash apply

On branch adds_git_stash_#3708
Your branch is up to date with 'origin/adds_git_stash_#3708'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   content/git/concepts/stash/stash.md
```
