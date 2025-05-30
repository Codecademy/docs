# Encapsulation in Python

Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP). It refers to the bundling of data (attributes) and the methods (functions) that operate on the data into a single unit, typically a class. In Python, encapsulation helps restrict access to certain components of an object to ensure better modularity and protection against unintended interference or misuse.

---

## Key Concepts

### 1. **Access Modifiers in Python**
Python does not have strict access modifiers like other languages (e.g., `private`, `protected`, `public`). Instead, it relies on naming conventions:

| Modifier | Syntax | Access Level |
|----------|--------|--------------|
| Public   | `var`  | Accessible from anywhere |
| Protected| `_var` | Should not be accessed outside the class or subclass |
| Private  | `__var`| Name mangled to prevent direct access from outside |

### 2. **Why Use Encapsulation?**
- Prevents external code from directly modifying object data
- Increases code modularity and reusability
- Helps in debugging and maintenance
- Allows controlled access through getter and setter methods

---

## Example of Encapsulation in Python

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner        # public attribute
        self.__balance = balance  # private attribute

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited {amount}, new balance: {self.__balance}")
        else:
            print("Deposit amount must be positive")

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print(f"Withdrew {amount}, new balance: {self.__balance}")
        else:
            print("Insufficient funds or invalid amount")

    def get_balance(self):
        return self.__balance
```

---

## Accessing Private Variables
Although Python does not enforce access restriction, private variables can still be accessed using *name mangling*:

```python
account = BankAccount("Alice", 1000)
print(account.get_balance())       # Proper access
print(account._BankAccount__balance)  # Not recommended, but possible
```

---

## Best Practices
- Use `__` for attributes that should not be accessed directly
- Provide `getter` and `setter` methods for controlled access
- Keep class attributes private unless there's a good reason to expose them

---

*Last updated: 2025-05-01*
