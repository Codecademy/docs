---
Title: 'Init'
Description: 'Initializing a Git repository when beginning a new project is the first step to take in order to track changes.'
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

In Git, `init` is used to initiate the process of creating a repository. When beginning a new project, this is the first step to take in order to track changes to the code throughout all files and folders.

## Syntax

```shell
git init
```

## Initializing a Git Repository

### Step 1: Navigate to the Desired Directory

The `init` command initializes a Git repository in the current directory. Prior to using this command, users must take care to navigate to the appropriate directory &mdash; this will become the root directory of the repository. The `cd` command can be used to navigate the filesystem from the command line:

```pseudo
cd go/to/desired/project/directory
```

### Step 2: Init

In the appropriate directory, initialize a repository to begin tracking changes made to all the files with the following git command:

```shell
git init
```

After the initialization is complete, the following should appear in the command line.

```shell
Initialized empty Git repository in /go/to/desired/project/directory/.git/
```

A new, hidden **.git** directory is then added alongside the new repository's root directory. In this case, the root directory is `directory`.
