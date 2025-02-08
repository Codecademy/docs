---
Title: 'Linux'
Description: 'Free and open-source operating system kernel that forms the foundation of numerous operating systems (distributions).'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Developer Tools'
  - 'Linux'
  - 'Operating Systems'
  - 'Unix'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/code-foundations'
---

**Linux** was created by Linus Torvalds in 1991 as an alternative to proprietary Unix systems. It has since grown into a powerful, secure, and highly customizable operating system that powers everything from personal computers to servers, smartphones (Android), and supercomputers. The Linux ecosystem is supported by a vast community of developers and users who contribute to its continuous development and improvement.

## Working

Linux operates on a kernel-based architecture where the kernel manages hardware resources and provides essential services to higher-level software. It implements a multi-user, multi-tasking environment where processes run concurrently and system resources are shared securely among users. The system uses a hierarchical file system starting from the root directory (`/`), with all devices and resources represented as files.

## Architecture of Linux

- Hardware Layer (Core)

  - Physical components like CPU, memory, storage devices
  - Base layer that interfaces directly with physical hardware

- Kernel Layer

  - Core of the Linux operating system
  - Manages hardware resources, memory, and processes
  - Provides essential services and hardware abstraction
  - Handles system calls and device drivers

- Shell Layer

  - Command-line interpreter
  - Interface between user and kernel
  - Processes user commands and scripts
  - Examples include Bash, Zsh, and Fish

- Application Layer (Outermost)
  - User applications and software
  - GUI interfaces
  - System utilities and tools
  - Third-party applications

This layered architecture follows a hierarchical structure where each layer communicates with adjacent layers, with the kernel serving as the critical intermediary between hardware and software components. Each outer layer depends on the services provided by the inner layers, creating a robust and modular system design.

## Linux Commands

| Command   | Description                             | Example Usage                 |
| --------- | --------------------------------------- | ----------------------------- |
| `ls`      | List files and directories              | `ls -l`                       |
| `cd`      | Change directory                        | `cd /home/user`               |
| `pwd`     | Print working directory                 | `pwd`                         |
| `mkdir`   | Create a new directory                  | `mkdir new_folder`            |
| `rm`      | Remove files or directories             | `rm file.txt`                 |
| `rmdir`   | Remove empty directories                | `rmdir empty_folder`          |
| `cp`      | Copy files or directories               | `cp source.txt destination/`  |
| `mv`      | Move or rename files and directories    | `mv old.txt new.txt`          |
| `cat`     | View file contents                      | `cat file.txt`                |
| `nano`    | Open file in nano editor                | `nano file.txt`               |
| `vim`     | Open file in Vim editor                 | `vim file.txt`                |
| `touch`   | Create an empty file                    | `touch newfile.txt`           |
| `chmod`   | Change file permissions                 | `chmod 755 script.sh`         |
| `chown`   | Change file ownership                   | `chown user:group file.txt`   |
| `find`    | Search for files                        | `find /home -name "*.txt"`    |
| `grep`    | Search inside files for a pattern       | `grep "error" logfile.log`    |
| `ps`      | Display running processes               | `ps aux`                      |
| `kill`    | Terminate a process                     | `kill 1234`                   |
| `top`     | Show system resource usage in real time | `top`                         |
| `df`      | Show disk space usage                   | `df -h`                       |
| `du`      | Show directory size                     | `du -sh folder/`              |
| `tar`     | Archive files                           | `tar -cvf archive.tar files/` |
| `unzip`   | Extract zip files                       | `unzip archive.zip`           |
| `wget`    | Download a file from the internet       | `wget https://example.com`    |
| `curl`    | Fetch data from a URL                   | `curl -O https://example.com` |
| `echo`    | Print text to the terminal              | `echo "Hello, World!"`        |
| `whoami`  | Display the current user                | `whoami`                      |
| `uptime`  | Show system uptime                      | `uptime`                      |
| `history` | Show command history                    | `history`                     |
| `clear`   | Clear the terminal screen               | `clear`                       |
