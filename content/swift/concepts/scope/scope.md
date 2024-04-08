---
Title: 'scope'
Description: 'Define and understand the different scope we can find in Swift'
Subjects: 'App Dev'
Tags: 
 - 'iOS'
 - 'Swift'
CatalogContent: 
 - 'Learn Swift'
---

# Scope in Swift

Scope in Swift refers to the visibility and accessibility of variables, constants, functions, and types within a particular context or block of code. Understanding scope is crucial for writing clean, efficient, and maintainable Swift code.

## Types of Scope

### 1. Global Scope

Variables, constants, functions, and types declared outside of any curly braces (`{}`) have global scope. They can be accessed from anywhere within the file in which they are defined, as well as from other files in the same module if they are declared with the `public` access level.

Example:
```
let globalConstant = 10

func globalFunction() {
    print("Hello, global!")
}
```

### 2. Local Scope
Variables, constants, functions, and types declared within a pair of curly braces ({}) have local scope. They are accessible only within the block of code in which they are defined.

Example:

```
func someFunction() {
    let localVariable = 20
    print(localVariable)
}
```

### 3. Block Scope
Certain control flow statements like if, for, while, and switch introduce block scope. Variables and constants declared within these blocks are accessible only within that block.

Example:

```
if condition {
    let blockVariable = 30
    print(blockVariable)
}
```

### 4. Function Scope
Variables and constants declared as parameters or within a function have function scope. They are accessible only within that function.

Example:

```
func myFunction() {
    let functionVariable = 40
    print(functionVariable)
}
```
### 5. Nested Scope

Swift allows for nested scopes, meaning you can have blocks of code within other blocks. Variables declared in outer scopes are accessible within inner scopes, but the reverse is not true.

Example:

```
func outerFunction() {
    let outerVariable = 50
    
    func innerFunction() {
        print(outerVariable) // Accessible
    }
    
    innerFunction()
}
```
