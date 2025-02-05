---
Title: 'Private Access Modifiers'
Description: 'Specifies that class members are only accessible from within the class itself.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Access Modifiers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`private`** keyword keeps class members hidden. This means that only the methods within the same class can access these members. Objects of the class and functions outside the class **cannot** access them directly.

## Syntax

```pseudo
class ClassName {
private:
  // Private members
};
```

## Example

In the example below, attempting to directly access the `private` data member `secretVar` from outside the class would result in a compilation error:

```cpp
#include <iostream>

class Secret {
private:
  // Private member variable
  int secretVar;

public:
  // Public member function to set the private variable
  void setSecret(int value) {
    secretVar = value;
  }

  // Public member function to reveal the private variable
  int revealSecret() {
    return secretVar;
  }
};

int main() {
  Secret mySecret;

  // Throws an error
  // mySecret.secretVar = 10;
  // Error: secretVar is private

  // Use public function to set the value
  mySecret.setSecret(10);
  // Use public function to get the value
  std::cout << mySecret.revealSecret();

  return 0;
}
```

The above code will give the following output:

```shell
10
```

## Codebyte Example

Run the following codebyte example to understand how the private access modifiers work:

```codebyte/cpp
#include <iostream>

class BankAccount {
private:
  double balance; // Private member variable

public:
  BankAccount(double initialBalance) {
    balance = initialBalance;
  }

  void deposit(double amount) {
    balance += amount;
    std::cout << "Deposited: $" << amount << std::endl;
  }

  void withdraw(double amount) {
    if (amount <= balance) {
      balance -= amount;
      std::cout << "Withdrawn: $" << amount << std::endl;
    } else {
        std::cout << "Insufficient balance!" << std::endl;
      }
    }

    void displayBalance() {
        std::cout << "Current balance: $" << balance << std::endl;
    }
};

int main() {
  BankAccount myAccount(1000); // Creating an object with an initial balance of $1000

  myAccount.deposit(500);
  myAccount.withdraw(200);
  myAccount.displayBalance();

  // The following line would cause a compilation error because balance is private:
  // myAccount.balance = 5000;

  return 0;
}
```
