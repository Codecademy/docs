---
Title: "if statements"
Description: "In Python, if statements are used to execute a block of code conditionally based on whether a given expression evaluates to True."
Subjects: ["Computer Science"]
Tags: ["python", "control-flow", "conditional", "if", "elif", "else"]
CatalogCOntent: ["learn-python-3", "paths/computer-science"]
---

## Syntax

```python
if condition:
    # code to execute if condition is true
elif another_condition:
    # code to execute if another_condition is true
else: 
    # code to execute if none of the above conditions are true

- The if statement checks a condition and executes the indented block if it evaluates to True.

- elif stands for “else if” and lets you check multiple conditions.

- else runs if none of the previous conditions are met.

- Indentation is critical in Python—blocks inside if, elif, and else must be indented properly.

Example

temperature = 30

if temperature > 35:
    print("It's a hot day.")
elif temperature > 20:
    print("It's a nice day.")
else:
    print("It's a bit cold.")

Explanation
In this example:

If temperature is greater than 35, the first message prints.

If it’s not, but it’s greater than 20, the second message prints.

Otherwise, the last message is printed.

Only one block is executed—whichever condition is met first.

Common Errors
❌ Missing indentation after the colon:

if True:
print("Hello")  # This will raise an IndentationError

❌ Forgetting the colon ::

if True
    print("Hello")  # This will raise a SyntaxError    