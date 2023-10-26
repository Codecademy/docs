---
Title: 'stash'
Description: 'The changes made to the current working file are temporarily stored using the git stash command, which makes it simple to switch to a different branch and work on different features without losing modifications and apply the modifications again with git stash apply.'
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Bash/Shell'
  - 'Developer tools'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Git'
  - 'Version Control'
  - 'GitHub'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-git'
  - 'paths/computer-science'
---

Git **stash** temporarily stores the changes made in the current working file to the hidden directory called .git/refs/stash and we can use git **stash** apply to restore the changes done.

## Syntax

Changes can be stashed using `git stash` command.

```shell
 git stash
```

## Stashing the changes

```shell
 git stash
Saved working directory and index state WIP on adds _git_stash_#3708: 551485f8 [Edit] Update HTML style (#3477)
```

```shell
 git stash apply
On branch adds _git_stash_#3708
Changes to be committed:
(use "git restore --staged «file>..." to unstage)
new file:
content/git/concepts/stash/stash.md
Changes not staged for commit:
(use
"git add «file>...
" to update what will be committed)
(use
"git restore «file>..."
to
```
