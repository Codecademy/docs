---
Title: 'Commit'
Description: 'Commits are used as snapshots of a given branch in a repository. They serve as the growth history of all the branches in a Git repository.'
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

In Git, **commits** are used as snapshots of a given branch in a repository. Collectively, they serve as the growth history of all the branches in a Git repository. The most recent commit is considered directly related to the pointer of the current branch.

## Syntax

```shell
git commit
```

## How Do I Commit?

### Step 1: Files Ready

Before using `git commit`, make sure to have all the necessary files staged for the commit.

```shell
git add filename
```

The `git add .` command can be used to add all files in the current directory.

### Step 2: Commit

After the files are staged for commit, use the following syntax:

```shell
git commit
```

> **Note:** Using the `git commit` command by itself will open up an editor (usually set to [Vim](https://www.codecademy.com/resources/docs/command-line/vim) by default), where users will be asked to add a commit message. After writing a message, saving and closing the file (`:wq` in Vim) will add that message to the current commit.

Here is an example of what the commit message prompt might look like when using `git commit`:

```shell
Add git_practice.js and install dependencies

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch main
# Changes to be committed:
#       new file:   git_practice.js
#       new file:   package-lock.json
#       new file:   package.json
```

Here is what the command line would look like afterwards:

```shell
$ git commit
[main (root-commit) b77d68b] Add git_practice.js and install dependencies
 3 files changed, 26 insertions(+)
 create mode 100644 git_practice.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
```

Using the `-m` flag like so, `git commit -m <message>`, adds a commit message without opening up an editor:

```shell
$ git commit -m "this is a commit message"
[main (root-commit) b77d68b] this is a commit message
 3 files changed, 26 insertions(+)
 create mode 100644 git_practice.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
```
