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

The **`git checkout`** command switches, creates and restores branches in the working directory to a specific state. The `git checkout` command also allows switching to a specific commit without changing branches.

## Syntax

Checkout with branches:

```pseudo
git checkout [options] <branch-name>
```

- `<branch-name>` specifies the name of the branch to switch to or create.
- `[options]` optional flags that can be used with the checkout command. Here are some of the most commonly used options:
  - `-b` creates a new branch with the specified name and switches to it immediately.
  - `-` returns to the previously checked-out branch. This flag does not need the `<branch-name>`.
  - `-f` (--force) forces the checkout, discarding any local changes in the working directory.

Checkout to a specific commit:

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

It is possible to create and switch to a new branch with a single command using the `-b` option:

```pseudo
git checkout -b new-branch
```

## Restore a file from a specific commit

`git checkout` also allows to restore a file from a specific commit using its hash:

```pseudo
git checkout <commit-hash> -- example.txt
```

## Examine a Previous Commit

`git checkout` also allows temporarily moving to a specific commit without changing branches. This state is called **detached `HEAD` state**:

```pseudo
git checkout <commit-hash>
```

The detached `HEAD` state allows to:

- Examine the state of the repository at that specified commit.
- Create new branches if the developer needs to start from that point.
- Any code changes made in this state will not be associated with any existing branch unless a new branch is created.
