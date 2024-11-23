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

The basic terminal commands for navigating and manipulating directories and files are as follows -

#### `cat` Command

The `cat` (short for _concatenate_) command is used to display the contents of a file in the terminal. It can also be used to concatenate multiple files into one. By default, it outputs the contents of the file(s) to the terminal.

```shell
# Display the contents of a file
cat filename.txt

# Display the contents of multiple files
cat file1.txt file2.txt

# You can also use redirection to concatenate files into a new file
cat file1.txt file2.txt > combined.txt
```

### Navigation Commands

In Bash, navigation commands are used to move through directories and the file system efficiently.

#### Print Working Directory Command

Use the `pwd` command to display the current directory -

```shell
pwd
```

#### List Command

Use the `ls` command to list the contents of the current directory -

```shell
# To list the contents of the current directory
ls

# Use the -l argument to get a detailed list with more information
ls -l
```

> **Note:** If `ls` is used with the `-a` argument, it also shows hidden files.

#### Change Directory

The `cd` command is used to change directories -

```shell
# To go to a specific directory
cd directoryPath

# To go to the Previous Directory
cd -

# To go up one directory level
cd ..
```

### Directory Management

In Bash, directory management involves creating, deleting, moving, copying, and manipulating directories within the file system.

#### Make a New Directory

To create a new directory, use the `mkdir` command followed by the new directory name -

```shell
mkdir newDirectoryName
```

#### Remove a directory

To delete a directory, use the `rmdir` command with the directory's name -

```shell
rmdir directoryName
```

### File Management

In Bash, file management involves creating, deleting, moving, copying, and manipulating files within the file system.

#### Create a new file

To create a new empty file, use the `touch` command followed by the file name -

```shell
touch filename.txt
```

#### Remove a file

To delete a file, use the `rm` command with the file name or file path -

```shell
rm filename.txt
```

#### Rename or move a file

To rename a file or move it to a new location, use the `mv` command -

```shell
# Rename the file (original name is the first argument, new name is the second)
mv oldFileName.txt newFileName.txt

# Move a file to a different directory (source path is the first argument, destination path is the second)
mv sourceDirectory/filename.txt destinationDirectory/filename.txt
```
