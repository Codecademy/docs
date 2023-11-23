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

The **find()** function is used to search for a specific value in a table and returns its index if found.The function returns `nil` if the value is not present in the table.

## Syntax

```lua
local myTable = {value1, value2,value3,value4, value5}

function tableFind(myTable, value)
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
```

## Example

```lua
-- Create a sample table
local myTable = {10, 20, 30, 40, 50}

function tableFind(myTable,value)
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
local input = tonumber(io.read())

-- Check if the entered number is in the table
local index = tableFind(myTable, input)
if index then
    print("Number found at index:", index)
else
    print("Number not found in the table.")
end
```

This example results in the following output:

```shell
Enter a number: 30
Number found at index: 3
```
