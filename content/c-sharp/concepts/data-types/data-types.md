---
Title: 'Data Types'
Description: 'C-sharp supports many data types that represent the size and kind of values being stored in memory.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Strings'
  - 'Booleans'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

C-sharp supports many data types that represent the size and kind of values stored in memory. The two main data types in C# are value and reference types.

## Value Types

Value types are data types that are built-in to C#. The available types and their memory sizes are as follows:

| Data Type | Description             | Memory Size  |
| --------- | ----------------------- | ------------ |
| `bool`    | Boolean                 | 1 byte       |
| `byte`    | Byte                    | 1 byte       |
| `sbyte`   | Short Byte              | 1 byte       |
| `char`    | Character               | 2 bytes      |
| `decimal` | Decimal                 | 16 bytes     |
| `double`  | Double                  | 8 bytes      |
| `float`   | Float                   | 4 bytes      |
| `int`     | Integer                 | 4 bytes      |
| `uint`    | Unsigned Integer        | 4 bytes      |
| `nint`    | Native Integer          | 4 or 8 bytes |
| `unint`   | Unsigned Native Integer | 4 or 8 bytes |
| `long`    | Long                    | 8 bytes      |
| `ulong`   | Unsigned Long           | 8 bytes      |
| `short`   | Short                   | 2 bytes      |
| `ushort`  | Unsigned Short          | 2 bytes      |

The following code demonstrates how to instantiate a variable of each type shown above:

```csharp
bool isOpen = true;
byte age = 45;
sbyte temperature = 58;
char grade = 'a';
decimal numberOfAtoms = 1493867940.23m;
double weightOfHippos = 243906.12;
float heightOfGiraffe = 908.32f;
int seaLevel = -24;
uint year = 2023u;
nint pagesInBook = 412;
unint milesToNewYork = 2597;
long circumferenceOfEarth = 25000l;
ulong depthOfOcean = 28000ul;
short tableHeight = 4;
ushort treeBranches = 33;
```

## Reference Types

Reference types are objects that exist in external memory space. The reference types in C# are as follows:

- `object`
- `string`
- `dynamic`
