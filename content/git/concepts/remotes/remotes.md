---
Title: 'Remotes'
Description: 'Repositories that are not local.'
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

Git **remotes** are copies of repositories that are not stored locally. Working with a remote often involves two copies or references:

1. The forked repository (repo): By convention, these are named the `origin` remote which refers to the default repo.
2. The base or home repo: The `upstream` remote refers to the remote repo that is being tracked for changes and contributions.

## Syntax

Remotes can be set with the `git remote add` command:

```shell
git remote add remotename remoteURL
```

## Adding Remotes Using Docs

To manually set up the remotes, the forked repository would be named the `origin` remote:

```pseudo
git remote add origin https://github.com/yourusername/docs.git
```

The base `Codecademy/docs` repo would be named the `upstream` remote:

```shell
git remote add upstream https://github.com/Codecademy/docs.git
```

> **Note:** If the repository is cloned onto the computer, the remote defaults to `origin`. Additional set up would only be needed for the `upstream` remote.

Run the `git remote -v` (`v` flag is for verbose) command to check the list of remotes:

```shell
git remote -v
upstream https://github.com/Codecademy/docs.git (fetch)
upstream https://github.com/Codecademy/docs.git (pull)
```
