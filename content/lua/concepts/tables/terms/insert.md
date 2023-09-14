
---

Title: 'Insert'

Description: 'Inserts an element to an existing table at a specified index.'

Subjects:

- 'Computer Science'

Tags:

- 'Tables'

- 'Arrays'

- 'Insert'

- 'Methods'

CatalogContent:

- 'learn-git-github'

---

  

The `.insert()` method inserts a value in a table.

  

## Syntax

The value can be inserted at a specific index.  

`table.insert(table, index, value)`

  

If no index is provided, value is inserted at the end of the table. It returns the table itself. Stacks, queues, and double queues can be implemented in this way.    

## Codebyte Example

  

Adding `iPhone` at the end of `apple_products` list:

```

apple_products = {"Macbook", "Watch", "iPad"}

table.insert(apple_products, "iPhone")

for key, value in  pairs(apple_products) do
	print(key, value)
end

```
The output would be:
```
Macbook
Watch
iPad
iPhone
```