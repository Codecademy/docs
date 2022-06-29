---
Title: 'Tag'
Description: 'Creates, lists, deletes, or verifies a commit marker with a GnuPG tag object attached.'
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

The **`tag`** command creates, lists, deletes, or verifies a commit marker with a [GnuPG tag object](https://gnupg.org/) attached. This helps add some semantic meaning to a commit message.

## Syntax

```pseudo
git tag <flags> <tag-name> <commit-reference> <tag-object>
```

The `<flags>` include the following:

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

The `<tag-name>` refers to the tag object for a commit.

The `<commit-reference>` is the commit the tag will be attached to.

The `<tag-object>` is usually the commit that the new tag refers to (defaults to the `HEAD`) pointer.

## Example

The following is a small example of the `tag` command being used to create and annotate an object for the `HEAD` commit pointer:

```shell
git tag -a tag-for-head-pointer
```
