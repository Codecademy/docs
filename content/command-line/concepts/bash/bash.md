---
Title: 'Bash'
Description: 'Bash is a Unix-based shell and language used for tasks like system administration and software testing.'
Subjects:
  - 'Bash/Shell'
  - 'Computer Science'
Tags:
  - 'Bash/Shell'
  - 'Command Line'
  - 'Linux'
  - 'Unix'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

The Bourne Again Shell, or **[Bash](https://www.gnu.org/software/bash/manual/bash.html)**, is a [Unix](https://www.codecademy.com/resources/docs/general/unix)-based shell program and language used for a multitude of purposes including system administration and software testing.

Developed by Brian Fox in 1989, Bash was released as part of the GNU Project to replace the original Bourne Shell. It was also one of the first programs ported to [Linux](https://www.codecademy.com/resources/docs/open-source/linux).

## Operating System Compatibility

Over time, Bash has become available across many operating systems both as a default shell or an installable program.

### Linux

Due to their mutual relationship with the GNU Project, Bash is the default shell on most distributions of Linux such as the following:

- [CentOS](https://www.centos.org/)
- [Debian](https://www.debian.org/)
- [Ubuntu](https://ubuntu.com/)

### macOS

Apple macOS featured Bash as the default from 2003 with OS X Panther (version 10.3), to 2019 with Catalina (version 10.15). Since then, Z shell (or `zsh`) is the default shell for macOS.

> **Note:** Bash can still be used as an alternative in newer versions of macOS. The switch can be made by:
>
> 1. Running `chsh -s bin/bash` in the Terminal window.
> 2. Confirming the change with the user's credentials.
> 3. Closing and reopening the Terminal window.

### Windows

Bash is not the default shell for Windows operating systems, but it can be enabled through the Windows Subsystem for Linux (WSL). This runs a Linux environment without the need for a [virtual machine](https://www.codecademy.com/resources/docs/general/virtual-machines).

### Bash Terminal Commands

The basic terminal commands for Bash allow the user to navigate and manipulate directories and files. It is important to note the symbol `$` at the start of the line. The `$` indicates that Bash is ready to execute a new command. Some circumstances, such as giving a command without arguments, may prevent Bash from running new commands.

```shell
// A new line has appeared, but this line does not have a $ at the start as this command needs arguments
$ cat
```

### Navigation Commands

#### Print Working Directory Command

To get the current directory use `pwd` command.

```shell
pwd
```

#### List Command

To list the contents of the current folder, `ls` command can be used.

```shell
// To get the list of contents of the current folder
ls

// -l argument gives a list with more information
ls -l
```

> **Note:** If `ls` is used with a `-a` argument, it shows hidden files.

#### Change Directory

To change the directory `cd` command is used.

```bash
// To go to a specific directory
cd directoryPath

// To go to the Previous Directory
cd -

// To go up one directory level
cd ..
```

### Directory Management

#### Make a New Directory

To create a new directory `mkdir` command is used with the new directory name as an argument

```shell
mkdir newDirectoryName
```

#### Remove a directory

To delete a directory `rmdir` command can be used with the directory's name given as an argument

```shell
rmdir directoryName
```

### File Management

#### Create a new file

To create a new file `touch` command can be used with new file name as an argument.

```shell
touch filename.txt
```

#### Remove a file

To delete a file `rm` command can be used with the file name or file path given as an argument.

```shell
rm filename.txt
```

#### Rename or move a file

To rename a file or change file location `mv` command can be used with arguments

```shell
// original name is used as the first argument, followed by the new filename as the second argument.
$ mv oldFileName.txt newFileName.txt

// current path of the file is given as the first argument, followed by the new file path as the second argument 
$ mv sourceDirectory/filename.txt destinationDirectory/filename.txt
```
