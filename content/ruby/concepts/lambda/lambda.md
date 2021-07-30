---
Title: "Lambda"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Block"
  - "Syntax"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-ruby"
  - "https://www.codecademy.com/learn/paths/web-development"
---

In Ruby, lambdas are anonymous function code blocks that can take zero or more arguments. They can then be stored or passed in other values and called primarily with the `#call` method. 

## Syntax

If zero arguments are used, use either `->` or `lambda`:

```rb
myLambda = lambda { puts "Hello, World!" }

puts myLambda.call # Output: Hello, World!
```

If 1 or more arguments are used, use `->`: 

```rb
myLambda = -> (v) { v * 2 }

puts myLambda.call(2) # Output: 4
```