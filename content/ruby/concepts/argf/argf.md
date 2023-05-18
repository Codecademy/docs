---
Title: 'ARGF and ARGV'
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

ARGF is a module in Ruby used for reading files passed as command line arguments or in standard input (STDIN) in a terminal. A Ruby script using ARGF may be thought of as implementing a subset of the functions of the Unix command cat.

```shell
cat file1
# Output: File 1 contents

cat file2
# Output: File2 contents

echo "standard input" | cat
# Output: standard input
```

The cat command can accept a filename or you can | pipe another command as standard input.

## ARGF - the F is for files

```ruby
# argf.rb
puts ARFG.read
```

The ARGF module has a method #file that you can use to recognize what file it is currently handling. Type this on the command line:

```shell
ruby argf.rb file1 file2
# Output:
# File 1 contents
# File 2 contents
```

If no file is passed in, ARGF can also detect the standard input stream being piped in.

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

## ARGV - the V is for variable

Behind the scenes, inside the file there is a Ruby array called ARGV which contains the names of all arguments passed to the file at the command line or through STDIN.

```ruby
# argf_inspect_argv.rb
puts ARGV.inspect
```

The ARGV array doesn't care whether the arguments are valid filenames or not.

```shell
ruby argf_inspect_argv.rb file1 file2
# Output: ["file1", "file2"]

ruby argf_inspect_argv.rb one two
# Output: ["one", "two"]
```

## `shift`

ARGF is using ARGV to store the names of the files passed into it at the command line.
Files that are processed by ARGF.read are shifted off the ARGV array

However, as is often the case with terminal commands, flags like `--verbose` or `--all` are often used.
What happens in a case like this?

```shell
ruby argf_inspect_argv.rb --all one two
# Output: ["--all", "one", "two"]
```

The #shift method of ARGV should be used:

```ruby
# argv_shift.rb
ARGV.shift
puts ARGV.inspect
```

```shell
ruby argv_shift.rb --all one two
["one", "two"]
```

## `readlines`

The method of ARGF #readlines created an array of strings of each line of each file passed to the Ruby script.

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

`#readlines` will not accept command line arguments that are not valid filenames.

```shell
ruby argv_readlines.rb one two
=> argv_readlines.rb:1:in `readlines': No such file or directory @ rb_sysopen - one (Errno::ENOENT) from argv_readlines.rb:1:in `<main>'
```
