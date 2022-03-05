---
Title: 'Push'
Description: 'Pushing is the process of moving code from one Git repository to another. Often this is used to move code from a local machine to GitHub.'
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

In Git, pushing is the process of moving code from one repository to another one. Often this is used to move code from a local machine to a remote one, or to a repository hosting service like GitHub.

Pushing a repository allows a programmer to maintain an easily accessible backup in a second location. It is also used when collaborating with people that would not have access to the computer that the code is written on.

## Syntax

The syntax for pushing changes in Git is this:

```shell
git push <remote-name> <branch-name>
```

## How to Push

Prerequisites to pushing from within a repository include:

- Being inside of a repository (if not, the next step will return an error)
- Having a clean `git status` (no uncommitted, but tracked, files):

  ```shell
  $ git status

  On branch main
  nothing to commit, working tree clean
  ```

- Having a valid remote repository set. In this case the remote repository is named `origin` and can be found at the url `https://github.com/CompanyName/product-dev`:

  ```shell
  $ git remote -v

  origin    https://github.com/CompanyName/product-dev.git (fetch)
  origin    https://github.com/CompanyName/product-dev.git (push)
  ```

At this stage, pushing can be accomplished with a valid remote and branch name:

```shell
git push origin main
```

When the push completes, it will display a message like this:

```shell
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 304 bytes | 304.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/CompanyName/product-dev.git
   0e21f7b..2a668cb  main -> main
```
