---
Title: 'Cherry Pick'
Description: 'The cherry-pick command is used to select and put individual commits from one branch to another.'
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

The **cherry-pick** command entails picking individual [commits](https://www.codecademy.com/resources/docs/git/commit) from one [branch](https://www.codecademy.com/resources/docs/git/branch) to another.

## Syntax

```pseudo
git cherry-pick <commit>
```

`<commit>` is the commit hash and can be found using [git log](https://www.codecademy.com/resources/docs/git/log).
Below are a couple of optional flags that can be used with the `cherry-pick` command:

- `edit`: allows edits to the commit message prior to committing.
- `signoff`: add a 'signoff' signature line to the end of the `cherry-pick` commit message.

## Example

Below is a short example of how to use `git cherry-pick`. The developer copied and pasted the commit sha `2f410g1` on GitHub from a branch called `pets:main`to the branch `adding-content-about-dogs` after typing `cherry-pick`.

```pseudo
# Switch to the `adding-content-about-dogs` branch.
git checkout adding-content-about-dogs
# Cherry-pick the commit with the SHA `2f410g1`.
git cherry-pick 2f410g1
```

To complete this command, the developer then pushes the changes to the `adding-content-about-dogs` with the following commit message:

```pseudo
commit -m "feat: cherry-pick content about poodles"
```

## Disadvantage

A common disadvantage of using the `cherry-pick` command is that it creates duplicate commits to the desired branch. In the example below, there are now two commits with the same message. This can make it difficult for other developers to track the codebase's commit history and understand why certain changes were made.

```pseudo
commit 3456789
Author: Dang Smith <dang.smith@example.com>
Date:   Fri Aug 8 16:27:04 2023 -0700

    Cherry-picked commit with SHA 2f410g1

commit 2f410g1
Author: Ooh Doe <ooh.doe@example.com>
Date:   Fri Aug 8 16:29:04 2023 -0700

    Added content about poodles
```

## Prevention Strategies

A common way to prevent the creation of duplicate commits is using `--no-commit` in the `cherry-pick` command. In the example below, The `--no-commit option` will apply the changes from the cherry-pick to the working directory, but it will not create a new commit. This allows developers to inspect the changes and make any necessary edits before committing the final changes to the main branch.

```pseudo
# Switch to the `adding-content-about-dogs` branch.
git checkout adding-content-about-dogs
# Cherry-pick the commit with the SHA `2f410g1`, but do not commit the changes.
git cherry-pick --no-commit 2f410g1

# Inspect the changes made by the cherry-pick.
git diff HEAD

# Commit the changes with your own message.
git commit -m "Added content about poodles"
```

The following is the commit history after the `cherry-pick`:

```pseudo
commit 23289
Author: Ooh Doe <ooh.doe@example.com>
Date:   Fri Oct 8 16:29:04 2023 -0700

Added content about poodles
```

As shown above, there is only one commit in spite of cherry-picking it from SHA `2f410g1` due to the use of `--no-commit`.
