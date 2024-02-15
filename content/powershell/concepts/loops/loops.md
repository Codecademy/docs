---
Title: 'Loops'
Description: 'Loops (for, foreach, while, do-while, do-until) execute the same statements multiple times until a stop condition is met.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Bash/Shell'
Tags:
  - 'Break'
  - 'Continue'
  - 'For'
  - 'ForEach'
  - 'Loops'
  - 'While'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

**Loops** enable programs to execute the same set of statements multiple times until a stop condition is met. There are five types of loops in PowerShell:

- `for`
- `while`
- `do`..`while`
- `do`..`until`
- `foreach`

## `for` Loop

The `for` loop executes the enclosed code until the given condition is met. It has three parts:

- The initialization of a counter variable
- The stop condition
- The increment/decrement of the counter variable

```shell
for ($i = 1; $i -le 5; $i++) {
  $square = $i * $i
  Write-Host "The square of" $i "is" $square
}
```

The above `for` loop prints squares of numbers up to `5`.

## `foreach` Loop

The `foreach` loop is specifically for iterating over items in an array.

```shell
$array = 51,12,31,4,15
foreach ($element in $array) {
  if ($element % 2 -eq 0) {
    Write-Host $element "is" Even
  } else {
    Write-Host $element "is" Odd
  }
}
```

The example above code is equivalent to using the `foreach` method of arrays:

```shell
$array.foreach({
  if ($PSItem % 2 -eq 0) {
    Write-Host $PSItem "is" Even
  } else {
    Write-Host $PSItem "is" Odd
  }
})
```

> **Note:** `$PSItem` can be replaced with its shorthand alias `$_`.

## `while` Loop

The `while` loop executes statements repeatedly as long as the condition is `True`. The following example counts by 3 until `$count` reaches `15`.

```shell
$count = 0
while($count -lt 15) {
  $count += 3
  Write-Host The count is $count
}
```

## `do`..`while` Loop

The `do`..`while` loop is a slight variation of the `while` loop in which statements are executed once before the condition is checked.

```shell
$answer = 4
do {
  $input = Read-Host "Guess my number"
} while ($input -ne $answer)
Write-Host "Correct!"
```

## `do`..`until` Loop

The `do`..`until` loop is the same as the `do`..`while` loop except that the loop exits when the condition is `True`.

```shell
$answer = 4
do {
  $input = Read-Host "Guess my number"
} until ($input -eq $answer)
Write-Host "Correct!"
```

## `break` and `continue` Statements

`break` and `continue` are special statements for exiting loops early and skipping iterations, respectively.

```shell
for ($i = 0; $i -lt 5; $i++) {
  if ($i -eq 2) {
    break
  }
  Write-Host $i
}
```

The above example prints `0` and `1` since the loop exits when `$i` becomes `2`. If `continue` is used instead of `break`, like in the example below, the iteration when `$i` is `2` is skipped and it prints `0`, `1`, `3`, `4`.

```shell
for ($i = 0; $i -lt 5; $i++) {
  if ($i -eq 2) {
    continue
  }
  Write-Host $i
}
```
