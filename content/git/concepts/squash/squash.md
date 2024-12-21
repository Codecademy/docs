Merging a series of smaller commits into a single, cohesive one can significantly clean up your project’s commit history. This practice, commonly known as "squashing," is particularly helpful when previous commits are small tweaks or corrections that clutter the commit history.

Though Git doesn’t offer a straightforward `squash` command, you can achieve this functionality through an interactive rebase. Below, we explore how you can squash your commits for a tidier project history.

## Example

Imagine you’ve been working on a feature branch, generating several incremental commits. Before integrating these changes into the main branch, you decide it’s best to `squash` your commits to maintain a clean history.

Your current commit log might look something like this:

```shell
12345678 Initial commit
23456789 Added Santa's new address
87654321 Corrected grammar in the address
98765544 Updated house number for Santa
```
These last three commits relate to updates and corrections to the same component, and combining them will create a more meaningful history.

### Interactive Rebase: The Path to Squashing
To start squashing, initiate an interactive rebase for the last three commits:

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
The goal here is to transform each pick command into a squash (or simply s), thereby combining them into one commit:

```shell
pick 23456789 Added Santa's new address
squash 87654321 Corrected grammar in the address
squash 98765544 Updated house number for Santa
```

After saving and closing the editor, `Git` will prompt you to draft a new commit message:

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

### Conclusion
By using interactive rebase to squash commits, you ensure that your project's history remains clear and easy to follow, highlighting key changes without unnecessary clutter. Be cautious when squashing commit history, particularly if your branch is already available on a remote repository. Since squashing alters history, it can lead to complications if done remotely. It's advisable to perform this operation locally before pushing your changes to avoid potential issues.