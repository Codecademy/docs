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

## Merge vs Squash vs Rebase

### Merge Commit

**Merge commits** integrate a feature branch into the main branch, keeping the full commit history and adding a merge commit to record the integration.

**Scenario:**

- Your main branch has two commits.
- You create a feature branch and make two commits, and your team adds a commit to the main branch.
- When you merge the feature branch into the main branch, a merge commit is added, preserving the history of all feature branch commits.

```shell
# Create and switch to a feature branch
git checkout -b feature-branch

# Make two commits on the feature branch
git commit -m "Feature commit 1"
git commit -m "Feature commit 2"

# Switch back to main branch and simulate team commits
git checkout main
git commit -m "Main branch commit"

# Merge the feature branch into main
git merge feature-branch
```

**Terminal Output:**

```shell
*   b4d1f6c Merge branch 'feature'
|\
| * 9f8e7a2 Feature Commit 2
| * 8c7d6b1 Feature Commit 1
* | 6a5f4c3 Main Commit 3
|/
* 4e3d2f1 Main Commit 2
* 1a2b3c4 Main Commit 1
```

**Pros:**

- Retains the complete commit history.
- Useful for debugging and tracing changes.

**Cons:**

- Creates a cluttered history, especially in large teams with frequent commits.
- `git log` can become confusing.

## Squash Commit

**Squash commits** condense multiple commits from a feature branch into a single commit while merging into the main branch.

**Scenario:**

- Your main branch has two commits.
- You create a feature branch, make two commits, and your team adds a commit to the main branch.
- When you squash merge, the two feature branch commits are combined into one and added as a single commit on top of the main branch.

```shell
# Create and switch to a feature branch
git checkout -b feature-branch

# Make two commits on the feature branch
git commit -m "Feature Commit 1"
git commit -m "Feature Commit 2"

# Switch back to main branch and simulate a team commit
git checkout main
git commit -m "Main Commit 3"

# Squash merge the feature branch into main
git merge --squash feature-branch
git commit -m "Squashed Feature Commit"
```

**Terminal Output:**

```shell
* 3f4e5d6 Squashed Feature Commit
* 6a5f4c3 Main Commit 3
* 4e3d2f1 Main Commit 2
* 1a2b3c4 Main Commit 1
```

**Pros:**

- Produces a clean, linear history.
- Only a single commit represents the entire feature.

**Cons:**

- Loses granular commit history, making debugging harder.

## Rebase Merge

**Rebase merges** integrate commits from a feature branch by _replaying_ them onto the main branch without adding a merge commit. This results in a linear history.

**Scenario:**

- Your main branch has two commits.
- You create a feature branch, make two commits, and your team adds a commit to the main branch.
- When rebasing, the two feature branch commits are applied on top of the latest main branch commit, creating a straight-line history.

```shell
# Create and switch to a feature branch
git checkout -b feature-branch

# Make two commits on the feature branch
git commit -m "Feature commit 1"
git commit -m "Feature commit 2"

# Switch back to main branch and simulate team commits
git checkout main
git commit -m "Main branch commit"

# Rebase the feature branch onto main
git checkout feature-branch
git rebase main
```

**Terminal Output:**

```shell
* 9f8e7a2 Feature Commit 2
* 8c7d6b1 Feature Commit 1
* 6a5f4c3 Main Commit 3
* 4e3d2f1 Main Commit 2
* 1a2b3c4 Main Commit 1
```

**Pros:**

- Creates a clean, linear commit history.
- Avoids unnecessary merge commits.

**Cons:**

- Resolving merge conflicts during a rebase can be more challenging.
- If the feature branch has multiple commits that modify the same code, conflicts may need to be resolved repeatedly.

## Considerations for Using Git Rebase

- Avoid rebasing on the main branch.
- Use rebase only on local branches.
- Never rebase a branch after it has been pushed to a shared repository.
