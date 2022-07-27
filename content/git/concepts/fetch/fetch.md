---
Title: 'Fetch'
Description: 'Retrieves changes (commits, files, etc.) from another repository or local branch, but does not integrate them.'
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

The **`fetch`** command retrieves changes (commits, files, etc.) from another repository or local [branch](https://www.codecademy.com/resources/docs/git/branch), but does not integrate them. This command allows programmers to bring in and review changes made in a central repository into their local machine.

## Syntax

```pseudo
git fetch <remote-name> <branch-name>
```

This will bring in changes made in the `<branch-name>` that exist in the Git `<remote-name>`. However, the changes will not be merged; that must be done with the [`merge`](https://www.codecademy.com/resources/docs/git/merge) command.

**Note**: Using the [`pull`](https://www.codecademy.com/resources/docs/git/pull) command performs a `fetch`, followed by a `merge`, within the same line.

## Fetching From a Remote

A common use case for the `fetch` command is bringing in and reviewing changes made in a remote branch. The remote must exist in order for `fetch` to be able to access and retrieve the changes made there.

```shell
$ git remote -v

origin  https://github.com/CodeNinja/docs.git (fetch)
origin  https://github.com/CodeNinja/docs.git (push)
```

Next, running `git fetch` on the `main` branch of the `origin` remote will bring any changes, including any new commits or files, into the current branch:

```shell
$ git fetch origin main
From https://github.com/CodeNinja/docs
 * branch              main       -> FETCH_HEAD
```

After this point, a `merge` command can be used to actually integrate the changes.
