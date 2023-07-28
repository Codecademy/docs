---
Title: 'Diff'
Description: 'A display of changes in different elements of a working environment: files, directories, commits, branches, etc.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'GitHub'
CatalogContent:
  - 'learn-the-command-line'
  - 'learn-git'
---

In Git, __`diff`__ displays changes in different elements of your working environment: files, directories, commits and even branches. Simply put, diff shows what changed for one or several elements in a repository.

## Syntax

The syntax for comparing data changes in a repository using `diff` is:

```bash
$ git diff
```
## Examples

The are various ways in which `git diff` can be used.

### 1. git diff

Used as it is, the command shows the difference between the working directory and the staging area.

Suppose the initial version of the file _scene.txt_ below has already been [committed](https://www.codecademy.com/resources/docs/git/commit).

```
COBBYTO
In a dream, brain activity will be roughly thirty times higher than usual. The effect is increased by entering a dream within that dream.

ARIANEA
How long should each level take?
```

Let's imagine we modify _scene.txt_ as followed and save the change in our working directory.

```
COBBYTO
In a dream, brain activity will be roughly thirty times higher than usual. The effect is increased by entering a dream within that dream.

ARIANEA
How long?

COBBYTO
According to my calculations, the time span is approximately three days at the top layer, three months one layer down, and six years a level after.

ARIANEA
Who would want to live in an illusory world for six years?
```

Using `git diff` in the terminal will produce the following output:

```bash
$ git diff
diff --git a/scene.txt b/scene.txt
index c16c37f..c680bb4 100644
--- a/scene.txt
+++ b/scene.txt
@@ -2,4 +2,10 @@ COBBYTO
 In a dream, brain activity will be roughly thirty times higher than usual. The effect is increased by entering a dream within that dream.
 
 ARIANEA
-How long?
\ No newline at end of file
+How long?
+
+COBBYTO
+According to my calculations, the time span is approximately three days at the top layer, three months one layer down, and six years a level after.
+
+ARIANEA
+Who would want to live in an illusory world for six years?
\ No newline at end of file
```

With only one file tracked, using  `git diff` is the same as using  `git diff scene.txt`

### 2. git diff --cached

`git diff --cached` displays the changes between the staging area and the last commit (i.e changes between what is [staged](https://www.codecademy.com/resources/docs/git/add) but not yet committed).

If we continue where we left in our previous example and run `git diff --cached` in the terminal, we don't get any output. Which is normal because nothing has been added to the staging area yet. Therefore, there's no status change between the latter and the last commit. We can easily verify this by running `git status`.

```bash
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   scene.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
Adding _scene.txt_ to the staging area and running `git diff --cached` in the terminal should yield the following:

```bash
$ git diff --cached
diff --git a/scene.txt b/scene.txt
index c16c37f..c680bb4 100644
--- a/scene.txt
+++ b/scene.txt
@@ -2,4 +2,10 @@ COBBYTO
 In a dream, brain activity will be roughly thirty times higher than usual. The effect is increased by entering a dream within that dream.
 
 ARIANEA
-How long?
\ No newline at end of file
+How long?
+
+COBBYTO
+According to my calculations, the time span is approximately three days at the top layer, three months one layer down, and six years a level after.
+
+ARIANEA
+Who would want to live in an illusory world for six years?
\ No newline at end of file
```

A quick look shows us that is the same output as the one obtained at the previous _1. git diff_ section, since the changes saved have been added to the staging area. Conversely, if we run `git diff` in the terminal, we don't get any output.