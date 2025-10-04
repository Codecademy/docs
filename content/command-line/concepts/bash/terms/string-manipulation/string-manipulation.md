---
Title: 'String Manipulation'
Description: 'Performs operations on text strings to modify content or extract information in Bash shell scripts.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Bash/Shell'
  - 'Command Line'
  - 'Strings'
  - 'Text Processing'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

**String manipulation** in Bash refers to operations performed on text strings to modify their content, extract information, or transform data. Bash provides built-in functionality to manipulate strings without relying on external tools, making it efficient for text processing tasks directly within shell scripts. String manipulation is one of the most common tasks in shell scripting, allowing developers to parse command output, process filenames, validate user input, and transform data formats.

Bash string manipulation operations include measuring string length, extracting substrings, searching and replacing patterns, joining strings together, and converting between lowercase and uppercase. These capabilities are essential for automating system tasks, parsing configuration files, and developing robust command-line tools.

## String Manipulation Commands

Parameter expansion is the primary mechanism for string manipulation in Bash. It uses special operators within `${...}` syntax to perform various operations on string variables.

### String Length

```pseudo
${#string}
```

**Parameters:**

- `string`: The string variable whose length will be measured

**Return value:**

The number of characters in the string

**Example:**

```bash
name="Codecademy"
echo ${#name}
```

**Output:**

```shell
10
```

This example counts the number of characters in the variable `name`, which contains "Codecademy".

### Substring Extraction

```pseudo
${string:position:length}
```

**Parameters:**

- `string`: The source string
- `position`: The starting position (zero-indexed)
- `length`: Optional parameter specifying how many characters to extract

**Return value:**

A substring of the original string

**Example:**

```bash
text="Learn Bash Programming"
echo ${text:6:4}
```

**Output:**

```shell
Bash
```

This example extracts 4 characters starting from position 6 of the variable `text`.

### Remove Prefix Pattern (Shortest Match)

```pseudo
${string#pattern}
```

**Parameters:**

- `string`: The source string
- `pattern`: Pattern to match at the beginning of the string

**Return value:**

The string with the matched pattern removed from the beginning

**Example:**

```bash
filename="index.component.js"
echo ${filename#*.}
```

**Output:**

```shell
component.js
```

This example removes everything from the beginning of the filename up to and including the first period.

### Remove Prefix Pattern (Longest Match)

```pseudo
${string##pattern}
```

**Parameters:**

- `string`: The source string
- `pattern`: Pattern to match at the beginning of the string

**Return value:**

The string with the longest matched pattern removed from the beginning

**Example:**

```bash
filepath="/home/user/documents/file.txt"
echo ${filepath##*/}
```

**Output:**

```shell
file.txt
```

This example extracts just the filename by removing everything up to and including the last forward slash.

### Remove Suffix Pattern (Shortest Match)

```pseudo
${string%pattern}
```

**Parameters:**

- `string`: The source string
- `pattern`: Pattern to match at the end of the string

**Return value:**

The string with the matched pattern removed from the end

**Example:**

```bash
filename="document.old.txt"
echo ${filename%.*}
```

**Output:**

```shell
document.old
```

This example removes the last file extension by deleting everything from the last period to the end of the string.

### Remove Suffix Pattern (Longest Match)

```pseudo
${string%%pattern}
```

**Parameters:**

- `string`: The source string
- `pattern`: Pattern to match at the end of the string

**Return value:**

The string with the longest matched pattern removed from the end

**Example:**

```bash
filename="document.old.txt"
echo ${filename%%.*}
```

**Output:**

```shell
document
```

This example removes all extensions by deleting everything from the first period to the end of the string.

### Search and Replace (First Occurrence)

```pseudo
${string/pattern/replacement}
```

**Parameters:**

- `string`: The source string
- `pattern`: Pattern to search for
- `replacement`: String to substitute for the pattern (optional; if omitted, deletes the pattern)

**Return value:**

The string with the first occurrence of the pattern replaced

**Example:**

```bash
sentence="The cat sat on the mat"
echo ${sentence/cat/dog}
```

**Output:**

```shell
The dog sat on the mat
```

This example replaces the first occurrence of "cat" with "dog".

### Search and Replace (All Occurrences)

```pseudo
${string//pattern/replacement}
```

**Parameters:**

- `string`: The source string
- `pattern`: Pattern to search for
- `replacement`: String to substitute for the pattern (optional; if omitted, deletes all occurrences)

**Return value:**

The string with all occurrences of the pattern replaced

**Example:**

```bash
path="path/to/file/in/path/directory"
echo ${path//path/dir}
```

**Output:**

```shell
dir/to/file/in/dir/directory
```

This example replaces all occurrences of "path" with "dir".

### Convert to Uppercase (First Character)

```pseudo
${string^}
```

**Parameters:**

- `string`: The source string

**Return value:**

The string with the first character converted to uppercase

**Example:**

```bash
name="codecademy"
echo ${name^}
```

**Output:**

```shell
Codecademy
```

This example capitalizes the first letter of the variable `name`.

### Convert to Uppercase (All Characters)

```pseudo
${string^^}
```

**Parameters:**

- `string`: The source string

**Return value:**

The string with all characters converted to uppercase

**Example:**

```bash
name="Bash"
echo ${name^^}
```

**Output:**

```shell
BASH
```

This example converts all letters in the variable `name` to uppercase.

### Convert to Lowercase (First Character)

```pseudo
${string,}
```

**Parameters:**

- `string`: The source string

**Return value:**

The string with the first character converted to lowercase

**Example:**

```bash
name="Bash"
echo ${name,}
```

**Output:**

```shell
bash
```

This example converts the first letter of the variable `name` to lowercase.

### Convert to Lowercase (All Characters)

```pseudo
${string,,}
```

**Parameters:**

- `string`: The source string

**Return value:**

The string with all characters converted to lowercase

**Example:**

```bash
name="BASH"
echo ${name,,}
```

**Output:**

```shell
bash
```

This example converts all letters in the variable `name` to lowercase.

For more on Bash scripting, check out the [Learn Bash Scripting](https://www.codecademy.com/enrolled/courses/bash-scripting) course on Codecademy.
