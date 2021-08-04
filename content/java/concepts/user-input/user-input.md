---
Title: "User Input"
Subjects:
  - "Computer Science"
Tags: 
  - "User Input"
  - "Strings"
  - "Data Types"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-java"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

The `Scanner` class is used to get user input, and it is found in the `java.util` package.

```java
// Import the Scanner class
import java.util.Scanner;
```

To use the `Scanner` class, create an object of the class and use any of the available methods found in the `Scanner` class documentation. 

In our example, we will use the `.nextLine()` method, which is used to read `Strings`:

```java
import java.util.Scanner;  // Import the Scanner class

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);  // Create a Scanner object
    System.out.println("Enter username");

    String userName = myObj.nextLine();  // Read user input
    System.out.println("Username is: " + userName);  // Output user input
  }
}
```

Here, the user can enter a value in the terminal, press <kbd>enter</kbd>, and that number will get stored in the variable.

## Input Types

In the example above, we used the `.nextLine()` method, which is used to read `Strings`. To read other types, look at the table below:

| Method | Description |
| --- | --- |
| `.nextBoolean()` | Reads a boolean value from the user |
| `.nextByte()` | Reads a byte value from the user |
| `.nextDouble()` | Reads a double value from the user |
| `.nextFloat()` | Reads a float value from the user |
| `.nextInt()`	| Reads a int value from the user |
| `.nextLine()` | Reads a String value from the user |
| `.nextLong()` | Reads a long value from the user |
| `.nextShort()` | Reads a short value from the user |