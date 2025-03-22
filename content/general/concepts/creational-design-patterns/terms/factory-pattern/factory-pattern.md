---
Title: 'Factory Pattern'
Description: 'Defers instantiation logic of a parent abstract class to its concrete sub-classes.'
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

The **factory pattern** defers instantiation logic of a parent abstract class to its concrete sub-classes. At the time of object creation, the specific class type may not be known, in which a creator class' factory method is used to decouple this identifying logic. This is typically done through the methods, parameters, and a `switch` statement.

## UML Design

![UML diagram of a factory](https://raw.githubusercontent.com/Codecademy/docs/main/media/factory-uml.png)

## Java Example

To illustrate the factory pattern, below provides a real-world example, in Java, depicting potential considerations for a taxi and food delivery booking application.

A user of the app will need to send a request for either a standard taxi, a large taxi, a mini bus, or wish to have food delivered from a restaurant. However, before the program understands their needs, the needed request needed remains unknown. When a request object is created, an estimated price is calculated and returned.

Below provides a parent abstract class of a taxi request:

```java
public abstract class TaxiRequest<T> {
  protected T pickUpLocation;
  protected String destination;
  protected double distance;
  protected double estimatedPrice;

  public TaxiRequest(final T pickUpLocation, final String destination, final int distance) {
    this.createTaxiRequest(pickUpLocation, destination, distance);
  }

  public abstract void createTaxiRequest(final T pickUpLocation, final String destination, final int distance);

  // Getters and setters
}
```

> **Note:** As the `.pickUpLocation` property may be an address or a restaurant, generics are used when modeling the `TaxiRequest`. The other properties' object types are known.

The constructor of `TaxiRequest` calls an abstract method `.createTaxiRequest()`. This enforces `TaxiRequest`'s subclasses to override the method with instantiation logic. Although the constructors of the base class may make use of the abstract super's constructor, instantiation logic remains in the concrete subclass.

Below provides the concrete subclasses of `StandardTaxiRequest`, `SevenSeaterTaxiRequest`, and `MiniBusTaxiRequest` that all extend the abstract `TaxiRequest` class above.

`StandardTaxiRequest`:

```java
public class StandardTaxiRequest extends TaxiRequest<String> {
  private static final double FARE_MULTIPLIER = 1.5;

  public StandardTaxiRequest(final String pickUpLocation, final String destination, final int distance) {
    super(pickUpLocation, destination, distance);
  }

  @Override
  public void createTaxiRequest(final String pickUpLocation, final String destination, final int distance) {
    this.pickUpLocation = pickUpLocation;
    this.destination = destination;
    this.distance = distance;
    this.estimatedPrice = distance * FARE_MULTIPLIER;
    System.out.println("A taxi is on its way. The estimated fare is £" + estimatedPrice + ".");
  }
}
```

`SevenSeaterTaxiRequest`:

```java
public class SevenSeaterTaxiRequest extends TaxiRequest<String> {
  private static final double FARE_MULTIPLIER = 2;

  public SevenSeaterTaxiRequest(String pickUpLocation, String destination, int distance) {
    super(pickUpLocation, destination, distance);
  }

  @Override
  public void createTaxiRequest(String pickUpLocation, String destination, int distance) {
    this.pickUpLocation = pickUpLocation;
    this.destination = destination;
    this.distance = distance;
    this.estimatedPrice = distance * FARE_MULTIPLIER;
    System.out.println("A large taxi is on its way. The estimated fare is £" + estimatedPrice + ".");
  }
}
```

`MiniBusTaxiRequest`:

```java
public class MiniBusTaxiRequest extends TaxiRequest<String> {
  private static final double FARE_MULTIPLIER = 3.4;

  public MiniBusTaxiRequest(final String pickUpLocation, final String destination, final int distance) {
    super(pickUpLocation, destination, distance);
  }

  @Override
  public void createTaxiRequest(final String pickUpLocation, final String destination, final int distance) {
    this.pickUpLocation = pickUpLocation;
    this.destination = destination;
    this.distance = distance;
    this.estimatedPrice = distance * FARE_MULTIPLIER;
    System.out.println("A minibus is on its way. The estimated fare is £" + estimatedPrice + ".");
  }
}
```

As these model classes inherit their properties from the base class, they each automatically have `pickUpLocation`, `destination`, and `distance` as fields.
The `pickUpLocation` in these cases is an address, and therefore, `pickUpLocation` is of type `String`.

The constructors for these concrete models, call `super()` which in turn calls the overridden method `.createTaxiRequest()`.

The overridden method `createTaxiRequest()` handles the instantiation logic of the class. The properties `.pickUpLocation`, `.destination`, and `.distance` are set, with the `.estimatedPrice` programmatically calculated using the static property `FARE_MULTIPLIER`. A print statement has been added to help illustrate the pattern.

Below provides the concrete subclass `FoodDeliveryRequest` that extends the abstract class, `TaxiRequest`:

```java
public class FoodDeliveryRequest extends TaxiRequest<Restaurant> {

  private static final double FARE_MULTIPLIER = 0.7;

  private double foodBill;

  public FoodDeliveryRequest(Restaurant pickUpLocation, String destination, int distance) {
    super(pickUpLocation, destination, distance);
  }

  @Override
  public void createTaxiRequest(Restaurant pickUpLocation, String destination, int distance) {
    this.pickUpLocation = pickUpLocation;
    this.destination = destination;
    this.distance = distance;
    this.foodBill = pickUpLocation.getPrice();
    this.estimatedPrice = distance * FARE_MULTIPLIER + this.foodBill;

    System.out.println("Your food from "
                     + this.pickUpLocation.toString().toLowerCase()
                     + " is on its way! The total bill (including delivery) is £"
                     + this.estimatedPrice
                     + ".");
  }
}
```

The `FoodDeliveryRequest` differs from the other concrete model classes in two important ways. Firstly, the `estimatedPrice` is calculated to include the cost of food from the restaurant, and secondly, the `pickUpLocation` is a restaurant, not an address.

Below provides an enum modeling the restaurant choice and its associated price:

```java
public enum Restaurant {
  MCDONALD(5.30),
  KFC(4.99),
  BURGER_KING(8.20),
  DOMINOS(10.99);

  private final double price;

  Restaurant(double price) {
    this.price = price;
  }

  // Getter
}
```

> **Note:** When the restaurant type is chosen, the constructor provides the property `price` with the correct value.

The factory class gives an opportunity to think about how the client may need to instantiate different objects and what information may be required. In this example, if little information is provided, a `StandardTaxiRequest` is returned. If the `pickUpLocation` is a restaurant then a `FoodDeliveryRequest` is returned. A taxi can be ordered based on the amount of passengers. And finally a specific `TaxiType` can be explicitly requested.

Below provides the creator class to determine and instantiate request objects:

```java
public class TaxiCreator {

  // Creates a default taxi request should little information be provided
  public static TaxiRequest<?> getTaxiRequest(final String pickUpLocation, final String destination, final int distance) {
    return new StandardTaxiRequest(pickUpLocation, destination, distance);
  }

  // Creates a food pick up request should a Restaurant order be the pick up location
  public static TaxiRequest<?> getTaxiRequest(final Restaurant pickUpLocation, final String destination, final int distance) {
    return new FoodDeliveryRequest(pickUpLocation, destination, distance);
  }

  // Creates taxi request based on the number of passengers
  public static TaxiRequest<?> getTaxiRequest(final int numOfPassengers, final String pickUpLocation, final String destination, final int distance) {
    if (numOfPassengers <= 0 || numOfPassengers >= 30) {
      throw new IllegalArgumentException("Unable to create TaxiRequest for " + numOfPassengers + " passengers");
    }

    switch (numOfPassengers) {
      case 1: case 2: case 3: case 4 :
        return new StandardTaxiRequest(pickUpLocation, destination, distance);
      case 5: case 6:
        return new SevenSeaterTaxiRequest(pickUpLocation, destination, distance);
      default:
        return new MiniBusTaxiRequest(pickUpLocation, destination, distance);
    }
  }

  // Creates taxi request based on TaxiType
  public static TaxiRequest<?> getTaxiRequest(final TaxiType taxiType, final String pickUpLocation, final String destination, final int distance) throws Exception {
    switch (taxiType) {
      case STANDARD_TAXI:
        return new StandardTaxiRequest(pickUpLocation, destination, distance);
      case SEVEN_SEATER:
        return new SevenSeaterTaxiRequest(pickUpLocation, destination, distance);
      case MINI_BUS:
        return new MiniBusTaxiRequest(pickUpLocation, destination, distance);
      default:
        throw new IllegalArgumentException("TaxiType " + taxiType + " not recognised");
    }
  }
}
```

The factory method `.getTaxiRequest()` has been overloaded using four different signatures.

1. The first `.getTaxiRequest(String, String int)` that returns a `StandardTaxiRequest` object as the `pickUpLocation` is of type `String` and both
   `numberOfPassingers` and `TaxiType` have been negated from the method call.

2. The second `.getTaxiRequest(Restaurant, String, int)` that returns a `FoodDeliveryRequest` object as the `pickUpLocation` is of type `Restaurant`.

3. The third `.getTaxiRequest(int, String, String, int)` that returns a taxi request is based on the number of passengers provided and is determined by a switch statement. Should the number of passengers exceed or fall below the required amount, an exception is thrown.

4. Finally, the fourth `.getTaxiRequest(TaxiType, String, String, int)` that returns a taxi request based on the `TaxiType` is specified and determined by a switch statement. Should the `TaxiType` not be recognized, an exception is thrown.

Below provides the enum `TaxiType` for requesting a specific taxi:

```java
public enum TaxiType {
  STANDARD_TAXI,
  SEVEN_SEATER,
  MINI_BUS
}
```

The `Main` class below, starts the program and acts as the client in this example. It asks the creator to instantiate different taxi request objects by calling the overloaded methods. The print statement in each of the model classes should be outputted to the console respectively.

```java
public class Main {

  public static void main(String[] args) throws Exception {
    System.out.print("Standard taxi (default) - ");
    TaxiCreator.getTaxiRequest("1 Charming Av", "49 GoodFeeling Ln", 5);

    System.out.print("Food Delivery (Restaurant) - ");
    TaxiCreator.getTaxiRequest(Restaurant.MCDONALD,"49 GoodFeeling Ln", 5);

    System.out.print("Seven seater (passengers) - ");
    TaxiCreator.getTaxiRequest(6, "1 Charming Av", "49 GoodFeeling Ln", 5);

    System.out.print("Mini bus (TaxiType) - ");
    TaxiCreator.getTaxiRequest(TaxiType.MINI_BUS, "1 Charming Av", "49 GoodFeeling Ln", 5);

    System.out.print("Error - ");
    TaxiCreator.getTaxiRequest(345, "1 Charming Av", "49 GoodFeeling Ln", 5);
  }
}
```
