---
Title: 'add'
Description: 'Stages changes from the working directory to the staging area for the next commit'
Subjects:
  - 'Bash/Shell'
  - 'Code Foundations'
  - 'Developer Tools'
Tags:
  - 'Command Line'
  - 'Files'
  - 'Git'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
---

The **`git add`** command stages changes from the working directory to the staging area, preparing them to be included in the next commit. This essential Git command allows developers to selectively choose which modifications should be committed, providing precise control over version history and enabling organized, logical commits in any Git workflow.

## Syntax of `git add`

```pseudo
git add [options] [pathspec]
```

### Common Syntax Variations

```pseudo
git add <filename>
git add .
git add -A
git add --all
```

**Parameters:**

- `<filename>`: Specifies the exact file to stage for the next commit
- `.`: Stages all changes in the current directory and its subdirectories
- `-A` or `--all`: Stages all changes in the entire repository, including new, modified, and deleted files
- `-u` or `--update`: Stages only modified and deleted files (excludes new files)
- `-p` or `--patch`: Begins interactive staging mode to selectively stage parts of files
- `-i` or `--interactive`: Opens interactive mode for choosing which changes to stage
- `-f` or `--force`: Forces staging of ignored files
- `-n` or `--dry-run`: Shows what would be staged without actually staging anything

**Return value:**

The `git add` command returns no output on successful execution. If there are errors (such as attempting to stage non-existent files), Git displays appropriate error messages. Use [`git status`](https://www.codecademy.com/resources/docs/git/status) to verify which files have been successfully staged.

## Example 1: Basic File Staging using `git add`

This example demonstrates how to stage individual files for the next commit:

```shell
# Create a new file in your project
echo "Hello, Git!" > welcome.txt

# Check the current status
git status

# Stage the new file
git add welcome.txt

# Verify the file is staged
git status
```

After running these commands, `welcome.txt` will be moved from "Untracked files" to "Changes to be committed" in the status output, confirming it's ready for the next commit.

## Example 2: Using `git add` for Team Collaboration Workflow

This example shows how to stage multiple files when working on a feature with a team:

```shell
# Working on a new feature - multiple files modified
# Modified files: app.js, style.css, README.md
# New file: config.json

# Stage specific files for a focused commit
git add app.js config.json

# Check what's staged vs unstaged
git status

# Stage remaining files for a documentation update
git add style.css README.md

# Commit the changes with descriptive messages
git commit -m "Add user authentication feature"

# Push to share with the team
git push origin feature-branch
```

This workflow demonstrates how `git add` enables developers to create logical, focused commits by staging related changes together, making code review and collaboration more effective.

### Example 3: Staging All Changes With `git add --all`

This example demonstrates how to stage all changes in your repository at once using `git add --all`:

```shell
# Working directory with multiple changes:
# Modified: index.html, app.js
# New files: contact.html, footer.css
# Deleted: old-style.css

# Check current repository status
git status

# Stage all changes at once (new, modified, deleted)
git add --all

# Verify all changes are staged
git status

# Alternative shorter syntax (same result)
git add -A

# Commit all staged changes
git commit -m "Complete website redesign with new contact page"
```

After running `git add --all`, all modifications, new files, and deletions will be moved to the "Changes to be committed" section, making this command ideal for comprehensive updates when there is a need to include everything in your next commit.

## Frequently Asked Questions

### 1. How do I add files in git?

Use `git add <filename>` for single files, `git add .` for all changes in the current directory, or `git add -A` for all changes in the repository. Always verify with `git status` before committing.

### 2. What to use instead of git add?

There's no direct replacement for `git add` since it's fundamental to Git's three-stage workflow. However, you can use `git commit -a` to automatically stage and commit tracked files (but this won't include new files).

### 3. Does git add include deleted files?

The basic `git add .` command does include deleted files. Use `git add -A` to explicitly include all changes including deletions, or `git add -u` to stage only modifications and deletions while excluding new files.
