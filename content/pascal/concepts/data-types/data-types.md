---
Title: 'Data Types'
Description: 'Pascal supports different data types that represent the size and kind of values being stored in memory.'
Subjects:
 - 'Computer Science'
 - 'Game Development'
Tags:
 - 'Data Types'
 - 'Integers'
 - 'Booleans'
 - 'Characters'
 - 'Strings'
CatalogContent:
 - 'learn-pascal'
 - 'paths/computer-science'
---
## Memory Size
The size of a given data type is measured in bytes:

| Data Type     | Memory Size |
| ------------- | ----------- |
| `boolean`     | 1 byte      |
| `byte`        | 1 byte      |
| `ShortInt`    | 2 bytes     |
| `word`        | 2 bytes     |
| `LongInt`     | 4 bytes     |
| `Real`        | 4 bytes     |
| `Double`      | 8 bytes     |


## String	variable
`Integers`
Integer is a type for storing integer (whole) numbers. An integer usually requires 4 bytes of memory space and ranges from -2<sup>31</sup> to 2<sup>31</sup>-1.

```pascal
var
  year: Integer;
  age: Integer;
begin
  year := 1991;
  age := 28;
end;
```

`Real Numbers`
Real numbers can be stored using Real, Single, Double, or Extended data types. These variables usually require 4, 4, 8, and 10 bytes of memory space, respectively.

```pascal
var
  price: Real;
  pi: Double;
begin
  price := 8.99;
  pi := 3.14159;
end;
```

`Booleans`
The Boolean type stores boolean values of True or False. These values usually require 1 byte of memory space.

```pascal
var
  organ_donor: Boolean;
  late_to_work: Boolean;
begin
  organ_donor := True;
  late_to_work := False;
end;
```

`Characters`
The Char type stores individual characters, wrapped in single quotes '. Characters usually require 1 byte of memory space and range from #0 to #255.

```pascal
var
  grade: Char;
  punctuation: Char;
begin
  grade := 'A';
  punctuation := '?';
end;
```

`Strings`
Strings are character sequences wrapped in single quotes (e.g., 'Hello World!').
The String type is used for storing text strings.

```pascal
var
  message: String;
  user: String;
begin
  message := 'good nite';
  user := '@sonnynomnom';

end;
```

`Constants`
Constant variables cannot be changed by the program during execution. The const keyword can be added before the data type to make the variable immutable:

```pascal
const
  quarter: Double = 0.25;
{ Now, the variable quarter can only be 0.25}
  ```

Type Conversion
A type cast is basically a conversion from one type to another.