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

## Difference From Threads

When executing a program the application uses a thread. It is a unit that executes the code under the program. So every program has logic and a thread is responsible for executing this logic.

## Syntax

To start a goroutine invoke a function or method with the `go` keyword:

```pseudo
func myFunction(parameter) returnType {
   //body of the function
}

go myFunction()
```

In the code above, `myFunction()` function was created with the `func` keyword. The function can take one or multiple arguments when invoked. The `parameter` is an optional placeholder for the argument(s). The function can return a list of values. If it does, the `returnType` is required to specify the values the function returns. The `body of the function` contains the statements that the function executes.

After the `myFunction()` function is defined, it is invoked with the `go` keyword. The function `myFunction()` will run concurrently with the calling function.

## Example

In the example below, the `myGoroutine` function is defined to print out the sentence `This is my first goroutine!`. The `myGoroutine` function is called as a goroutine with the `go` keyword inside the `main` function. The `main` function is set to wait one second and then print out the sentence `This is the main function.`.

```go
func myGoroutine() {  
    fmt.Println("This is my first goroutine!")
}

func main() {  
    go myGoroutine()
    time.Sleep(1 * time.Second)
    fmt.Println("This is the main function.")
}
```

This example results in the following output:

```shell
This is my first goroutine!
This is the main function.
```

The `myGoroutine` prints out the sentence first, as the `go` keyword starts a new thread while the `main` function waits one second.

## Codebyte Example

```codebyte/golang

```
