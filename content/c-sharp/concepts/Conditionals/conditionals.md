---
Title: 'conditionals'
Description: 'Compares inputs and gives an boolean output depending on it being True or False.'
Subjects:
  - 'Computer Science'
  - 'Web Dev'
  - 'App Dev'
  - 'Game Dev'
Tags:
  -
CatalogContent:
  - 'Learn C#'
---

## Explanation

Below we'll follow the `if`, `else` and, `else if` statements one by one while expanding the example.

## if statements

An `if statement` compares two values and returns a value `if` true.

## Example 1
```cs

var input1 = 10;
var input2 = 10;
var output;

if (input1 === input2){
    output = true; // sets the value of output to true.
}
```

If the code above did not return true the code below will return false.

```cs
if(output === true){
    Console.WriteLine('I returned true')
}

```
>**note** `===` means equal. `!==` means not equal. 

## Explanation of example 1

We start by creating three variables (`var`) and assigning a value to two of them. The third variable will be assigned in a later stage of the code.

After creating the variables we start our `if statement`.

`if` input1 is equal to input 2 then set the variable of output to true. In our example, input1 was equal to input 2. The `if statement` check was true so it ran the code setting the value of output to true. 

after that, we wrote a second `if statement` which checked if the output was equal to true. The output of this was true so it ran the code and wrote *I returned true* to the console. if the first `if statement` would have been false. The output would not get assigned a value and the second `if statement` would return false meaning no text will be written to the console.

## else statements

A `else statement` goes in combination with the `if statement` and returns a value `if` false.

## Example 2
```cs

var input1 = 10;
var input2 = 10;
var output;

if (input1 !== input2){
    output = true; // sets the value of output to true.
} else {
    output = false; // sets the value of output to false.
}

if(output === true){
    Console.WriteLine('I returned true')
} else {
    return
}

```

## Explanation of example 2

We again start by creating three variables (`var`) and assigning a value to two of them. The third variable will be assigned in a later stage of the code.

After creating the variables we again start our `if statement`.

`if` input1 is not equal to input 2 then set the variable of output to false. In our example, input1 was equal to input 2. The `if statement` check was false so it ran the code setting the value of output to false. 

after that, we wrote a second `if statement` which checked if the output was equal to true. The output of this was false so it ran no code and wrote nothing to the console. if the first `if statement` would have been true. The variable output would get assigned to true and the second `if statement` would return true meaning the text *I returned true* would we have written in the console. 

## else if statements

An `else if statement` comes after an `if statement` if more comparing is needed and before an `else statement` we've added another variable to the mix.

## Example 3
```cs

var input1 = 10;
var input2 = 10;
var input3 = 5;
var output;

if (input1 === input3){
    output = true; // sets the value of output to true.
} else if (input1 === input2){
    output = true; // sets the value of output to true.
} else {
    output = false; // sets the value of output to false.
}

if(output === true){
    Console.Writeline('I returned true')
} else if (output === false) {
    Console.Writeline('I returned false')
} else {
    return
}

```

## Explanation of example 3

We now start by creating four variables (`var`) and assigning a value to three of them. The fourth variable will be assigned in a later stage of the code.

After creating the variables we again start our `if statement`.

`if` input1 is equal to input3 then set the variable of output to true. In our example, input1 was not equal to input3. The `if statement` check was false so it ran the next part of the code.

`else if` input1 is equal to input2 then set the variable of output to true. In our example, input1 was equal to input2 setting the value of output to true. 

If this was also false the `else statement` would run setting the value of output to false.

after that, we wrote a second `if statement` which checked if the variable output was equal to true. The output of this was true so it wrote *I returned true* to the console. if the first `if statement` would have been false the `else if statement` would run. This would check if output was equal to false. This would have been true and written *I returned false* to the console.

## Ternary operator

The conditional operator `?:` also known as the `ternary conditional operator` checks a boolean output and returns one of the two results depending on it being true or false. 

## Example 4
```cs

string getInput1(input1) => input1 === 10 ? "I returned true" : "I returned false";

Console.WriteLine(getInput1(10)); // Prints to the console "I returned true"
Console.WriteLine(getInput1(5)); // Prints to the console "I returned false"

```

## Explanation of example 4

`A Ternary operator` can be read as followed: *is this `condition` true ? yes : no. If the `condition` is true it returns yes and if it's false it returns no.

In our example, we checked if input1 is equal to 10. If this is true it returns *I returned true*. If this is false it returns *I returned false*. 