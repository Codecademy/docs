---
Title: 'Vim'
Description: 'Vim is a free, open source text editor that is customizable text and available on many operating systems.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Developer Tools'
  - 'Linux'
  - 'Open Source'
  - 'Vim'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

[**Vim**](https://www.vim.org/) is a screen-based text editor that is free, [open-source](https://www.codecademy.com/resources/docs/open-source), and based on the `vi` editor that was originally created for the [Unix](https://www.codecademy.com/resources/docs/general/unix) operating system. However, it can be run on other systems such as Windows, Mac, [Linux](https://www.codecademy.com/resources/docs/open-source/linux), or Android.

Many plugins are available to add to the many features built into Vim. Developers will find it useful for working on source code or scripting files. Vim is ideal for editing configuration files when working from the [terminal](https://www.codecademy.com/resources/docs/command-line/terminal).

## Features

This section describes some important features of the Vim editor.

- It has text completion for faster editing.
- It is able to compare differences between files and merge them.
- It can search with regular expressions.
- Users can perform a wide range of tasks such as navigating to specific locations within a document, or replacing specific text, using a suite of commands.
- Users can open files in multiple tabs.
- Users can create macros to execute a sequence of commands.

## Vim Modes

Vim has three modes of operation:

- `COMMAND MODE` : Execute commands like undo, redo, find, replace, quit, etc.
- `INSERT MODE` : Type and edit text.
- `VISUAL MODE` : Highlight, select and edit text.

## Launching Vim

Vim can be launched directly from the terminal by running the `vim` command. The start screen will look like this:

![Vim terminal screenshot](https://raw.githubusercontent.com/Codecademy/docs/main/media/vim-terminal.png)

The following command is commonly used for exiting Vim on the terminal:

```shell
~
~
~
:q!
```

While this will close the current buffer, it will not save any changes made in the file. Here are some recommended safeguards:

| Command | Description                                                                         |
| ------- | ----------------------------------------------------------------------------------- |
| `:!wq`  | Closes the current file buffer and saves the changes.                               |
| `:!xa`  | Saves all changes and exits Vim.                                                    |
| `!wqa`  | Works the same as the `:!xa` command.                                               |
| `:!qa`  | Closes Vim without warning by ending all file buffers and not saving their changes. |
| `:qa`   | Will not close Vim if there are any unsaved changes.                                |

A file named `filename.txt` can be opened in the Vim editor. If `filename.txt` does not exist, the file will be created:

```shell
vim filename.txt
```

## Vim Graphical User Interface (GUI)

Vim is also available as a GUI application:

![Vim gui screenshot](https://raw.githubusercontent.com/Codecademy/docs/main/media/vim-gui.png)
