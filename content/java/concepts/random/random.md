---
Title: 'Random'
Description: 'Instances of the Random class in Java can be used to generate streams of pseudorandom numbers.'
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

When an instance of the `Random` class is created, either a `seed` value is passed to the constructor or no values are passed at all. 

The `seed` is a value that gets manipulated (using a linear congruential formula) to produce a stream of pseudorandom values. The `Random` class uses a 48-bit `seed`.

In this code, objects `rand1` and `rand2` of the `Random` type are created using the `new` keyword. While no parameters are passed during the creation of `rand1`, a `seed` value is used during the creation of `rand2`.

```java
Random rand1 = new Random();

long seed = (long)3.142;
Random rand2 = new Random(seed);
```

The value of the seed can be set or modified at any point during the execution of the program using the `.setSeed()` method.

```java
long newseed = (long)2.7182;
rand2.setSeed(newseed);
```

**Note:** If two objects of type `Random` are created with the same seed, they will generate the same sequence of numbers, provided they are subject to the same sequence of method calls.

## Generating Individual Values

The following methods can be used to generate the next pseudorandom number from the generator's sequence.

- The `.nextDouble()` and `.nextFloat()` methods return values in range [0,1). This means that the range is inclusive of zero (indicated by the square bracket) and exclusive of 1 (indicated by the parenthesis).
- The `.nextInt()` and `.nextLong()` methods have no such limits.

**Note:** In the absence of a `seed`, these methods return different values every time they are called or even for separate instances:

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

The output will look like this:

```shell
Random float: 0.13293427
Random double: 0.900476085026994
Random integer: 152429987
Random long: -4775630185711902523
Random boolean: 1
```

The `.nextInt()` method can also be used with an upper bound so that the generated value is between 0 and that upper bound.

```java
i = rand1.nextInt(25);
System.out.println("Random integer in range [0,25): " + i);
```

The output will be:

```shell
Random integer in range [0,25): 16
```

A byte array can also be filled with random elements using the `.nextBytes()` method.

```java
byte[] b = new byte [5];
rand1.nextBytes(b);

System.out.print("Random byte array: ");

for (byte j: b)
  System.out.print(j + " ");
```

The output looks like this:

```shell
Random byte array: -44 -82 44 62 -111
```

## Generating Streams

`IntStream`, `DoubleStream` and `LongStream` objects can be produced using the `.ints()`, `.doubles()` and `.longs()` methods, respectively.

The following example illustrates the generation of a `DoubleStream` object and can be extrapolated for the other two object types as well.

To use an object of this type, the following import statement must be used:

```java
import java.util.stream.DoubleStream;
```

An unlimited stream of pseudorandom `double` values, each in the range [0,1), can be generated using the following code snippet. A `DoubleStream` is a stream over objects of `double` type:

```java
DoubleStream stream;
stream = rand1.doubles();
```

An effectively unlimited stream of pseudorandom `double` values, each in the range specified, can be generated using the following code snippet. The parameters are the lower bound and the upper bound, respectively:

```java
stream = rand1.doubles(0,10);
```

**Note:** In the above method, the lower bound is inclusive but the upper bound is exclusive.

A stream of specified size of values in range [0,1) can be generated using the following code snippet. The parameter represents the size of the stream:

```java
stream = rand1.doubles(5);
```

A stream of specified size with values in a specified range can be generated using the following code snippet. The parameters are the size of stream, the lower bound and the upper bound, respectively:

```java
stream = rand1.doubles(5, 0, 10);
```
