In Pascal, a function is a set of statements that are executed together when the function is called. Every function has a name, which is used to call the respective function.

## Built-in Functions
Pascal has many built-in functions. In order to use them, the required unit has to be included using uses.

Here a function named sqrt() is made available from the math unit:

### pascal
Copy code
program Example;
uses math;

begin
  writeln(sqrt(10));
  { Output: 3.16227766016838 }
end.
### Function Declaration & Definition
A Pascal function has two parts:

- Function declaration
- Function definition
- The declaration includes the function’s name, return type, and any parameters.

The definition is the actual body of the function which executes when a function is called. The body of a function is typically enclosed in begin and end statements.

### pascal
Copy code
program Example;

// Function declaration
function blah(): string;

begin
end;

// Main function
begin
  blah();
end.

// Function definition
function blah(): string;
begin
  blah := 'Blah blah';
end;
Void Functions
In Pascal, a function that does not return a value is declared with the keyword procedure. These functions are useful for a set of statements that do not require returning a value.

### pascal
Copy code
program Example;

// Procedure declaration
procedure print();

begin
  writeln('Hello World!');
end;

begin
  print();
end.
Return Values
A function that returns a value must have a result statement. The data type of the return value also must match the method’s declared return type.

On the other hand, a procedure (one that does not return anything) does not require a result statement.

### pascal
Copy code
program Example;

// Function declaration
function sum(a, b: integer): integer;

begin
end;

begin
  writeln(sum(10, 20));
end;

// Function definition
function sum(a, b: integer): integer;
begin
  sum := a + b;
end;
Function Declarations in Unit File
Pascal functions typically have two parts: declaration and definition.

Function declarations are generally stored in a unit file (.pas) and function definitions (body of the function that defines how it is implemented) are written in the same file.

### Example.pas
pascal
Copy code
unit Example;

// Function declaration
interface
  function say_hi(name: string): string;

// Function definition
implementation
  function say_hi(name: string): string;
  begin
    say_hi := 'Hey there, ' + name + '!' + #10;
  end;
end.
Example_Main.pas
pascal
Copy code
program Example_Main;
uses Example;

begin
  writeln(say_hi('Sabaa'));
end.
Function Parameters
In Pascal, the values passed to a function are known as parameters. They represent the actual input values.

pascal
Copy code
program Example;

// Procedure declaration
procedure print(a: integer);

begin
  writeln(a);
end;

begin
  print(10);
end.