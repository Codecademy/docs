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
public void CopyTo(Array destinationArray, int destinationIndex)
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

In this example, there is a source array named `sourceArray` with elements [10, 20, 30, 40, 50]. A destination array named `destinationArray` is created with the size 6. Then, the `.CopyTo()` method is used to copy elements from `sourceArray` to `destinationArray`, starting at index 1. As for the output, the first index will be **0** and from index **1** the `sourceArray` will get copied into the `destinationArray`.

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

In this codebyte example, there is a source array named `sourceArray` with elements ["apple", "banana", "orange", "kiwi", "grape"]. A destination array named `destinationArray` is created with a size of 3. The `.CopyTo()` method is used to copy elements from `sourceArray` to `destinationArray`, starting at index 1.
