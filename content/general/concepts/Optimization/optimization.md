---
Title: 'Optimization in Programming' 

Description: 'Optimization in programming is the process of modifying a software system to make some aspect of it work more efficiently or use fewer resources' 

Subjects: 
  - 'Computer Science'
  - 'Code Foundations'

Tags: 
  - 'Algorithms'
  - 'Data Structures'
  - 'Memory'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

In computer science, **program optimization, code optimization, or software optimization**, is the process of modifying a software system to make some aspect of it work more efficiently or use fewer resources.In general, a computer program may be optimized so that it executes more rapidly, or to make it capable of operating with less memory storage or other resources, or draw less power.

## Levels Of Optimization

There are number levels in which **optimization** can occur. The higher the level the greater is the impact and are harder to change later on in the project, requiring significant changes or a complete rewrite if they need to be changed. Thus optimization can typically proceed via refinement from higher to lower, with initial gains being larger and achieved with less work, and later gains being smaller and requiring more work. However, in some cases overall performance depends on performance of very low-level portions of a program, and small changes at a late stage or early consideration of low-level details can have outsized impact.

## Design Level

At the highest level, the design may be optimized to make best use of the available resources, given goals, constraints, and expected use/load. The architectural design of a system overwhelmingly affects its performance. Choice of design depends on the goals: when designing a compiler, if fast compilation is the key priority, a one-pass compiler is faster than a multi-pass compiler (assuming same work), but if speed of output code is the goal, a slower multi-pass compiler fulfills the goal better, even though it takes longer itself. Choice of platform and programming language occur at this level, and changing them frequently requires a complete rewrite

## Algorithms and Data Structures

A good choice of efficient algorithms and data structures, and efficient implementation of these algorithms and data structures comes next. After design, the choice of algorithms and data structures affects efficiency more than any other aspect of the program. Generally data structures are more difficult to change than algorithms, as a data structure assumption and its performance assumptions are used throughout the program, though this can be minimized by the use of abstract data types [data type](https://www.codecademy.com/resources/docs/general/data-types) in function definitions, and keeping the concrete data structure definitions restricted to a few places. 

## Source Code Level

Apart from general algorithms and their implementation on an abstract machine, concrete source code level choices can make a significant difference. For example, on early C compilers, while(1) was slower than for(;;) for an unconditional loop, because while(1) evaluated 1 and then had a conditional jump which tested if it was true, while for (;;) had an unconditional jump . Some optimizations (such as this one) can nowadays be performed by optimizing compilers. This depends on the source language, the target machine language, and the compiler, and can be both difficult to understand or predict and changes over time; this is a key place where understanding of compilers and machine code can improve performance.

## Build Level

Between the source code and compile level, directives and build flags can be used to tune performance options in the source code and compiler respectively, such as using preprocessor defines to disable unneeded software features, optimizing for specific processor models or hardware capabilities, or predicting branching, for instance. Source-based software distribution systems such as BSD's Ports and Gentoo's Portage can take advantage of this form of optimization.

## Compiler Level

Use of an optimizing compiler tends to ensure that the executable program is optimized at least as much as the compiler can predict.
Optimizing Compiler - In computing, an optimizing compiler is a compiler that tries to minimize or maximize some attributes of an executable computer program. Common requirements are to minimize a program's execution time, memory footprint, storage size, and power consumption (the last three being popular for portable computers). 

## Runtime

Just-in-time compilers can produce customized machine code based on run-time data, at the cost of compilation overhead. This technique dates to the earliest regular expression engines, and has become widespread with Java HotSpot and V8 for JavaScript. In some cases adaptive optimization may be able to perform run time optimization exceeding the capability of static compilers by dynamically adjusting parameters according to the actual input or other factors. Also, self-modifying code can alter itself in response to run time conditions in order to optimize code; this was more common in assembly language programs. Some of the CPU designs can perform some optimizations at run time.

## Platform Dependent And Independent Optimizations 

**Optimization in programming or code optimization** can be categorized as both platform-dependent and platform-independent techniques. While the latter ones are effective on most or all platforms, platform-dependent techniques use specific properties of one platform, or rely on parameters depending on the single platform or even on the single processor. Writing or producing different versions of the same code for different processors might therefore be needed.