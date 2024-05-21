---
Title: 'Context Managers'
Description: 'Context managers allow users to perform operations within a certain overarching context.'
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

## Definition

**Context managers** allow users to perform operations within a certain overarching context, be it in the form of a time counter or a database connection or the use of a file. They manage to do it by implementing a **runtime context**. In this context, the specified operation is first performed and then, the context automatically gets closed. This prevents the users from the hassle of closing it manually.

Regardless of the many different use cases that context managers can be used for, the **context manager protocol** always articulates four functionalities:

- Opening the resource
- Implementing the runtime context
- Handling the possible [exceptions](https://www.codecademy.com/resources/docs/python/errors)
- Closing the resource

Once the runtime context is started, the user input finds its place.

## File Manipulation

The `open()` function is the standard context manager for opening, performing operations on and closing files:

```py
# Printing the first four lines of the poem "L'albatros"
with open('albatros.txt', 'r') as poem:
  for i in range(4):
    print(poem.readline())
```

The above code produces the following output:

```shell
Souvent, pour s'amuser, les hommes d'équipage

Prennent des albatros, vastes oiseaux des mers,

Qui suivent, indolents compagnons de voyage,

Le navire glissant sur les gouffres amers.
```

## Customized Context Managers

While `open()` is at the core of using context managers with files, it is still possible to implement context managers with additional capabilities, e.g., personalizing files written using them. It can be done via two approaches:

- [Class](https://www.codecademy.com/resources/docs/python/classes)-based approach
- [Decorator](https://www.codecademy.com/resources/docs/python/decorators)-based approach

### Class-Based Approach

Class-based approach rests on three class methods:

- `__init__()`
- `__enter__()`
- `__exit__()`

The context manager is invoked using the `_with...as_` syntax and an instantiation of the class with needed parameters. The instantiation mobilizes a file thanks to the `__open__()` method and the file is in turn handled by the `__enter__()` method, allowing the operations indented in the `_with_` block to be performed. Whatever the `__enter__()` method does a `_return_` on can then be referred to in the indented block. Lastly, the `__exit__()` method puts the final touch by closing the file and handling any potential exceptions.

> **Note:** `_return True_` allows the users to close the file and go ahead in the script even if an exception occurs.

The below code exemplifies the class-based approach applied to a HR department sending automated yearly bonus notifications to employees. Here, the context manager prepares all the letters by looping through a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) that contains records for all employees:

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

The output for the above code is as follows:

```shell
Dear John!

We value all our employees and are committed to their growth and well-being. We would like to thank you for your amazing work throughout this whole year.
You will receive in addition to your December salary a yearly bonus that amounts to $5000.
Again, allow us to thank you for all your efforts and to wish you all the best, for you and your family.

Sincerely yours,
Your HR department
```

### Decorator-Based Approach

In decorator-based approach, a [generator](https://www.codecademy.com/resources/docs/python/generators) function (i.e., a function performing a `_yield_` and not a `_return_`) is defined rather than a class. This function is _decorated_ using `@contextmanager` from the built-in module `contextlib`:

```pseudo
from contextlib import contextmanager
```

A decorator-based context manager also uses the user input in the form of parameters provided at the instantiation. It follows the syntax `_try-except-finally_`, where `_try_` being the part where the `_yield_` statement is and the core operations are done, `_except_` being the part where the exceptions are handled and `_finally_` being the part where the resources are closed.

The below code shows an implementation of a decorator-based context manager thanks to which interview proposals are sent to pre-selected candidates. It is also possible (but not mandatory) to introduce some personalized elements in the indented block. Doing so places this element just before the timeslot proposal:

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

Here is the output:

```shell
Dear Mr. Smith,

Thanks a lot for being interested in working with us! We reviewed your application for the Software Developer role and we want to schedule a first visio interview with you. We are especially interested by your latest experience as a project leader for a wealth management software. Would you be available on Monday the 10th of June at 2 pm?

We look forward for hearing from you again!
The HR dept.
```
