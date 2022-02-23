---
Title: 'Pull'
Description: 'In Git, pulling is the process of moving code from one repository to another. Often this is used to move code from a remote machine to a local one.'
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

In Git, pulling is the process of moving code from one repository to another one. Often this is used to move code from a remote machine to a local one, or retrieving code from a repository hosting service like GitHub.

Pulling a repository allows a programmer to access code from a remote backup and make it available on their local machine. It is also used when collaborating with others in order to keep the local code up to date with the team's current version.

## Syntax

The basic syntax for pulling in Git is this:

```shell
git pull <remote-name> <branch-name>
```

This will move the code from `<remote-name>` currently in branch `<branch-name>`, and move it to the branch checked out locally on the user's computer.

## How to Pull

Prerequisites to pulling from a remote repository include:

- Being inside of the local repository (if not, the next step will return an error)
- Being inside of the correct branch and having a clean `git status` in that branch:

  ```shell
  $ git checkout new-feature-branch
  $ git status

  On branch new-feature-branch
  nothing to commit, working tree clean
  ```

- Having a valid remote repository set, in this case there is remote repository called `origin`:

  ```shell
  $ git remote -v

  origin    https://github.com/CompanyName/product-dev.git (fetch)
  origin    https://github.com/CompanyName/product-dev.git (push)
  ```

At this stage, pulling is as simple as using the basic syntax with the correct remote and branch names:

```shell
git pull origin new-feature-branch
```

When the pull completes, it will display a message like this:

```shell
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 5 (delta 2), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (5/5), done.
From https://github.com/CompanyName/product-dev.git
  * branch      new-feature-branch    -> FETCH_HEAD
```
