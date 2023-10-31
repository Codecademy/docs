---
Title: 'Rebase'
Description: 'Rebasing integrates or shifts a series of commits onto a fresh base commit.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'Github'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
---

**Rebase** is one of two Git utilities intended for [merging](https://www.codecademy.com/resources/docs/git/merge) changes from one branch into another. Essentially, it involves taking one branch and appending it to the end of another branch, with the "end" being represented by the latest commit in the branch.

A more straightforward analogy is akin to reordering the chapters in a book to enhance its coherence. Instead of adding new chapters at the end, as in a merge, it repositions the changes onto a new base, hence the term "rebase." This process rewrites the history, resulting in a more seamless, linear timeline. It can be valuable for maintaining a clean and organized Git history.

## Syntax

To rebase the current branch onto another branch, run:

```shell
git rebase <base>
```

In this command, `<base>` refers to the branch or commit to rebase the current branch onto. This command takes the changes from the current branch and applies them on top of the specified base branch or commit.

The following command initiates an editor where rebase instructions for individual commits can be input.

```shell
git rebase --interactive <base>
```

## Rebasing a branch

1. Make sure the working directory is clean: Commit or stash any changes in the current branch to ensure there are no uncommitted modifications.
2. Checkout the branch to rebase: Use `git checkout <branch-name>` to switch to the branch to rebase.
3. Fetch the latest changes: Run `git fetch` to capture the latest changes from the remote repository.
4. Start the rebase: Start a rebase in either the regular or interactive modes.
5. Resolve conflicts (if any): Git will pause the rebase if there are conflicts. Use git status to identify the files with conflicts and resolve them manually. After resolving conflicts, use `git add <file>` and `git rebase --continue` to continue the rebase.
6. Complete the rebase: After resolving conflicts (if any), the rebase will continue automatically or when `git rebase --continue` is used.
7. Push the rebased branch: When working on a shared branch, it's essential to push the rebased branch with `git push` to update the remote branch.
8. Clean up (optional): Once the rebase is successful, the old branch can be deleted if needed with `git branch -d <old-branch-name>`.
