---
Title: 'Restore'
Description: 'The git restore command undoes changes in the working tree by restoring content from a source.'
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

The **`restore`** command enables developers to restore files to a specific state. This functionality restoring to undo any changes made to files in both the working directory and staging area. This command is particularly valuable when reverting alterations, whether staged for a commit or not.

## Syntax

The syntax of the `git restore` command is as follows:

```pseudo
git restore <options> -- <file>
```

Nine additional options are available for `git restore`:

- `-s <tree> --source=<tree>`: Allows restoring the working tree files with the content from the specified tree.
- `-p --patch`: Enables interactive selection of hunks in the difference between the restore source and the restore location.
- `-W --worktree -S --staged`: Specifies the restore location. If neither option is specified, by default the working tree is restored by default.
- `-q --quiet`: Suppresses feedback messages and implies `--no-progress`.
- `--progress --no-progress`: Control progress status reporting.
- `--ours --theirs`: Used when restoring files in the working tree from the index, to use stage #2 (ours) or #3 (theirs) for unmerged paths.
- `-m --merge`: Recreates the conflicted merge in the unmerged paths when restoring files to the working tree from the index.
- `--conflict=<style>`: Modifies the presentation of conflicting hunks, overriding the `merge.conflictStyle` configuration variable.
- `--ignore-unmerged`: Allows restoring files to the working tree from the index without aborting due to unmerged entries.

## Example

In this example, the initial [`git status`](https://www.codecademy.com/resources/docs/git/status) command shows that there are changes in the `index.html` file that have not been staged for a commit. It suggests using [`git add`](https://www.codecademy.com/resources/docs/git/add) to stage these changes. However, the user decides to use `git restore index.html` to discard the changes in the working directory and revert the file to its last committed state. After running this command and checking [`git status`](https://www.codecademy.com/resources/docs/git/status) again, the working directory is now clean, indicating that there are no pending changes, and there's nothing left to commit.

```shell
$ git status

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
    modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")

$ git restore index.html

$ git status

On branch main
nothing to commit, working tree clean
```
