---
Title: '.getChars()'
Description: ' Copies characters from the given string into the destination character array.'
Subjects:
  - 'Java'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/Java'
---

The **.getChars()** string method copies a set of characters from a string into a destination character array. 

## Syntax


The basic syntax of .getChars() in Java is:
```pseudo
getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)
```
A brief description of the parameters is below:

---
srcBegin: The index to start copying the new array. 
scrEnd: The index to stop copying the new array. 
dst: The name of the new array. 
dstBegin: The index of the destination array. 
---

## Example

In the following example, `getChars()` converts a `string` into a new array. 



string originalString = "Welcome to Texas"

`console.WriteLine.=(originalString.getChars(11, 15, newArray 0)); //prints Texas`

## Codebyte Example

In the following example, `getChar()` converts an array into a new shorter array. It then prints the new array in the consule. 


```class example{
  public static void main(Strings args [])
  {
    string str = "Welcome to Texas";
    char [] destArray = new chars[5];
    try {
      str.getChars(0, 5, destArray, 0)
      System.out.println(newArray);
    }
     catch (Exception ex) {
      System.out.pringln(ex)
    }
    
  }
```

