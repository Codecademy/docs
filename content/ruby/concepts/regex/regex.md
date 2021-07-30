---
Title: "RegEx"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Regular Expressions"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-ruby"
  - "https://www.codecademy.com/learn/paths/web-development"
---

In Ruby, regular expressions are used to describe and match patterns in strings. This functionality is housed in the `Regexp` class. 

## Syntax 

Regular expressions can be created in three ways: 

```rb
# with / /
regexp1 = /code/

# with %r{ }
regexp2 = %r{code}

# with Regexp.new()
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