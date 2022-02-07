---
Title: 'Clone'
Description: 'In Git, cloning means copying an existing remote repository to your current directory. Some of the basic Git commands have been performed only on a local branch, that is, a branch that exists on your computer. Heres a command that will help you interact with a remote branch &mdash; a branch on a server that can be accessed through the internet. The basic syntax for cloning in Git is this: shell git clone   For example, if you want to clone Codecademy Docs, you can do so like this:'
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

In Git, cloning means copying an existing remote repository to your current directory.

Some of the basic Git commands have been performed only on a local branch, that is, a branch that exists on your computer. Here's a command that will help you interact with a remote branch &mdash; a branch on a server that can be accessed through the internet.

## Syntax

The basic syntax for cloning in Git via HTTPS is this:

```shell
git clone <repo-URL>.git
```

## Example

For example, if you want to clone [Codecademy Docs](https://github.com/codecademy/docs), you can do so like this:

```shell
$ git clone https://github.com/codecademy/docs.git

  Cloning into 'docs'...
  remote: Enumerating objects: 21512, done.
  remote: Counting objects: 100% (3517/3517), done.
  remote: Compressing objects: 100% (1795/1795), done.
  remote: Total 21512 (delta 2233), reused 1727 (delta 1466), pack-reused 17995
  Receiving objects: 100% (21512/21512), 3.48 MiB | 9.56 MiB/s, done.
  Resolving deltas: 100% (10600/10600), done.
```
