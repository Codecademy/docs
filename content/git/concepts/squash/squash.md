---
Title: 'Squash'
Description: 'Squashing in Git merges multiple commits into one, streamlining and clarifying the commit history.'
Subjects:
  - 'Bash/Shell'
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'Command Line'
  - 'Version Control'
CatalogContent:
  - 'learn-the-command-line'
  - 'learn-git'
---

Merging a series of smaller commits into a single, cohesive one can significantly clean up a project’s commit history. This practice, commonly known as "**squashing**", is particularly helpful when previous commits contain minor changes that clutter the commit history.

Though Git doesn’t offer a straightforward `squash` command, you can achieve this through an interactive rebase. Below, we explore how you can squash your commits for a tidier project history.

## Syntax

To squash commits using an interactive rebase, the following command can be used:

```pseudo
git rebase -i HEAD~<number_of_commits>
```

## Example

Imagine working on a feature branch, generating several incremental commits. Before integrating these changes into the main branch, it’s best to `squash` your commits to maintain a clean history.

Your current commit log might look something like this:

```shell
12345678 Initial commit
23456789 Added Santa's new address
87654321 Corrected grammar in the address
98765544 Updated house number for Santa
```

These last three commits relate to updates and corrections to the same component, and squashing them into a single commit will make the commit history more concise and meaningful.

### Interactive Rebase: The path to squashing

To start squashing, initiate an interactive rebase for the last three commits the following command can be used:

```shell
git rebase -i HEAD~3
```

Executing the command will launch an editor displaying something similar to this:

```shell
pick 23456789 Added Santa's new address
pick 87654321 Corrected grammar in the address
pick 98765544 Updated house number for Santa

# Rebase
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

The goal here is to transform each `pick` command into a `squash` (or simply `s`), thereby combining them into one commit:

```shell
pick 23456789 Added Santa`s new address
squash 87654321 Corrected grammar in the address
squash 98765544 Updated house number for Santa
```

After saving and closing the editor, `Git` will prompts the user to draft a new commit message:

```shell
# This is a combination of 3 commits.
# The first commit's message is:

Added Santa's new address

# This is the 2nd commit message:

Corrected grammar in the address

# This is the 3rd commit message:

Updated house number for Santa

# Lines starting with '#' are ignored, and an empty message cancels the commit.
```

Now, create a clear, comprehensive message that reflects the changes introduced by these combined commits. Remember, lines with `#` are comments and will be excluded.

## Conclusion

Squashing commits via interactive rebase keeps the project history clear and focused. Caution is advised when squashing a branch already pushed to a remote repository, as it alters history and can cause complications. It's best to perform this locally before pushing changes.
