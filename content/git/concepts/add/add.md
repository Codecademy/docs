---
Title: 'Add'
Description: 'The `git add` command is used to add changes from the working tree to the staging area. This is where the changes are saved for the next commit.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

The `git add` command is used to add changes from the working tree to the staging area. This is where the changes are saved for the next commit.that the filename now appears in green indicating that it is tracked and will be saved in the next commit.

Example:
Here is a short example as a demo for the `git add` command. To create a new file use the `touch filename.extention` command. I have created a txt file called example.txt. Now run the `git add` and the following should appear:

```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	example.txt

nothing added to commit but untracked files present (use "git add" to track)
```

As the file(appearing as red) is not untracked, to track the file we use the `git add filename.extention` after which if you use the `git status` command, you will observe the following.

```
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   example.txt
```

You will observe that the file name(now appearing as green) is now pushed to the staging area and will be saved with the next commit.
