# .removeAll()
## How to remove every value from a Set in Swift. 

#### What is a set in Swift?
In Swift a set is a collection of unique elements of the same data type that don’t have a particular order. 
A set is similar to an array in that it lists values except for two key differences:
* A set doesn’t allow elements in it to be repeated or to appear more than once. In an array elements can appear more than once.
* Elements in a set don’t have a defined order. In an array elements are arranged by their index.

If we wanted to make sure that no values are duplicated in a list, then using a Set is the best collection type to use.
Some use case examples are storing user passwords, or listing of employees on a schedule.

#### Syntax
To create an empty set:
```
var setName = Set<Type>()
```
Example: 

<img width="691" alt="Screen Shot 2022-11-29 at 10 18 16 AM" src="https://user-images.githubusercontent.com/115716841/204598374-d84c5779-0dad-4fd5-8a5a-927acd6f5928.png">

**Note:** In the lines above the values of the sets will be type String.

**Note:** When we print this empty set, we will get the following output.

<img width="403" alt="Screen Shot 2022-11-29 at 11 35 31 AM" src="https://user-images.githubusercontent.com/115716841/204601968-06c36677-f80a-4f12-9bca-4baffc4c9ad9.png">

A populated set will look like this:
```
var setName: Set = [Value1, Value2, Value3]
```
Example:

<img width="695" alt="Screen Shot 2022-11-29 at 10 18 49 AM" src="https://user-images.githubusercontent.com/115716841/204599295-27fe51e4-0787-424f-aa0b-3fa96c5be628.png">
<img width="468" alt="Screen Shot 2022-11-29 at 11 35 58 AM" src="https://user-images.githubusercontent.com/115716841/204602200-ae2f0941-2f8a-4860-a3ae-57767d93de13.png">

**Note:** The *Set* keyword must be used any time we refer to a set, otherwise the compiler will throw an error. 

**Note:** Since Sets don’t have a defined order, the order of the elements in a set will look different every time we run a program.


#### How to remove one value in a set?
This syntax removes one element from the set:
```
setName.remove(Value)
```
Example:

<img width="695" alt="Screen Shot 2022-11-29 at 10 19 10 AM" src="https://user-images.githubusercontent.com/115716841/204599849-ff608089-9210-434d-b1af-56527b2584c6.png">

After removing all the values, the output looks like this:

<img width="407" alt="Screen Shot 2022-11-29 at 11 36 27 AM" src="https://user-images.githubusercontent.com/115716841/204602408-ea577969-7514-4c6a-a881-0591d4c966b1.png">



#### How to remove all values in a set?
This syntax removes all elements from the set:
```
setName.removeAll 
```  
Example:

<img width="706" alt="Screen Shot 2022-11-29 at 10 19 28 AM" src="https://user-images.githubusercontent.com/115716841/204600438-394b799b-a4de-4df7-b544-af19614cb9c6.png">

After removing all the values, the output looks like this:

<img width="403" alt="Screen Shot 2022-11-29 at 11 35 31 AM" src="https://user-images.githubusercontent.com/115716841/204602455-72cf0992-cf26-40e3-897d-bafc29b718a3.png">

