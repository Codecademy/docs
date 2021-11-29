---
Title: 'Abstract Factory Pattern'
Description: 'The abstract factory is often thought of a factory of factory patterns. Much like the factory pattern, the abstract factory relies on a common interface and defers instantiation logic to its concrete model classes.'
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

The abstract factory is often thought of a factory of factory patterns. Much like the factory pattern, the abstract factory relies on a common interface and defers instantiation logic to its concrete model classes. Unlike the factory pattern, the abstract factory is typically built using composition where the factory is not.

## UML Design

![UML diagram of an abstract factory](https://raw.githubusercontent.com/Codecademy/docs/main/media/abstract-factory-uml.png)

## Java Example

Gateway

```java
public class CreditAgencyGateway {
  // Depending on which name is searched for, a different customer object is returned
  public Customer getCustomer(String name) {
    switch (name) {
      case "Harry":
        return new Customer("Harry",
                            "Potter",
                            LocalDate.of(1980, 7, 31),
                            "4 Privet Drive, Little Whinging",
                            795);
      case "Ron":
        return new Customer("Ron",
                            "Weasley",
                            LocalDate.of(1980, 3, 1),
                            "Shell Cottage, Cornwall",
                            379);
      case "Hermione":
        return new Customer("Hermione",
                            "Granger",
                            LocalDate.of(1979, 9, 19),
                            "12 Grimmauld Palace, London",
                            843);
      case "Lucius":
        return new Customer("Lucius",
                            "Malfoy",
                            LocalDate.of(1954, 2, 4),
                            "Malfoy Mannor, Wiltshire",
                            978);
      case "Dobby":
        return new Customer("Dobby",
                            "the house elf",
                            LocalDate.of(1972, 6, 28),
                            "Malfoy Mannor, Wiltshire",
                            256);
      case "Sirius":
        return new Customer("Sirius",
                            "Black",
                            LocalDate.of(1959, 11, 3),
                            "12, Grimmauld Place, London",
                            169);
      default:
        throw new IllegalArgumentException("Could not return the credit history for " + name);
    }
  }
}
```

Modal : Current accounts

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

  // Getters
}
```

```java
public class GoldPersonal extends CurrentAccount {
  // The Gold Personal has a high max overdraft limit
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

```java
public class SilverPersonal extends CurrentAccount {
  // The Silver Personal has a mid max overdraft limit
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

```java
public class BronzePersonal extends CurrentAccount {
  // The Bronze Personal has a low max overdraft limit
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

Model : Savings accounts

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

  // Getters and setter
}
```

```java
public class GoldSaver extends SavingAccount {
  // The Gold Saver has a high interest rate
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

```java
public class SilverSaver extends SavingAccount {
  // The Silver Saver has an mid interest rate
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

```java
public class BronzeSaver extends SavingAccount {
  // The Bronze Saver has a low interest rate
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

Abstract Factory

```java
public abstract class AccountFactory<T> {
  // Returns different concrete factory depending on AccountType
  public static AccountFactory<?> getAccountFactory(AccountType accountType) {
    switch (accountType) {
      case SAVINGS :
        return new SavingAccountFactory();
      case CURRENT :
        return new CurrentAccountFactory();
      default:
        throw new IllegalArgumentException("Unknown account type: " + accountType);
    }
  }
  // Enforces concrete factories to override this method
  public abstract T getAccount(Customer customer);
  // Returns CustomerType depending on creditScore property. Put in the abstract to reduce duplicate code
  protected CustomerType getCustomerType(Customer customer) {
    if (customer.getCreditScore() > 700) {
      return CustomerType.GOLD;
    } else if (customer.getCreditScore() > 400) {
      return CustomerType.SILVER;
    } else if (customer.getCreditScore() > 200){
      return CustomerType.BRONZE;
    } else {
      return CustomerType.BUILDER;
    }
  }
}
```

```java
public enum AccountType {
  SAVINGS,
  CURRENT
}
```

Concrete Factories

```java
public class CurrentAccountFactory extends AccountFactory<CurrentAccount>
{

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
public class SavingAccountFactory extends AccountFactory<SavingAccount>
{

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

Client

```java
public class Main {
  public static void main(String[] args) {
    final CreditAgencyGateway creditAgencyGateway = new CreditAgencyGateway();
    // Get customer. Change name to change outputted account types.
    final Customer customer = creditAgencyGateway.getCustomer("Sirius");
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