---
Title: '<datalist>'
Description: 'a HTML element that displays pre-defined values to a user while typing into an input box.'
Subjects: 
  -'Computer Science'
  -'Web Design'
-'Web Development'
Tags:
-'Elements'
-'Form'
-'Id'
'Input'
-'Lists'
'Values'
CatalogContent: 
-'learn-html'
-'paths/front-end-engineer-career-path'
---
#Datalist

**<datalist>** is a HTML element that displays pre-definede values to a user while typing into an input box. The user retains the freedom to enter any value, only the datalist will provide autosuggestions. 

##Syntax

<datalist> syntax consists of nested <option> tags within the opening and closing bracket of the opening and closing <datalist> tag similar lists. Each option element represents a suggestion that will appear on a drop-down list when a user types in a input box. 

A <datalist> is linked to a an <input> element by matching the list attribute of the <input> element with the id attribute of the <datalist> like the following:

```pseudo
Add a input element and add a list element with a value

Add a datalist element. Make the id attribute eqeal to the value of the list attribute of the input element.

In between the datalist tags, add option elements of your choice. Value atrribute determines what will be autosuggested. 

```

##Example

The following example showcases a datalist that autosuggests different highschool subjects. Notice how the input tag and datalist are linked by matching values for the list attribute and id attribute for the input tag and datalist tag respectively. 

```HTML
<html>
    <head>
        <title>Learning About Datalists</title>
    <head>
    <body>
        <input list="subjects" name="school-subjects" id="highschool">
        <datalist id="subjects">
            <option value="English">
            <option value="Math">
            <option value="History">
            <option value="Physics">
            <option value="Biology">
            <option value="Economics">
        <datalist>
    <body>
</html>
```



