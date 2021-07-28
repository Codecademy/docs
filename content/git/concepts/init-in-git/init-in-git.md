---
Title: "Init in Git"
Subjects:
  - "Bash/Shell"
  - "Developer Tools"
Tags: 
  - "Git"
  - "GitHub"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-git"
  - "https://www.codecademy.com/learn/learn-the-command-line"
---

In Git, `init` is used to initiate the process of creating a repository. When beginning a new project, in order to track changes to the code throughout all files and folders, this is the first step to doing so. 

## Syntax

```
git init
```

## How Do I Init?

### Step 1: Correct Directory

Make sure to be working from the correct directory. 

```
cd go/to/desired/project/directory
```

### Step 2: Init 

Next, run the following command:

```
git init
```

After the initialization is complete, the following should appear on the command line. 

```
Initialized empty Git repository in /go/to/desired/project/directory/.git/
```

A new, hidden **.git** directory is then added alongside the new repository's root directory. In this case, the root directory is `directory`.
