---
Title: 'Comments'
Description: 'Comments are text within a program that are not executed by the compiler that may aid in describing what is happening in the code.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

**Comments** are text within a program that are not executed by the compiler that may aid in describing what is happening in the code.

## Single-line Comments

Single-line comments start with a `#`.

```rb
# I am a single line comment.
```

## Multi-line Comments

Multi-line comments start with `=begin` and end with `=end`.

```rb
=begin
I am a multi line comment.
I can take as many lines as needed.
=end
```

## Example

The example below shows how single-line comments can be used in code.

```rb
# This example uses a loop to sum only the even values
count = 0

for i in 1..10 do
  if (i % 2 == 0)
    count += i
  end
end

puts count
# Yields a total of 30
```
