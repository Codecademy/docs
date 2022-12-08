---
Title: 'File System Structure'
Description: 'The file system structure is a basic method for operating systems to organize information.'
Subjects:
  - 'Computer Science'
  - 'Bash/Shell'
Tags:
  - 'Files'
  - 'Linux'
  - 'Operating Systems'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

The **file system structure** defines how information in key directories and files (existing and future) are organized and how they are stored in an operating system.

Although different operating systems may have different standards, all major operating systems have similar characteristics and use a hierarchical structure of directories branching off the root directory. The image below illustrates an example of the hierarchy in a sample file system structure.

![File system structure](https://raw.githubusercontent.com/Codecademy/docs/main/media/file-system-structure.png)

## Root

The root directory, or "root", is the highest-level directory of the file system structure. In macOS, [Linux](https://www.codecademy.com/resources/docs/open-source/linux), and other [UNIX](https://www.codecademy.com/resources/docs/general/unix)-like operating systems, the root is represented with a forward slash (`/`). In Windows, the root is represented by the drive name and a backslash (`\`).

The root contains all directories and files associated with a particular system or device. Under the root, there are some predefined subdirectories. These directory names differ across different operating systems, but they are used to organize some common information, such as temporary files or user information.

## Directories and Files

All other directories and files are located below the root. Directories, or folders, contain a list of the file names for each file in the directory. They also contain other information associated with these files, such as information on where they are stored in the computer’s memory.

Directories that are located inside other directories are called subdirectories. In hierarchical filesystems, the relationship between directories and subdirectories is sometimes described using a “parent”-”child” metaphor, where the “parent” directory is one level above the “child” directory.

Files are storage units on a computer which contain information on file contents, instructions needed to read them, and where they are stored. A file’s location in the directory system is referred to as the [file path](https://www.codecademy.com/resources/docs/general/file-paths) and the [file format](https://www.codecademy.com/resources/docs/general/file-formats), or type, determines how data in the file is created, stored, and read.

## Filesystem Hierarchy Standard (FHS)

The Filesystem Hierarchy Standard (FHS) is one example of a defined file system structure. The FHS is for UNIX systems and is most popularly used in Linux. It is maintained by the Linux Foundation, and most Linux distributions follow the FHS.

The FHS defines that all directories and files exist under the root. It also includes standard files which appear directly below the root. Some examples of these files are included below:

- `/bin` stores all binary executable files.
- `/tmp` stores all temporary files.
- `/sys` stores information on the Linux kernel and various system devices.

The purpose of using a defined file system structure like the FHS is so users and software can predict the locations of files and directories. This makes it easier to compile, install, and run software.
