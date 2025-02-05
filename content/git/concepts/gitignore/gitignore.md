---
Title: '.gitignore'
Description: 'A configuration file that tells Git the files and directories to be ignored when tracking changes in a repository.'
Subjects:
  - 'Code Foundations'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'GitHub'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
---

A **.gitignore** file specifies which files and directories need to be ignored by Git when tracking changes in a repository. This is particularly useful for excluding build artifacts, temporary files, dependencies, and sensitive information from version control. The .gitignore file should be located in the root directory of a repository.

## Common .gitignore Patterns

Here are some common patterns used in .gitignore files:

```plaintext
# Ignore node modules directory
node_modules/

# Ignore build output directories
dist/
build/

# Ignore environment files
.env
.env.local

# Ignore log files
*.log

# Ignore system files
.DS_Store
Thumbs.db

# Ignore IDE specific files
.idea/
.vscode/
*.sublime-project
*.sublime-workspace
```

## Creating a .gitignore File

Step 1: Create a new .gitignore file in the repository's root directory:

```shell
touch .gitignore
```

Step 2: Open the file in the preferred text editor and add the patterns for files and directories to be ignored:

```shell
# Open with VS Code
code .gitignore

# Open with Vim
vim .gitignore
```

> **Note:** Wildcards like '\*' can be used for pattern matching and '#' for comments in the .gitignore file.

## Common .gitignore Rules

1. Specific file: `filename.txt`
2. File pattern: `*.log`
3. Directory: `node_modules/`
4. Nested directory: `**/logs/`
5. Negation (don't ignore): `!important.log`

> **Note:** If files to be ignored are already committed, they need to be removed from Git's tracking with `git rm --cached <file>` before .gitignore takes effect.
