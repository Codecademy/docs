---
Title: 'Init'
Description: 'In Git, init is used to initiate the process of creating a repository. When beginning a new project, this is the first step to take in order to track changes to the code throughout all files and folders. shell git init  Make sure to be working from the correct directory; the cd command can be used to navigate the filesystem. shell cd go/to/desired/project/directory'
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

## How Do I Init?

### Step 1: Correct Directory

Make sure to be working from the correct directory; the `cd` command can be used to navigate the filesystem.

```shell
cd go/to/desired/project/directory
```

### Step 2: Init

Next, run the following command:

```shell
git init
```

After the initialization is complete, the following should appear in the command line.

```shell
Initialized empty Git repository in /go/to/desired/project/directory/.git/
```

A new, hidden **.git** directory is then added alongside the new repository's root directory. In this case, the root directory is `directory`.
