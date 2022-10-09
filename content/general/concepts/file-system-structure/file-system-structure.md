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

The file system structure is a basic method for operating systems to organize information. This structure defines how certain key directories and files are organized, and how future directories and files will be stored in the system. Although different operating systems may use different standards, all major operating systems have similar characteristics and use a hierarchical structure of directories branching off the root. The below image illustrates an example of the hierarchy in a sample file system structure.

![File system structure](https://raw.githubusercontent.com/Codecademy/docs/main/media/file-system-structure.png)

## Root

The root or root directory is the highest level directory of the file system structure. In macOS, Linux, and other UNIX-like operating systems, the root is represented with a forward slash (/). In Windows, the root is represented by the drive name and a backslash (\).

The root contains all directories and files associated with a particular system or device. Under the root, there are some predefined subdirectories. These directory names differ across different operating systems, but they are used to organize some common information, such as temporary files or user information.

## Directories and Files

All other directories and files are located below the root. Directories, which are sometimes called folders, contain a list of the file names for each file in the directory. They also contain other information associated with these files, such as information on where they are stored in the computer’s memory. Directories that are located inside other directories are called subdirectories. In hierarchical filesystems, the relationship between directories and subdirectories is sometimes described using a “parent”-”child” metaphor, where the “parent” directory is one level above the “child” directory.

Files are storage units on a computer which store information on the file contents, instructions needed to read these contents, and where the contents are stored. The file’s location in the directory system is the [file path](https://www.codecademy.com/resources/docs/general/file-paths), and the [file format](https://www.codecademy.com/resources/docs/general/file-formats) or file type determines how data in the file is created, stored, and read.

## Filesystem Hierarchy Standard (FHS)

The Filesystem Hierarchy Standard (FHS) is one example of a defined file system structure. The FHS is only for [UNIX](https://www.codecademy.com/resources/docs/general/unix) systems, and is most popularly used in [Linux](https://www.codecademy.com/resources/docs/general/linux). It is maintained by the Linux Foundation, and most Linux distributions follow the FHS.

The FHS defines that all directories and files exist under the root. It also includes standard files which appear directly below the root. Some examples of these files are included below:

- `/bin`: Stores all binary executable files
- `/tmp`: Stores all temporary files
- `/sys`: Stores information on the Linux kernel and various system devices

The purpose of using a defined file system structure like the FHS is so users and software can predict the locations of files and directories. This makes it easier to install, run, and use software.
