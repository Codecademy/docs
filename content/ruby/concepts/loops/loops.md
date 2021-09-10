---
Title: 'Loops'
Description: 'Loops are used to repeat a task a number of times. A loop runs a set of instructions or functions a given amount of times as long as a condition is met. The most common loop in Ruby is the for loop. Other loops are while, until, and do...while. This loop is utilized when you know beforehand how many times you want to repeat the task. ruby for i in 1..5 do puts "Message number #{i}" end '
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Loops'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

Loops are used to repeat a task a number of times. A loop runs a set of instructions or functions a given amount of times as long as a condition is met. The most common loop in Ruby is the `for` loop. Other loops are `while`, `until`, and `do...while`.

## For Loops

This loop is utilized when you know beforehand how many times you want to repeat the task.

```ruby
for i in 1..5 do
  puts "Message number #{i}"
end
```

- The `for` keyword indicates the beginning of a loop.
- `i` is our variable.
- The `in` keyword indicates the range of numbers you want to loop over.
- The `do` keyword indicates the instructions you want to repeat.
- The `end` keyword indicates the end of the loop.

The output would be:

```bash
Message number 1
Message number 2
Message number 3
Message number 4
Message number 5
```

## While Loops

The `for` loop is used when you know how many times you want to repeat the task, the `while` loop is used when you don't know how many times you want to repeat the task.

```ruby
i = 1

while i <= 5 do
  puts "Message number #{i}"
  i = i + 1
end
```

- The `while` keyword indicates the beginning of a loop.
- `i <= 5` indicates that the loop will continue as long as `i` is less than or equal to `5`.
- The `do` keyword indicates the instructions you want to repeat.
- The `end` keyword indicates the end of the loop.

The output would be:

```bash
Message number 1
Message number 2
Message number 3
Message number 4
Message number 5
```

## Do...While Loops

The `do...while` loop is used when you don't know how many times you want to repeat the task. The `while` loop is used when you want to check a condition before the first loop. `do...while` loops are used when you want to check a condition in the loop body after executing the statements. the `do...while` loop will run at least once.

```ruby
i = 1

loop do
  puts "Message number #{i}"

  i = i + 1
  if i == 6
    break
  end
end
```

- The `loop` keyword indicates the beginning of a loop.
- `if i == 6` is the condition that will break the loop.
- The `do` keyword indicates the instructions you want to repeat.
- The `end` keyword indicates the end of the loop.
- The `break` keyword indicates the end of the loop.

The output would be:

```bash
Message number 1
Message number 2
Message number 3
Message number 4
Message number 5
```

## Until Loops

The `for` loops, `while` loops, and `do...while` loops run until a condition is no longer true. The `until` loops run until a condition is true.

```ruby
i = 1

until i == 6 do
  puts "Message number #{i}"
  i = i + 1
end
```

- The `until` keyword indicates the beginning of a loop.
- `i == 6` is the condition that will end the loop when true.
- The `do` keyword indicates the instructions you want to repeat.
- The `end` keyword indicates the end of the loop.

The output would be:

```bash
Message number 1
Message number 2
Message number 3
Message number 4
Message number 5
```
