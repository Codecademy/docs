---
Title: 'Classes'
Description: 'Classes are a certain something.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Classes' 
CatalogContent:
  - 'learn-c-sharp'
  - 'learn-c-sharp-introduction'
  - 'paths/computer-science'
  - 'learn-asp-net'
---

A **class** represents a custom data type. In C#, the class defines the kinds of information and methods included in a custom type. Generally, a class deeclaration contains the keyword of the class. It is then followed by an identifier(name) of the class. 

## Syntax

```pseudo
// Declaring the class:
public class ClassName
{
     // Example Instance Variables
     String subName;
     int exampleInt;

     // Constructor for ClassName class
     public ClassName(String subName, int exampleInt)
     {
          this.subName = subName;
          this.exampleInt = exampleInt;
     }

     // property 1
     public String GetClassSubName()
     {
          return subName;
     }

     // property 2
     public int GetClassExampleInt()
     {
          return exampleInt;
     }
}

// Calling the class from the main method
public static void Main(String[] args)
{

     // Creating object with Class
     ClassName Codecademy = new ClassName("LearnCSharp", 2023)

}
```

## Codebyte Example

In the following, a public class is declared as 'Book'. The class and its attributes are first declared. Within the class, it contains a book's name, author, and release date. Within `Main()`, two Book objects are declared: GreatGatsby and HungerGames. Each object then has it's appropriate detail declared within the parameters. 

```codebyte/csharp

using System;

// Class Declaration
public class Book {

     // Instance Variables:
     String bookName;
     String authorName;
     int releaseDate;

     // Constructor for Class:
     public Book(String bookName, String authorName, int releaseDate)
     {
          this.bookName = bookName;
          this.authorName = authorName;
          this.releaseDate = releaseDate;
     }

     // Property for retrieving book's name:
     public String GetBookName()
     {
          return bookName;
     }

     // Property for retrieving author's name:
     public String GetAuthorName()
     {
          return authorName;
     }

     // Property for retrieving book's release date:
     public int GetReleaseDate()
     {
          return releaseDate;
     }

}

// Main Method
public static void Main(String[] args)
{

     // Creating Book Objects

     Book GreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

     Book HungerGames = new Book("The Hunger Games", "Suzanne Collins", 2008);

}
```




