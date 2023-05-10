---
Title: 'Functions'
Description: 'Pascal allows for the creation of functions to modularize code and promote code reuse.'
Subjects:
 - 'Computer Science'
 - 'Software Development'
Tags:
 - 'Functions'
 - 'Procedures'
 - 'Modularity'
 - 'Code Reuse'
CatalogContent:
 - 'learn-pascal'
 - 'paths/computer-science'
---
## Built-in Functions
Pascal has many built-in functions. In order to use them, the required unit has to be included using uses.

Here a `function` named sqrt() is made available from the math unit:

```pascal 
program MathEX;
uses math;

begin
  writeln(sqrt(10));
  { Output: 3.16227766016838 }
end.
```

### Function Declaration & Definition
A Pascal `function` has two parts:

- Function declaration
- Function definition
- The declaration includes the function’s name, return type, and any parameters.

The definition is the actual body of the `function` which executes when a `function` is called. The body of a `function` is typically enclosed in begin and end statements.

```pascal
program Func_Print;

{Function declaration}

function test(): string;

begin
end;

{Main function}

begin
  test();
end.

{Function definition}

function test(): string;
begin
  test := 'Hello world';
end;
```

Void Functions

In Pascal, a `function` that does not return a value is declared with the keyword procedure. These functions are useful for a set of statements that do not require returning a value.

```pascal
program ProcPrint;

{Procedure declaration}
procedure print();

begin
  writeln('Hello World!');
end;

begin
  print();
end.
```

Return Values
A `function` that returns a value must have a result statement. The data type of the return value also must match the method’s declared return type.

On the other hand, a procedure (one that does not return anything) does not require a result statement.

```pascal

program Sum;

{Function declaration}

function sum(x, y: real): real;

begin
end;

begin
  writeln(sum(10.5, 25.7));
end;

{Function definition}
function sum(a, b: real): real;
begin
  sum := a + b;
end;
```
`Function` Declarations in Unit File
Pascal functions typically have two parts: 
declaration and definition.

`Function` declarations are generally stored in a unit file (.pas) and function definitions (body of the function that defines how it is implemented) are written in the same file.

### Example.pas
```pascal

unit Example;

{Function declaration}

interface
  function say(name: string): string;

{Function definition}

implementation
  function say(name: string): string;
  begin
    say := 'Hello there, ' + name + '!' + #10;
  end;
end.

program Example_Main;
uses Example;

begin
  writeln(say('Youssef'));
end.
```

`Function` Parameters
In Pascal, the values passed to a function are known as parameters. They represent the actual input values.

```pascal

program Pas_EX;

{Procedure declaration}

procedure print(a: integer);

begin
  writeln(a);
end;

begin
  print(10);
end.
```