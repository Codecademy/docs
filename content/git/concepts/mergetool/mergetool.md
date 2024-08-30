---
Title: 'mergetool'
Description: 'The mergetool command is used to activate a tool used to solve merge conflicts that occur in a branch.'
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

In [Git](https://www.codecademy.com/resources/docs/git), a merge conflict is a situation that commonly occurs when merging a [branch](https://www.codecademy.com/resources/docs/git/branch) into a codebase. The **mergetool** command is often used to resolve this these conflicts.

## Syntax

```pseudo
git mergetool
```

## Example

Below is an example on how to use `git mergetool`. The developer runs the command and the merge conflict appears:

```git
git mergetool
# Conflicting section:
<<<<<<< HEAD
## Creating a Tutorial
We highly recommend using Markdown to create your tutorial for our audio editor.
=======
If you need help, check out our templates.
>>>>>>> UPDATING-THE-DOCS
```

- `<<<<<<< HEAD`: where the developer's changes appear.
- `====`: Divides the developer's changes from the changes in the other branch, followed by `>>>>>>> UPDATING-THE-STYLE-GUIDE`

To complete this command, the developer removes the conflict markers `<<<<<<<`, `=======`, `>>>>>>>`, and pushes the changes to the `updating-the-style-guide` branch with the following commit message:

```git
git commit -m "docs: update information about tutorials"
```

## Other tools

Here are a list of other tools that are used to solve merge conflicts:

- [**Kaleidoscope**](https://kaleidoscope.app/): Developers often use this to resolve merge conflicts due to its use of different highlighted colors and powerful features ranging from a Convert to Merge command, text filters that remove unimportant data, and a debugger.
- [**Visual Studio Code**](https://code.visualstudio.com/docs/sourcecontrol/overview#_3way-merge-editor): This Integrated Development Environment (IDE) has a built-in 3-way merge editor, which displays the incoming changes to the file and provides a button that enables the changes to be accepted into the file. This allows developers to edit files and resolve conflicts easily.
- [**Sublime Merge**](https://www.sublimemerge.com/): Tool comes in a paid and free version. It is deemed to have a great user interface and is intuitively easy to use.
