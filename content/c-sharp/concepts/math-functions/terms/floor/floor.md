---
Title: '.Floor()'
Description: 'Math.floor() rounds down and returns the largest whole integer less than or equal to the given number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Libraries'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/build-web-apps-with-asp-net'
---

**Math.floor()** is a static method that always rounds down and returns the largest whole integer less than or equal to the given number.

## Syntax
In C#, the Math.floor() method is used to find the largest whole integer which is less than or equal to the argument passed in.  The floor method accepts arguments in float and double format.

```pseudo
Math.floor(x);
```


## Example

```cs
public class Floor {
    public static void Example() {
        Math.floor(5.05);
        //returns 5
    }
}
```

## Codebyte Example (if applicable)

```codebyte/csharp
public class Floor {
    public static void example() {
        Math.floor(5.05);
        //returns 5
    }
}
```