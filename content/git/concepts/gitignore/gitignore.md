---
Title: '.gitignore'
Description: 'Tells Git which files and directories to ignore when committing changes to a repository.'
Subjects:
  - 'Code Foundations'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'GitHub'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
  - 'paths/computer-science'
---

A **`.gitignore`** file tells [Git](https://www.codecademy.com/resources/docs/git) which files and directories to ignore when committing changes to a repository. This file prevents unnecessary files from being tracked and committed, keeping the repository clean and focused on essential project files.

## Create a .gitignore File

Creating a `.gitignore` file allows developers to specify which files and directories Git should ignore in a repository. This file should be placed in the root directory of the Git repository:

```bash
touch .gitignore
```

The `touch` command creates an empty `.gitignore` file in the current directory. Once created, you can edit this file to add patterns for files and directories you want Git to ignore.

## .gitignore File Patterns and Format

The `.gitignore` file uses specific patterns to match files and directories. Each pattern is written on a separate line, and Git processes these patterns from top to bottom.

### Syntax Rules

The `.gitignore` file follows these key syntax rules:

- **`#` for comments**: Lines starting with `#` are treated as comments and are ignored by Git
- **`*`, `?`, `[]` for wildcards**:
  - `*` matches any number of characters
  - `?` matches a single character
  - `[]` matches any character within the brackets
- **`/` for directory targeting**: Use `/` to specify directories or paths
- **`!` to negate a pattern**: Use `!` at the beginning of a line to create exceptions to ignored patterns

### Example Block

```bash
# Ignore all log files
*.log

# Ignore temporary files
temp/

# Ignore all .txt files in the root directory only
/*.txt

# Ignore all files in the build directory
build/

# Exception: don't ignore important.log
!important.log
```

## Local & Personal Ignore Rules

For files that should be ignored only on a local machine and not shared with other developers, there are two options:

- **Local `.gitignore`**: Add patterns to `.git/info/exclude` in the repository
- **Global `.gitignore`**: Set up a global ignore file using:

```bash
git config --global core.excludesfile ~/.gitignore_global
```

This allows developers to ignore editor-specific files, OS-generated files, and other personal preferences without affecting the project's shared `.gitignore` file.

## Frequently Asked Questions

### 1. How to create a `.gitignore` file?

To create a `.gitignore` file, navigate to the root directory of the Git repository and use the `touch` command:

```shell
touch .gitignore
```

After creating the file, open it in a text editor and add patterns for files and directories that should be ignored.

### 2. How to apply `.gitignore` file?

The `.gitignore` file is automatically applied by Git once it's created and placed in the repository. Git reads the patterns in the file and ignores matching files during operations like `git add` and `git status`. Changes to the `.gitignore` file take effect immediately for untracked files.

### 3. What happens if I delete `.gitignore`?

If the `.gitignore` file is deleted, Git will no longer ignore any files that were previously ignored by the patterns in that file. All previously ignored files will become visible to Git and may appear as untracked files in `git status`. The files themselves are not deleted, only the ignore rules are removed.
