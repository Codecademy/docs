---
Title: 'count()'
Description: 'Describing the syntax and basic use of count() for sets in Swift.'
Subjects: 'App development'
Tags: - 'terms'
CatalogContent: 
-'learn-swift'
---

*Swift sets count()*

The <kbd>count</kbd> property returns the total number of elements present in the set.

Example:

    var employees: Set = ["Ranjy", "Sabby", "Pally"]

    // count total number of elements in languages
    var result = employees.count`

    print(result)

    // Output: 3

***count Syntax***

The syntax of the set <kbd>count</kbd> property is:

	set.count

Here, <kbd>set</kbd> is an object of the <kbd>Set</kbd> class.

***count Return Values***

The <kbd>count</kbd> property returns the total number of elements present in the set.

**Example 1: Swift Set Count**

	var names: Set = ["Gregory", "Johnny", "Kate"]

	// count total elements on names 
	print(names.count)  

	var employees = Set<String>()

	// count total elements on employees
	print(employees.count)

****Output****

	3
	0

In the above example, since
- <kbd>names</kbd> contain three string elements, the property returns 3.
- <kbd>employees</kbd> is an empty set, the property returns 0.

**Example 2: Using count With if...else**
	var numbers: Set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	// true because there are 10 elements on numbers
	if (numbers.count > 5) {

  	print( "The set size is large")
	}

	else {

	print("The set size is small")
	}

****Output****

	The set size is large


In the above example, we have created the set named <kbd>numbers</kbd> with 10 elements.

Here, since there are 10 elements in the set, <kbd>numbers.count > 5</kbd> evaluates to <kbd>true</kbd>,
so the statement inside the <kbd>if</kbd> block is executed.

