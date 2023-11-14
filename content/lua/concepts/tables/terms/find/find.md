---
Title: 'Find()'
Description: 'Searches for the first occurrence of a specified value within a table.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Tables'
  - 'Functions'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **find()** is a built in function that searches for a specific value in an a table and returns its index if found or `nil` if the value is not present in the table.

## Syntax

```lua
local myTable = {10, 20, 30, 40, 50}

function table.find(myTable, value)
    -- Iterate through the elements of the table
    for i, v in ipairs(myTable) do
        -- Check if the current element matches the requested value
        if v == value then
            -- Return the index if found
            return i
        end
    end
    -- Return nil if the value is not found
    return nil
end
print("Enter a number:")
-- Use io.read() to get user input
local a = tonumber(io.read())

-- Check if the entered number is in the table
local index = table.find(myTable, a)

if index then
    print("Number found at index:", index)
else
    print("Number not found in the table.")
end
```

## Example

```lua
// Create a sample table
local myTable = {10, 20, 30, 40, 50}

-- Use the find function to search for the value 30
local index = table.find(myTable, 30)

-- Check if the value is found and print the result
if index then
    print("Value found at index:", index)
else
    print("Value not found")
end
```

## Codebyte Example

```lua

# Example runnable code block.
console.log('Hello, World!');

```
