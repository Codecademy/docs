---
Title: 'Euclidean algorithm'
Description: 'The Euclidean algorithm is a simple and efficient method for finding the highest common factor (HCF), also known as the greatest common divisor (GCD), of two numbers.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Hcf'
CatalogContent:
  - 'paths/computer-science'
---

The `Euclidean algorithm` is a recursive algorithm that allows us to find the highest common factor (HCF) of two numbers. It is based on the observation that if we have two numbers, say A and B, and if B divides A evenly (leaving no remainder), then B is the HCF of A and B. In other words, the larger number is divisible by the smaller number without any remainder.

There can be multiple methods to solve and find the highest common factor (HCF) of two numbers. In this explanation, let's explore a basic approach first and then move on to the `Euclidean algorithm`.

## Basic Approach

In the basic approach, Let's follow a simple rule to find the GCD. Let's start by finding the minimum value between the two given numbers. Then, let's divide this minimum value by both numbers. If the number does not divide both numbers evenly, let's decrease it by `1` and continue dividing it by both numbers. Let's repeat this process until the minimum value can divide both numbers evenly. At that point, the minimum value is our HCF (highest common factor).

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

## Approach with Euclidean algorithm

Here two methods are shown using Euclidean algorithm to find the HCF of two numbers. So let's take two numbers as 'a' and 'b' as our inputs.

## Method 1

In this method, we aim to compare both 'a' and 'b'. Whichever number is greater, we subtract the smaller number from the larger number and update the value of the larger number accordingly. If 'a' is greater than 'b', we replace 'a' with 'a - b', and if 'b' is greater than 'a', we replace 'b' with 'b - a'. We repeat this step until 'a' becomes equal to 'b'. Once 'a' and 'b' are equal, we return 'a' as the answer. At this point, the value of 'a' (which is equal to 'b') represents the highest common factor (HCF) of the original values of 'a' and 'b'.

```java
class Euclidean {
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

The out for the above code will be:

```shell
5
```

If we debug the code above step by steps then:

Sure! Here's the updated explanation:

- Since 'b' is greater than 'a' (20 > 15), we replace 'b' with 'b - a', which gives us 'b = 20 - 15 = 5'.
- Now 'a' is still 15, and 'b' is 5.
- We proceed to replace 'a' with 'a - b', resulting in 'a = 15 - 5 = 10'.
- The values are now 'a = 10' and 'b = 5'.
- We continue the process and replace 'a' with 'a - b', giving us 'a = 10 - 5 = 5'.
- Now 'a' and 'b' are both equal to 5.
- At this point, the while loop exits, and we return 'a' as our answer, which is 5.
- Therefore, the highest common factor (HCF) of (15, 20) is 5.
