---
Title: 'DayOfWeek'
Description: 'Useful tool for working with weekdays in the Kotlin code, making it easier to perform various operations and checks related to days of the week.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Method'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **DayOfWeek** method is used to return the DayOfWeek instance for the week day number, starting with 1 as Monday. 
## Syntax
'''pseudo
fun DayOfWeek(isoDayNumber: Int): DayOfWeek
'''
The integer value input into the method must correspond to one of the seven days in the DayOfWeek enumeration class. The numbering follows the ISO-8601 week day number, where Monday is 1 and Sunday is 7. 

The enumeration class enteries have two properties: Name, which is represented by a string, and the ordinal, which is represented as an integer. 
## Example
'''kolin
println(DayOfWeek(3))
'''
This will output a string "Wednesday". The valueof method may be used to determine the integer value of a string in the DayOfWeek enum. Do note that the value must match exactly.