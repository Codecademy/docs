---
Title: "Variables in C++"
Subjects:
  - "Computer Science"
  - "Game Development"
Tags: 
  - "Variables"
  - "Data Types"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

A variable refers to a storage location in the computer’s memory that one can set aside to save, retrieve, and manipulate data.

## Declare a Variable

To create a variable, you must specify the type and assign it a value:

```pseudo
type name = value;
```

So to create a variable called `score` of type `int` and assign it the value 0:

```cpp
int score = 0;
```

## Display Variables

The `std::cout` object is used together with the `<<` operator to display variables.

To combine both text and a variable, separate them with the `<<` operator:

```codebyte/cpp
int myAge = 30;

cout << "I am " << myAge << " years old.";
```

The output would be:

```bash
I am 30 years old.
```