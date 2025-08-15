---
Title: 'Reset'
Description: 'Undoes changes by moving the HEAD pointer to a different commit.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Bash/Shell'
  - 'Git'
  - 'GitHub'
  - 'Version Control'
CatalogContent:
  - 'learn-the-command-line'
  - 'learn-git'
---

The **`git reset`** command undoes changes by moving the HEAD pointer (which indicates the current commit) to a different commit in the repository's history. It can also affect the staging area (index) and the working directory.

> **Note:** This command is ideal for undoing uncommitted changes made in a private, local repository. For undoing changes in a public, remote repository, the `git revert` command is recommended.

## Git Reset Syntax

```pseudo
git reset <mode-options> <commit-reference>
```

### Mode Options

The `<mode-options>` flag refers to how far `git reset` will go when rolling back changes to a previous commit, including:

- Where the `HEAD` is pointing towards (usually done with just `git reset`).
- Whether the staging area or index, reflects the commit the `HEAD` is now pointing towards.
- Whether the working tree is rolled back to reflect the changes reset in the `HEAD` and staging area.

More specifically, these modes include:

- `--soft`: This rolls back to an earlier commit by moving the `HEAD` pointer towards it but leaving the staging area and working tree untouched, allowing for new commits to be made.
- `--mixed`: In addition to moving the `HEAD` pointer to an earlier commit, the staging area is cleared to reflect the changes made in that commit (this runs by default).
- `--hard`: This goes one step further and resets the working tree to reflect the previous commit reflected in the staging area and the `HEAD` pointer.

### Referencing Commits

The `<commit-reference>` flag refers to a commit's unique hash, or save point, that was generated after creation. This hash is a long string that is a mix of characters and numbers that is usually represented by a shorter version: `05df67f9066c8ddd95c8d7bb2137acfb8b18e167` -> `05df67f`

`git reset` can be used with either the commit hash or with the `HEAD` keyword, which refers to the commit being viewed on the currently checked-out branch.

Alternatively, a filename can be used in place of `<commit-reference>` to undo a `git add` for a file that wasn't meant to be staged for commit.

## Example: Using Git Reset

This is what the terminal would look like after creating a commit by accident on the `main` branch and running a [`git status`](https://www.codecademy.com/resources/docs/git/status) check:

```shell
On branch main
nothing to commit, working tree clean
```

The text indicates that:

- The `main` branch is up to date, with the `HEAD` pointing towards the most recent commit.
- There is nothing to commit in the staging area.
- New changes haven't been made yet in the working tree, hence why it is "clean".

To set the `HEAD` back by one commit as well as clear the staging area, one of these commands can be run:

```shell
git reset HEAD~1
git reset --mixed HEAD~1
```

Since the `--mixed` mode runs by default, both of the commands are identical in function. Upon running one of these:

- It will move the `HEAD` pointer back by one (`~1`) commit.
- The staging area will be cleared of changes.
- The overall state of the `main` branch is set to the state before changes in `example.txt` were added to the staging area for the previous commit.

If `git status` is run once more, this should appear on the terminal:

```shell
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   example.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

## Git Reset vs. Git Revert

| Feature            | `git reset`                                                                          | `git revert`                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| **Purpose**        | Moves the current branch’s `HEAD` to a specific commit, changing the commit history. | Creates a new commit which reverts the changes from a specific commit without altering history. |
| **History Impact** | Rewrites history (dangerous for shared branches).                                    | Preserves history (safe for shared branches).                                                   |
| **Data Loss Risk** | Possible (especially with `--hard`, which deletes changes).                          | No data loss — original commit remains in history.                                              |
| **Use Case**       | Remove or modify commits before pushing (cleanup, rebase).                           | Safely undo changes in public/shared branches.                                                  |

## Frequently Asked Questions

### 1. What does `git reset` do?

`git reset` moves the current branch's `HEAD` to a specified commit. Depending on the mode (`--soft`, `--mixed`, or `--hard`), it can also change the staging area and working directory:

- `--soft`: Moves `HEAD` only, keeps all changes staged.
- `--mixed` (Default): Moves `HEAD` and resets the staging area, keeps changes in working directory.
- `--hard`: Moves `HEAD` and discards both staged and working directory changes (data loss possible).

### 2. What is the difference between `git reset` and `git revert`?

- `git reset`: Rewrites commit history, moving `HEAD` to a different commit. Can remove commits entirely (dangerous for shared branches).
- `git revert`: Creates a new commit which reverts the changes from a previous commit while keeping the history intact (safe for shared branches).

### 3. Is `git reset` a good idea?

It depends:

- **Good idea**: When cleaning up local commits before pushing (private branches).
- **Risky**: On public/shared branches because it rewrites history and can cause conflicts for collaborators.
- **Rule of Thumb**: Use `git reset` for local/private history cleanup; use `git revert` for undoing changes in shared/public branches.
