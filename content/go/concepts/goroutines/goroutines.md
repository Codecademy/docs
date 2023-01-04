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

Although goroutines share some similarities with threads, goroutines are not threads. Threads are different processes within a program that are running at the same time. Threads are created by the program; they are smaller and lighter processes and have their own flow of control. Running multiple processes simultaneously allows complex programs to run without holding up the execution of the rest of the program. Go supports multi-threading with goroutines. Goroutines are lightweight threads managed by the Go runtime.

## Syntax
```pseudo
func myFunction(parameter) returnType {
   // function body
}

go myFunction()
```

In the code above the `myFunction()` function is defined. Then the function is invoked with the `go` keyword. `myFunction()` will run concurrently with the calling function.

> **Note:** for any goroutines to run, the `main()` function should be running. When the `main()` function terminates, the program will be terminated, and no other goroutine will run.

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

This example results in the following output:

```shell
This is my first goroutine
This is the main function
```

> **Note:** When a goroutine is started, the goroutine call returns immediately. The program does not wait for the goroutine to finish executing. After the goroutine call, the program continues the next line of code, and any return values from the goroutine are ignored. The `time.Sleep()` function keeps the `main()` function running while the `myGoroutine()` function executes. Without the two seconds waiting time in the `time.Sleep()` function, the second print statement could be immediately completed, and the `main()` function could terminate before the goroutine is completed.

## Codebyte Example

The example below defines a function called `print()` to print out a string, which is first called as a goroutine and then as a function:

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
