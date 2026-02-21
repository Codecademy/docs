---
Title: 'pwd'
Description: 'Prints the current working directory.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Linux'
  - 'Unix'
  - 'Command Line Prompts'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
  - 'paths/code-foundations'
---

## pwd

The 'pwd' command in Linux displays the user's current working directory, showing the absolute path of the user's current location in the file system.

## Other information
- It allows the user to quickly identify their location in the file system.
- The evironment variable $PWD stores the path of the current working directory.
- There are two flag commands that can accompany the 'pwd' command:
    - The '-L' flag (Logical), which displays the logical path, including the shortcuts (symbolic links).
      - This maintains the context of the navegation path.
    - The '-P' flag (Physical), which skips all shortcuts and displays the actual, physical location of the directory on the hard drive.
      - This resolves to the actual storage location.

