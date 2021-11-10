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

    public TaxiRequest(final T pickUpLocation, final String destination) {
        this.createTaxiRequest(pickUpLocation, destination);
    }

    public abstract void createTaxiRequest(final T pickUpLocation, final String destination);


    // Getters and setters
}
```

```java
public class StandardTaxiRequest extends TaxiRequest<String>
{

    public StandardTaxiRequest(String pickUpLocation, String destination)
    {
        super(pickUpLocation, destination);
    }

    @Override
    public void createTaxiRequest(final String pickUpLocation, final String destination)
    {
        this.pickUpLocation = pickUpLocation;
        this.destination = destination;
        System.out.println("A taxi is on its way!");
    }
}
```

```java
public class SevenSeaterTaxiRequest extends TaxiRequest<String>
{

    public SevenSeaterTaxiRequest(String pickUpLocation, String destination)
    {
        super(pickUpLocation, destination);
    }

    @Override
    public void createTaxiRequest(final String pickUpLocation, final String destination)
    {
        this.pickUpLocation = pickUpLocation;
        this.destination = destination;
        System.out.println("A large taxi is on it's way!");
    }
}
```

```java
public class MiniBusTaxiRequest extends TaxiRequest<String>
{

    public MiniBusTaxiRequest(String pickUpLocation, String destination)
    {
        super(pickUpLocation, destination);
    }

    @Override
    public void createTaxiRequest(final String pickUpLocation, final String destination)
    {
        this.pickUpLocation = pickUpLocation;
        this.destination = destination;
        System.out.println("A minibus is on it's way!");
    }
}
```

```java
public class FoodDeliveryRequest extends TaxiRequest<Restaurant> {


    public FoodDeliveryRequest(Restaurant pickUpLocation, String destination)
    {
        super(pickUpLocation, destination);
    }

    @Override
    public void createTaxiRequest(final Restaurant pickUpLocation, final String destination)
    {
        this.pickUpLocation = pickUpLocation;
        this.destination = destination;

        System.out.println("Your food from " + this.pickUpLocation.toString().toLowerCase() + " is on its way!");
    }
}
```

```java
public enum Restaurant
{
    MACDONALD,
    KFC,
    BURGER_KING,
    DOMINOS
}
```

Creator

```java
public class TaxiCreator {

    public static TaxiRequest<?> getTaxiRequest(final String pickUpLocation, final String destination) {
        return new StandardTaxiRequest(pickUpLocation, destination);
    }

    public static TaxiRequest<?> getTaxiRequest(final Restaurant pickUpLocation, final String destination) {
        return new FoodDeliveryRequest(pickUpLocation, destination);
    }

    public static TaxiRequest<?> getTaxiRequest(final TaxiType taxiType, final String pickUpLocation, final String destination) throws Exception {
        switch (taxiType) {

            case STANDARD_TAXI:
                return new StandardTaxiRequest(pickUpLocation, destination);
            case SEVEN_SEATER:
                return new SevenSeaterTaxiRequest(pickUpLocation, destination);
            case MINI_BUS:
                return new MiniBusTaxiRequest(pickUpLocation, destination);
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
    System.out.print("Standard Taxi - ");
    StandardTaxiRequest standardTaxiRequest = (StandardTaxiRequest) TaxiCreator.getTaxiRequest("1 Charming Av",
                                                                                               "56 GoodFeeling Drive");
    System.out.print("Food Delivery - ");
    FoodDeliveryRequest foodDeliveryRequest = (FoodDeliveryRequest) TaxiCreator.getTaxiRequest(Restaurant.MACDONALD,
                                                                                               "56 GoodFeeling Drive");
    System.out.print("Seven Seater (switch) - ");
    SevenSeaterTaxiRequest sevenSeaterTaxiRequest = (SevenSeaterTaxiRequest) TaxiCreator.getTaxiRequest(TaxiType.SEVEN_SEATER,
                                                                                                        "1 Charming Av",
                                                                                                        "56 GoodFeeling Drive");
    System.out.print("Mini Bus (switch) - ");
    MiniBusTaxiRequest miniBusTaxiRequest = (MiniBusTaxiRequest) TaxiCreator.getTaxiRequest(TaxiType.MINI_BUS,
                                                                                            "1 Charming Av",
                                                                                            "56 GoodFeeling Drive");
  }
}
```