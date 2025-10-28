---
Title: 'Command Line Arguments'
Description: 'Provides methods to accept input values when running Python scripts from the terminal'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arguments'
  - 'Command Line'
  - 'Input'
  - 'Modules'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Command line arguments** are values passed to a Python program when running it from the terminal or command prompt. They allow users to provide input data to a program without modifying the source code, making programs more flexible and reusable by accepting different parameters at runtime.

## Ways to Handle Command Line Arguments

Python provides several built-in modules to handle command line arguments, each with different levels of complexity and functionality.

### Using `sys.argv`

The `sys.argv` module provides the simplest way to access command line arguments. It stores all arguments passed to the script as a list of strings, where `sys.argv[0]` contains the script name itself.

#### Example: Basic `sys.argv` Usage

This example demonstrates how to access and use Python command line arguments using the `sys` module:

```py
import sys

# Display all command line arguments
print("Script name:", sys.argv[0])
print("All arguments:", sys.argv)

# Check if arguments are provided
if len(sys.argv) > 1:
  name = sys.argv[1]
  print(f"Hello, {name}!")
else:
  print("No name provided. Usage: python script.py <name>")
```

When running this script with `python greet.py Alice`, it produces the following output:

```shell
Script name: greet.py
All arguments: ['greet.py', 'Alice']
Hello, Alice!
```

The `sys.argv` list contains the script name as the first element, followed by all arguments passed from the command line. All arguments are stored as strings, so type conversion is needed for numeric operations.

### Using `getopt`

The `getopt` module provides a more structured approach to parsing command line options, similar to the C `getopt()` function. It supports both short options (single letters with a hyphen) and long options (words with double hyphens).

#### Example: File Processing with `getopt`

This example shows how to create a script that processes input and output files with optional help:

```py
import sys
import getopt

def main():
  input_file = ""
  output_file = ""

  try:
    # Parse command line options
    opts, args = getopt.getopt(sys.argv[1:], "hi:o:", ["help", "input=", "output="])
  except getopt.GetoptError as err:
    print(f"Error: {err}")
    print("Usage: python script.py -i <inputfile> -o <outputfile>")
    sys.exit(2)

  for opt, arg in opts:
    if opt in ("-h", "--help"):
      print("Usage: python script.py -i <inputfile> -o <outputfile>")
      print("Options:")
      print("  -i, --input   Input file path")
      print("  -o, --output  Output file path")
      print("  -h, --help    Show this help message")
      sys.exit()
    elif opt in ("-i", "--input"):
      input_file = arg
    elif opt in ("-o", "--output"):
      output_file = arg

  # Process the files
  if input_file and output_file:
    print(f"Processing: {input_file} -> {output_file}")
  else:
    print("Both input and output files are required")
    sys.exit(1)

if __name__ == "__main__":
  main()
```

Running this script with `python process.py -i data.txt -o result.txt` produces:

```shell
Processing: data.txt -> result.txt
```

The `getopt.getopt()` function parses the argument list and returns a tuple containing option-value pairs and remaining arguments. Short options require a colon after the letter if they expect a value.

### Using `argparse`

The `argparse` module is the most powerful and user-friendly way to handle command line arguments. It automatically generates help messages, handles errors gracefully, and supports various argument types including positional and optional arguments.

#### Example: User Greeting with `argparse`

This example demonstrates creating a user-friendly command line interface:

```py
import argparse

# Create argument parser
parser = argparse.ArgumentParser(description="Greet users with customizable messages")

# Add positional argument
parser.add_argument("name", help="Name of the person to greet")

# Add optional arguments
parser.add_argument("-g", "--greeting", default="Hello",
                   help="Greeting message (default: Hello)")
parser.add_argument("-u", "--uppercase", action="store_true",
                   help="Convert output to uppercase")

# Parse arguments
args = parser.parse_args()

# Create greeting message
message = f"{args.greeting}, {args.name}!"

# Apply uppercase if requested
if args.uppercase:
  message = message.upper()

print(message)
```

When executed with `python greet.py Alice -g "Good morning" --uppercase`, the output is:

```shell
GOOD MORNING, ALICE!
```

The `argparse` module automatically provides help documentation when using `-h` or `--help`, validates required arguments, and converts values to appropriate types. It handles argument parsing errors by displaying helpful error messages and usage information.

## Frequently Asked Questions

### 1. What are command-line arguments in Python?

Command line arguments in Python are values passed to a script when executing it from the terminal. They provide a way to customize program behavior without modifying the source code, making scripts more flexible and reusable.

### 2. What are the 5 arguments in Python?

There isn't a fixed set of "5 arguments" in Python. The number and type of command line arguments depend on what the program is designed to accept. However, common argument types include: positional arguments (required values), optional arguments (flags with values), boolean flags (on/off switches), help arguments, and version arguments.

### 3. How to pass an argument to a Python script from the command-line?

To pass arguments to a Python script, include them after the script name when running it:

- `python script.py argument1 argument2` - passes multiple arguments
- `python script.py --option value` - passes an option with a value
- `python script.py -f --verbose` - passes flags and options

### 4. What is an example of a command-line argument?

A simple example is running `python calculator.py 10 5 add`, where:

- `calculator.py` is the script name
- `10` and `5` are numeric arguments
- `add` is an operation argument

The script can access these values using `sys.argv`, `getopt`, or `argparse` to perform the specified calculation.
