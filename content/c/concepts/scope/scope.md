[**Scopes** are variables that are only accessible inside the region they are created]

## Local Scope Example

A variable created inside a function belongs to the local scope of that function, and can only be used inside that function:

```codebyte/js
void myFunction() {
  // Local variable that belongs to myFunction
  int x = 5;

  // Print the variable x
  printf("%d", x);
}

int main() {
  myFunction();
  return 0;
}
```

## Global Scope Example

A variable created outside of a function, is called a global variable and belongs to the global scope.

Global variables are available from within any scope, global and local:

```codebyte/js
// Global variable x
int x = 5;

void myFunction() {
  // We can use x here
  printf("%d", x);
}

int main() {
  myFunction();

  // We can also use x here
  printf("%d", x);
  return 0;
}
```




## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!