---
Title: 'Branch'
Description: 'A branch is an independent version of the main codebase.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'GitHub'
CatalogContent:
  - 'learn-the-command-line'
  - 'learn-git'
---

In Git, a branch is an independent version of the main codebase. They're used for modifying or adding new code to a project without affecting the main codebase, usually named the `main` branch.

Branches are a core component of software development with Git. When a new branch is created, a copy of the source branch is made. All code changes (additions or deletions) in the new branch are isolated from the source branch or main codebase. When the changes in the new branch are ready, they can be merged back into the main codebase. Branches also make it easier to test code or undo changes because they can be deleted without affecting the main codebase or any other branches.

<!-- IMAGE: Standard Git branching with main branch, splitting into two, merging at the end. -->

## Creating a Branch

The syntax for creating a branch in Git is this:

```pseudo
git branch <branch-name>
```

Using this command from `<current-branch>` will create a new branch called `<branch-name>` based off of the code that is currently in `<current-branch>`.

## Renaming a branch

To rename a local branch in Git, use the following syntax:

```pseudo
git branch -m <old-branch-name> <new-branch-name>
```

The `-m` flag here is short for `--move`. A good way to remember this is to think of renaming as "moving" the branch from one name to another.

## Deleting a Branch

The syntax for removing a branch in Git is this:

```pseudo
git branch -d <branch-name>
```

As long as the branch has no uncommitted code, this command will remove the branch entirely. It will no longer be available to check out, and the changed code will be unrecoverable.

Sometimes, Git will refuse to delete a branch because it has unmerged changes in an existing upstream or remote version of that branch. In such cases, it can be forcefully deleted with either the `-d --force` or capitalized `-D` flag, like so in the `my-branch` examples below.

Option 1:

```shell
git branch -d --force my-branch
```

Option 2:

```shell
git branch -D my-branch
```

Performing a force delete tells Git the user understands that all changes on that branch will be lost forever, and they want to delete the branch anyway.

## Moving Between Branches

The syntax for moving between branches in Git is this:

```pseudo
git checkout <branch-name>
```

This will change the active branch to the one named `branch-name`. Any editing done at this point will be to the copy of the code within `branch-name` rather than the previous branch.

The `checkout` command is often used immediately after creating a new branch. This is so common that there is a shorthand command to create a new branch and switch to it automatically:

```shell
git checkout -b branch-name
```

This is the same as performing the following commands in direct succession:

```shell
git branch branch-name
git checkout branch-name
```

## Merging Branches

The syntax for moving code from one branch into another in Git is this:

```pseudo
git merge <branch-name>
```

This will merge the code from `<branch-name>` to the currently checked out branch.

## Example

When working with code, a programmer will often want to work on a specific feature. They will create a branch off of the main one, and code within it. Once they are happy with the feature and are certain that it is ready to be added back to the main branch they will merge it from the feature branch into the main one. Finally, they will clean up their repository by deleting the feature branch.

First, we branch off of the `main` branch and check out the new one:

```shell
git checkout main                   # Make sure we are in the main branch

git branch my-awesome-feature       # Create the new branch

git checkout my-awesome-feature     # Switch to the new branch
```

When our code is ready, and fully committed to the new branch:

```shell
git checkout main                   # Go back to the main branch

git merge my-awesome-feature        # Combine the code from my-awesome-feature into the main branch

git branch -d my-awesome-feature    # Remove the branch now that the code has been combined
```
