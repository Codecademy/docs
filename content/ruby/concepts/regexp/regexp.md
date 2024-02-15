---
Title: 'RegExp'
Description: 'In Ruby, Regular Expressions (shortened as RegExp), are used to describe and match patterns in strings. This functionality is housed in the Regexp class. Regular expressions can be created in three ways: rb regexp1 = /code/ regexp2 = %r{code} regexp3 = Regexp.new("code") '
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Regular Expressions'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

In Ruby, Regular Expressions (shortened as RegExp), are used to describe and match patterns in strings. This functionality is housed in the `Regexp` class.

## Syntax

Regular expressions can be created in three ways:

```rb
# With / /
regexp1 = /code/

# With %r{ }
regexp2 = %r{code}

# With Regexp.new()
regexp3 = Regexp.new("code")
```

## Finding Patterns in Strings

To see if a given string matches a regular expression, use `.match()`.

```rb
puts regexp1.match("codecademy") # Output: code
```

To test if there even was a match (`true` or `false`), use `.match?()`:

```rb
puts regexp1.match?("codecademy") # Output: true
```
