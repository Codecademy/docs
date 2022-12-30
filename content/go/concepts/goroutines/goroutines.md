---
Title: 'Goroutines'
Description: 'Goroutines are functions and methods that run concurrently with other functions and methods.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Control Flow'
  - 'Threads'
  - 'Concurrency'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

**Goroutines** are functions and methods that run concurrently with other functions and methods.

## The difference between threads and goroutines

Threads are different processes within a program that are running at the same time. Threads are created by the program; they are smaller and lighter processes and have their own flow of control. Running multiple processes simultaneously allows complex programs to run without holding up the execution of the rest of the program. Go supports multi-threading with goroutines. Goroutines are lightweight threads managed by the Go runtime.

## Syntax

To start a goroutine, invoke a previously defined function or method with the `go` keyword:

```pseudo
func myFunction(parameter) returnType {
   //body of the function
}

go myFunction()
```

In the code above, after the `myFunction()` function is defined. Then it is invoked with the `go` keyword. The function `myFunction()` will run concurrently with the calling function.

> **Note:** for any goroutines to run, the main goroutine should be running. When the main goroutine terminates, the program will be terminated, and no other goroutine will run.

## Example

In the example below, the `myGoroutine()` function is defined to print out the sentence `This is my first goroutine!`. The `myGoroutine()` function is called as a goroutine with the `go` keyword inside the `main` function. Then the `main` function is set to wait two seconds with the 'time.Sleep()' function and then print out the sentence `This is the main function.`.

```go
func myGoroutine() {  
    fmt.Println("This is my first goroutine!")
}

func main() {  
    go myGoroutine()
    time.Sleep(2 * time.Second)
    fmt.Println("This is the main function.")
}
```

This example results in the following output:

```shell
This is my first goroutine!
This is the main function.
```

> **Note:** When a goroutine is started, the goroutine call returns immediately. The control does not wait for the goroutine to finish executing. The control continues the next line of code after the goroutine call and any return values from the goroutine are ignored.

## Codebyte Example

```codebyte/golang

```
