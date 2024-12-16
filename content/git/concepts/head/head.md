# HEAD

HEAD is a special pointer in Git that points to the currently checked out branch or commit. It's a key element in repository state management, indicating where the current work point is.

## Syntax

- **Check current HEAD:** `git log -1 HEAD`
- **Switch HEAD to a specific commit:** `git checkout <commit-hash>`
- **Switch HEAD to a branch:** `git checkout <branch-name>`

## Example

Suppose you want to switch to another branch:

```bash
git checkout feature-branch