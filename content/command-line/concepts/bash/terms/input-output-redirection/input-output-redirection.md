---
Title: 'Bash: Input-Output Redirection'
Description: 'Redirection allows the modification of the destination of standard input and standard output in a shell.'
Subjects:
  - 'Bash/Shell'
  - 'Computer Science'
Tags:
  - 'Bash/Shell'
  - 'Command Line'
  - 'Linux'
  - 'Redirection'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

Redirection is a form of input-output manipulation in a shell program such as [Bash](https://www.codecademy.com/resources/docs/command-line/bash). Redirection allows changing the values of `stdout` and `stdin` in a shell to a different location, i.e., a file can be read to `stdin` instead of taking input from keyboard and the output can be written to a file instead of going to terminal which is the default value of `stdout` in most cases.
To perform redirection special notations interpreted by the shell are used. The `<` and `>` operators are used for output and input redirections respectively.

```bash
echo "This is a redirection example." > red_file.txt
cat red_file.txt
This is a redirection example.
```

In above example, `>` operator sets `stdout` to `red_file.txt`. It directs `echo` command to write the supplied string to `red_file.txt` file. Remember that the redirection happens before the `echo` is executed. If `red_file.txt` doesn't exist, it will be created. If it does exist, all the content of the original file will be erased.

Input redirection allows the processes to read from a file instead of the keyboard. Let's use a input redirection operator.

```bash
cat < red_file.txt
This is a redirection example.
```

The result is same as `cat red_file.txt` but this time it works a little differently. In `cat red_file.txt`, the `cat` opens `red_file.txt` and prints out the content to the terminal but in `cat < red_file.txt`, `cat` reads directly from `stdin` as `<` operator has set the `stdin` to `red_file.txt`.

To suppress the output, you can redirect the output to `/dev/null`. `/dev/null` is a virtual device which is always empty.

```bash
echo "This is a redirection example." > /dev/null
# This prints out nothing.
```
