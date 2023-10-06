---
Title: 'Euclidean Algorithm'
Description: 'A simple and efficient method for finding the highest common factor (HCF), also known as the greatest common divisor (GCD), of two numbers.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **Euclidean algorithm** is a recursive algorithm that will find the highest common factor (HCF) of two numbers. The HCF is the largest value that will evenly divide (leave no remainder) both values. It is based on the observation that the HCF can be found by iteratively comparing two values, substituting the difference of the values alternatively, until the values are equivalent. This convergent value is the HCF.

There are multiple methods to solve and find the highest common factor (HCF) of two numbers. In this explanation, let's explore a basic approach first and then move on to the Euclidean algorithm.

## Method 1

In the basic approach, the purpose is to find the GCD. To do this, find the minimum value between the two given numbers. Then, divide both numbers by the minimum value. If either of the divisions results in a remainder, decrease the minimum value by one and continue dividing. This process repeats until the minimum value can divide both numbers evenly. At this point, the minimum value is the HCF.

The following code illustrates this method in Java:

```java
public static void main(String[] args) {
        System.out.println(gcd(10,15));
    }
    public static int gcd(int a,int b){
        int minValue = Math.min(a,b);
        while(minValue>0){
            if(a%minValue==0 && b%minValue==0){
                break;
            }
            minValue--;
        }
        return minValue;
    }
}
```

The output for the above code will be:

```shell
5
```

## Method 2: A Basic Euclidean Algorithm Approach

In this method, the aim is to compare both `a` and `b`. The process begins by identifying the larger value and subtracting the smaller number from the larger number. The larger number is now replaced with the result of the subtraction. These steps repeat until the values are equal. This convergent value is the HCF.

The following code illustrates this method in Java:

```java
class Euclidean1 {
static int gcd(int a, int b) {

    while (a != b) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}

public static void main(String[] args) {

    int a = 15, b = 20;

    System.out.println(gcd(a, b));
}
}
```

The output for the above code will be:

```shell
5
```

The step by step execution of the above code is as follows:

- Since `b` is greater than `a` (20 > 15), here `b` is replaced with `b - a`, which gives results in `b` = 20 - 15 = 5.
- Now `a` is 15 and `b` is 5.
- The result is `a` = 15 - 5 = 10 after replacing `a` with `a - b`.
- The values are now `a` = 10 and `b` = 5.
- The process continues, `a` is replaced with `a - b`, resulting in `a` = 10 - 5 = 5.
- Now `a` and `b` are both equal to 5.
- At this point, the while loop exits, and `a` is returned. Therefore, the HCF of 15 and 20 is 5.

## Method 3: A Recursive Euclidean Approach

In this method, a recursive approach is used to implement the Euclidean algorithm for finding the greatest common divisor (GCD) of two integers, `a` and `b`. The method implements a function that takes `a` and `b` as integer parameters and returns an integer as the result. The algorithm begins by checking if `b` is equal to `0`. If it is, then it means that `a` is the GCD, and it returns `a` as the result. However, if `b` is not `0`, it indicates that there is a remainder when `a` is divided by `b`. In this case, the method calls itself recursively with the arguments `b` and `a % b`. This recursive call continues until `b` equals `0`, triggering the base case and yielding the GCD.

For more information on recursion, refer to this [resource](https://www.codecademy.com/learn/java-algorithms/modules/recursion-apcs/cheatsheet). The following code illustrates this method in Java:

```java
public class Euclidean2 {
public static void main(String[] args) {
    System.out.println(EuclideanOptimized(150, 500));

}
static int EuclideanOptimized(int a, int b){
    if(b==0){
        return a;
    }
    return EuclideanOptimized(b,a%b);
}
}
```

The output for the above code will be:

```shell
50
```

The step by step execution of this example is as follows:

- Given the input of two integers: `a` = 150 and `b` = 500, the code steps into the `EuclideanOptimized` function. The first `if` statement encountered checks if `b` is equal to `0`. In this particular case, `b` is not equal to `0`, resulting in the program exiting the `if` statement.
- Then the code proceeds to return `EuclideanOptimized`, but with the arguments `(b, a % b)`.
- In the first recursive cycle, the value of `a % b` will be 150. Since 150 is smaller than 500, it cannot be divided evenly by 500. Therefore, the remainder is equal to the original number, which is 150. Consequently, the next arguments for `EuclideanOptimized` are `(500, 150)`.
- The function is restarted with the arguments `(500, 150)`. Upon entering the function, the `if` statement is encountered. However, since `b` is not equal to `0`, the program moves on to the next recursive cycle with the arguments `(150, 50)` ( 500 % 150 yields 50).
- Once again, the function is initiated with arguments `(150, 50)`. As in previous iterations, `b` is not equal to `0`, and thus the program moves on to the next recursive cycle. The second argument in this case is determined by calculating the modulus 150 % 50, which yields the argument values `(50, 0)`.
- In this recursive cycle, when the code enters the `if` statement, the condition `b == 0` is satisfied. Therefore, the function will return `a`, which has a value of 50, the highest common factor for the original arguments.

## Time Complexities

- Method 1:

  - The first example uses a simple iterative approach to find the greatest common divisor (GCD) of two numbers. It starts by finding the minimum value between `a` and `b`, then iterates from that value down to one, checking if it divides both `a` and `b`. Therefore, the time complexity of this code is _O(min(a, b))_.

- Method 2:

  - The second example also calculates the GCD using an iterative approach known as the Euclidean algorithm. It repeatedly subtracts the smaller number from the larger number until the two numbers become equal (the GCD). The time complexity of this algorithm depends on the number of iterations required to reach the GCD. In the worst case, where one number is a multiple of the other, the time complexity is _O(max(a, b))_.

- Method 3:

  - The third example is an optimized version of the Euclidean algorithm that uses recursion. It calculates the GCD by repeatedly taking the modulus of `a` with `b` and calling itself with the new values (`b` and `a%b`) until `b` equals `0`. The time complexity of this optimized Euclidean algorithm is _O(log(max(a, b)))_ since the algorithm reduces the values quickly by taking the modulus.

To summarize, the time complexities of the three codes are as follows:

- Method 1: _O(min(a, b))_
- Method 2: _O(max(a, b))_
- Method 3: _O(log(max(a, b)))_

> **Note:** These time complexities typically represent the worst-case scenarios and assume that the `a` and `b` values are relatively large. In practice, the actual time taken by the algorithms can vary depending on the input values.
