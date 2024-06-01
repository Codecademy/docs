---
Title: 'Revert'
Description: 'The git revert command is used to create a new commit that will undo any changes made in a previous commit.'
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

In Git, the **`revert`** command is used to create a new commit that will undo any changes made in a previous commit. This can be considered as the safe undo command because it keeps previous history. The command is best used when working with others and there's a need to preserve the commit history.

> **Note:** This command can be mistaken for the [`reset`](https://www.codecademy.com/resources/docs/git/reset) command, which is a more dangerous undo command because it alters existing history.

## Syntax

```shell
git revert <commit-reference>
```

The `commit-reference` is the unique hash of a commit that is generated after creation. This hash is a long string that is a mix of characters and numbers that is usually represented by a shorter version: `a63b1329066c8ddd95c8d7bb201bacfb8b18e167` -> `a63b132`

`git revert` can be used with the commit hash (as seen below) or with the `HEAD` keyword (as seen below), which refers to the commit being viewed on the currently checked-out branch.

## Example

Lets say there are four commits with different files being added for each commit. To view the commits, use `git reflog`:

```shell
$ git reflog
0caf1ae (HEAD -> master) HEAD@{0}: commit: Add file 4
ffd3d9c HEAD@{1}: commit: add file 3
f85ef36 HEAD@{2}: commit: add file 2
fc3980d HEAD@{3}: commit (initial): add file 1
```

The above shows that each commit has a new file added. File 1 is the first commit and file 4 is the most recent commit.

The writer for file 2 mentions that file 2 is no longer needed. To remove the file, while preserving all the other commits, the `revert` command is used with the hash for the commit in which file 2 was added:

```shell
git revert f85ef36
```

Another option to remove file 2 is with the `HEAD` keyword. Looking at the same log as before, it shows the commit for file 2 is located at `HEAD@{2}`. File 2 can then be removed with the following line:

```shell
git revert HEAD~2
```

By running the `git revert` command, this will then open a prompt to edit the message before committing the revert. Once the message has been saved, check the logs to view the status of file 2:

```shell
$ git reflog
f85ef36 (HEAD -> master) HEAD@{0}: revert: Revert "add file 2"
0caf1ae HEAD@{1}: commit: Add file 4
ffd3d9c HEAD@{2}: commit: add file 3
f85ef36 HEAD@{3}: commit: add file 2
fc3980d HEAD@{4}: commit (initial): add file 1
```

The log still shows the original commit of "add file 2", but it has moved forward and deleted file 2 with the most recent commit. The end result is file 1, file 3, and file 4 are preserved, while file 2 no longer exists. By using `git revert`, a new commit is created to delete the specific commit while preserving the previous history.

The `revert` command also has options that can be added such as:

- `-e` or `--edit`: This is the default option where it opens a prompt to edit the commit message before committing the revert.
- `--no-edit`: This bypasses the prompt for a commit message edit.
- `-n` or `--no-commit`: This will revert changes to the previous state without completing the commit.
