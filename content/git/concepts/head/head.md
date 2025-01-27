---
Title: 'HEAD'
Description: 'In Git, HEAD refers to the current commit or the latest snapshot of the working directory.'
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

In Git, **`HEAD`** is a reference to the current branch or commit that the user is working on. It typically points to the most recent commit in the current branch, but can also point to other commits when working with detached `HEAD` states.

## Purpose of `HEAD`

- **Current Commit Reference**: `HEAD` helps Git know where the current working directory is in relation to the commit history.
- **Working Directory**: `HEAD` allows Git to track changes relative to the last commit made on the active branch.
- **Branch Switching**: `HEAD` changes when you switch branches, as it always points to the tip of the branch you're working on.

## Viewing `HEAD`

To check the current commit or branch where `HEAD` is pointing, the following command can be used:

```shell
git log --oneline
```

This shows a simplified log of the commit history, where the commit at the top is the one pointed to by `HEAD`.

## Detached `HEAD` State

A **detached `HEAD`** occurs when `HEAD` is not pointing to the tip of a branch, but rather to a specific commit. In this state, changes are not linked to any branch.

For example, this command checks out a specific commit, causing `HEAD` to be detached from any branch:

```pseudo
git checkout <commit_hash>
```

Changes made in detached `HEAD` state won't be associated with any branch unless explicitly created as a new branch. It can be useful for exploring past commits or making temporary changes.

## Updating `HEAD`

`HEAD` is updated when switching branches, as it points to the latest commit of the newly checked-out branch:

```shell
git checkout develop
```

This command switches the current branch to `develop` and `HEAD` points to the most recent commit on the `develop` branch.

## Resetting `HEAD`

We can use `git reset` to move `HEAD` to a previous commit, changing the state of the working directory:

```pseudo
git reset --hard <commit_hash>
```

For example, this command resets `HEAD` to the commit with hash `abc1234`, and the working directory will match the state of that commit:

```shell
git reset --hard abc1234
```
