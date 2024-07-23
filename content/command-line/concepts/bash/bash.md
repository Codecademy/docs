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



## Bash Terminal Commands

The basic terminal commands for Bash allow the user to navigate and manipulate directories and files.

It is important to note the symbol '$' at the start of line. The '$' indicates that Bash is ready to execute a new command.
Some circumstances, such as giving a command without arguments, may prevent Bash from running new commands. For example:


```bash
user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject/docs/content/command-line/concepts/bash (main)

$ cat

a new line has appeared, but this line does not have a $ at the start.

a new line has appeared, but this line does not have a $ at the start.

instead, it repeats everything.

instead, it repeats everything.

this is because the `cat` command above has been entered without any arguments; as a result the command cannot complete

this is because the `cat` command above has been entered without any arguments; as a result the command cannot complete

to escape this, we can use ctrl-c.
to escape this, we can use ctrl-c.

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject/docs/content/command-line/concepts/bash (main)

$
```
  
### Navigation Commands  

#### Print Working Directory 

We can locate the current directory we are working in with 
`pwd`.
```bash
user@DESKTOP-16ES0TO MINGW64 /e
$ cd coding/docProject/docs

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject/docs
$ pwd
/e/coding/docProject/docs
```

#### List

To list the contents of the current folder, we can use `ls`. 

```bash
user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject/docs (BashCommands)
$ ls
CONTRIBUTING.md  content/         jest.config.js  tsconfig.json
README.md        content.test.ts  media/          yarn.lock
bin/             documentation/   package.json
```

Giving the `-l` argument gives a list with more information.

```bash
user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject/docs (BashCommands)
$ ls -l
total 362
-rw-r--r-- 1 user 197121  13648 Jul 22 15:16 CONTRIBUTING.md
-rw-r--r-- 1 user 197121   3786 Jul 22 15:16 README.md
drwxr-xr-x 1 user 197121      0 Jul 22 15:16 bin/
drwxr-xr-x 1 user 197121      0 Jul 22 15:16 content/
-rw-r--r-- 1 user 197121   4661 Jul 22 15:16 content.test.ts
drwxr-xr-x 1 user 197121      0 Jul 22 15:16 documentation/
-rw-r--r-- 1 user 197121    195 Jul 22 15:16 jest.config.js
drwxr-xr-x 1 user 197121      0 Jul 22 15:16 media/
-rw-r--r-- 1 user 197121   1304 Jul 22 15:16 package.json
-rw-r--r-- 1 user 197121    396 Jul 22 15:16 tsconfig.json
-rw-r--r-- 1 user 197121 189173 Jul 22 15:16 yarn.lock
```



If `ls` is used with a `-a` argument, it shows hidden files.  


#### Change Directory

We can change directory by writing `cd` followed by an argument.

To Access a directory directly, we can give it's filepath as an argument:

```bash
$ cd directoryPath
```

```bash
user@DESKTOP-16ES0TO MINGW64 ~
$ cd e:/

user@DESKTOP-16ES0TO MINGW64 /e
$ cd coding

user@DESKTOP-16ES0TO MINGW64 /e/coding
$ pwd
/e/coding

user@DESKTOP-16ES0TO MINGW64 /e/coding
$ cd docProject/Docs/content

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject/Docs/content (BashCommands)
$ pwd
/e/coding/docProject/Docs/content
```


We can return to the previously accessed directory by giving `-` as an argument:

```bash
$ cd -
 ```


```bash
user@DESKTOP-16ES0TO MINGW64 /e/coding
$ cd docProject/Docs/content

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject/Docs/content (BashCommands)
$ pwd
/e/coding/docProject/Docs/content

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject/Docs/content (BashCommands)
$ cd -
/e/coding
```

We can go up one directory one level by giving a `..` argument:

```bash
$ cd ..
```

```bash
user@DESKTOP-16ES0TO MINGW64 /e/coding
$ cd ..

user@DESKTOP-16ES0TO MINGW64 /e
$ pwd
/e
```


### Directory Management

#### Make a New Directory

We can creat a new directory in the current folder with the command `mkdir`, giving the new directory's name as an argument:

```bash$ 
$ mkdir newDirectoryName
```

```bash
user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ ls
docs/

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ mkdir newDirectory

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ ls
docs/  newDirectory/
```

#### Remove a directory

We can delete directories with `rmdir` with the target directory's name given as an argument.

```bash
$ rmdir directoryName
```

```bash
user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ ls
docs/  newDirectory/

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ rmdir newDirectory

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ ls
docs/
```

### File Management

#### Create a new file

We can make new files with `touch` with the new file's name given as an argument.

```bash
$ touch filename.txt
```

```bash
user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ touch newfile.txt

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ ls
docs/  newfile.txt
```

#### Remove a file

We can delete files by using the `rm` command with the target file's name or filepath given as an argument.
```bash
rm filename.txt
```

```bash
user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ ls
docs/  newfile.txt

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ rm newfile.txt

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ ls
docs/
```

#### Rename or move a file

`mv` can be used to rename a file. Navigate to the file's folder, then give the original name as the first argument, followed by the new filename as the second argument.

```bash
$ mv oldFileName.txt newFileName.txt
```

```bash
user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ ls
docs/  oldfile.txt

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ mv oldfile.txt newName.txt

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ ls
docs/  newName.txt
```

`mv` can also move a file to a different directory, by giving the file name as the first argument and the new filepath as the second argument. 
```bash
$ mv sourceDirectory/filename.txt destinationDirectory/filename.txt
```

```bash
user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ ls
docs/  newName.txt

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ mv newName.txt e:/newFolder/newName.txt

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ ls
docs/

user@DESKTOP-16ES0TO MINGW64 /e/coding/docProject (master)
$ cd e:/newFolder

user@DESKTOP-16ES0TO MINGW64 /e/newFolder
$ ls
newName.txt
```