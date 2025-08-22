---
Title: 'Tag'
Description: 'Marks particular in the history of a repository as being important.'
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

The **`git tag`** command is used to mark particular points in the history of a repository as being important. Typically, Git tags are used to mark release versions (like `v1.0`, `v2.1.3`, etc.), making it easier to identify which [commit](https://www.codecademy.com/resources/docs/git/commit) corresponds to a production release. Unlike [branches](https://www.codecademy.com/resources/docs/git/branch), Git tags are fixed references, i.e., they don’t change or move once created.

## `git tag` Syntax

```pseudo
git tag <flags> <tag-name> <commit-reference> <tag-object>
```

- `<flags>`: Additional options that modify the behavior of the `git tag` command.
- `<tag-name>`: The name of the tag.
- `<commit-reference>`: The commit hash (or branch name) that the tag should point to; defaults to `HEAD` if omitted.
- `<tag-object>`: Used internally for tag objects that store extra metadata such as tagger info and message.

The `<flags>` include:

|       Flag        | Description                                                                                                                                      |
| :---------------: | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `-a`/`--annotate` | The tag is annotated but unsigned.                                                                                                               |
|   `-s`/`--sign`   | The tag is annotated and signed with the key of the default email address.                                                                       |
|  `-f`/`--force`   | An existing tag is forcibly replaced with a given `<tag-name>`.                                                                                  |
|  `-d`/`--delete`  | One or more existing tags are deleted by `<tag-name>`.                                                                                           |
|  `-v`/`--verify`  | One or more existing tags are verified by `<tag-name>`.                                                                                          |
|   `-l`/`--list`   | All existing tags are listed (same as running just `git tag`).                                                                                   |
| `-m`/`--message`  | A message for an existing tag is defined instead of prompted. Multiple `-m` messages can be used, but they will combined as separate paragraphs. |
|   `-F`/`--file`   | A tag message from an existing file is read from the standard input.                                                                             |
|   `-e`/`--edit`   | A tag message made from `-m` or `-F` is edited.                                                                                                  |

## Example 1: Creating a Lightweight Git Tag

A lightweight Git tag is just a name pointing to a commit:

```shell
git tag v1.0
```

This assigns the tag `v1.0` to the latest commit on the current branch.

## Example 2: Creating an Annotated Git Tag

An annotated Git tag contains extra information such as the tagger’s name, email, and a message.

```shell
git tag -a v2.0 -m "Release version 2.0"
```

This assigns the tag `v2.0` and the given message to the latest commit on the current branch.

## Example 3: Tagging a Specific Commit Using `git tag`

The `git tag` command also helps in tagging a specific commit:

```shell
git tag v1.5 3a1b2c3
```

This assigns the tag `v1.5` to the commit `3a1b2c3`.

## Frequently Asked Questions

### 1. Why should I use Git tags?

Git tags help in versioning your project. They provide a permanent reference to specific commits, which is useful for releases, debugging, or rollback purposes. Teams often use tags to mark stable builds.

### 2. Is tag a commit in git?

No. A Git tag is not a commit itself but a pointer to a commit. You can think of it as a bookmark for an important commit in your repository.

### 3. How to push a Git tag?

By default, Git tags are not pushed to remote repositories. To push a Git tag, you must explicitly push it:

```shell
# Push a single Git tag
git push origin <tag-name>

# Push all local Git tags
git push origin --tags
```
