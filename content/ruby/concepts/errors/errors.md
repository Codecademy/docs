---
Title: 'Errors'
Description: 'Ruby uses exceptions to report errors and other information when something in the program has gone wrong. If an error has ocurred, the Ruby program will end. For example: rb puts 2 / 0  This will result in: error'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Errors'
  - 'Exceptions'
  - 'Classes'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

Ruby uses exceptions to report errors and other information when something in the program has gone wrong.

If an error has ocurred, the Ruby program will end. For example:

```rb
puts 2 / 0
```

This will result in:

```error
Traceback (most recent call last):
        1: from errors_in_ruby.rb:1:in `<main>'
errors_in_ruby.rb:1:in `/': divided by 0 (ZeroDivisionError)
```

Some common errors are:

- `RuntimeError`
- `StandardError`
- `NoMethodError`
- `IOError`
- `TypeError`
- `ArgumentError`

## Rescuing Errors

Use the `rescue` keyword in a `begin...end` block to catch errors and report messages. The error can be as general as `StandardError` or as specific as `ZeroDivisionError`:

```rb
begin
  puts 2 / 0
rescue ZeroDivisionError
  puts "Can't divide by 0"
end
```
