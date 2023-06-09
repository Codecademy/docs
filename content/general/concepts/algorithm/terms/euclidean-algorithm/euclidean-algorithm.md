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

In the basic approach, we can follow a simple rule to find the GCD. We start by finding the minimum value between the two given numbers. Then, we divide this minimum value by both numbers. If the number does not divide both numbers evenly, we decrease it by `1` and continue dividing it by both numbers. We repeat this process until the minimum value can divide both numbers evenly. At that point, the minimum value is our HCF (highest common factor).

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

## Optimized approach with Euclidean algorithm

Here two methods are shown using Euclidean algorithm to find the HCF of two numbers.
