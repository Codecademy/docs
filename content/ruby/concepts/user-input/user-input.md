---
Title: 'User Input'
Description: 'In Ruby, user input is made possible by the #gets method. During the executing of a Ruby program, when a line with the #gets method is read, the terminal is primed for input from the user. The input is returned as a string type after the #gets method is finished. rb name = gets puts "My name is #{name}!"  The output would be: '
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Input'
  - 'Strings'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

In Ruby, user input is made possible by the `#gets` method. During the executing of a Ruby program, when a line with the `#gets` method is read, the terminal is primed for input from the user. The input is returned as a string type after the `#gets` method is finished.

```rb
name = gets

puts "My name is #{name}!"
```

The output would be:

```
Melanie
My name is Melanie
!
```

If just the `#gets` method is used, the keystroke on the <kbd>Enter</kbd> key is submitted with rest of the input, hence why the `!` is on a new line. This can be avoided with the `#chomp` method:

```rb
name = gets.chomp

puts "My name is #{name}!"
```

The output would be:

```
Brandon
My name is Brandon!
```
