---
Title: 'Compiling'
Description: 'A compiler translates the C program (source code) into machine language (machine code) which it stores on the disk as a file.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Command Line'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A compiler translates the C program (source code) into machine language (machine code) which it stores on the disk as a file.

This process of converting the source code into machine code is known as compilation.

## Stages of Compiling a C Program

There are 4 stages in the process of compilation of a C Program.

### 1. Preprocessing

[Preprocessing](https://www.codecademy.com/resources/docs/c/preprocessors) is the first stage in the process of compilation. In this stage:

- Preprocessor commands that begin with `#` are interpreted.
- Comments are removed from the source code.
- Macros are expanded.

### 2. Compiling

In this stage, the preprocessed code is translated into assembly code and syntax errors are checked by the compiler.

### 3. Assembly

In this stage, an assembler is used to translate the assembly code into object code (machine code).

### 4. Linking

Linking is the final stage in the process of compilation. In this stage, all the object code from multiple modules is merged (linked) together and creates an executable image which is also saved on the disk, usually as a file with the file name without any extension (e.g. **hello**), so that it can finally be executed by the processor.

## Compile Command

```shell
gcc –Wall hello.c
```

This compiles a file named **hello.c** and the output file will be named **a.out**.

```shell
gcc –Wall hello.c –o hello
```

This compiles a file named **hello.c** and specifies the output file name as **hello**. The option `-o` is used to name the output file.

## Execute Command

```shell
./hello
```

The executable file **hello** is loaded from the disk to memory and the computer’s CPU (Central Processing Unit) executes the program one instruction at a time.

![xkcd comic](https://imgs.xkcd.com/comics/compiling.png)

([xkcd](https://xkcd.com/303/): Compiling)
