---
Title: 'Clone'
Description: 'Cloning means copying an existing remote repository to the current local directory.'
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

In Git, cloning means copying an existing remote repository to the current directory.

Some of the basic Git commands have been performed only on a local branch, that is, a branch that exists on a local machine. Here's a command that will interact with a remote branch &mdash; a branch on a server that can be accessed through the internet.

## Syntax

The basic syntax for cloning in Git via HTTPS is this:

```psuedo
git clone https://github.com/repository/URL.git
```

## Example

Run `git clone` to clone the repository for [Codecademy Docs](https://github.com/codecademy/docs), like so:

```shell
$ git clone https://github.com/Codecademy/docs.git

  Cloning into 'docs'...
  remote: Enumerating objects: 21512, done.
  remote: Counting objects: 100% (3517/3517), done.
  remote: Compressing objects: 100% (1795/1795), done.
  remote: Total 21512 (delta 2233), reused 1727 (delta 1466), pack-reused 17995
  Receiving objects: 100% (21512/21512), 3.48 MiB | 9.56 MiB/s, done.
  Resolving deltas: 100% (10600/10600), done.
```
