---
Title: 'Files'
Description: 'The File class is used for working with file objects in Ruby. To create a new File object, use the .new() method and pass in a string name for the new file and a mode to indicate which operations can be done to the file. Common modes include: r, r+, w, w+, a, a+.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Files'
  - 'Classes'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

The `File` class is used for working with file objects in Ruby.

## Create a New File

To create a new `File` object, use the `.new()` method and pass in:

- A string `name` for the new file.
- A `mode` to indicate which operations can be done to the file.

Common modes include the following:

| Modes | Description                                                                                                  |
| ----- | ------------------------------------------------------------------------------------------------------------ |
| `r`   | Read: Start from the beginning of the file.                                                                  |
| `r+`  | Read and write: Start from the beginning of the file.                                                        |
| `w`   | Write: Start from the beginning of the file.                                                                 |
| `w+`  | Rread and write: Overwrite the existing or create a new one.                                                 |
| `a`   | Append (write-only): Start writing from the end of the existing file or create a new one.                    |
| `a+`  | Append (read and write): Start reading and/or writing from the end of the existing file or create a new one. |

This new `File` object can be assigned to its own variable, like in the example below:

```rb
example_file = File.new("exampleFile.txt", "w")

puts example_file
# Output: #<File:0x00007fab5113b790>
```

## Open and Close a File

To open a file, use the `.open()` method:

```rb
File.new("exampleFile.txt", "w")

File.open("exampleFile.txt", "r")
```

To close the file, use the `.close` method:

```rb
example_file.close
```

When using `.open()` with a `do...end` block, the file will `.close` at the end.

```rb
File.open("exampleFile.txt", "w+") do |f|
  ...
end
```

## Read and Write to a File

Since it's related to the `IO` class, the `File` class can read and write files. It's important to mention that the file must be opened before reading or writing can start. It must also be closed afterward.

To just write to a file, use the `w` mode:

```rb
example_file = File.open("exampleFile.txt", "w")

File.write("exampleFile.txt", "This is some text.")

example_file.close
```

To just read an (opened) file, use the `r` mode:

```rb
example_file = File.open("exampleFile.txt", "r")

puts example_file.read
# Output: This is some text.

example_file.close
```
