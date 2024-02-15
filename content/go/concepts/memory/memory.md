---
Title: 'Memory'
Description: 'The Go memory model specifies the rules for how memory is accessed and modified in concurrent programs.'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Concurrency'
  - 'Data Structures'
  - 'Memory'
  - 'Variables'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
  - 'paths/computer-science'
---

The Go memory model is a set of rules that dictate how memory operations can be performed in a concurrent program. These rules specify the order in which memory operations must be performed and how they can be observed by different threads.

## Memory Operations

In Go, the concurrent execution of multiple threads includes basic operations that can be performed on memory:

### 1. Reading

This operation involves accessing a memory location and obtaining the value stored at that location. For example:

```go
x := 10
y := x
```

In this code, the value of `x` is read and stored in the variable `y`.

### 2. Writing

This operation involves storing a value in a specific memory location. For example:

```go
x := 10
y := 20
x = y
```

In this code, the value of `y` is written to the memory location associated with `x`.

### 3. Allocating

This operation involves creating a new block of memory and returning a pointer to the start of the block. In Go, this can be done using the `new` function:

```go
x := new(int)
```

This code creates a new block of memory for an `int` value and stores a pointer to the start of the block in the variable `x`.

### 4. Freeing

This operation involves releasing a block of memory that is no longer needed so that it can be reused in the program. In Go, memory is automatically managed using a garbage collector, so explicit freeing of memory is not usually necessary.

## Concurrent Access to Shared Memory

One important aspect of the Go memory model is that it allows multiple threads to access shared memory concurrently. This feature allows Go programs to take advantage of multiple CPU cores and improve performance. Access to the shared data within memory should be serialized.

## Ordering of Memory Operations

The Go memory model also requires that certain memory operations be performed in a specific order to ensure that the program behaves correctly. For example, a write operation must occur before a read operation which depends on the written value.
