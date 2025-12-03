---
Title: 'Input Output Redirection'
Description: 'Modifies the destination of standard input and output in a shell.'
Subjects:
  - 'Bash/Shell'
  - 'Computer Science'
Tags:
  - 'Command Line'
  - 'Linux'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

In shell programs such as Bash, **input output redirection** is a powerful mechanism that allows control over where the input comes from and where the output goes. By default, commands read input (`stdin`) from the keyboard and send output (`stdout`) to the terminal. However, redirection makes it possible to read from files, write to files, or even discard output altogether.

Special operators are used for redirection:

- `<` redirects input.
- `>` redirects output.

## Output Redirection

```shell
echo "This is a redirection example." > write_file.txt
cat write_file.txt

# Output:
# This is a redirection example.
```

In the example above, the `>` operator redirects `stdout` to `write_file.txt`, instructing the `echo` command to write the supplied string to
the file. Redirection occurs before `echo` is executed.

> **Note:** If `write_file.txt` does not exist, it is created. If it already exists, its content is overwritten.

## Input Redirection

Input redirection allows a program to read from a file instead of the keyboard.

If there is a file named `read_file.txt` containing a string "Showing how input redirection works!":

```shell
cat read_file.txt

# Output:
# Showing how input redirection works!
```

If `<` is used:

```shell
cat < read_file.txt

# Output:
# Showing how input redirection works!
```

In both cases, the output is same but both approaches are very different fundamentally. In the first case, a `read_file.txt` is opened and its
contents are printed out. In the second case, the `<` operator redirects `stdin` to `read_file.txt` and the `cat` command reads from `stdin`
instead of the file directly.

## Suppressing Output

To suppress an output, it is redirected to `/dev/null`, which is a virtual device that is always empty:

```shell
echo "This is a redirection example." > /dev/null

# No output is printed
```
