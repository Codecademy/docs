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

Result:
```py
FROM: HR DEPT. 
TO: John Smith 
Emp. ID: 3789

Dear John!

We value all our employees and are committed to their growth and well-being. We would like to thank you for your amazing work throughout this whole year.
You will receive in addition to your December salary a yearly bonus that amounts to $5000.
Again, allow us to thank you for all your efforts and to wish you all the best, for you and your family.

Sincerely yours, 
Your HR department
```
  
### Decorator-based approach

In this approach, rather than a class we define a generator function (i.e. a function performing a *yield* and not a *return*). This function should be *decorated* using **@contextmanager** from the built-in module **contextlib**:

```py
from contextlib import contextmanager
```

A decorator-based context manager is also using the user input in the form of parameters provided at the instantiation. It follows the syntax *try-except-finally*, *try* being the part where the *yield* statement is and the core operations are done, *except* the exceptions handling part, and *finally* the part where the resources are closed, essentially.

The below code shows an implementation of a decorator-based context manager thanks to which interview proposals are sent to pre-selected candidates. We also can (but don't have to) introduce some personalized element in the indented block. If doing so this element will be placed just before the timeslot proposal.

```py
@contextmanager
def interview_proposal(title_name, position, date, time):
  proposal_letter = open(title_name+'_interview_proposal.txt','w')
  try:
    proposal_letter.write('Dear '+title_name + ',\n\n')
    proposal_letter.write('Thanks a lot for being interested in working with us! We reviewed your application for the '+position+ ' role and we want to schedule a first visio interview with you.')
    yield proposal_letter
  except:
    print('Exception handled!')
  finally:
    proposal_letter.write('Would you be available on '+date+ ' at '+time+'?\n\n')
    proposal_letter.write('We look forward for hearing from you again! \nThe HR dept.')
    proposal_letter.close()
    
  
with interview_proposal('Mr. Smith', 'Software Developer', 'Monday the 10th of June', '2 pm') as proposal_smith:
  proposal_smith.write(' We are especially interested by your latest experience as a project leader for a wealth management software. ')
```

Result:
```py
Dear Mr. Smith,

Thanks a lot for being interested in working with us! We reviewed your application for the Software Developer role and we want to schedule a first visio interview with you. We are especially interested by your latest experience as a project leader for a wealth management software. Would you be available on Monday the 10th of June at 2 pm?

We look forward for hearing from you again! 
The HR dept.
```