---
Title: 'Log'
Description: 'The git log command is used to track the commit history of a project repository.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'Version Control'
CatalogContent:
  - 'learn-the-command-line'
  - 'learn-git'
---

In Git, the **`log`** command is used to track a [branch's](https://www.codecademy.com/resources/docs/git/branch) commit history. After running, it will display project-related information, such as a detailed commit history, which can be used as a reference to go back in time to a previous version of the project.

## Example

Below is a short example of how the `git log` command works. Running `git log` will show a list of all previous commits on the current branch:

```shell
$ git log

On current branch

commit   f5b5bd8f9eaa443d4020cbe918x742e7ddd22000
Author : John Doe <John.Doe@mail.com>
Date: Mon May 22 14:21:03 2023 -0400.
```

The example log above shows the different elements that make up a commit, but the most useful is the git hash (f5b5bd8f9eaa443d4020cbe918x742e7ddd22000), which can be used to revert our commit changes using the git revert command.

There are various ways to customize the information presented by `git log` using options.

## git log --oneline

The `--oneline` option gives the single commit that is supplied just on one line. Every commit includes a seven-digit SHA number and a commit message.
  
```shell
$ git log --oneline

9a4223b  (HEAD -> chapter_1) added the first paragraph
0a10c27  fixed the spacing issue
18d040d  added the second paragraph
```
Using `--online` along with the `--graph` significantly increases the readability of the git log.

```shell
$ git log --oneline --graph

* 9a4223b  (HEAD -> chapter_1) added the first paragraph
* 0a10c27  fixed the spacing issue
* 18d040d  added the second paragraph
```