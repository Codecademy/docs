---
Title: 'Merge'
Description: 'Allows a user to apply all changes from one branch to another without losing commit history.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Bash/Shell'
  - 'Git'
  - 'GitHub'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
---

The **`git merge`** command allows a user to apply all changes from one [branch](https://www.codecademy.com/resources/docs/git/branch) to another without losing [commit](https://www.codecademy.com/resources/docs/git/commit) history. Whether it is [merging](https://www.codecademy.com/resources/docs/git/merge) a feature branch into the main branch or integrating updates from a teammate, `git merge` ensures that project changes are combined in an organized manner.

## Git Merge Syntax

```pseudo
git merge <branch-name>
```

Here, `<branch-name>` is the name of the branch whose changes are to be merged into the current branch.

**Common optional flags:**

- `--no-ff`: Creates a merge commit even if a fast-forward merge is possible. Keeps branch history explicit.
- `--squash`: Combines all commits from the branch being merged into a single commit. Useful for keeping history cleaner.
- `--abort`: Aborts a merge in progress and restores the branch to its pre-merge state.

## How Git Merge Works

The primary goal of `git merge` is to combine the histories of two branches in a way that preserves the integrity of all changes. To understand this process better, it helps to know what Git is doing behind the scenes.

### Step 1: Identifying the Branches Involved

Suppose you are on the `main` branch and want to merge changes from `feature-branch` into it. Git starts by identifying:

- The current branch (where you want to apply the changes) — here, `main`.
- The branch to merge — here, `feature-branch`.

### Step 2: Finding the Merge Base

In the next step, Git finds the merge base. The merge base is essentially the last commit from which both branches diverged. It acts as a reference point so Git can compare what changed on each branch since then.

### Step 3: Determining the Merge Strategy

Git chooses a merge strategy depending on the relationship between the current branch, the branch being merged, and their histories.

Strategy 1: Fast-Forward Merge

If the current branch (`main`) has no new commits after the merge base, Git can just "fast-forward" the branch pointer forward to the tip of `feature-branch`.

No new commit is created here, and the history remains linear.

Strategy 2: 3-Way Merge

If both branches have diverged — meaning commits exist on both `main` and `feature-branch` since the merge base — Git performs a 3-way merge.

Git compares:

- The merge base commit
- The HEAD of the current branch
- The HEAD of the branch being merged

Using these three points, Git figures out how the changes from each branch can be combined.

It then creates a new commit called a merge commit that has two parent commits representing the integration of both histories.

### Step 4: Applying Changes and Updating History

During the merge process, Git:

- Applies changes introduced by commits on the branch being merged that don’t exist on the current branch.
- Preserves the commits and history of both branches.
- Updates the current branch pointer to the new commit (either fast-forward or merge commit).

## Example: Using Git Merge

Let’s walk through a practical example to see how `git merge` works in action.

**Scenario:**

You are working on a project with two branches:

- `main`: The stable production branch.
- `feature-login`: A branch where you developed a new login feature.

You want to merge the `feature-login` branch into `main`. To do so, follow these steps:

Step 1: Switch to the target branch (`main`)

```shell
git switch main
```

Step 2: Retrieve the latest changes from the [remote repository](https://www.codecademy.com/resources/docs/git/remotes) (`origin`) and update your local `main`

```shell
git pull origin main
```

Step 3: Merge the `feature-login` branch into `main`

```shell
git merge feature-login
```

## Merge Conflicts

Sometimes, Git can’t automatically combine changes, especially when both branches modify the same lines of a file. This results in a merge conflict.

To resolve:

Step 1: Open the conflicting file(s) and decide how to combine changes

Step 2: Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)

Step 3: Stage the resolved file(s)

```shell
git add <file>
```

Step 4: Commit the merge

```shell
git commit
```

## Best Practices for Using Git Merge

- Pull latest changes before merging to avoid outdated merges.
- Use descriptive branch names for clarity in commit history.
- Test your code after merging to catch any integration issues early.
- Consider `--no-ff` to always create a merge commit for better history tracking.

## Frequently Asked Questions

### 1. What is a 3-way merge?

A 3-way merge occurs when Git uses:

- The latest commit of the current branch (HEAD)
- The latest commit of the branch to be merged
- Their common ancestor

Git compares all three to create a new merge commit that combines the changes.

### 2. What is `git merge` vs `git pull`?

- `git merge` incorporates changes from one branch into your current branch (local operation).
- `git pull` retrieves changes from a remote and then merges them into the current branch (remote + merge in one step).

### 3. When should I use `git merge`?

Use `git merge` when you:

- Want to combine changes from a completed feature branch into the main branch.
- Need to integrate teammate changes into your branch without overwriting your own work.
- Prefer to keep commit history intact instead of rewriting it (as in `git rebase`).
