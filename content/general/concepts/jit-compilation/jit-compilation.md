---
Title: 'JIT Compilation'
Description: 'Just-In-Time (JIT) compilation is a system for compiling languages as they are executed, rather than compiling prior to execution.'
Subjects:
  - 'Developer Tools'
Tags:
  - 'Developer Tools'
  - 'Compilation'
CatalogContent:
  - 'learn-java'
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

**Just-In-Time (JIT) compilation** is a system for compiling languages as they are executed, rather than compiling prior to execution. In JIT compilation, the compiling happens during [runtime](https://www.codecademy.com/resources/docs/general/runtime).

JIT compilation can be thought of as a combination of compiled and interpreted languages. Traditionally, compiled languages are languages where the computer translates the code that comprises a program prior to execution. Interpreted languages are not translated by the computer. Instead, they use an interpreter to read and execute the code directly. [C](https://www.codecademy.com/resources/docs/c) is an example of a traditionally compiled language, and [Python](https://www.codecademy.com/resources/docs/python) is an example of an interpreted language. JIT compilation is a mixture of these two methods; source code is directly compiled into [machine code](https://www.codecademy.com/resources/docs/general/machine-code) at runtime.

## Use Cases for JIT compilation

Some major implementations of JIT compilation include the Java Virtual Machine (JVM) and the Common Language Runtime (CLR). JVM is used for [Java](https://www.codecademy.com/resources/docs/java) and Kotlin, and CLR is used for C#. These languages incorporate a traditional compiler, such as a [Java compiler](https://www.codecademy.com/resources/docs/java/compiler), to compile to an intermediate language prior to using JIT compilation. [JavaScript](https://www.codecademy.com/resources/docs/javascript) also uses JIT compilation, but the specific implementation depends on the browser. Low-level languages, such as [C](https://www.codecademy.com/resources/docs/c) or [C++](https://www.codecademy.com/resources/docs/cpp), do not use JIT compilation, because low-level languages do not use a runtime.

## Benefits of JIT compilation

There are multiple benefits of JIT compilation, such as:

### Improved Performance for Interpreted Languages

Compiled languages are more performant than interpreted languages. JIT compilation allows interpreted languages to have the increased performance benefits of compilation, without the overhead that comes with traditional compiling.

### Increased Efficiency for Compiled Languages

With traditionally compiled languages, programmers must wait for their code to compile prior to starting the execution of a program. JIT compilation does not include this wait time since it compiles the code during the execution phase. Removing this extra step increases efficiency for programmers and the development process.

### Decreased Execution Time

JIT compilation can improve optimizations done by the compiler because it has more information than what would be available in a traditional compiling process. This allows JIT compilation to make more performant choices as it compiles, which allows it to run more efficiently in certain cases.

### Greater Portability

In a traditional compiling process, the programmer is responsible for managing the multiple potential machines the code might run on. For example, if a programmer wanted to execute code to macOS, Android, and Xbox, they would need to compile three times. JIT compilation is more portable than traditional compiling, and instead, the runtime on each system is responsible for managing these relationships rather than the programmer.
