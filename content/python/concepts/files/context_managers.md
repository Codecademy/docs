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

# Customized context managers for files

While **open()** remains at the core of any context manager working with files, we still have the possibility to implement context managers with additional capabilities, for example, setting a common framework for every single file we will write using them. It can be done via two approaches: the **class-based approach**, and the **decorator-based approach**.

### Class-based approach

We define a class that contains the functionalities that we detailed in the first section, thanks to the three class methods __init__(), __enter__() and __exit__(). We invoke the context manager using the *with...as* syntax and an instantiation of the class with needed parameters. The instantiation mobilizes a file thanks to the __open__() method and this file is in turn handled by the __enter__() method, allowing the operations indented in the *with* block to be performed. Whatever the __enter__() method does a *return* on can be then referred to in the indented block as the class instance created and manipulated. Then the __exit__() method puts the final touch, closes the file and handles any potential exception (*return True* allows to close the file and go ahead in the script even if an exception occurs).

The below code exemplifies the class-based approach applied to a HR department sending automated yearly bonus notifications to employees. It's then quite easy to combine this context manager together with a dictionary that contains all employees' records, loop through it and have all the letters ready in no time.

```py
class bonus:
  def __init__(self, employee_first,employee_last, employee_id, salary, percentage):
    self.first = employee_first
    self.last = employee_last
    self.id = employee_id
    self.salary = salary
    self.pct = percentage
    self.letter = open(str(self.id)+'_bonus_notice.txt','w')
  
  def __enter__(self):
    self.letter.write(f'FROM: HR DEPT. \nTO: {self.first} {self.last} \nEmp. ID: {self.id}')
    self.letter.write('\n\nDear '+self.first +'!\n\n')
    self.letter.write('We value all our employees and are committed to their growth and well-being. We would like to thank you for your amazing work throughout this whole year.\n')
    self.letter.write('You will receive in addition to your December salary a yearly bonus that amounts to $' +str(round(self.salary*(self.pct/100)))+'.')

  def __exit__(self,*exc):
    self.letter.write(f'\nAgain, allow us to thank you for all your efforts and to wish you all the best, for you and your family.\n\nSincerely yours, \nYour HR department')
    self.letter.close()
    return True

with bonus('John', 'Smith', 3789,100000,5) as john_smith_bonus:
  print('Letter printed!')
  ```
