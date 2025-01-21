---
Title: 'Reflog'
Description: 'Tracks updates to references like HEAD, helping recover lost commits and debug repository changes.'
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

**Git Reflog** (short for reference log) is a mechanism that records updates to the tips of branches, commits, and other references. It provides a detailed history of actions performed in the repository, even for changes that are not part of the main commit history.

Reflog is particularly useful for recovering lost commits or tracking the changes to references like `HEAD`.

## Viewing the Reflog

To view the reflog, the following command can be used:

```shell
git reflog
```

In addition to the basic `git reflog` command, `git reflog show` can be used to view the reflog of a specific reference, such as a branch or tag:

```pseudo
git reflog show <reference>
```

> **Note:** If no reference is provided, `git reflog show` defaults to the current `HEAD` reference.

This will output a list of recent reference updates, including actions like `git commit`, `git merge`, `git rebase`, or even resets. Each entry is prefixed with an index, allowing users to reference past states.

Here is an example output:

```shell
1a2b3c4 (HEAD -> main) HEAD@{0}: commit: Add feature X
5d6e7f8 HEAD@{1}: reset: moving to HEAD~2
8g9h0i1 HEAD@{2}: checkout: moving from feature to main
```

Each entry in the reflog follows this structure:

- **Commit Hash**: The hash of the reference at that point.
- **Reference**: Describes the state of the repository (e.g., `HEAD`, `branch-name`).
- **Timestamp**: The time of the action.
- **Action Description**: Explains what changed (e.g., `git commit`, `git merge`, `git reset`).

## Recovering Lost Commits

The reflog is an invaluable tool for recovering commits that seem "lost". For example, if a branch is accidentally deleted or reset, the commits can still be recovered using the commit hash shown in the reflog.

To recover a commit, the following command can simply be run:

```pseudo
git checkout <commit-hash>
```

Alternatively, a new branch from the commit can be created:

```pseudo
git branch recovered-branch <commit-hash>
```

## Using Reflog for Undoing Changes

The reflog can be used to undo changes, such as resets or rebases:

- Identify the desired state from the reflog using the command:

```shell
git reflog
```

- Reset the repository to that state:

```pseudo
git reset --hard HEAD@{n}
```

`{n}` needs to be replaced with the appropriate index from the reflog.

## Clearing the Reflog

Over time, the reflog can grow large. To clear or expire old entries, the following command can be used:

```shell
git reflog expire --expire=30.days.ago --all
```

This removes reflog entries older than 30 days for all references.

> **Note:** Reflog data is stored locally, so it’s unavailable in cloned repositories. The default expiration for reflog entries is 90 days, but this can be configured.
