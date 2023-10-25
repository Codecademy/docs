Title: '.ljust()'
Description: 'Left-justifies a string within a specified width by padding with a specified character on the right.'
Subjects:

'Programming'
'Python'
Tags:
'Strings'
'Text Formatting'
'Methods'
CatalogContent:
'learn-python-3'
'programming-basics'
The .ljust() method in Python is a string method that left-justifies a string within a specified width, padding it with a specified character on the right to fill the remaining space.
Syntax
pseudo
Copy code
str.ljust(width, fillchar)
str: The string to be left-justified.
width: An integer specifying the total width you want the resulting string to occupy.
fillchar (optional): This is the character used for padding. If not provided, it defaults to a space.
Example 1
In this example, the .ljust() method is applied to the string text to create a left-justified string within a width of 10 characters, padded with "-" on the right.
text = "Hello"
formatted_text = text.ljust(10, '-')
print(formatted_text)
This results in the following output:

shell
Copy code
Hello-----
Example 2
Here's an example where a name is formatted to occupy a specific width, left-justified, and padded with spaces:
name = "John Doe"
formatted_name = name.ljust(15)
print(formatted_name)
This results in the following output:

shell
Copy code
John Doe      
Codebyte Example
The code below is runnable and uses .ljust() to format a list of items into a table with specified column widths:

codebyte/python
Copy code
items = ["Item A", "Item B", "Item C", "Item D"]
width = 15

for item in items:
    formatted_item = item.ljust(width)
    print(formatted_item)
    This code produces a table-like format for the items, aligning them to the left with a specified width.