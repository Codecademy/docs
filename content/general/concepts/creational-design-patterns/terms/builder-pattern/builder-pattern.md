---
Title: 'Builder Pattern'
Description: 'Decouples the responsibility of object creation from the desired objects class.'
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

The **builder pattern** decouples the responsibility of object creation from the desired object's class. It is normally implemented when a class requires many properties to be set during its construction and may be used to ensure immutability.

## UML Design

![UML diagram of a builder](https://raw.githubusercontent.com/Codecademy/docs/main/media/builder-uml.png)

## Java Example

To illustrate the builder pattern, below provides a real-world example in Java, depicting potential considerations for a pizza order. The
`PizzaOrder` class has 5 properties:

- `toppings`
- `cheese`
- `sauce`
- `pizzaBase`
- `stuffCrust`

During construction, both `pizzaBase` and `stuffCrust` are required to be set explicitly, and should cheese and/or sauce not be set before `.build()`, default values will be assigned. Construction of a `PizzaOrder` object is enforced through the `PizzaOrder`'s `Builder` inner class. After creation, a `PizzaOrder` object's properties are immutable.

```java
public class PizzaOrder {
  public static class Builder {
    // Same properties as the outer PizzaOrder class
    private final List<Topping> toppings;
    private final Cheese cheese;
    private final Sauce sauce;
    private final Base pizzaBase;
    private final boolean stuffCrust;

    public Builder(Base pizzaBase, boolean stuffCrust) {
      // Enforce required choices
      this.pizzaBase = pizzaBase;
      this.stuffCrust = stuffCrust;
      // Default values
      this.cheese = Cheese.MOZZARELLA;
      this.sauce = Sauce.TOMATO;
    }

    // Sets property and returns itself (either for next property to be set, or .build() to be invoked)
    public Builder toppings(List<Topping> toppings) {
      this.toppings = toppings;
      return this;
    }

    public Builder cheese(Cheese cheese) {
      this.cheese = cheese;
      return this;
    }

    public Builder sauce(Sauce sauce) {
      this.sauce = sauce;
      return this;
    }

    public Builder base(Base pizzaBase) {
      this.pizzaBase = pizzaBase;
      return this;
    }

    public Builder stuffCrust(boolean stuffCrust) {
      this.stuffCrust = stuffCrust;
      return this;
    }

    // When .build() is called, a new concrete object is returned with the desired properties set
    public PizzaOrder build() {
      return new PizzaOrder(this);
    }
  }

  private final List<Topping> toppings;
  private final Cheese cheese;
  private final Sauce sauce;
  private final Base pizzaBase;
  private final boolean stuffCrust;

  // Removes default constructor and forces object creation through Builder inner class
  private PizzaOrder(Builder builder) {
    // Constructs concrete object with builder's property values
    this.toppings = builder.toppings;
    this.cheese = builder.cheese;
    this.sauce = builder.sauce;
    this.stuffCrust = builder.stuffCrust;
  }

  // Getters below
}
```

> **Note:** Setters are negated for immutability. Some Enums have been provided to safely model the choices an order may have.

```java
public enum Topping {
  HAM,
  PINEAPPLE,
  SWEETCORN
}
```

```java
public enum Sauce {
  TOMATO,
  BBQ
}
```

```java
public enum Base {
  THIN_BASE,
  DEEP_PAN
}
```

```java
public enum Cheese {
  NONE,
  MOZZARELLA
}
```

The `Main` class below shows how to instantiate a `PizzaOrder` object through its inner `Builder` class.

```java
public class Main {
  public static void main(String[] args) {
    // Create concrete object
    PizzaOrder pizzaOrder = new PizzaOrder.Builder(Base.DEEP_PAN, true).sauce(Sauce.BBQ).build();
  }
}
```
