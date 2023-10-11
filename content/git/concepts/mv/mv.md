---
Title: 'Move'
Description: 'Moving or renaming files within a Git repository is done with mv command.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'GitHub'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
---

# Git `mv` Command

The `git mv` command is used to move or rename files **within** a Git repository. It's a more convenient way to move or rename files compared to manually deleting and adding files. This command also helps in tracking the history of file movements and renames.

## Syntax

```bash
git mv <old-file-path> <new-file-path>
```

## Example Usage

### 1. Moving a File

To move a file from one location to another, use the `git mv` command like this:

```bash
git mv source/file.txt destination/
```

This will move the `file.txt` from the `source` directory to the `destination` directory.

### 2. Renaming a File

To rename a file, simply use the `git mv` command with the old and new file names:

```bash
git mv old-name.txt new-name.txt
```

### Details

This renames `old-name.txt` to `new-name.txt`.

1. It is essential to commit the changes after using `git mv` to ensure that the file moves and renames are properly tracked in the Git history.

2. Renaming or moving files with `git mv` preserves the file's history and is especially useful in collaborative development to maintain a clear and organized project structure.

3. The `git mv` command can also be used with wildcards or regular expressions to move or rename multiple files simultaneously.
