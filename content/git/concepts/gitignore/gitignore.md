---
Title: '.gitignore'
Description: 'A configuration file that tells Git which files and directories to ignore when tracking changes in a repository.'
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

A **.gitignore** file specifies which files and directories should be ignored by Git when tracking changes in a repository. This is particularly useful for excluding build artifacts, temporary files, dependencies, and sensitive information from version control. The .gitignore file should be placed in the root directory of your repository.

## Common .gitignore Patterns

Here are some common patterns used in .gitignore files:

```shell
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

- Step 1

Create a new .gitignore file in your repository's root directory:

```shell
touch .gitignore
```

- Step 2

Open the file in your preferred text editor and add the patterns for files and directories you want to ignore:

```shell
# Open with VS Code
code .gitignore

# Open with vim
vim .gitignore
```

> **Note:** You can use wildcards like \* for pattern matching and # for comments in your .gitignore file.

## Common .gitignore Rules

1. Specific file: `filename.txt`
2. File pattern: `*.log`
3. Directory: `node_modules/`
4. Nested directory: `**/logs/`
5. Negation (don't ignore): `!important.log`

> **Note:** If you've already committed files that you want to ignore, you'll need to remove them from Git's tracking using `git rm --cached <file>` before the .gitignore will take effect.
