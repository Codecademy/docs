---
Title: 'Pull'
Description: 'Retrieves and integrates changes from another repository or local branch (often from either a machine or hosting service like GitHub).'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'GitHub'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
---

The **`pull`** command retrieves and integrates changes from another repository or local [branch](https://www.codecademy.com/resources/docs/git/branch). This command is like a combination of the [`fetch`](https://www.codecademy.com/resources/docs/git/fetch) and [`merge`](https://www.codecademy.com/resources/docs/git/merge) commands and is often used for the following:

- Move code from a remote machine or repository to a local one.
- Retrieve code from a repository hosting service like [GitHub](https://www.codecademy.com/resources/docs/general/github).

Functionally, the `pull` command is a [`fetch`](https://www.codecademy.com/resources/docs/git/merge) command followed by a [`merge`](https://www.codecademy.com/resources/docs/git/merge) command.

Pulling a repository allows programmers to access code from a remote backup and make it available on their local machine. It is also used when collaborating with others in order to keep the local code up to date with the team's current version.

## Syntax

```pseudo
git pull <remote-name> <branch-name>
```

This will move the code from `<remote-name>` currently in branch `<branch-name>`, and move it to the branch checked out locally on the user's computer.

## How to Pull

Prerequisites to pulling from a remote repository include:

- Being inside of the local repository (if not, the next step will return an error)
- Being inside of the correct branch and having a clean [`git status`](https://www.codecademy.com/resources/docs/git/status) in that branch:

  ```shell
  $ git checkout new-feature-branch
  $ git status

  On branch new-feature-branch
  nothing to commit, working tree clean
  ```

- Having a valid remote repository set. In this case, the remote repository is named `origin` and can be found at the URL `https://github.com/CodeNinja/product-dev`:

  ```shell
  $ git remote -v

  origin    https://github.com/CodeNinja/product-dev.git (fetch)
  origin    https://github.com/CodeNinja/product-dev.git (push)
  ```

At this stage, pulling can be accomplished with a valid remote and branch name:

```shell
git pull origin new-feature-branch
```

When the pull completes, it will display a message like this:

```shell
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 5 (delta 2), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (5/5), done.
From https://github.com/CodeNinja/product-dev.git
  * branch      new-feature-branch    -> FETCH_HEAD
```
