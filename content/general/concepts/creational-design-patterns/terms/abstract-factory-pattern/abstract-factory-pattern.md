---
Title: 'Abstract Factory Pattern'
Description: 'Relies on a common interface for multiple factories and defers instantiation logic to their concrete model classes.'
Subjects:
  - 'Computer Science'
  - 'Interview Prep'
Tags:
  - 'Classes'
  - 'Conceptual'
  - 'Constructors'
  - 'Objects'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **abstract factory pattern** utilizes a common interface for multiple factories without defining their concrete model classes. It is often thought of as a factory of factory patterns where object composition is used to separate instantiation logic from application logic.

## UML Design

![UML diagram of an abstract factory](https://raw.githubusercontent.com/Codecademy/docs/main/media/abstract-factory-uml.png)

## Java Example

To illustrate the abstract factory pattern, below is a real-world example written in Java, that explores potential considerations for a banking account system. A new customer will request either a current or savings account. The customer may also be entitled to different privileges depending on their credit score. Below is a table of accounts and their privileges:

| Customer Type | Current                     | Saving                |
| ------------- | --------------------------- | --------------------- |
| Gold          | Max overdraft limit of 3500 | Interest rate of 5%   |
| Silver        | Max overdraft limit of 1200 | Interest rate of 3%   |
| Bronze        | Max overdraft limit of 500  | Interest rate of 1.5% |
| Builder       | No overdraft                | Interest rate of 1.5% |

To simulate requesting and receiving a customer's credit score, a gateway has been mocked below. When given a customer's name, the`CreditAgencyGateway` class should return an appropriate `Customer` object. This class can be used later to see the different paths through our abstract factory.

```java
public class CreditAgencyGateway {
  // Depending on which name is searched for, a different customer object is returned
  public Customer getCustomer(String name) {
    return switch (name) {
      case "Harry" -> new Customer("Harry",
                                   "Potter",
                                   LocalDate.of(1980, 7, 31),
                                   "4 Privet Drive, Little Whinging",
                                   795);
      case "Ron" -> new Customer("Ron",
                                 "Weasley",
                                 LocalDate.of(1980, 3, 1),
                                 "The Burrow, Devon",
                                 379);
      case "Hermione" -> new Customer("Hermione",
                                      "Granger",
                                      LocalDate.of(1979, 9, 19),
                                      "Hampstead Garden Suburb, London",
                                      843);
      default -> throw new IllegalArgumentException("Could not return the credit history for " + name);
    };
  }
}
```

The `CreditAgencyGateway` class uses a [`switch` statement](https://www.codecademy.com/resources/docs/java/switch) to query a provided `name`. If the name is recognized, a new customer is returned. Otherwise, an exception is thrown.

One of the main advantages of factory patterns is they allow for a large number of model classes and enforce a common interface between them. In the code below, an abstract model `CurrentAccount` class works as an extension for its concrete sub-classes to be based on:

```java
public abstract class CurrentAccount {
  private final String accountUID = UUID.randomUUID().toString();
  private final Customer accountHolder;
  private int balance;
  private int agreedOverdraftLimit;

  public CurrentAccount(Customer accountHolder, int initBalance, int agreedOverdraftLimit) {
    this.accountHolder = accountHolder;
    this.balance = initBalance;
    this.agreedOverdraftLimit = agreedOverdraftLimit;
  }

  public void addFunds(final int amount) {
    balance += amount;
  }

  public void withdrawFunds(final int amount) {
    if (amount < balance + agreedOverdraftLimit) {
      balance -= amount;
    } else {
      System.out.println("Insufficient funds. Unable to withdraw " + amount);
    }
  }

  // Enforces concrete classes to override this method
  public abstract void increaseOverdraft(int requestedLimit);

  // Getters below
}
```

The parent `CurrentAccount` class above, as well as providing the common fields and constructor, requires its children to implement the `.increaseOverdraft()` method. This is the differentiating feature described between each current account.

The code snippets below are the concrete implementations of `CurrentAccount`. The first is the Gold level:

```java
public class GoldPersonal extends CurrentAccount {
  // The Gold Personal has a high-max overdraft limit
  public static final int MAX_OVERDRAFT = 3500;

  public GoldPersonal(Customer accountHolder, int initBalance, int agreedOverdraftLimit) {
    super(accountHolder, initBalance, agreedOverdraftLimit);
  }

  // Concrete overridden method
  @Override
  public void increaseOverdraft(int requestedLimit) {
    if (requestedLimit < MAX_OVERDRAFT) {
      this.setAgreedOverdraftLimit(requestedLimit);
    }
  }
}
```

Next is the Silver-level implementation of the `CurrentAccount`:

```java
public class SilverPersonal extends CurrentAccount {
  // The Silver Personal has a mid-max overdraft limit
  public static final int MAX_OVERDRAFT = 1200;

  public SilverPersonal(Customer accountHolder, int initBalance, int agreedOverdraftLimit) {
    super(accountHolder, initBalance, agreedOverdraftLimit);
  }

  // Concrete overridden method
  @Override
  public void increaseOverdraft(int requestedLimit) {
    if (requestedLimit < MAX_OVERDRAFT) {
      this.setAgreedOverdraftLimit(requestedLimit);
    }
  }
}
```

Here is the Bronze-level implementation:

```java
public class BronzePersonal extends CurrentAccount {
  // The Bronze Personal has a low-max overdraft limit
  public static final int MAX_OVERDRAFT = 500;

  public BronzePersonal(Customer accountHolder, int initBalance, int agreedOverdraftLimit) {
    super(accountHolder, initBalance, agreedOverdraftLimit);
  }

  // Concrete overridden method
  @Override
  public void increaseOverdraft(int requestedLimit) {
    if (requestedLimit < MAX_OVERDRAFT) {
      this.setAgreedOverdraftLimit(requestedLimit);
    }
  }
}
```

And finally, the Credit Builder:

```java
public class CreditBuilder extends CurrentAccount {
  // The Credit Builder does not allow for an overdraft
  public static final int MAX_OVERDRAFT = 0;

  public CreditBuilder(Customer accountHolder, int initBalance, int agreedOverdraftLimit) {
    super(accountHolder, initBalance, agreedOverdraftLimit);
  }

  // Concrete overridden method
  @Override
  public void increaseOverdraft(int requestedLimit) {
    if (requestedLimit < MAX_OVERDRAFT) {
      this.setAgreedOverdraftLimit(requestedLimit);
    }
  }
}
```

In each concrete current account, a `static` variable (`MAX_OVERDRAFT`) has been provided and constructed with the correct value. This is then used in the `.increaseOverdraft()` method to ensure this limit is not exceeded.

Below provides an abstract model `SavingAccount` class for its concrete sub-classes to be based on:

```java
public abstract class SavingAccount {
  private final String accountUID = UUID.randomUUID().toString();
  private final Customer accountHolder;
  private final LocalDate dateOpened;
  private double balance;

  public SavingAccount(Customer accountHolder, LocalDate dateOpened, double initBalance) {
    this.accountHolder = accountHolder;
    this.dateOpened = dateOpened;
    this.balance = initBalance;
  }

  public void addFunds(final int amount) {
    balance += amount;
  }

  public void withdrawFunds(final int amount) {
    balance -= amount;
  }

  // Enforces concrete classes to override this method
  public abstract void addInterest();

  // Getters below
}
```

Much like `CurrentAccount`, `SavingAccount` provides the common fields and constructor and requires its children to implement the `.addInterest()` method. This is the differentiating feature described between each savings account.

Below provides the concrete implementations of `SavingAccount` for this example. The first is the Gold level:

```java
public class GoldSaver extends SavingAccount {
  // The Gold Saver has a high-interest rate
  public static final double INTEREST_RATE_MULTIPLIER = 1.05;

  public GoldSaver(Customer accountHolder, LocalDate dateOpened, double initBalance) {
    super(accountHolder, dateOpened, initBalance);
  }

  // Concrete overridden method
  @Override
  public void addInterest() {
    if (LocalDate.now().getMonth() == this.getDateOpened().getMonth()
            && LocalDate.now().getDayOfMonth() == this.getDateOpened().getDayOfMonth()) {
      this.setBalance(this.getBalance() * INTEREST_RATE_MULTIPLIER);
    }
  }
}
```

Then the Silver level:

```java
public class SilverSaver extends SavingAccount {
  // The Silver Saver has a mid-interest rate
  public static final double INTEREST_RATE_MULTIPLIER = 1.03;

  public SilverSaver(Customer accountHolder, LocalDate dateOpened, double initBalance) {
    super(accountHolder, dateOpened, initBalance);
  }

  // Concrete overridden method
  @Override
  public void addInterest() {
    if (LocalDate.now().getMonth() == this.getDateOpened().getMonth()
            && LocalDate.now().getDayOfMonth() == this.getDateOpened().getDayOfMonth()) {
      this.setBalance(this.getBalance() * INTEREST_RATE_MULTIPLIER);
    }
  }
}
```

And finally the Bronze level implementation:

```java
public class BronzeSaver extends SavingAccount {
  // The Bronze Saver has a low-interest rate
  public static final double INTEREST_RATE_MULTIPLIER = 1.015;

  public BronzeSaver(Customer accountHolder, LocalDate dateOpened, int initBalance) {
        super(accountHolder, dateOpened, initBalance);
  }

  // Concrete overridden method
  @Override
  public void addInterest() {
    if (LocalDate.now().getMonth() == this.getDateOpened().getMonth()
            && LocalDate.now().getDayOfMonth() == this.getDateOpened().getDayOfMonth()) {
      this.setBalance(this.getBalance() * INTEREST_RATE_MULTIPLIER);
    }
  }
}
```

In each concrete savings account, a `static` variable, the `INTEREST_RATE_MULTIPLIER`, has been provided and constructed with the correct value. It is then used to calculate interest in the `.addInterest()` method.

The purpose of the `AccountFactory` is to return one of its concrete factories. Below provides the example of the abstract factory `AccountFactory`.

```java
public abstract class AccountFactory<T> {
  // Returns different concrete factory depending on AccountType
  public static AccountFactory<?> getAccountFactory(AccountType accountType) {
    return switch (accountType) {
        case SAVINGS -> new SavingAccountFactory();
        case CURRENT -> new CurrentAccountFactory();
        default -> throw new IllegalArgumentException("Unknown account type: " + accountType);
      };
  }

  // Enforces concrete factories to override this method
  public abstract T getAccount(Customer customer);

  // Returns CustomerType depending on creditScore property. Put in the abstract to reduce duplicate code
  protected CustomerType getCustomerType(Customer customer) {
    if (customer.getCreditScore() > 700) {
      return CustomerType.GOLD;
    } else if (customer.getCreditScore() > 400) {
      return CustomerType.SILVER;
    } else if (customer.getCreditScore() > 200) {
      return CustomerType.BRONZE;
    } else {
      return CustomerType.BUILDER;
    }
  }
}
```

The `AccountFactory` enforces its concrete sub-classes to implement its abstract `.getAccount()` method. A `.getCustomerType()` is included to reduce duplication. The same logic for returning a `CustomerType` is used in `CurrentAccountFactory` and `SavingAccountFactory`. We might expect this logic to be in the concrete classes below as they use this logic, but in this example, it doesn't matter.

Finally, the `.getAccountFactory()` method uses a `switch` statement to return a concrete factory depending on an `AccountType`, with the `enum` provided below:

```java
public enum AccountType {
  SAVINGS,
  CURRENT
}
```

The following factories, `CurrentAccountFactory` and `SavingAccountFactory`, are responsible for returning the correct concrete model class when called:

```java
public class CurrentAccountFactory extends AccountFactory<CurrentAccount> {
  // Concrete overridden method
  @Override
  public CurrentAccount getAccount(Customer customer) {
    final CustomerType customerType = getCustomerType(customer);

    return switch (customerType) {
      case GOLD -> new GoldPersonal(customer, 0, 0);
      case SILVER -> new SilverPersonal(customer, 0, 0);
      case BRONZE -> new BronzePersonal(customer, 0, 0);
      case BUILDER -> new CreditBuilder(customer, 0, 0);
      default -> throw new IllegalArgumentException("Unable to create account.");
    };
  }
}
```

```java
public class SavingAccountFactory extends AccountFactory<SavingAccount> {
  // Concrete overridden method
  @Override
  public SavingAccount getAccount(Customer customer) {
    final CustomerType customerType = getCustomerType(customer);

    return switch (customerType) {
      case GOLD -> new GoldSaver(customer, LocalDate.now(), 0);
      case SILVER -> new SilverSaver(customer, LocalDate.now(), 0);
      case BRONZE, BUILDER -> new BronzeSaver(customer, LocalDate.now(), 0);
      default -> throw new IllegalArgumentException("Unable to create account.");
    };
  }
}
```

An implementation has been provided for the `.getAccount()` method. The `CustomerType` is worked out using its parent's `getCustomerType` method and captured before being used in a `switch` statement that returns the appropriate objects.

The `Main` class below starts the program and acts as the client in this example. It begins by getting a customer from the `CreditAgencyGateway` and gets an appropriate factory by using the `.getAccountFactory()` method. Changing the name in the `.getCustomer()` method or changing the `AccountType` in the `.getAccountFactory()` method will yield different results. A specific `CurrentAccount` or `SavingAccount` can then be returned by the `getAccount` method.

```java
public class Main {
  public static void main(String[] args) {
    final CreditAgencyGateway creditAgencyGateway = new CreditAgencyGateway();

    // Get customer. Change name to change outputted account types.
    final Customer customer = creditAgencyGateway.getCustomer("Hermione");

    // Capture correct concrete factory
    AccountFactory<?> accountFactory = AccountFactory.getAccountFactory(AccountType.CURRENT);

    // Get correct account
    final CurrentAccount currentAccount = (CurrentAccount) accountFactory.getAccount(customer);
    System.out.println(currentAccount.getClass());

    // Capture correct concrete factory
    accountFactory = AccountFactory.getAccountFactory(AccountType.SAVINGS);

    // Get correct account
    final SavingAccount savingAccount = (SavingAccount) accountFactory.getAccount(customer);
    System.out.println(savingAccount.getClass());
  }
}
```
