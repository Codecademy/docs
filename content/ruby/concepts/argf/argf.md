---
Title: 'ARGF'
Description: 'ARGF is a module in Ruby used for reading files passed as command line arguments or in standard input (STDIN) in a terminal. A Ruby script using ARGF may be thought of as implementing a subset of the functions of the Unix command cat.'
Subjects:
  - 'Web Development'
Tags:
  - 'Input'
  - 'Files'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

**`ARGF`** is a module in Ruby used for reading files passed as command line arguments or in standard input (`STDIN`) in a terminal. A Ruby script using `ARGF` may be thought of as implementing a subset of the functions of the Unix command `cat`.

```shell
cat file1
# Output: File 1 contents

cat file2
# Output: File2 contents

echo "standard input" | cat
# Output: standard input
```

The `cat` command can accept a filename or it can pipe (`|`) another command as standard input.

## `ARGF` - The F Is for Files

```ruby
# argf.rb
puts ARGF.read
```

The `ARGF` module has a method `.read` that can be used to read the entire contents of a file(s) passed in as a command line argument(s).

```shell
ruby argf.rb file1 file2
# Output:
# File 1 contents
# File 2 contents
```

If no file is passed in, `ARGF` can also detect the standard input stream being piped in.

```shell
echo "STDIN" | ruby argf.rb
# Output:
# STDIN
```

A combination of files and standard input is accepted too.

```shell
echo "STDIN" | ruby argf.rb file1 file2 -
# Output:
# File 1 contents
# File 2 contents
# STDIN
```

## `ARGV` - The V Is for Variable

Under the hood, there is a Ruby array termed `ARGV` which contains the names of all arguments passed to the file at the command line or through `STDIN`.

```ruby
# argf_inspect_argv.rb
puts ARGV.inspect
```

The `ARGV` array disregards whether the arguments are valid file names or not.

```shell
ruby argf_inspect_argv.rb file1 file2
# Output: ["file1", "file2"]

ruby argf_inspect_argv.rb one two
# Output: ["one", "two"]
```

## `.shift`

As is often the case with terminal commands, flags like `--verbose` or `--all` are often used.

```shell
ruby argf_inspect_argv.rb --all one two
# Output: ["--all", "one", "two"]
```

`ARGV` stores the names of the files and other arguments passed in through the command line.

The `.shift` method of ARGV can be used to remove any arguments from the ARGV array that are not files.

```ruby
# argv_shift.rb
ARGV.shift
puts ARGV.inspect
```

```shell
ruby argv_shift.rb --all one two
["one", "two"]
```

> **Note:** Files that are processed by `ARGF.read` are shifted off the `ARGV` array.

## `.readlines`

The method `.readlines` creates an array of strings. Elements within the array represent the file contents passed to the Ruby script. It's commonly used for separating the lines of a file into array items so they can be iterated over with other methods such as `.each`.

```ruby
# argv_readlines.rb
lines = ARGF.readlines
puts lines
puts lines.inspect
```

```shell
ruby argv_readlines.rb file1 file2
# Output:
# Contents of file1
# Contents of file2
# ["Contents of file1\n", "Contents of file2\n"]
```

`.readlines` will not accept command line arguments that are not valid file names.

```shell
ruby argv_readlines.rb one two
=> argv_readlines.rb:1:in `readlines': No such file or directory @ rb_sysopen - one (Errno::ENOENT) from argv_readlines.rb:1:in `<main>'
```
