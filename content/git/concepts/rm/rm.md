---
Title: 'Remove'
Description: 'Removes files or directories from a Git repository.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Command Line'
  - 'Files'
  - 'Git'
  - 'Version Control'
CatalogContent:
  - 'learn-the-command-line'
  - 'learn-git'
---

The **`git rm`** command is used for removing files or directories from a Git repository. This command ensures that the deletion of files is tracked in the version history, making it a reliable way to manage file removals in a Git repository.

Common applications of `git rm` include deleting unnecessary files, cleaning up large directories, or untracking files that should no longer be version-controlled (such as log files or temporary data). It helps in maintaining a clear and consistent [commit](https://www.codecademy.com/resources/docs/git/commit) history reflecting the file removals.

## Syntax

```pseudo
git rm [<options>] <file>...
```

In the syntax:

- `<file>...`: The file(s) to remove from the Git repository.
- `[<options>]`: The options to be used with the `git rm` command. Common ones include:
  - `-f`, `--force`: Used to forcefully remove a file. It needs to be used with caution as it permanently removes the file from the working directory.
  - `--cached`: Used to remove a file from the repository but retain it in the working directory. It effectively stops tracking the file, but the file itself remains in the local filesystem.
  - `-r`: Used to remove a directory and its contents recursively.
  - `--dry-run`: Shows what would be removed without actually removing anything.

## Example 1: Using `git rm` to Remove a File

To remove a file from the Git repository, it has to be removed from tracked files (from the staging area) and then committed. The `git rm` command accomplishes the first task. It also removes the file from the working directory so that it's no longer an untracked file.

This example uses `git rm` to remove a file named `PROJECTS.md` from the repository:

```shell
git rm PROJECTS.md
git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    PROJECTS.md
```

Running `git rm` stages the removal of the file, preparing it for the next commit.

## Example 2: Using `git rm` to Remove a Folder

The `git rm` command can also be utilized to remove a folder and its contents from the Git repository.

This example uses `git rm` with the `-r` option to remove a folder named `myfolder` from the repository:

```shell
git rm -r myfolder
```

This command is commonly used for cleaning up large directories or removing modules.

## Example 3: Using `git rm` to Untrack a File

The `git rm` command can be used for untracking a file in the Git repository as well. Untracking a file indicates that changes to the file will not be tracked anymore, but it will be kept in the working directory.

This example uses `git rm` with the `--cached` option to untrack a file named `important.doc` in the repository:

```shell
git rm --cached important.doc
```

This command is often used when sensitive or machine-specific files are accidentally committed and need to be excluded using [`.gitignore`](https://www.codecademy.com/article/how-to-use-gitignore).

## Frequently Asked Questions

### 1. How to undo `git rm`?

If you haven’t committed the removal yet, you can recover the deleted file using:

```shell
git restore <file>
```

If you have committed the removal, you can recover the deleted file using:

```shell
git checkout HEAD <file>
```

### 2. What’s the difference between `git rm` and just deleting the file manually?

Manually deleting the file removes it from the working directory, but Git won’t know about the deletion until you run [`git add`](https://www.codecademy.com/resources/docs/git/add) on the deleted file or use `git rm`. In contrast, `git rm` stages the deletion immediately, making it part of the next commit automatically.

### 3. How can I remove multiple files at once using `git rm`?

You can specify all the files manually:

```shell
git rm <file1> <file2> <file3>,,,
```

Or, use a wildcard:

```shell
git rm *.log
```

This command deletes all `.log` files from the Git repository and stages the deletions for the next commit.
