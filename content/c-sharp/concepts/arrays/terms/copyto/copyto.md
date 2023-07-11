---
Title: '.CopyTo()'
Description: 'Copies the elements of an array to another array.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The `.CopyTo()` method in C# provides a functionality to copy elements from one array to another or to a specific location within an array. 

It offers a convenient way to duplicate array contents, ensuring that the target array holds the same values in the specified range. By specifying the destination array and the starting index, precise control over the element copying process is achieved, facilitating efficient data manipulation and array operations.

## Syntax

```pseudo
CopyTo(destinationArray, destinationIndex)
```

The `destinationArray` parameter is the target array where the elements will be copied to, and the `destinationIndex` parameter represents the starting index in the `destinationArray` where the elements will be copied.

## Example

```cs
class CopyTo
{
static void Main(string[] args)
{
    int[] sourceArray = { 10, 20, 30, 40, 50 };
    int[] destinationArray = new int[6];
    sourceArray.CopyTo(destinationArray, 1);
    Console.WriteLine("Source Array:");
    PrintArray(sourceArray);
    Console.WriteLine("Destination Array:");
    PrintArray(destinationArray);
}
static void PrintArray(int[] array)
{
    foreach (int element in array)
    {
        Console.Write(element + " ");
    }
    Console.WriteLine();
}
}
```

The output for the above code will be:

```shell
Source Array:
10 20 30 40 50
Destination Array:
0 10 20 30 40 50
```

In this example, the `.CopyTo()` method is used to copy elements from `sourceArray` to `destinationArray`, starting at index `1`. 

## Codebyte Example

```codebyte/cs
class CopyTo
{
static void Main(string[] args)
{
    string[] sourceArray = { "apple", "banana", "orange", "kiwi", "grape" };
    string[] destinationArray = new string[3];
    sourceArray.CopyTo(destinationArray, 1);

    Console.WriteLine("Source Array:");
    PrintArray(sourceArray);

    Console.WriteLine("Destination Array:");
    PrintArray(destinationArray);
}
static void PrintArray(string[] array)
{
    foreach (string element in array)
    {
        Console.Write(element + " ");
    }
    Console.WriteLine();
}
}
```

