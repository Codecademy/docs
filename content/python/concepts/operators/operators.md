---
Title: 'Operators'
Description: 'Perform operations on variables and values using special symbols and keywords in Python.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Operators'
  - 'Python'
  - 'Variables'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Operators** in Python programming are special symbols or keywords that perform operations on variables and values. They are fundamental building blocks that allow developers to manipulate data, perform calculations, make comparisons, and control program flow. Python operators take one or more operands (values or variables) and produce a result based on the specific operation being performed.

## Arithmetic Operators

Arithmetic operators perform mathematical operations on numeric values such as addition, subtraction, multiplication, and division. These operators are essential for mathematical calculations, data processing, and numerical computations in Python programs.

These are the arithmetic operators available in Python:

| Operator | Name           | Description                                   | Example  |
| -------- | -------------- | --------------------------------------------- | -------- |
| `+`      | Addition       | Adds two operands                             | `x + y`  |
| `-`      | Subtraction    | Subtracts right operand from left operand     | `x - y`  |
| `*`      | Multiplication | Multiplies two operands                       | `x * y`  |
| `/`      | Division       | Divides left operand by right operand         | `x / y`  |
| `%`      | Modulus        | Returns remainder of division                 | `x % y`  |
| `**`     | Exponentiation | Raises left operand to power of right operand | `x ** y` |
| `//`     | Floor Division | Returns floor of division result              | `x // y` |

### Example of Arithmetic Operator in Python

```py
# Shopping cart total calculation
item_price = 25.99
quantity = 3
tax_rate = 0.08

# Calculate subtotal using multiplication
subtotal = item_price * quantity

# Calculate tax using multiplication
tax_amount = subtotal * tax_rate

# Calculate total using addition
total = subtotal + tax_amount

# Calculate change from $100 using subtraction
payment = 100.00
change = payment - total

# Display results
print(f"Subtotal: ${subtotal:.2f}")
print(f"Tax: ${tax_amount:.2f}")
print(f"Total: ${total:.2f}")
print(f"Change: ${change:.2f}")
```

The output of this code is:

```shell
Subtotal: $77.97
Tax: $6.24
Total: $84.21
Change: $15.79
```

This example demonstrates arithmetic operators in a real-world shopping scenario where multiplication calculates subtotal and tax, addition finds the final total, and subtraction determines change.

## Assignment Operators

Assignment operators are used to assign values to variables and can simultaneously perform arithmetic operations during the assignment process. These operators provide a shorthand way to update variable values by combining an arithmetic operation with assignment.

These are the assignment operators available in Python:

| Operator | Name                      | Description                 | Example   | Equivalent   |
| -------- | ------------------------- | --------------------------- | --------- | ------------ |
| `=`      | Assignment                | Assigns value to variable   | `x = 5`   | `x = 5`      |
| `+=`     | Addition Assignment       | Adds and assigns            | `x += 3`  | `x = x + 3`  |
| `-=`     | Subtraction Assignment    | Subtracts and assigns       | `x -= 3`  | `x = x - 3`  |
| `*=`     | Multiplication Assignment | Multiplies and assigns      | `x *= 3`  | `x = x * 3`  |
| `/=`     | Division Assignment       | Divides and assigns         | `x /= 3`  | `x = x / 3`  |
| `%=`     | Modulus Assignment        | Applies modulus and assigns | `x %= 3`  | `x = x % 3`  |
| `**=`    | Exponent Assignment       | Raises to power and assigns | `x **= 3` | `x = x ** 3` |
| `//=`    | Floor Division Assignment | Floor divides and assigns   | `x //= 3` | `x = x // 3` |

### Example of Python's Assignment Operator

```py
# Initial account balance
account_balance = 1000.00

# Deposit money using addition assignment
deposit_amount = 250.00
account_balance += deposit_amount
print(f"After deposit: ${account_balance:.2f}")

# Withdraw money using subtraction assignment
withdrawal_amount = 75.00
account_balance -= withdrawal_amount
print(f"After withdrawal: ${account_balance:.2f}")

# Apply monthly interest using multiplication assignment
monthly_interest_rate = 1.005  # 0.5% interest
account_balance *= monthly_interest_rate
print(f"After interest: ${account_balance:.2f}")

# Calculate service fee using division assignment
service_fee_rate = 0.02  # 2% service fee
fee_amount = account_balance
fee_amount *= service_fee_rate
account_balance -= fee_amount
print(f"Final balance: ${account_balance:.2f}")
```

The output of this code is:

```shell
After deposit: $1250.00
After withdrawal: $1175.00
After interest: $1180.88
Final balance: $1157.26
```

This example shows how assignment operators streamline financial calculations by combining operations with assignments in a bank account management system.

## Comparison Operators

Comparison operators are used to compare two values and return a Boolean result (True or False). These operators are fundamental for decision-making in programs, allowing developers to create conditional logic, validate data, and control program flow. They work with numbers, strings, and other comparable data types, making them essential for sorting, filtering, and validation operations.

These are the comparison operators available in Python:

| Operator | Name                  | Description                                      | Example  |
| -------- | --------------------- | ------------------------------------------------ | -------- |
| `==`     | Equal                 | Returns True if operands are equal               | `x == y` |
| `!=`     | Not Equal             | Returns True if operands are not equal           | `x != y` |
| `>`      | Greater Than          | Returns True if left operand is greater          | `x > y`  |
| `<`      | Less Than             | Returns True if left operand is smaller          | `x < y`  |
| `>=`     | Greater Than or Equal | Returns True if left operand is greater or equal | `x >= y` |
| `<=`     | Less Than or Equal    | Returns True if left operand is less or equal    | `x <= y` |

### Example of Comparison Operators in Python

```py
# Student test scores
student_score = 87
passing_score = 60
honor_roll_score = 90
perfect_score = 100

# Check if student passed using greater than or equal
passed = student_score >= passing_score
print(f"Student passed: {passed}")

# Check if student made honor roll using greater than or equal
honor_roll = student_score >= honor_roll_score
print(f"Honor roll: {honor_roll}")

# Check if student got perfect score using equal
perfect = student_score == perfect_score
print(f"Perfect score: {perfect}")

# Check if student needs improvement using less than
needs_improvement = student_score < passing_score
print(f"Needs improvement: {needs_improvement}")

# Compare with class average
class_average = 82
above_average = student_score > class_average
print(f"Above class average: {above_average}")
```

The output of this code is:

```shell
Student passed: True
Honor roll: False
Perfect score: False
Needs improvement: False
Above class average: True
```

This example demonstrates comparison operators in an educational context where different score thresholds determine student performance levels.

## Logical Operators

Logical operators perform logical operations on Boolean values and expressions, returning Boolean results based on the logical relationship between operands. These operators are crucial for creating complex conditional statements, combining multiple conditions, and implementing decision-making logic in programs.

These are the logical operators available in Python:

| Operator | Name        | Description                                  | Example   |
| -------- | ----------- | -------------------------------------------- | --------- |
| `and`    | Logical AND | Returns True if both operands are True       | `x and y` |
| `or`     | Logical OR  | Returns True if at least one operand is True | `x or y`  |
| `not`    | Logical NOT | Returns opposite Boolean value               | `not x`   |

### Example: User Access Control System With Python's Logical Operators

```py
# User credentials and permissions
user_authenticated = True
user_role = "admin"
account_active = True
maintenance_mode = False

# Check if user can access admin panel using 'and'
admin_access = user_authenticated and user_role == "admin" and account_active
print(f"Admin access granted: {admin_access}")

# Check if user can access system using 'or'
basic_access = user_authenticated and account_active or user_role == "guest"
print(f"Basic access granted: {basic_access}")

# Check if system is available using 'not'
system_available = not maintenance_mode and account_active
print(f"System available: {system_available}")

# Complex access control logic
full_access = (user_authenticated and account_active) and (user_role == "admin" or user_role == "moderator") and not maintenance_mode
print(f"Full access granted: {full_access}")
```

The output of this code is:

```shell
Admin access granted: True
Basic access granted: True
System available: True
Full access granted: True
```

This example shows logical operators in a security system where multiple conditions must be evaluated to determine user access permissions.

## Identity Operators

Identity operators compare the memory location of two objects to determine if they refer to the same object in memory, rather than comparing their values. These operators are particularly useful for checking object references, validating None values, and understanding Python's object model. They help distinguish between objects that have the same value versus objects that are actually the same instance.

These are the identity operators available in Python:

| Operator | Name         | Description                                      | Example      |
| -------- | ------------ | ------------------------------------------------ | ------------ |
| `is`     | Identity     | Returns True if operands are the same object     | `x is y`     |
| `is not` | Not Identity | Returns True if operands are not the same object | `x is not y` |

### Example: Object Reference Validation Using Identity Operators

```py
# Creating different types of objects
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

# Check if lists are the same object using 'is'
same_object = list1 is list3
print(f"list1 is list3: {same_object}")

# Check if lists are different objects using 'is'
different_objects = list1 is list2
print(f"list1 is list2: {different_objects}")

# Check if lists are not the same object using 'is not'
not_same_object = list1 is not list2
print(f"list1 is not list2: {not_same_object}")

# Common use case: checking for None
user_data = None
no_data = user_data is None
print(f"No user data: {no_data}")

# After loading data
user_data = {"name": "John", "age": 30}
has_data = user_data is not None
print(f"Has user data: {has_data}")
```

The output of this code is:

```shell
list1 is list3: True
list1 is list2: False
list1 is not list2: True
No user data: True
Has user data: True
```

This example demonstrates identity operators for checking object references and validating None values, which is common in data validation scenarios.

## Membership Operators

Membership operators test whether a value is present in a sequence such as strings, lists, tuples, sets, or dictionaries. These operators are essential for data validation, content filtering, and search operations. They provide an efficient way to check for the existence of elements in collections and are commonly used in conditional statements and data processing tasks. There are two membership operators avaialble in Python: Python `in` operator and `not in` operator.

| Operator | Name           | Description                                    | Example             |
| -------- | -------------- | ---------------------------------------------- | ------------------- |
| `in`     | Membership     | Returns True if value is found in sequence     | `x in sequence`     |
| `not in` | Not Membership | Returns True if value is not found in sequence | `x not in sequence` |

### Example: Using Membership Operators for a Content Filtering System

```py
# Content filtering for a social media platform
blocked_words = ["spam", "scam", "fake", "virus"]
user_message = "This is a legitimate message about our product"
suspicious_message = "This is a spam message with fake offers"

# Check if message contains blocked words using 'in'
contains_blocked = any(word in user_message.lower() for word in blocked_words)
print(f"Message contains blocked words: {contains_blocked}")

# Check specific word using 'in'
has_spam = "spam" in suspicious_message.lower()
print(f"Message contains 'spam': {has_spam}")

# Check if word is not in blocked list using 'not in'
safe_word = "product"
is_safe = safe_word not in blocked_words
print(f"'{safe_word}' is safe to use: {is_safe}")

# Check user permissions
allowed_users = ["admin", "moderator", "verified_user"]
current_user = "regular_user"
has_permission = current_user in allowed_users
print(f"User has permission: {has_permission}")

# Check if user is not in banned list
banned_users = ["spammer123", "troll456"]
is_banned = current_user in banned_users
print(f"User is banned: {is_banned}")
```

The output of this code is:

```shell
Message contains blocked words: False
Message contains 'spam': True
'product' is safe to use: True
User has permission: False
User is banned: False
```

This example shows membership operators in a content moderation system where text and user validation are performed using sequence membership tests.

## Bitwise Operators

Bitwise operators perform operations on the binary representations of numbers at the individual bit level. These operators are used in low-level programming, system programming, and performance-critical applications where direct manipulation of bits is required. They are commonly used for flag management, permissions systems, cryptography, and embedded programming where efficient memory usage and fast operations are essential.

These are the bitwise operators available in Python:

| Operator | Name        | Description                        | Example  |
| -------- | ----------- | ---------------------------------- | -------- |
| `&`      | Bitwise AND | Returns 1 if both bits are 1       | `x & y`  |
| `\|`     | Bitwise OR  | Returns 1 if at least one bit is 1 | `x \| y` |
| `^`      | Bitwise XOR | Returns 1 if bits are different    | `x ^ y`  |
| `~`      | Bitwise NOT | Returns complement of bits         | `~x`     |
| `<<`     | Left Shift  | Shifts bits to the left            | `x << 2` |
| `>>`     | Right Shift | Shifts bits to the right           | `x >> 2` |

### Example: Permission System with Flags

```py
# Permission flags for a file system
READ = 4    # 100 in binary
WRITE = 2   # 010 in binary
EXECUTE = 1 # 001 in binary

# User permissions using bitwise OR to combine flags
user_permissions = READ | WRITE  # 110 in binary (6 in decimal)
print(f"User permissions: {user_permissions}")

# Check if user has read permission using bitwise AND
has_read = bool(user_permissions & READ)
print(f"Has read permission: {has_read}")

# Check if user has write permission using bitwise AND
has_write = bool(user_permissions & WRITE)
print(f"Has write permission: {has_write}")

# Check if user has execute permission using bitwise AND
has_execute = bool(user_permissions & EXECUTE)
print(f"Has execute permission: {has_execute}")

# Add execute permission using bitwise OR
user_permissions = user_permissions | EXECUTE
print(f"Updated permissions: {user_permissions}")

# Remove write permission using bitwise XOR
user_permissions = user_permissions ^ WRITE
print(f"After removing write: {user_permissions}")

# Double a number using left shift (equivalent to multiplying by 2)
number = 5
doubled = number << 1
print(f"{number} doubled using left shift: {doubled}")
```

The output of this code is:

```shell
User permissions: 6
Has read permission: True
Has write permission: True
Has execute permission: False
Updated permissions: 7
After removing write: 5
5 doubled using left shift: 10
```

This example demonstrates bitwise operators in a file permission system where flags are combined and checked using binary operations, which is memory-efficient for managing multiple boolean states.

## Frequently Asked Questions

### 1. What is the difference between `=` and `==` operators?

The `=` operator assigns a value to a variable, while `==` compares two values for equality. Use `=` for assignment and `==` for comparison.

### 2. When should I use `is` vs `==` for comparison?

Use `==` to compare values and `is` to compare object identity. Use `is` primarily for checking `None` values and comparing with singleton objects.

### 3. What is the difference between `/` and `//` operators?

The `/` operator performs regular division returning a float, while `//` performs floor division returning the largest integer less than or equal to the result.
