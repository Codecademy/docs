---
Title: 'Commit'
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

In Git, commits are used as snapshots of a given branch in a repository. Collectively, they serve as the growth history of all the branches in a Git repository. The most recent commit is considered directly related to the pointer of the current branch.

## Syntax

```shell
git commit
```

## How Do I Commit?

### Step 1: Files Ready

Before using `git commit`, make sure to have all the neccessary files staged for the commit.

```shell
git add <filename>
```

You can also use `git add .` to add all files.

### Step 2: Commit

After the files are staged for commit, use the following syntax:

```shell
git commit
```

You can also do `git commit -m <message>` to add a commit message here.

Here is what the command line would like look afterwards:

```shell
$ git commit
[main (root-commit) b77d68b]
 3 files changed, 26 insertions(+)
 create mode 100644 git_practice.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
```

Here's the same thing but with a message:

```shell
$ git commit -m "this is a commit message"
[main (root-commit) b77d68b] this is a commit message
 3 files changed, 26 insertions(+)
 create mode 100644 git_practice.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
```
