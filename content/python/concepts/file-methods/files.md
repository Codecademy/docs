---
Title: 'Files'
Description: 'Handling files is a basic function many computer languages can perform. Python also has this function, and can perform basic tasks like opening and creating files, as well as editing the contents of files.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Files'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/code-foundations'
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'

  ## Opening files
  In Python, the `open()` function is built-in, and can be used to open files. To open a file, the file name can be specified in the function. Do note that the entire file path has to be specified unless the file is in the current directory.

  There are several modes Python can do when opening a file. The default one is reading. Here is a list of modes.

  r - reads a file
  w - writes a file
  a - appends a file 
  x - creates a file

  Files can be read in either text or binary, and are denoted as `t` and `b` respectively. The default is text. 

  ```py
  
  open("text.txt") # To open a file. Remember the default is reading in text form!
  open("text.txt", 'bx') # Creates a file in binary mode

  ```

  ## Methods
  The above only opens the file. To edit the contents, the `write()` method can be used in `w`, `a` or 'x' mode. In the `w` mode, the data will be overwritten by the contents specified in `write()`. In the `a` mode, the new contents will be appended at the end of the file. Other methods that can be used after opening a file are listed below.

  .read(x) - reads the file and prints the first x bytes; the whole file will be printed if x is not specified\
  .readlines(x) - reads each line in a file and generates a list\
  .write(str) - writes the string str as a line in the file\
  .writelines(str_list) - writes each string element in the list str_list as a line\

  ```py

  file = open("myfile.txt", 'x') # Creates a file for writing
  file.write("Hello world!") # Writes "Hello world!" in the file
  file.read(2) # Output: 'He' 
  file.read(3) # Output: 'llo'
  file.read()  # Output: ' world!' The rest of the file is read

  ```
