---
Title: 'Amend'
Description: 'Modifies the most recent Git commit without creating a new one.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Command Line'
  - 'Documentation'
  - 'Error Handling'
  - 'Git'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
  - 'paths/computer-science'
---

**Amend** is a Git feature that modifies the most recent commit. It allows developers to correct mistakes such as a missing file, an incorrect commit message, or minor changes without creating an entirely new commit.

Using the amend feature is helpful for keeping a project's commit history clean and concise.

## Syntax

The basic syntax for the amend feature is:

```shell
git commit --amend
```

To amend both the content of the commit and the commit message, the following would be used:

```shell
git commit --amend -m "Your new commit message"
```

## Examples

### Scenario:

The developer created and committed a feature, but forgot to include a file:

```shell
# Original commit
echo "Initial code" > feature.txt
echo "Forgotten content" > forgotten-file.txt
git add feature.txt # Dev forgot to add forgotten-file.txt
git commit -m "Add initial code for the feature"
```

Original commit history:

```shell
git log --oneline
abc1234 Add initial code for the feature
```

The developer realized that they forgot a file in the original commit:

```shell
# Amending the original commit
git add forgotten-file.txt
git commit --amend -m "Add initial code for the feature and forgotten file"
```

Amended commit history:

```shell
git log --oneline
def5678 Add initial code for the feature and forgotten file # Commit abc1234 has been replaced by def5678
```

### Example:

To amend only the commit message:

Original commit history:

```shell
git log --oneline
abc1234 Original commit message
```

The commit message is edited:

```shell
git commit --amend -m "Corrected commit message"
```

Amended commit history:

```shell
git log --oneline
abc1234 Corrected commit message
```

> **Note**: Use `git commit --amend` carefully if the commit has already been shared with others, as it rewrites history.
