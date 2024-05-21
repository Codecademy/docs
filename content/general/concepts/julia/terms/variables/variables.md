---
Title: 'Variables'
Description: Stores data that can be manipulated and referenced throughout the code.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Programming'
  - 'Dynamic Programming'
CatalogContent:
  - paths/code-foundations'
  - 'paths/computer-science'
---

Variables are a fundamental concept in any programming language, and Julia is no exception. In Julia, variables are used to store data that can be manipulated and referenced throughout your code.

```julia
x = 13                # x is an integer
y = 3.1415            # y is a floating-point number
name = "Julia"        # name is a string

println("x: $x, y: $y, name: $name")
# Output: x: 13, y: 3.1415, name: Julia
```

## Declaring Variables

In Julia, declaring a variable is straightforward. You simply assign a value to a variable name using the `=` operator. Julia is dynamically typed, meaning you don’t need to explicitly declare the type of a variable; Julia infers it automatically.

```julia
x = 9       # x is an integer
y = 6.62    # y is a floating-point number
name = "Julia" # name is a string
```

## Variable Names

Variable names in Julia must start with a letter `(A-Z or a-z)` or an underscore `_`, and can be followed by letters, digits `(0-9)`, or underscores. Julia variable names are case-sensitive.

```julia
myVar = 20
MyVar = 30  # Different from myVar
```

## Constants

If you want to define a variable that should not be changed, you can use the `const` keyword. Constants can improve code readability and performance by signaling that a variable's value will remain constant.

```julia
const PI = 3.14159
```

## Reassigning Variables

Variables in Julia can be reassigned to new values of the same or different types.

```julia
val = 5        # val is initially an integer
val = "Hello"  # val is now a string
```

## Type Declarations

Although Julia is dynamically typed, you can explicitly declare the type of a variable using a double colon `::`. This can be useful for performance optimization and type-checking.

```julia
val1::Int = 14
val2::Float64 = 3.14
```

## Scope of Variables

The scope of a variable refers to the context in which it is defined and accessible. Julia has two main types of scope: global and local.

### Global Scope

Variables defined outside any function or block have a global scope and can be accessed from anywhere in the script.

```julia
value = 100  # global variable

function print_value()
    println(value)
end

print_value()
# Output: 100
```

### Local Scope

Variables defined within a function, loop, or other blocks have a local scope and can only be accessed within that context.

```julia
function calculate_circle_area(radius)
    pi = 3.14  # local variable
    return pi * radius^2
end

println(pi)
# This would result in an error as pi is not defined globally
```
