---
Title: 'Switch' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Evaluates an expression or variable to execute a code of block if the expression's result matches a case value.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code Foundations'
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Control Flow'
  - 'If'
  - 'Else'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-c'
  - 'paths/computer-science'
---

In C, the **`switch case`** statement is one that allows us to execute a block of code, like you would if were to use the `if..else-if..else` statement.  A main difference here, though, is that this statement is much easier to read and write.

However, it can only evaluate one expression or variable at a time.

## Syntax

```
switch(expression) {
    case value1:
	//enter code here
	break;
    case value2:
	//enter code here
	break;
    case value_n:
	//enter code here
	break;
    default:
	//enter code here
}
```

Here's how the switch-case statement works:

1. The switch `expression` is evaluated only once
2. The value of the expression will be compared with the values of each `case`, and if there is a match with a provided `case`, its corresponding block of code is executed.  If there is no code block provided in the case, it moves on right to the next case until it finds a case where there is a code block, and executes that code block there.
3. The `break` keyword breaks out of the switch block, and stops any further executions of statements in the switch.  The program now exits the switch.
4. The code inside the `default` case is executed if none of the above cases are matched with the resulting value of the expression.  This case is optional, and acts just like the `else` in an `if..else-if..else` statement -- it acts as a "catch-all" case.

The expression or variable's resulting value must be of a type in which it can be considered an integral or enumerated type.  Examples of valid result types for switch-case expressions are `int`, `double`, `float`, and `char`.  (Remember that characters, which have type `char`, are integral, because they have integer ASCII codes.)  This statement will not be valid for expressions or variables that, for example, result in a string value.

## Example 1: Evaluating a variable

Let's say we want to print out some statements to a student based on a grade they got on a test or quiz.

```c
#include <stdio.h>

int main(){
    char grade = 'B';
    switch(grade){
	case 'A':
	    printf("Excellent!\n");
	    break;
	case 'B':
	case 'C':
	    printf("Good job!\n");
	    break;
	case 'D':
	    printf("Okay, you passed.\n");
	    break;
	case 'F':
	    printf("Better try again...\n");
	    break;
	default:
	    printf("Invalid grade!!!\n");
    }
  
    printf("Your grade is %c\n", grade);

    return 0;

    /**************************************
    Should output:

    Good job!
    Your grade is B
    **************************************/
}
```

Notice that the case for the grade `B` did not have a code block on its own -- not even a `break` keyword, so the switch statement went to the next case of `C` and executed the block of code there.

## Example 2: Evaluating an expression

Let's see if the addition of 2 numbers results in either a total of 5 or 4.

```c
#include <stdio.h>

int main(){
    int num1 = 1;
    int num2 = 3;

    switch(num1 + num2){
	case 5:
	    printf("The addition of %d and %d results in 5\n", num1, num2);
	    break;
	case 4:
	    printf("The addition of %d and %d results in 4\n", num1, num2);
	default:
	    printf("The addition of %d and %d does not result in either 3 or 4\n", num1, num2);
    }

    /**************************************
    Should output:

    The addition of 1 and 3 results in 4
    **************************************/
  
}
```

Just as aforementioned, you can use a switch-case statement to evaluate the value of not just a variable, but also an expression, as long as the expression results in one value that is either a number or something containing a numerical value.
