---
Title: 'Reset'
Description: 'In Git, reset is used to set the HEAD pointer back to a previous commit and optionally undo staged changes and the working tree.'
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

In Git, the `reset` command is used to change the state of the Git repository or undo commits.

## Syntax

In the terminal, the `git reset` command generally follows this template:

```pseudo
git reset <mode-option> <commit-reference>
```

The `<mode-options>` refer to how far `reset` will go when rolling back changes to a previous commit, including:

- Where the `HEAD` is pointing towards (usually done with just `git reset`).
- Whether the staging area or Index, reflects the commit the `HEAD` is now pointing towards.
- Whether the working tree is rolled back to reflect the changes reset in the `HEAD` and staging area.

More specifically, these options include:

- `--soft`: This rolls back to an earlier commit by moving the `HEAD` pointer towards it but leaving the staging area and working tree untouched, allowing for new commits to be made (runs by default).
- `--mixed`: In addition to moving the `HEAD` pointer to an earlier commit, the staging area is cleared to reflect the changes made in that commit (this option runs by default).
- `--hard`: This goes one step further and resets the working tree to reflect the previous commit reflected in the staging area and the `HEAD` pointer.

If, for example, an error was made in a text file, **example.txt**, and the changes were accidentally [added](https://www.codecademy.com/resources/docs/git/add) and [committed](codecademy.com/resources/docs/git/commit), `git reset` can be used to go back to the state before that commit was made.

### Referencing Commits

The `commit-reference` refers to a commit's unique hash, or save point, that was generated after creation. This hash is a long string that is a mix of characters and numbers that is usually represented by a shorter version: `05df67f9066c8ddd95c8d7bb2137acfb8b18e167` -> `05df67f`

`git reset` can be used with either the commit hash or with the `HEAD` keyword, which refers to the commit being viewed on the currently checked-out branch.

## Example

This is what the terminal would look like after creating the new accidental commit on the `main` branch and running [a `git status` check](https://www.codecademy.com/resources/docs/git/status):

```
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

The text above indicates the following:

- The `main` branch is up to date, with the `HEAD` pointing the the most recent commit.
- There is nothing to commit in the staging area.
- New changes haven't been made yet in the working tree.

To reset the `HEAD` pointer and the staging area back by 1 commit, one of the following commands can be run:

```git
git reset HEAD~1
git reset --mixed HEAD~1
```

If `git status` is run once more, the following should appear on the terminal:

```
On branch main
Your branch is behind 'origin/main' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        example.txt
nothing added to commit but untracked files present (use "git add" to track)
```

The text above indicates the following:

- The `HEAD` pointer has been properly reset to before the accidental commit was created.
- Additionally, the staging area has been cleared set to before changes in **example.txt** were added for the commit.
