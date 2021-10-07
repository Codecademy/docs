---
Title: 'Random' 
Description: 'Instances of the Random class in Java can be used to generate streams of pseudorandom numbers' 
Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
Tags: 
  - 'Random'
  - 'Methods'
CatalogContent: 
  - 'learn-java'
  - 'paths/computer-science'
---

The [`Random`](https://docs.oracle.com/javase/8/docs/api/java/util/Random.html) class is present in the `java.util` package. It is used to generate random values or streams of random values of specific data types.

## Usage

The `Random` class can be accessed by importing it as follows:

```java
import java.util.Random;
```

During instance creation, we can either set a seed value or pass no arguments to the constructor.

```java
//Random number generator object
Random rand1 = new Random();
long seed = (long)3.142;
//Random number with an arbitrary seed of long type
Random rand2 = new Random(seed);
```

The value of the seed can be set or modified at any point during the execution of the program using the `setSeed()` method.

```java
long newseed = (long)2.7182;
rand2.setSeed(newseed);
```

Note that _if two objects of type `Random` are created with the same seed, they will generate the same sequence of numbers, provided they are subject to the same sequence of method calls._

## Generating Individual Values

The following methods can be used to generate the next pseudorandom number from the generator's sequence. Note that in the absence of a seed, these return different values every time they are called or even for separate instances.
Also note that the `nextDouble()` and `nextFloat()`
methods return values between 0 and 1 while the `nextInt()` and `nextLong()` methods have no such
limits.

```java
float f = rand1.nextFloat();
double d = rand1.nextDouble();
int i = rand1.nextInt();
long l = rand1.nextLong();
boolean b = rand1.nextBoolean();
System.out.println("Random float: " + f);
System.out.println("Random double: " + d);
System.out.println("Random integer: " + i);
System.out.println("Random long: " + l);
System.out.println("Random boolean: " + b);
```

Output
>Random float: 0.13293427
>Random double: 0.900476085026994
>Random integer: 152429987
>Random long: -4775630185711902523
>Random boolean: 1

Further, the `nextInt()` method can also be used with an upper bound so that the value generated is between 0 and that value.

```java
i = rand1.nextInt(25);
System.out.println("Random integer in range [0,25) : " + i);
```

Output
>Random integer in range [0,25) : 16

A byte array can also be filled with random elements using the following function.

```java
byte[] b = new byte [5];
rand1.nextBytes(b);
System.out.print("Random byte array : ");
for (byte j: b)
 System.out.print(j + " ");
```

Output
>Random byte array : -44 -82 44 62 -111

## Generating Streams

 `IntStream`, `DoubleStream` and  `LongStream` objects can be produced using the `ints()`, `doubles()` and `longs()` methods.
The following example illustrates the generation of `DoubleStream` object and can be extrapolated for other two object types as well.
In order to use an object of this type, the following import statement must be used:

```java
import java.util.stream.DoubleStream;
```

An effectively unlimited stream of pseudorandom `double` values, each in range [0,1) can be generated using:

```java
DoubleStream stream;
stream = rand1.doubles();
```

An effectively unlimited stream of pseudorandom `double` values, each in the range specified, can be generated using:

```java
stream = rand1.doubles(0,10);
//The parameters are the the lower bound and the upper bound respectively.
```

_Note that in the above method, the lower bound is inclusive but the upper bound is exclusive._

A stream of specified size of values in range [0,1) can be generated using:

```java
stream = rand1.doubles(5);
```

A stream of specified size with values in a specified range can be generated using:

```java
stream = rand1.doubles(5, 0, 10);
//`The parameters are the size of stream, the lower bound and the upper bound respectively.
```

---
