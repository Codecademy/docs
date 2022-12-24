---

Title: '.sleep()'

Description: 'The function suspends execution of current thread for a given time.'

Subject: 'Computer Science'

Tags: 
    -'Python'
    -'Function'
    -'Time Module'

CatalogContent:
    - 'learn-python'
    - 'concepts/time-module'
---

# **.sleep()**
The python time module function .sleep() suspends execution of current thread for a given period of time(in seconds).

### **Syntax** 
`time.sleep(23.4);` 

This will suspend execution for 23.4 seconds.
This function is part of the python time module which handles time related tasks.

### **Example**
To delay print by 2.4 seconds.

![image example image](https://raw.githubusercontent.com/Codecademy/docs/main/media/sleepimage.png)  
Here the print will be delayed for 2.4 seconds. 
Without the sleep function print will execute immediately without any delays.

## Codebyte Example

```codebyte/python
import time

while True:
  localtime = time.localtime();
  result = time.strftime("%I:%M:%S %p", localtime);
  print(result);
  time.sleep(1);

```