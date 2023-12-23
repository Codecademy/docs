---
Title: 'Stash'
Description: 'A command for saving changes locally so a developer can switch branches in the midst of changes or to get a clean version of the branch they are currently working on.'
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

The **`stash`** command is used when a developer would like to save changes locally to their machine rather than committing them. This is often used when a developer would like to switch branches in the middle of an effort but the code they are working on is not yet ready to be committed.

## Example

In the following example, `git stash` is used to save changes locally and then re-apply those changes when the developer is ready. First, `git status` is used to check the status of the working branch. Then, `git stash` is used to save those changes locally. Finally, `git status` is used again to show that the working tree is clean and the developer can switch branches.

```shell
$ git status

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  modified:   <directory>/<files>

no changes added to commit (use "git add" and/or "git commit -a")

$ git stash

Saved working directory and index state WIP on main: 54ed281 19

$ git status

On branch main
nothing to commit, working tree clean
```

To reapply the changes that were stashed, the developer has two options:

- `git stash pop` is used in the first example and takes the changes from the stash to reapply them.
- `git stash apply` is used in the second example and reapplies the changes while also keeping them in the stash.

```shell
$ git stash pop

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  modified:   <directory>/<file>

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (9909a424d2ec2192a7b23a4a707e20ce9b4fd4c6)

$ git stash apply

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  modified:   <directory>/<file>

no changes added to commit (use "git add" and/or "git commit -a")
```

There are eight additional options for `git stash`:

- `-u`: This is used to stash untracked files, which git does not automatically stash. Untracked files are new files in the branch that have not been staged, and ignored files.
- `list`: View a list of all stashes saved locally.
- `save <note>` : Name the stash that is being saved. This is similar to a commit message. Git automatically names stashes “WIP” for work in progress, so names are useful for developers to reference if they are saving multiple stashes.
- `show`: Git gives a summary of the stashed changes.
  - `show -p`: Git gives a full description of the stashed changes.
- `-p`: Git walks through each change that can potentially be saved to ask the developer which parts they would like to stash.
- `branch <name> <stash_name>`: Git creates a new branch with the given name and pops the stash into the branch, dropping the changes from the stash.
- `drop <stash_name>`: Git deletes the given stash.
- `clear`: Git deletes all stashes.
