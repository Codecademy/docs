# Definition

We might want to perform some operation within a certain overarching context, be it in the form of a time counter or a database connection or the use of a file. This is what **context managers** allow us to do by implementing a **runtime context**, within which we can perform the code that we want and that closes automatically just after, sparing us the hassle to do so. A context manager is also equipped of instructions regarding the handling of errors/exceptions that might occur during the execution, allowing the rest of the script to work nevertheless. Regardless of the many different use cases a context manager can be used for, the **context manager protocol** always articulates those four functionalities: open the resource, implement the runtime context, handles the exceptions, close the resource. The user input finds its place once the runtime context is started.

# Manipulate files with context managers

The **open()** function is the standard context manager to open, perform operations on and close files.
```py

# this code will print the first four lines of the poem "L'albatros"
with open('albatros.txt','r') as albatros:
  print('\n')
  print(albatros.readline(),albatros.readline(),albatros.readline(),albatros.readline(), sep = '')

# this code will however create an error as we are already outside of the indented block and therefore no longer within the context that had been setup
print(albatros.readline())
```

# Customized context managers
