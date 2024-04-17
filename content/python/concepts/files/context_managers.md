---
Title: 'Context Managers and Files'
Description: 'This document introduces context managers and in particular how they can be used to work with files. It details the two approaches, class-based and decorator-based, thanks to which the user can customize this experience to fit the needs of a given use case.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Best Practices'
  - 'Classes'
  - 'Decorators'
  - 'Files'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

## Definition of a context managers

One might want to perform some operation within a certain overarching context, be it in the form of a time counter or a database connection or the use of a [file](https://www.codecademy.com/resources/docs/python/files). This is what **context managers** allow to do by implementing a **runtime context**, within which can be perform the wanted code and that closes automatically just after, sparing to the user the hassle of doing so. Regardless of the many different use cases a context manager can be used for, the **context manager protocol** always articulates those four functionalities: open the resource, implement the runtime context, handle the possible [exceptions](https://www.codecademy.com/resources/docs/python/errors), close the resource. The user input finds its place once the runtime context is started.

## Manipulate files with context managers

The `open()` function is the standard context manager to open, perform operations on and close files.

```py
# this code will print the first four lines of the poem "L'albatros"
with open('albatros.txt','r') as poem:
  for i in range(4):
    print(poem.readline())

# this code will however create an error as we are already outside of the indented block and therefore no longer within the context that had been setup
print(albatros.readline())
```
Output:

```md
Souvent, pour s'amuser, les hommes d'équipage

Prennent des albatros, vastes oiseaux des mers,

Qui suivent, indolents compagnons de voyage,

Le navire glissant sur les gouffres amers.
```

## Customized context managers for files

While `open()` is at the core of context managers working with files, it is still possible to implement context managers with additional capabilities, for example, to personalize files written using them. It can be done via two approaches: the **class-based approach**, and the **decorator-based approach**. Follow the links for more on [classes](https://www.codecademy.com/resources/docs/python/classes) and [decorators](https://www.codecademy.com/resources/docs/python/decorators).

### Class-based approach

It rests on the three class methods `__init__()`, `__enter__()` and `__exit__()`. The context manager is invoked using the *with...as* syntax and an instantiation of the class with needed parameters. The instantiation mobilizes a file thanks to the `__open__()` method and this file is in turn handled by the `__enter__()` method, allowing the operations indented in the *with* block to be performed. Whatever the `__enter__()` method does a *return* on can be then referred to in the indented block as the class instance created. Then the `__exit__()` method puts the final touch, closes the file, and handles any potential exception (*return True* allows to close the file and go ahead in the script even if an exception occurs).

The below code exemplifies the class-based approach applied to a HR department sending automated yearly bonus notifications to employees. It's then quite easy to combine this context manager together with a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) that contains all employees' records, loop through it, and have all the letters ready in no time.

```py
class bonus:
  def __init__(self, employee_first,employee_id, salary, percentage):
    self.first = employee_first
    self.id = employee_id
    self.salary = salary
    self.pct = percentage
    self.letter = open(str(self.id)+'_bonus_notice.txt','w')
    self.thanks_message = open('thanks_message.txt', 'r')
    self.conclusion = open('conclusion.txt','r')
  
  def __enter__(self):
    self.letter.write('Dear '+self.first +'!\n\n')
    self.letter.write(self.thanks_message.read())
    self.letter.write('\nYou will receive in addition to your December salary a yearly bonus that amounts to $'\ 
    +str(round(self.salary*(self.pct/100)))+'.\n')

  def __exit__(self,*exc):
    self.letter.write(self.conclusion.read())
    self.thanks_message.close()
    self.conclusion.close()
    self.letter.close()
    return True

with bonus('John',3789,100000,5) as john_smith_bonus:
  print('Letter printed!')
  ```

Result:

```md
Dear John!

We value all our employees and are committed to their growth and well-being. We would like to thank you for your amazing work throughout this whole year.
You will receive in addition to your December salary a yearly bonus that amounts to $5000.
Again, allow us to thank you for all your efforts and to wish you all the best, for you and your family.

Sincerely yours,
Your HR department
```
  
### Decorator-based approach

In this approach, rather than a class is defined a [generator](https://www.codecademy.com/resources/docs/python/generators) function (i.e. a function performing a *yield* and not a *return*). This function should be *decorated* using `@contextmanager` from the built-in module `contextlib`:

```py
from contextlib import contextmanager
```

A decorator-based context manager is also using the user input in the form of parameters provided at the instantiation. It follows the syntax *try-except-finally*, *try* being the part where the *yield* statement is and the core operations are done, *except* the exceptions handling part, and *finally* the part where the resources are closed, essentially.

The below code shows an implementation of a decorator-based context manager thanks to which interview proposals are sent to pre-selected candidates. It is also possible (but not mandatory) to introduce some personalized elements in the indented block. If doing so this element will be placed just before the timeslot proposal.

```py
@contextmanager
def interview_proposal(title_name, position, date, time):
  proposal_letter = open(title_name+'_interview_proposal.txt','w')
  try:
    proposal_letter.write('Dear '+title_name + ',\n\nThanks a lot for being interested in working with us! \
    We reviewed your application for the '+position+ ' role and we want to schedule a first visio interview with you.')
    yield proposal_letter
  except:
    print('Exception handled!')
  finally:
    proposal_letter.write('Would you be available on '+date+ ' at '+time+'?\
    \n\nWe look forward for hearing from you again! \nThe HR dept.')
    proposal_letter.close()

with interview_proposal('Mr. Smith', 'Software Developer', 'Monday the 10th of June', '2 pm') as proposal_smith:
  proposal_smith.write(' We are especially interested by your latest experience as a project leader \
  for a wealth management software. ')
```

Result:

```md
Dear Mr. Smith,

Thanks a lot for being interested in working with us! We reviewed your application for the Software Developer role and we want to schedule a first visio interview with you. We are especially interested by your latest experience as a project leader for a wealth management software. Would you be available on Monday the 10th of June at 2 pm?

We look forward for hearing from you again! 
The HR dept.
```