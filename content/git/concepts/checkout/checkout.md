---
Title: 'Checkout'
Description: 'The git checkout command switches, creates and restores branches in the working directory to a specific state.'
Subjects: 
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'GitHub'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

The git **`checkout`** command switches, creates and restores branches in the working directory to a specific state. 

It is also possible to checkout to a specific commit without changing branches.

## Syntax

Checkout with branches:
```pseudo
git checkout [options] <branch-name>
```
Checkout with a specific commit:
```pseudo
git checkout <commit-hash>
```
## Switch to an existing branch

The following command will switch to an already existing branch, created previously with the [git branch](https://www.codecademy.com/resources/docs/git/branch) command:
```pseudo
git checkout existing-branch
```
> **Note**: From Git 2.23, the new specific `git switch` command has been introduced to switch branches, making it clearer and safer than `git checkout` because it avoids the ambiguity of the latter's multi-purpose nature.

## Create and switch to a new branch

It is possible to create and switch to a new branch with a single command, using the `-b` option:
```pseudo
git checkout -b new-branch
```

## Restore a file from a specific commit

Restore a file from a specific commit using its hash:
```pseudo
git checkout <commit-hash> -- example.txt
```

## Examine a Previous Commit
Temporarily move to a specific commit without changing branches. This status is called `detached HEAD state`:
```pseudo
git checkout <commit-hash>
```
The detached HEAD state allow to:
- Examine the state of the repository at that specified commit.
- Create new branches if the develop needs to start from that point.
- Any code changes on this state will not be associated with any existing branch unless one is created.