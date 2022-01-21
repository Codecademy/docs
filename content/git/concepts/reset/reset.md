---
Title: 'Reset'
Description: 'Used to undo commits to a Git Repository'
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

Git reset is a command used to undo local changes to the state of the Git Repository or undo commits.

## Example

Let a file called "example.txt" be accidentally committed to a Repository. To undo this commit, use the command "git reset --mixed HEAD~1", this resets the HEAD and
the remaining files needed to be committed can be done as usual.

## Before Committing

```
On branch main
Your branch is up to date with 'origin/main'.
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   example.txt
```

## After Committing

```
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

## After Resetting

```
On branch main
Your branch is behind 'origin/main' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        example.txt
nothing added to commit but untracked files present (use "git add" to track)
```

Resetting can be done in three ways:

1. --soft: This undoes the commit but still shows the file as staged and permits only new commits.
2. --mixed: This undoes the commit and unstages the file and the file can be edited and committed normally.
3. --hard: This removes the new commit including all changes and uncommitted files.
