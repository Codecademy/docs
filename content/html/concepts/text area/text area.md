---
Title: 'Text Area'
Description: 'Text area helps you with writting more than one line instead od using input type of text'
Subjects: 
    -'Web Development'
    -'Web Design'
Tags:
    -'textarea'
CatalogContent:
    -'learn-html'
    -'paths/front-end-engineer-career-path'
---

Creating **Text Area** is used to create more than one line for users to type rather than utilizing input type of text. Text Area is mostly used when users want to write a blog or a long essay.

## attributes

**id** : used to unique each element alone
**name** : forms wont work without a name attribute.
**cols** : textarea has cols which specifies the number of cols in the textarea and you assign a number inside of it.
**rows** : textarea has rows which specifies the number of rows in the textarea and you assign a number inside of it.
**value**: assigning a value is optional since as the user types the value automatically changes while if you assign it an inital value it will appear to the user (remember that the name and value will be presented as a key-value pair)

## How to create a TextArea ?
to create a text area first create a textarea tag and then you can assign the five attributes with values specified to them.
below is an example:

    ```html
        <textarea id="blog" name="blog" rows="5" cols="5"></textarea>
     ```

you can also create an initialized value for example :

    ```html 
        <textarea id="blog" name="blog" rows="5" cols="5" value="blog"></textarea>
    ```










