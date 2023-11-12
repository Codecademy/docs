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

The **`restore`** command enables developers to restore files to a specific state. This functionality allows you to undo any changes made to files in both your working directory and staging area. This command is especially valuable when you need to revert alterations, whether they have been staged for a commit or not.

## Syntax

The syntax of the `git restore` command is as follows:

```pseudo
git restore <options> -- <file>
```

There are nine additional options for `git restore`:

- `-s <tree> --source=<tree>`: This option allows you to restore the working tree files with the content from the given tree.
- `-p --patch`: This option allows you to interactively select hunks in the difference between the restore source and the restore location.
- `-W --worktree -S --staged`: These options specify the restore location. If neither option is specified, by default the working tree is restored.
- `-q --quiet`: This option suppresses feedback messages and implies `--no-progress`.
- `--progress --no-progress`: These options control progress status reporting.
- `--ours --theirs`: These options are used when restoring files in the working tree from the index, to use stage #2 (ours) or #3 (theirs) for unmerged paths.
- `-m --merge`: This option recreates the conflicted merge in the unmerged paths when restoring files on the working tree from the index.
- `--conflict=<style>`: This option changes the way conflicting hunks are presented, overriding the `merge.conflictStyle` configuration variable.
- `--ignore-unmerged`: This option allows you to restore files on the working tree from the index without aborting if there are unmerged entries.

## Example

In the above example, the initial [`git status`](https://www.codecademy.com/resources/docs/git/status) command shows that there are changes in the `index.html` file that have not been staged for a commit. It suggests using [`git add`](https://www.codecademy.com/resources/docs/git/add) to stage these changes. However, the user decides to use `git restore index.html` to discard the changes in the working directory and revert the file to its last committed state. After running this command and checking [`git status`](https://www.codecademy.com/resources/docs/git/status) again, the working directory is now clean, indicating that there are no pending changes, and there's nothing left to commit.

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
