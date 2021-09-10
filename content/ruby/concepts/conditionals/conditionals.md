---
Title: 'Conditionals'
Description: 'Conditionals control the flow of execution of your program based on conditions that you define. Conditionals are the decision-making statements in your program. Decides if a block of code will be executed or not based on whether a condition is true. ruby age = 17 if (age >= 16) puts "You are eligible to get your drivers license." end'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Conditionals'
  - 'Control Flow'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

Conditionals control the flow of execution of your program based on conditions that you define. Conditionals are the decision-making statements in your program.

## If Statements

Decides if a block of code will be executed or not based on whether a condition is true.

```ruby
age = 17

if (age >= 16)
  puts "You are eligible to get your driver's license."
end

# Output: You are eligible to get your driver's license.
```

## If - Else Statements

If the condition in an if statement is false, the block of code in the else statement will be executed.

```ruby

age = 15

if (age >= 16)
  puts "Can you drive me to the store?"
else
  puts "Can you walk with me to the store?"
end

# Output: Can you walk with me to the store?
```

## If - Elseif - Else Statements

If the `if` statement is not true, the block of code in the `elseif` statement will be executed if the condition is true. There may me multiple `elseif` statements. Finally, if none of the conditions are true, the block of code in the `else` statement will be executed.

```ruby
age1 = 35
age2 = 26
age3 = 19
age4 = 17
age5 = 15

def things_you_can_do(age)
  if (age >= 35)
    puts "You can run for president."
  elsif (age >= 25)
    puts "You can rent a car."
  elsif (age >= 18)
    puts "You can vote."
  elsif (age >= 16)
    puts "You can get a driver's license."
  else
    puts "You still have your youth!"
  end
end

things_you_can_do age1
things_you_can_do age2
things_you_can_do age3
things_you_can_do age4
things_you_can_do age5

# Output: You can run for president.
# Output: You can rent a car.
# Output: You can vote.
# Output: You can get a driver's license.
# Output: You still have your youth!
```

## Ternary Statements

A shorter version of the if statement. It will evaluate an expression, if true, it will execute the code following the `?`. If false, execute the code following the `:`.

```ruby
# Example of condition evaluating to true
age1 = 19

can_vote = (age1 >= 18) ? "You can vote." : "You can't vote."

puts can_vote
# Output: You can vote.

# Example of condition evaluating to false
age2 = 17

can_vote = (age2 >= 18) ? "You can vote." : "You can't vote."

puts can_vote
# Output: You can't vote.
```
