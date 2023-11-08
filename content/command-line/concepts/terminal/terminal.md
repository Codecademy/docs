---
Title: 'Terminal'
Description: 'A terminal emulator is a program that allows users to run commands that are processed by the computer.'
Subjects:
  - 'Developer Tools'
  - 'Computer Science'
Tags:
  - 'Command Line'
  - 'Bash/Shell'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

A **terminal** is a tool for interacting with a computer using text-based commands. In the past, terminals were hardware-based systems that printed out typed commands to a dedicated hardware, such as a screen or paper spool. Today, terminals have been widely replaced by **Terminal Emulators**, which are GUI apps that can come with additional functionality, such as tabbing interfaces and splitting views. The words are used interchangeably in today's development environments. Terminals can serve various functions, like running scripts or automating tasks with shell scripts.

The terminal interacts with a program often referred to as the _shell_, which is the command-line interface that exposes human input from the terminal to the operating system. Unlike the terminal, the shell is what actually processes the commands, whereas the terminal is just the text-based interface to interact with the shell. Some shells come as standalone terminals as well, such as Powershell or Command Prompt, however, some, such as the Unix BASH (Bourne Again SHell) require a separate terminal program.

## Examples of terminals

Terminals come with different features and interfaces based on the system:

- **macOS** has a native app called "Terminal" and also supports iTerm2, a popular alternative.
- **Windows** users typically work with:
  - Command Prompt (CMD), a legacy terminal based on MS-DOS that is available as a shell.
  - PowerShell, which is available as a standalone terminal or as a shell that offers advanced scripting capabilities.
  - Windows Terminal, the modern, multi-tabbed application supporting Command Prompt, PowerShell, and WSL (Windows Subsystem for Linux) shells.
    - WSL, also called Windows Subsystem for Linux, is an emulation layer that allows the use of Unix-based shells such as BASH or ZSH. It can be run within other terminal emulators or as a standalone program. Read more about WSL [here](https://learn.microsoft.com/en-us/windows/wsl/about).
- **Linux** distributions usually provide multiple options which include:
  - GNOME Terminal, default on GNOME desktops.
  - Konsole, default on KDE/Plasma desktops.
  - xterm, is a lightweight terminal for X11 that comes with nearly all Linux distros.
