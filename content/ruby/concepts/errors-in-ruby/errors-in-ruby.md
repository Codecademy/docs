---
Title: "Errors in Ruby"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Classes"
  - "Errors"
  - "Exceptions"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-ruby"
  - "https://www.codecademy.com/learn/paths/web-development"
---

Ruby uses exceptions to report errors and other information when something in the program has gone wrong. 

If an error has ocurred, the Ruby program will end: 

```rb
puts 2 / 0

=begin
Output: 
Traceback (most recent call last):
        1: from errors_in_ruby.rb:1:in `<main>'
errors_in_ruby.rb:1:in `/': divided by 0 (ZeroDivisionError)
=end
```

## Rescuing Errors

Use the `rescue` keyword in a `begin...end` block to catch errors and report messages. The error can be as general as `StandardError` or as specific as `ZeroDivisionError`:

```rb
begin
    puts 2 / 0
rescue ZeroDivisionError
    puts "Can't divide by 0"
end
```