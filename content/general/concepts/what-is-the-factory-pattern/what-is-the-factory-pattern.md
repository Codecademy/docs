---
Title: 'What is the Factory Pattern?'
Description: 'The _factory pattern_ defers instantiation logic of a parent abstract class to its concrete sub-classes.'
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
The _factory pattern_ defers instantiation logic of a parent abstract class to its concrete sub-classes. At time of object creation, the specific 
class type may not be known, in which a creator class' factory method is used to decouple this identifying logic. This is typically done through the 
methods parameters and a switch statement.

## UML Design

## Example
Model
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


  // getters and setters
}
```

```java
public class StandardTaxiRequest extends TaxiRequest<String>
{
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

```java
public class SevenSeaterTaxiRequest extends TaxiRequest<String>
{
  private static final double FARE_MULTIPLIER = 2;

  public SevenSeaterTaxiRequest(String pickUpLocation, String destination, int distance)
  {
    super(pickUpLocation, destination, distance);
  }

  @Override
  public void createTaxiRequest(String pickUpLocation, String destination, int distance)
  {
    this.pickUpLocation = pickUpLocation;
    this.destination = destination;
    this.distance = distance;
    this.estimatedPrice = distance * FARE_MULTIPLIER;
    System.out.println("A large taxi is on its way. The estimated fare is £" + estimatedPrice + ".");
  }
}
```

```java
public class MiniBusTaxiRequest extends TaxiRequest<String>
{
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
    System.out.println("A minibus is on it's way. The estimated fare is £" + estimatedPrice + ".");
  }
}
```

```java
public class FoodDeliveryRequest extends TaxiRequest<Restaurant> {

  private static final double FARE_MULTIPLIER = 0.7;

  private double foodBill;

  public FoodDeliveryRequest(Restaurant pickUpLocation, String destination, int distance)
  {
    super(pickUpLocation, destination, distance);
  }


  @Override
  public void createTaxiRequest(Restaurant pickUpLocation, String destination, int distance)
  {
    this.pickUpLocation = pickUpLocation;
    this.destination = destination;
    this.distance = distance;
    this.foodBill = pickUpLocation.getPrice();

    System.out.println("Your food from "
                               + this.pickUpLocation.toString().toLowerCase()
                               + " is on its way! The total bill (including delivery) is £"
                               + (distance * FARE_MULTIPLIER + this.foodBill)
                               + ".");

  }
}
```

```java
public enum Restaurant
{
  MACDONALD(5.30),
  KFC(4.99),
  BURGER_KING(8.20),
  DOMINOS(10.99);

  private final double price;

  Restaurant(double price)
  {
    this.price = price;
  }

  public double getPrice()
  {
    return price;
  }
}
```

Creator

```java
public class TaxiCreator {

  // Creates a default taxi request should little information be provided.
  public static TaxiRequest<?> getTaxiRequest(final String pickUpLocation, final String destination, final int distance) {
    return new StandardTaxiRequest(pickUpLocation, destination, distance);
  }

  // Creates a food pick up request should a Restaurant order be the pick up location.
  public static TaxiRequest<?> getTaxiRequest(final Restaurant pickUpLocation, final String destination, final int distance) {
    return new FoodDeliveryRequest(pickUpLocation, destination, distance);
  }

  // Creates taxi request based on the number of passengers.
  public static TaxiRequest<?> getTaxiRequest(final int numOfPassengers, final String pickUpLocation, final String destination, final int distance) {
    if (numOfPassengers <= 0 || numOfPassengers >= 30) {
      throw new IllegalArgumentException("Unable to create TaxiRequest for " + numOfPassengers + " passengers");
    } else if (distance <= 0 || distance >= 100) {
      throw new IllegalArgumentException("Unable to create TaxiRequest for " + distance + " miles");
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

```java
public enum TaxiType
{
  STANDARD_TAXI,
  SEVEN_SEATER,
  MINI_BUS
}
```

Main

```java
public class Main {

  public static void main(String[] args) throws Exception {
    System.out.print("Standard taxi (default) - ");
    TaxiCreator.getTaxiRequest("1 Charming Av", "49 GoodFeeling Ln", 5);

    System.out.print("Food Delivery (Restaurant) - ");
    TaxiCreator.getTaxiRequest(Restaurant.MACDONALD,"49 GoodFeeling Ln", 5);

    System.out.print("Seven seater (passengers) - ");
    TaxiCreator.getTaxiRequest(6, "1 Charming Av", "49 GoodFeeling Ln", 5);

    System.out.print("Mini bus (TaxiType) - ");
    TaxiCreator.getTaxiRequest(TaxiType.MINI_BUS, "1 Charming Av", "49 GoodFeeling Ln", 5);

    System.out.print("Error - ");
    TaxiCreator.getTaxiRequest(345, "1 Charming Av", "49 GoodFeeling Ln", 5);
  }
}
```