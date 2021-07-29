---
Title: "User Input in Ruby"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Input"
  - "Strings"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-ruby"
  - "https://www.codecademy.com/learn/paths/web-development"
---

In Ruby, user input is made possible by the `#gets` method. During the executing of a Ruby program, when a line with the `#gets` method is read, the terminal is primed for input from the user. The input is returned as a string type after the `#gets` method is finished. 

```rb
name = gets 

puts "My name is #{name}!" 
# Output: 
# Melanie 
# My name is Melanie
# !
```

If just the `#gets` method is used, the keystroke on the "Enter" key is submitted with rest of the input, hence why thd `!` is on a new line. This can be avoided with the `#chomp` method:


```rb
name = gets.chomp

puts "My name is #{name}!"

# Output: 
# Brandon
# My name is Brandon!
```