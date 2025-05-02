---
Title: 'Log'
Description: 'The git log command is used to track the commit history of a project repository.'
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

In Git, the **`log`** command is used to explore the timeline of commits. After creating several commits or cloning a repository with an existing commit history, `git log` lets you display information about commits from the repository history in chronological order (the most recent commits show up first).

Each commit entry in a standalone `git log` output includes:

- Commit ID: A unique [SHA-1](https://en.wikipedia.org/wiki/SHA-1) or hash ID that identifies the commit.
- Author: The name and email address of the commit author.
- Date: The date the snapshot was taken.
- Commit message: A description of the changes included in the commit.

## Syntax

```pseudo
git log
```

## Example

```shell
## Sample git log entry

$ git log

commit   f5b5bd8f9eaa443d4020cbe918x742e7ddd22000
Author: Big-Logic <logic@gmail.com>
Date: Wed Apr 23 22:12:47 2025 +0530

Commit message tittle

  * Commit message description

  * Commit message description
```

The first entry in a `git log` output is the commit at which the active [branch](https://www.codecademy.com/resources/docs/git/branch) is currently pointed.
