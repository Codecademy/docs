---
Title: 'Remove'
Description: 'A command for removing files or directories from a Git repository.'
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

The **`git rm`** command is used for removing files or directories from a Git repository.

## Deleting Files

To remove a file from Git, it has to be removed from tracked files (from the staging area) and then committed. The `git rm` command accomplishes this task. It also removes the file from the working directory so that it's no longer an untracked file.

### Deleting a File From the Working Directory

If a file is deleted from the working directory, it will appear in the "Changes not staged for commit" section of the `git status` output.

```shell
rm PROJECTS.md
git status
```

### Utilizing `git rm` for Staged File Removal

Running `git rm` stages the removal of the file, preparing it for the next commit.

```shell
git rm PROJECTS.md
git status
```

### Options

The `git rm` commands supports several options, including:

- `-f`, `--force`: Used to forcefully remove a file. Use with caution as it permanently deletes the file from the working directory.

- `--cached`: Used to remove a file from the Git repository but retain it in the working directory. It effectively stops tracking the file, but the file itself remains in the local filesystem.

- `-r`: Used to remove a directory and its contents recursively.

- `--dry-run`: Demonstrates what would be removed without actually removing anything.

### Examples

#### Remove a files

To remove a file name `example.txt` from the repository.

```shell
git rm example.txt
```

#### Remove a Directory and its Contents

To remove a directory named `myfolder` and all its contents.

```shell
git rm -r myfolder
```

#### Remove a File but Keep it in Working Directory

To stop tracking a file `important.doc` but keep it in the working directory.

```shell
git rm --cached important.doc
```
