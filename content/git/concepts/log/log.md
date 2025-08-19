---
Title: 'Log'
Description: 'The git log command is used to track the commit history of a project repository.'
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

In Git, the **`log`** command is used to explore the timeline of [commits](https://www.codecademy.com/resources/docs/git/commit). After creating several commits or cloning a repository with an existing commit history, `git log` displays information about commits from the repository history in chronological order (the most recent commits show up first).

Each commit entry in a standalone `git log` output includes:

- Commit ID: A unique [SHA-1](https://en.wikipedia.org/wiki/SHA-1) or hash ID that identifies the commit.
- Author: The name and email address of the commit author.
- Date: The date the snapshot was taken.
- Commit message: A description of the changes included in the commit.

## Syntax

```pseudo
git log
```

## Example

```shell
## Sample git log entry

$ git log

commit   f5b5bd8f9eaa443d4020cbe918x742e7ddd22000
Author: Big-Logic <logic@gmail.com>
Date: Wed Apr 23 22:12:47 2025 +0530

Commit message tittle

  * Commit message description

  * Commit message description
```

The first entry in a `git log` output is the commit at which the active [branch](https://www.codecademy.com/resources/docs/git/branch) is currently pointed.

## Options

`git log` provides numerous options that are used for formatting, filtering, limiting, and sorting output. For example, the `--oneline` option displays each log entry as a single line of abbreviated commit hash and message.

### Syntax

```pseudo
git log --option
```

### Example

```shell
$ git log --oneline

3fe31700 (HEAD -> git-log) Refine git log documentation for clarity
b86d023d (upstream/main, origin/main, origin/HEAD, main) [Edit] Python .zip() (#6619)
cd781f26 [Edit] Python strip (#6617)
2394f728 [Edit] Python math.floor() (#6616)
423acf79 [Term Entry]: Add Five Whys (#6537)
```

## Useful options

### Formatting

| Option      | Description                                                                      |
| ----------- | -------------------------------------------------------------------------------- |
| `--oneline` | Displays each log entry as a single line of abbreviated commit hash and message. |
| `--graph`   | Displays an ASCII graph (text based diagram) beside each log entry.              |
| `--stat`    | Shows statistics for files modified in each commit.                              |
| `-p`        | Shows the full details of the changes made in each commit, also known as patch.  |

### Filtering

| Option                  | Description                                                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `HEAD`                  | Shows the commit history of the current or active branch.                                                                                      |
| `<commit Id>`           | Starts the log from the specified `<commit Id>`(usually the first seven characters of the commit hash) and shows all commits leading up to it. |
| `<branch>`              | Shows the commit history of the specified branch.                                                                                              |
| `<path>`                | Shows only commits that changed the specified file or folder.                                                                                  |
| `--before=<date>`       | Shows commits made before the specified date.                                                                                                  |
| `--after=<date>`        | Shows commits made after the specified date.                                                                                                   |
| `--committer=<pattern>` | Shows commits made by a committer matching the pattern.                                                                                        |
| `--author=<pattern>`    | Shows commits authored by contributor matching the pattern.                                                                                    |

### Sorting

| Option      | Description                                                |
| ----------- | ---------------------------------------------------------- |
| `--reverse` | Reverses the order of commits (oldest commit shown first). |

### Limiting

| Option                     | Description                                                          |
| -------------------------- | -------------------------------------------------------------------- |
| `-n <number>`, `-<number>` | Limits the output to the most recent `<number>` of commits.          |
| `--skip=<number>`          | Skips the first `<number>` commits and then starts showing the rest. |

## Options combination

Options in `git log` can be combined to better customize the information shown and how they are displayed. For example, using `--graph` with `--oneline` displays each log entry as an abbreviated commit hash and message while displaying an ASCII graph beside each log.

### Syntax

```pseudo
git log --option --option
```

### Example

```shell
$ git log --graph --oneline

| * bd3b2cc (origin/cs1102-unit3) Add flowchart
* | 072ecae Merge pull request #7 from Big-Logic/cs1102-unit3
|\|
| * 62b2b5a Add search functionality
| * 8c5a0bd Enhance student update functionality
```

## Navigating git log

By default, `git log` displays logs in a command line paper program called [less](<https://en.wikipedia.org/wiki/Less_(Unix)>).

### Useful navigation keys

| Key        | Command                      |
| ---------- | ---------------------------- |
| `j`        | Move down one line           |
| `k`        | Move up one line             |
| `Spacebar` | Move down one page           |
| `b`        | Move up one page             |
| `g`        | Go to the top of the page    |
| `G`        | Go to the bottom of the page |
| `q`        | Exit the log                 |
