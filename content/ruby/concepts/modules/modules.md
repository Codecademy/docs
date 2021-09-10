---
Title: 'Modules'
Description: 'In Ruby, modules are collections of classes, methods, and constants. They lend extra functionality to classes that include them. Modules are defined with a module...end block. For example: rb module ModuleName include OtherModule CONSTANT = 123 def method_1'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Modules'
  - 'Classes'
  - 'Methods'
  - 'Files'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

In Ruby, modules are collections of classes, methods, and constants. They lend extra functionality to classes that include them.

## Syntax

Modules are defined with a `module...end` block. For example:

```rb
module ModuleName
  include OtherModule

  CONSTANT = 123

  def method_1
    ...
  end

  def method_2
    ...
  end
end
```

## Usage in a Class

```rb
module TwoTermSolver
  def add(a, b)
    a + b
  end

  def subtract(a, b)
    a - b
  end

  def multiply (a, b)
    a * b
  end

  def divide(a, b)
    begin
      a / b
    rescue ZeroDivisionError
      puts "Division by zero (0) is not allowed."
    end
  end
end

class Calculator
  include TwoTermSolver
end

puts Calculator.new.add(3, 4) # Output: 7
```
