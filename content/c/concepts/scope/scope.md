---
Title: C Scope
Description: 'scope defines the region of a program where a variable can be accessed.'
Subjects:
  - 'Computer Science'
  - 'C'
  - 'Web Development'
Tags:
  - 'variables'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

[In C, **Scopes** defines the region of a program where a variable can be accessed. Variables in C are categorized based on their scope into local and global. Let's explore each:]

## Local Scope Example

A variable declared inside a function is said to have local scope. It can only be accessed and used within that function.

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

In this example, the variable x is created and used within myFunction. Trying to access x outside of myFunction will result in an error.

## Global Scope Example

Variables declared outside of any function have global scope. Such variables can be accessed and modified from any function in the program.

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

In this example, the variable x is declared globally and is accessible both in main and myFunction.

By distinguishing between local and global scopes, C ensures controlled variable access and better memory management, making it easier to track and debug code.