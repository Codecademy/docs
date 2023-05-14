---
Title: 'ARGF'
Description: 'ARGF is a module in Ruby used for reading files passed as command line arguments or in standard input (STDIN) in a terminal. A Ruby script using ARGF may be thought of as implementing a subset of the functions of the Unix command `cat`.'
Subjects:
  - 'Web Development'
Tags:
  - 'ARGF'
  - 'ARGV'
  - 'Standard Input'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

ARFG and ARGV
=============
- [ARFG and ARGV](#arfg-and-argv)
    - [References](#references)
    - [Reading files with Ruby](#reading-files-with-ruby)
  - [ARGF - the F is for files](#argf---the-f-is-for-files)
  - [ARGV - the V is for variable](#argv---the-v-is-for-variable)
  - [shift](#shift)
  - [readlines](#readlines)

### References
This article by Calle Erlandsson[^1]
Ruby documentation[^2]

ARGF is a module in Ruby used for reading files passed as command line arguments or in standard input (STDIN) in a terminal. A Ruby script using ARGF may be thought of as implementing a subset of the functions of the Unix command `cat`.
```
cat file1
# Output: File 1 contents

cat file2
# Output: File2 contents

echo "standard input" | cat
# Output: standard input
```
The `cat` command can accept a filename or you can | pipe another command as standard input.

### Reading files with Ruby

```ruby
# argf.rb
puts ARFG.read
```
## ARGF - the F is for files
The ARGF module has a method #file that you can use to recognize what file it is currently handling. Type this on the command line:
```
ruby argf.rb file1 file2
# Output:
# File 1 contents
# File 2 contents
```
If no file is passed in, ARGF can also detect the standard input stream being piped in.
```
echo "STDIN" | ruby argf.rb
# Output:
# STDIN
```
A combination of files and standard input is accepted too.
```
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
```
ruby argf_inspect_argv.rb file1 file2
# Output: ["file1", "file2"]

ruby argf_inspect_argv.rb one two
# Output: ["one", "two"]
```

## shift
ARGF is using ARGV to store the names of the files passed into it at the command line.
Files that are processed by ARGF.read are shifted off the ARGV array

However, as is often the case with terminal commands, flags like --verbose or --all are often used.
What happens in a case like this?
```
ruby argf_inspect_argv.rb --all one two
# Output: ["--all", "one", "two"]
```
We should use the #shift method of ARGV
```ruby
# argv_shift.rb
ARGV.shift
puts ARGV.inspect
```
```
ruby argv_shift.rb --all one two
["one", "two"]
```

## readlines
The method of ARGF #readlines created an array of strings of each line of each file passed to the Ruby script.
```ruby
# argv_readlines.rb
lines = ARGF.readlines
puts lines
puts lines.inspect
```
```
ruby argv_readlines.rb file1 file2
# Output:
# Contents of file1
# Contents of file2
# ["Contents of file1\n", "Contents of file2\n"]
```
#readlines will not accept command line arguments that are not valid filenames.
```
ruby argv_readlines.rb one two
=> argv_readlines.rb:1:in `readlines': No such file or directory @ rb_sysopen - one (Errno::ENOENT) from argv_readlines.rb:1:in `<main>'
```

[^1]: https://thoughtbot.com/blog/rubys-argf
[^2]: Type `ri ARGF` in the terminal
