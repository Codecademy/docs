---
Title: 'Branch'
Description: 'In Git, a branch represents a way to provide an isolated copy of the current code. The code in the branch can be modified without affecting the original code and, when it is ready, the changes can be moved back into the original code. Branches also make it much easier to undo changes.  The basic syntax for creating a branch in Git is this: shell git branch   Using this command from  will create a new branch called  based off of the code that is currently in .'
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

In Git, a branch represents a way to provide an isolated copy of the current code. The code in the branch can be modified without affecting the original code and, when it is ready, the changes can be moved back into the original code. Branches also make it much easier to undo changes.

<!-- IMAGE: Standard Git branching with main branch, splitting into two, merging at the end. -->

## Creating a Branch

The basic syntax for creating a branch in Git is this:

```shell
git branch <branch-name>
```

Using this command from `<current-branch>` will create a new branch called `<branch-name>` based off of the code that is currently in `<current-branch>`.

## Deleting a Branch

The basic syntax for removing a branch in Git is this:

```shell
git branch -d <branch-name>
```

As long as the branch has no uncommitted code, this command will remove the branch entirely. It will no longer be available to check out, and the changed code will be unrecoverable.

Sometimes Git will tell you that you cannot delete your branch because it has changes that have not been merged into the upstream or remote version of that branch.  In these cases, you can _force_ Git to delete the branch by changing the flag to a capital "D" or adding the `--force` flag like so:

```shell
# Option 1:
git branch -D <branch-name>

# Option 2:
git branch -d --force <branch-name>
```

By performing a force delete, you are telling Git that you understand you will lose the changes on that branch forever, and you want to perform the delete anyway.

## Moving Between Branches

The basic syntax for moving between branches in Git is this:

```shell
git checkout <branch-name>
```

This will change the active branch to the one named `<branch-name>`. Any editing done at this point will be to the copy of the code within `<branch-name>` rather than the previous branch.

The `checkout` command is often used immediately after creating a new branch.  In fact, this is so common that there is a shorthand command to create a new branch and switch to it automatically:

```shell
git checkout -b <branch-name>
```

This is exactly the same is performing the following commands in direct succession:

```shell
git branch <branch-name>
git checkout <branch-name>
```

## Merging Branches

The basic syntax for moving code from one branch into another in Git is this:

```shell
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
