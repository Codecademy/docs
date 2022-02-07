---
Title: 'Commit'
Description: 'In Git, commits are used as snapshots of a given branch in a repository. Collectively, they serve as the growth history of all the branches in a Git repository. The most recent commit is considered directly related to the pointer of the current branch. shell git commit  Before using git commit, make sure to have all the neccessary files staged for the commit. shell git add'
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

You can also use `git add .` to add all files in your current directory.

### Step 2: Commit

After the files are staged for commit, use the following syntax:

```shell
git commit
```

Note: Using the `git commit` command by itself will open up an editor (usually set to Vim by default), where you will be asked to add a commit message. Once you add a message, save and close the file (`:wq` in Vim), that message will be added to your commit.

Here is an example of what the commit message prompt might look like when you use `git commit`:

```sh
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

And here is what the command line would like look afterwards:

```shell
$ git commit
[main (root-commit) b77d68b] Add git_practice.js and install dependencies
 3 files changed, 26 insertions(+)
 create mode 100644 git_practice.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
```

You can also do `git commit -m <message>` to add a commit message without opening up an editor:

```shell
$ git commit -m "this is a commit message"
[main (root-commit) b77d68b] this is a commit message
 3 files changed, 26 insertions(+)
 create mode 100644 git_practice.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
```
