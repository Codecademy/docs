---
Title: 'Compiler'
Description: 'Java Compilers typically take Java source code and produce class files containing platform-neutral Java bytecode that can be executed by the Java Virtual Machine (JVM).'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Command Line'
  - 'Developer Tools'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Java **compilers** typically take Java source code and produce class files containing platform-neutral Java bytecode that can be executed by the Java Virtual Machine (JVM). The JVM does not interpret source code, it interprets something called Java bytecode, which is a language somewhere between human-readable source code, and [machine code](https://www.codecademy.com/resources/docs/general/machine-code) which is specific to a particular computer. The difference between bytecode and machine code is that bytecode is platform independent and the same bytecode can be interpreted by any JVM running on any sort of computer system. This is what makes compiled Java programs portable.

Most of these compilers do little to no optimization of the code, leaving that task for the JVM to do at run time. The JVM loads the bytecode and either interprets it, or just-in-time compiles it to machine code, and then possibly optimizes it.

## Compiling a Java File

The Java compiler is executed on the command line in [Unix](https://www.codecademy.com/resources/docs/general/unix) or DOS shells as follows:

```shell
javac ProgramName.java
```
Where `ProgramName` is the name of a given `.java` file. Part of the configuration of Java requires setting up the class path so the Java compiler can find `ProgramName.java` in the filesystem. This can be done by using the `-classpath` option with the `javac` compiler command, or by setting the `CLASSPATH` environment variable.

## Online Java Compilers

There are several sites that offer online Java compilers, allowing the entry of small Java programs in a web-based IDE and running them on the fly. [JDoodle](https://www.jdoodle.com/online-java-compiler/) is one such site that offers this ability.

