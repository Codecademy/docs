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

**Goroutines** are functions and methods that run concurrently in a Go program.

Although goroutines share some similarities with threads, there are important differences that include the following:

- Threads depend on the hardware of the host computer's operating system, whereas goroutines do not.
- Compared with threads, goroutines are cost-effective and use fewer resources to function.
- Goroutines do not use thread-local storage and, thus, do not have a unique ID.

Comparatively, goroutines are light-weight versions of threads that operate within the context of the Go runtime.

## Syntax

```pseudo
func myFunction(parameter) returnType {
  // function body
}

go myFunction()
```

A goroutine is started by invoking a previously defined function or method, `myFunction()`, with the `go` keyword.

> **Note:** For any goroutines to run, the `main()` function must be defined and executed. When the `main()` function terminates, the program will be terminated, and no other goroutine will run.

## Example

In the following example, a goroutine is defined to print out text. Inside the `main()` function, `myGoroutine()` is called with the `go` keyword and causes a time delay of 2 seconds with `time.Sleep()` before printing the text:

```go
package main
import (
  "fmt"
  "time"
)

func myGoroutine() {
  fmt.Println("This is my first goroutine")
}

func main() {
  go myGoroutine()
  time.Sleep(2 * time.Second)
  fmt.Println("This is the main function")
}
```

This results in the following output:

```shell
This is my first goroutine
This is the main function
```

> **Note:** When a goroutine is started, the goroutine call returns immediately. The program does not wait for the goroutine to finish executing. After the goroutine call, the program continues the next line of code, and any return values from the goroutine are ignored. The `time.Sleep()` function keeps the `main()` function running while the `myGoroutine()` function executes. Without the two seconds waiting time in the `time.Sleep()` function, the second print statement could be immediately completed, and the `main()` function could terminate before the goroutine is completed.

## Codebyte Example

The example below defines a `print()` function to print out a string, which is first called as a goroutine and then as a regular function:

```codebyte/golang
package main
import (
  "fmt"
  "time"
)

// define a function
func print(text string) {
  fmt.Println(text)
}

func main() {
  // call goroutine
  go print("This text is from the goroutine.")

  // call function
  print("This text is from the main function.")

  time.Sleep(time.Second * 1)
}
```
