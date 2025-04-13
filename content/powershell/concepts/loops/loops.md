---
Title: 'Loops'
Description: 'Loops execute the same statements multiple times until a stop condition is met.'
Subjects:
  - 'Computer Science'
  - 'Bash/Shell'
Tags:
  - 'For'
  - 'ForEach'
  - 'Loops'
  - 'While'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

**Loops** enable programs to execute the same set of statements multiple times until a stop condition is met. They are widely used for performing operations such as iterating through a list of files, processing user input, or automating repetitive tasks.

There are five types of loops in PowerShell:

- `for`
- `foreach`
- `while`
- `do...while`
- `do...until`

## `for` Loop

The PowerShell `for` loop executes the enclosed code until the given condition is met.

### Syntax

```pseudo
for (<init>; <condition>; <repeat>) {
  <Statements>
}
```

**Parameters:**

- `<init>`: Initializes a counter [variable](https://www.codecademy.com/resources/docs/powershell/variables).
- `<condition>`: Specifies the stop condition.
- `<repeat>`: Increments/decrements the counter variable.

### Example: Basic Usage of `for` Loop

The following example uses the PowerShell `for` loop to calculate squares of the numbers 1-5:

```shell
for ($i = 1; $i -le 5; $i++) {
  $square = $i * $i
  Write-Host "The square of" $i "is" $square
}
```

The above code produces the following output:

```shell
The square of 1 is 1
The square of 2 is 4
The square of 3 is 9
The square of 4 is 16
The square of 5 is 25
```

## `foreach` Loop

The `foreach` loop is specifically used for iterating over items in a collection or [array](https://www.codecademy.com/resources/docs/powershell/arrays).

### Syntax

```pseudo
foreach ($<item> in $<collection>) {
  <Statements>
}
```

**Parameters:**

- `<item>`: A variable for iterating the collection or array.
- `<collection>`: The collection or array to iterate.

### Example: Basic Usage of `foreach` Loop

The following example uses the `foreach` loop to check if the elements of an array are even or odd:

```shell
$array = 51, 12, 31, 4, 15

foreach ($element in $array) {
  if ($element % 2 -eq 0) {
    Write-Host $element "is" Even
  } else {
    Write-Host $element "is" Odd
  }
}
```

The above code produces the following output:

```shell
51 is Odd
12 is Even
31 is Odd
4 is Even
15 is Odd
```

## `while` Loop

The `while` loop executes statements repeatedly as long as the condition is `True`.

### Syntax

```pseudo
while(<condition>) {
  <Statements>
}
```

**Parameters:**

- `<condition>`: The condition to evaluate.

### Example: Basic Usage of `while` Loop

The following example uses the `while` loop to increment numbers by 3 (starting from `0`) and print them until `count` is less than `15`:

```shell
$count = 0

while($count -lt 15) {
  $count += 3

  Write-Host The count is $count
}
```

The above code produces the following output:

```shell
The count is 3
The count is 6
The count is 9
The count is 12
The count is 15
```

## `do...while` Loop

The `do...while` loop is a slight variation of the `while` loop in which statements are executed once before the condition is checked.

### Syntax

```pseudo
do {
  <Statements>
} while (<condition>)
```

### Example: Basic Usage of `do...while` Loop

The following example uses the `do...while` loop to ask the user to guess the given number repeatedly until it's guessed correctly:

```shell
$answer = 4

do {
  $input = Read-Host "Guess the number"
} while ($input -ne $answer)

Write-Host "Correct!"
```

The above code produces the following output:

```shell
Guess the number: 2
Guess the number: 6
Guess the number: 4
Correct!
```

## `do...until` Loop

The `do...until` loop is the same as the `do...while` loop except that the loop exits when the condition is `True`.

### Syntax

```pseudo
do {
  <Statements>
} until (<condition>)
```

### Example: Basic Usage of `do...until` Loop

The following example uses the `do...until` loop to print numbers starting from `1` until the count reaches `5`:

```shell
$count = 1

do {
  Write-Output "Count is $count"

  $count++
} until ($count -eq 5)
```

The above code produces the following output:

```shell
Count is 1
Count is 2
Count is 3
Count is 4
```

## `break` and `continue` Statements

The `break` statement allows users to exit a loop before it ends.

The following example uses the `break` statement to exit a loop when the count reaches `2`:

```shell
for ($i = 0; $i -lt 5; $i++) {
  if ($i -eq 2) {
    break
  }

  Write-Host $i
}
```

The above code produces the following output:

```shell
0
1
```

The `continue` statement allows users to skip the current iteration in a loop and move to the next one.

The following example uses the `continue` statement to skip the iteration in the loop when the count is `4`:

```shell
for ($i = 0; $i -le 5; $i++) {
  if ($i -eq 4) {
    continue
  }

  Write-Host $i
}
```

The above code produces the following output:

```shell
0
1
2
3
5
```

## PowerShell Loops: When to Use Each

| **Loop Type** | **When to Use**                                                                   |
| ------------- | --------------------------------------------------------------------------------- |
| `for`         | The number of iterations is known in advance or a counter-based loop is required. |
| `foreach`     | Iterating over items in a collection, array, or pipeline output is needed.        |
| `while`       | The loop should continue as long as a specific condition remains true.            |
| `do...while`  | The loop must run at least once and continue while a condition is true.           |
| `do...until`  | The loop must run at least once and continue until a condition becomes true.      |

## Best Practices for Using PowerShell Loops

- **Avoid infinite loops**: Ensure loop conditions will eventually be false or use `break` statements to prevent endless execution.
- **Prefer `foreach` for collections**: When working with arrays or lists, `foreach` offers better readability and simplicity over `for`.
- **Keep loop bodies simple**: Maintain small, focused loop bodies; extract complex logic into separate [functions](https://www.codecademy.com/resources/docs/powershell/functions) for clarity.
- **Use comments**: When loops perform multiple actions or rely on tricky conditions, use comments to make the purpose of each part clear.
- **Validate input before loops**: Check input data or preconditions before entering the loop to prevent errors and unnecessary execution.

## Frequently Asked Questions

<details>
  <summary>Which loop is mostly used?</summary>
  <p>The foreach loop is mostly used in PowerShell, especially when working with arrays or collections, making scripts more readable and concise.</p>
</details>

<details>
  <summary>What is the difference between for and foreach loop in PowerShell?</summary>
  <p>The PowerShell for loop is used with a counter and is good for numeric iterations, whereas the foreach loop is used for looping through each item in a collection or array.</p>
</details>

<details>
  <summary>Which is faster, for or foreach?</summary>
  <p>In general, for can be slightly faster for simple numeric loops. However, foreach is often preferred for readability and simplicity when working with collections.</p>
</details>
