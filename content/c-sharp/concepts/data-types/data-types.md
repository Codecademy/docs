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

Value types are data types that are built in to C#. The available types and their memory sizes are as follows:

| Data Type | Memory Size  |
| --------- | ------------ |
| `bool`    | 1 byte       |
| `byte`    | 1 byte       |
| `sbyte`   | 1 byte       |
| `char`    | 2 bytes      |
| `decimal` | 16 bytes     |
| `double`  | 8 bytes      |
| `float`   | 4 bytes      |
| `int`     | 4 bytes      |
| `uint`    | 4 bytes      |
| `nint`    | 4 or 8 bytes |
| `unint`   | 4 or 8 bytes |
| `long`    | 8 bytes      |
| `ulong`   | 8 bytes      |
| `short`   | 2 bytes      |
| `ushort`  | 2 bytes      |

The following code demonstrates how to instantiate a variable of each of these value types.

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
