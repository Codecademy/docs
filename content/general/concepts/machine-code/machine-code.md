---
Title: 'Machine Code'
Description: 'Machine code (also known as machine language or native code) is a low level programming language in the form of hexadecimal or binary instructions that execute computer programs on the computers CPU.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Memory'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

**Machine code** (also known as machine language or native code) is a low level programming language in the form of hexadecimal or binary instructions that execute computer programs on the computers' CPU. Machine code is the lowest level of code which means that it communicates the programs instructions in the form of software directly to the hardware of the computer via the Central Processing Unit (CPU).

In the early days of programming, applications were written directly in machine code, but as that method of developing applications is tedious and inefficient, programmers developed new higher level programming languages like C, Java and Python to be processed by compilers and turned into machine code for execution in the CPU.

Every computer processor has its own instruction set designed to process machine code. These instruction sets make up a sort of class for the interpretation of machine code. Due to the distributed market and competition, CPU creators lack a universal machine code standard to rule them all, which means special attention is required to ensure new processors are able to support (without bugs) pre-existing and current programs when they are ultimately converted into machine code.

The ASCII value for the letter "A" in machine code is `01000001`, but this data is displayed as "A" on the screen. Everything visually represented in computers is based on output of machine code processed by the CPU.

## What Machine Code looks like

An easy way to visualize how machine code is stored is to look at some in a hex editor, which shows the binary data represented by hexadecimal numbers.

For example, take the instruction:

```
0xEB 0xFE
```

This could also be written as `11101011 11111110` in binary.

This instruction represents an infinite loop on a x86 CPU. It can be coded in assembly language like this:

```
j:
jmp j
```
