---
Title: 'rm'
Description: 'The git rm command is used to remove files or directories from a Git repository. When you delete a file using `git rm', Git records the removal, making it easier to track changes in your project's history.
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

## Deleting files

To remove a file from Git, you have to remove it from your tracked files (from the staging area) and then commit. The git rm command accomplishes this task. It also removes the file from your working directory so that it's no longer an untracked file.

### Deleting a file from the Working Directory

If you delete a files from you working directory, it will appear int he "Changes not staged for commit" section of the `git status` output.

```bash
rm PROJECTS.md
git status
```

### Utilizing `git rm` for Staged File Removal

Running `git rm` stages the removal of the file, preparing it for the next commit.

```bash
git rm PROJECTS.md
git status
```

### Options

The `git rm` commands supports several options, including:

- -f, --force: used to forcefully remove a file. Use with caution as it permanently deletes the file from the working directory.

- --cached: used to remove a file from the Git repository but retain it in your working directory. It effectively stops tracking the file, but the file itself remains in your local filesystem.

- -r: used to remove a directory and its contents recursively.

- --dry-run: Check what would be removed without actually removing anything.

### Examples

#### Remove a files

To remove a file name `example.txt` from the repository.

```bash
git rm example.txt
```

#### Remove a Directory and its Contents

To remove a directory named `myfolder` and all its contents.

```bash
git rm -r myfolder
```

#### Remove a File but Keep it in Working Directory

To stop tracking a file `important.doc` but keep it in your working directory.

```bash
git rm --cached important.doc
```
