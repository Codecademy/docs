---
Title: 'Enums'
Description: 'An enum is used to assign custom names to integral constants.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Enum'
  - 'Variable Types'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

An **enum** (enumeration) is a user-defined data type in C. It is used to assign names to integral constants. The principal purpose of these names is to create a program that is easy to read and maintain. It is defined using the `enum` keyword.

## Syntax

```pseudo
enum name
{
  memberName1 = <integral constant>,
  memberName2,
  memberName3,
  ...
  memberNameN
};
```

An enum is made up of members where each `memberName` can have a defined integral constant (e.g. 0, 10, 2) or just the `memberName`.

## Examples

If we do not explicitly assign values to `enum` `day`, the compiler by default assigns values starting from 0. For instance, `sunday` gets a value of 0, `monday` gets 1, and so on.

```c
#include <stdio.h>
enum fruits {apple, orange, banana, peach, grape};

int main()
{
    enum fruits d = banana;
    printf("The fruit number stored in d is %d", d);
    return 0;
}
```

This example results in the following output:

```shell
The fruit number stored in d is 2
```

Two `enum` names can have the same value. For instance, both `Running` and `In_Progress` have the same value of 1.

```c
#include <stdio.h>
enum State {Todo = 0, Running = 1, In_Progress = 1};
int main()
{
    printf("%d, %d, %d", Todo, Running, In_Progress);
    return 0;
}
```

This example results in the following output.

```shell
0, 1, 1
```

We can assign values to a particular name in any order. All unassigned names get value as the value of the previous name plus one.

```c
#include <stdio.h>
enum day {sunday = 1, monday, tuesday = 20,
          wednesday, thursday = 10, friday, saturday};

int main()
{
    printf("%d %d %d %d %d %d %d", sunday, monday, tuesday,
            wednesday, thursday, friday, saturday);
    return 0;
}
```

This example results in the following output:

```shell
1 2 20 21 10 11 12
```

> **Note:** All `enum` constants must be unique in their scope.
