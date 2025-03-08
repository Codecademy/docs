---
Title: "File Operations"
Description: "File operations in Bash allow users to create, delete, move, copy, and manipulate files from the command line."
Subjects:
  - "Bash/Shell"
tags:
  - "Bash/Shell"
  - "Command Line"
  - "Files"
  - "Operating Systems"
  - "Programming"
  - "Scripting"
  - "Unix"
CatalogContent:
  - 'learn-the-command-line'
---

## Definition
File operations in Bash refer to commands that allow users to create, delete, move, copy, and manipulate files and directories through the command line.

## Syntax

### Creating Files
To create a new file, use:

```bash
touch filename
```

### Copying Files
To copy a file from one location to another:

```bash
cp source_file destination
```

### Moving/Renaming Files
To move or rename a file:

```bash
mv source_file destination_file  
mv old_name new_name
```

### Deleting Files
To remove a file:

```bash
rm filename
```

### Creating Directories
To create a new directory:

```bash
mkdir directory_name
```

### Removing Directories
To remove an empty directory:

```bash
rmdir directory_name
```

To remove a directory and its contents recursively:

```bash
rm -r directory_name
```

## Example
Consider a scenario where someone wants to create a directory, move a file into it, and then delete the file.

```bash
# Create a new directory named 'project'
mkdir project

# Create a new file named 'notes.txt'
touch notes.txt

# Move 'notes.txt' into 'project'
mv notes.txt project/

# Remove 'notes.txt' from inside 'project'
rm project/notes.txt

# Remove the 'project' directory
rmdir project
```

After running these commands, the directory `project` and its file `notes.txt` will no longer exist.

## Additional Resources
- [Bash Commands Cheat Sheet](https://www.codecademy.com/learn/learn-the-command-line/modules/learn-the-command-line-manipulating-files/cheatsheet)
- [GNU Bash Manual](https://www.gnu.org/software/bash/manual/bash.html)
