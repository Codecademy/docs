---
Title: 'Reset'
Description: 'The git reset command is used to set the HEAD pointer back to a previous commit and optionally undo staged changes and the working tree.'
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

The **`reset`** command is used to change the state of the Git repository or undo commits.

> **Note:** This command is ideal for undoing uncommitted changes made in a private, local repository. For undoing changes in a public, remote repository, the `revert` command is recommended.

## Syntax

```pseudo
git reset <mode-option> <commit-reference>
```

This is run in the [terminal](https://www.codecademy.com/resources/docs/command-line/terminal). The `<mode-options>` and `<commit-reference>` are discussed in more detail below.

### Mode Options

The `<mode-options>` refer to how far `reset` will go when rolling back changes to a previous commit, including:

- Where the `HEAD` is pointing towards (usually done with just `git reset`).
- Whether the staging area or index, reflects the commit the `HEAD` is now pointing towards.
- Whether the working tree is rolled back to reflect the changes reset in the `HEAD` and staging area.

More specifically, these modes include:

- `--soft`: This rolls back to an earlier commit by moving the `HEAD` pointer towards it but leaving the staging area and working tree untouched, allowing for new commits to be made.
- `--mixed`: In addition to moving the `HEAD` pointer to an earlier commit, the staging area is cleared to reflect the changes made in that commit (this runs by default).
- `--hard`: This goes one step further and resets the working tree to reflect the previous commit reflected in the staging area and the `HEAD` pointer.

If, for example, an error was made in a text file,`example.txt`, and the changes were accidentally [added](https://www.codecademy.com/resources/docs/git/add) and [committed](codecademy.com/resources/docs/git/commit), `git reset` can be used to go back to the state before that commit was made.

### Referencing Commits

The `commit-reference` refers to a commit's unique hash, or save point, that was generated after creation. This hash is a long string that is a mix of characters and numbers that is usually represented by a shorter version: `05df67f9066c8ddd95c8d7bb2137acfb8b18e167` -> `05df67f`

`git reset` can be used with either the commit hash or with the `HEAD` keyword, which refers to the commit being viewed on the currently checked-out branch.

Alternatively, a filename can be used in place of the `commit-reference` to undo a `git add` for a file that wasn't meant to be staged for commit.

## Example

This is what the terminal would look like after creating a commit by accident on the `main` branch and running [a `git status` check](https://www.codecademy.com/resources/docs/git/status):

```shell
On branch main
nothing to commit, working tree clean
```

The text above indicates the following:

- The `main` branch is up to date, with the `HEAD` pointing towards the most recent commit.
- There is nothing to commit in the staging area.
- New changes haven't been made yet in the working tree, hence why it is "clean".

To set the `HEAD` back by one commit as well as clear the staging area, one of the following commands can be run:

```shell
git reset HEAD~1
git reset --mixed HEAD~1
```

Since the `--mixed` mode runs by default, both of the commands are identical in function. This will do the following:

- It will move the `HEAD` pointer back by one (`~1`) commit.
- The staging area will be cleared of changes.
- The overall state of the `main` branch is set to before changes in `example.txt` were added to the staging area for the previous commit.

If `git status` is run once more, this should appear on the terminal:

```shell
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   example.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
