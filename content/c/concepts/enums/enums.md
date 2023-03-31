
# Enum

A **enum** (enumeration) is a user-defined data type in C. It is mainly used to assign names to integral constants, the names make a program easy to read and maintain. It is defined using the `enum` keyword.

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

An enum is made up of members where each `memberName` can have a defined integral constant (i.e. 0, 10, 2) or just the `memberName`.

## Example

The following example uses the `enum` keyword to create a `day` enumeration:

```c
enum day {
	Sunday, 
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday
};
```

`Sunday` will be setvalue 0, `Monday` will be set to a value of 1, and so  `Patient` structure.

## Another Example

```c

// Another example program to demonstrate working
// of enum in C
#include<stdio.h>
 
enum year{Jan, Feb, Mar, Apr, May, Jun, Jul,
          Aug, Sep, Oct, Nov, Dec};
 
int main()
{
   int i;
   for (i=Jan; i<=Dec; i++)   
      printf("%d ", i);
   
   return 0;
}
```

### Output

```c
0 1 2 3 4 5 6 7 8 9 10 11
```

## Note

### 1. Two enum names can have the same value. For example, in the following C program both ‘Failed’ and ‘Freezed’ have the same value 0.

```c
#include <stdio.h>
enum State {Working = 1, Failed = 0, Freezed = 0};
int main()
{
    printf("%d, %d, %d", Working, Failed, Freezed);
    return 0;
}
```

#### Output

```shell
1, 0, 0
```

### 2. If we do not explicitly assign values to enum names, the compiler by default assigns values starting from 0. For example, in the following C program, Sunday gets a value of 0, Monday gets 1, and so on.

```c
#include <stdio.h>
enum day {sunday, monday, tuesday, wednesday, thursday, friday, saturday};
 
int main()
{
    enum day d = thursday;
    printf("The day number stored in d is %d", d);
    return 0;
}
```

#### Output

```shell
The day number stored in d is 4
```

### 3. We can assign values to a particular name in any order. All unassigned names get value as the value of the previous name plus one.

```c
#include <stdio.h>
enum day {sunday = 1, monday, tuesday = 5,
          wednesday, thursday = 10, friday, saturday};
 
int main()
{
    printf("%d %d %d %d %d %d %d", sunday, monday, tuesday,
            wednesday, thursday, friday, saturday);
    return 0;
}
```

#### Output

```shell
1 2 5 6 10 11 12
```

### 4. The value assigned to enum names must be some integral constant, i.e., the value must be in the range from minimum possible integer value to maximum possible integer value.

### 5.  All enum constants must be unique in their scope. For example, the following program fails in compilation.
