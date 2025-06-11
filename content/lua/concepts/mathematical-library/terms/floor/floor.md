---
Title: 'math.floor()'
Description: 'Rounds a number down to the nearest integer.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`math.floor()`** function is a built-in mathematical function in Lua that rounds a number down to the nearest integer. It returns the largest integer less than or equal to the given number, effectively rounding down any fractional value.

The `math.floor()` function is commonly used in programming scenarios where precise integer values are needed, such as array indexing, pagination calculations, converting measurements to whole units, creating stepped progress bars, and implementing floor division algorithms. It's beneficial in game development for coordinate calculations, financial applications for currency rounding, and data processing where fractional values need to be eliminated while maintaining mathematical accuracy.

## Syntax

```pseudo
math.floor(x)
```

**Parameters:**

- `x`: A numeric value (integer or float) that will be rounded down to the nearest integer.

**Return value:**

The `math.floor()` function returns an integer value representing the largest integer less than or equal to the input parameter `x`. The function returns the same integer value if the input is already an integer.

## Example 1: Basic Floor Operation

This example demonstrates the fundamental usage of `math.floor()` with positive decimal numbers:

```lua
-- Basic floor operation with positive numbers
local value1 = 7.8
local value2 = 12.1
local value3 = 5.999

-- Apply floor function to each value
local result1 = math.floor(value1)
local result2 = math.floor(value2)
local result3 = math.floor(value3)

-- Display the results
print("math.floor(" .. value1 .. ") = " .. result1)
print("math.floor(" .. value2 .. ") = " .. result2)
print("math.floor(" .. value3 .. ") = " .. result3)
```

The output for this code is:

```shell
math.floor(7.8) = 7
math.floor(12.1) = 12
math.floor(5.999) = 5
```

This example shows how `math.floor()` consistently rounds down to the nearest integer regardless of how close the decimal portion is to the following whole number. Even 5.999 rounds down to 5, not up to 6.

## Example 2: Array Indexing with Floor

This example demonstrates a practical use case where `math.floor()` ensures proper array indexing by converting floating-point calculations to valid integer indices:

```lua
-- Simulating array indexing with calculated positions
local inventory = {"sword", "shield", "potion", "key", "scroll"}
local totalItems = #inventory

-- Calculate position based on percentage (results in decimal)
local percentage = 0.75  -- 75% through the array
local calculatedIndex = percentage * totalItems

-- Use math.floor to get valid array index
local actualIndex = math.floor(calculatedIndex)

-- Ensure we have a valid index (Lua arrays start at 1)
if actualIndex == 0 then
  actualIndex = 1
end

print("Calculated index: " .. calculatedIndex)
print("Floored index: " .. actualIndex)
print("Item at index " .. actualIndex .. ": " .. inventory[actualIndex])

-- Another example with different percentage
local lowPercentage = 0.2  -- 20% through the array
local lowIndex = math.floor(lowPercentage * totalItems)
if lowIndex == 0 then lowIndex = 1 end

print("20% through array gives index: " .. lowIndex)
print("Item: " .. inventory[lowIndex])
```

The output of this code will be:

```shell
Calculated index: 3.75
Floored index: 3
Item at index 3: potion
20% through array gives index: 1
Item: sword
```

This example shows how `math.floor()` prevents array indexing errors by ensuring calculated indices are always valid integers, which is essential when working with dynamic positioning in arrays.

## Example 3: Financial Calculations

This example demonstrates using `math.floor()` in financial calculations where monetary values need to be rounded down to avoid overcharging customers:

```lua
-- Financial calculation example - discount pricing
local originalPrices = {29.99, 45.67, 12.34, 78.90}
local discountRate = 0.15  -- 15% discount

print("Original Price -> Discounted Price (floored)")
print("==========================================")

for i = 1, #originalPrices do
  local originalPrice = originalPrices[i]

  -- Calculate discount amount
  local discountAmount = originalPrice * discountRate

  -- Calculate discounted price
  local discountedPrice = originalPrice - discountAmount

  -- Use math.floor to round down to nearest cent
  -- Multiply by 100, floor, then divide by 100 for cents precision
  local flooredPrice = math.floor(discountedPrice * 100) / 100

  print(string.format("$%.2f -> $%.2f", originalPrice, flooredPrice))
end

-- Calculate total savings
local totalOriginal = 0
local totalDiscounted = 0

for i = 1, #originalPrices do
  totalOriginal = totalOriginal + originalPrices[i]

  local discountedPrice = originalPrices[i] * (1 - discountRate)
  local flooredPrice = math.floor(discountedPrice * 100) / 100
  totalDiscounted = totalDiscounted + flooredPrice
end

local totalSavings = totalOriginal - totalDiscounted
print("==========================================")
print(string.format("Total Original: $%.2f", totalOriginal))
print(string.format("Total After Floor Discount: $%.2f", totalDiscounted))
print(string.format("Total Savings: $%.2f", totalSavings))
```

The output of this code will be:

```shell
Original Price -> Discounted Price (floored)
==========================================
$29.99 -> $25.49
$45.67 -> $38.81
$12.34 -> $10.48
$78.90 -> $67.06
==========================================
Total Original: $166.90
Total After Floor Discount: $141.84
Total Savings: $25.06
```

This example illustrates how `math.floor()` is used in financial applications to ensure customers are never overcharged due to rounding, while businesses can maintain predictable pricing structures.

## Example 4: Use Cases for Negative Numbers

This example shows how `math.floor()` behaves with negative numbers, which is crucial for understanding its mathematical definition:

```lua
-- Working with negative numbers
local negativeValues = {-2.3, -5.7, -10.1, -0.5}

print("Understanding math.floor() with negative numbers:")
print("================================================")

for i = 1, #negativeValues do
  local value = negativeValues[i]
  local flooredValue = math.floor(value)

  print(string.format("math.floor(%.1f) = %d", value, flooredValue))
end

-- Comparison with positive equivalents
print("\nComparison with positive numbers:")
print("=================================")

local testValues = {2.3, -2.3, 5.7, -5.7}

for i = 1, #testValues do
  local value = testValues[i]
  local flooredValue = math.floor(value)

  if value > 0 then
    print(string.format("Positive: math.floor(%.1f) = %d", value, flooredValue))
  else
    print(string.format("Negative: math.floor(%.1f) = %d", value, flooredValue))
  end
end
```

The output of this code will be:

```shell
Understanding math.floor() with negative numbers:
================================================
math.floor(-2.3) = -3
math.floor(-5.7) = -6
math.floor(-10.1) = -11
math.floor(-0.5) = -1

Comparison with positive numbers:
=================================
Positive: math.floor(2.3) = 2
Negative: math.floor(-2.3) = -3
Positive: math.floor(5.7) = 5
Negative: math.floor(-5.7) = -6
```

> **Note:** With negative numbers, `math.floor()` rounds toward negative infinity, not toward zero. This means -2.3 becomes -3, not -2.

## Frequently Asked Questions

### 1. What's the difference between `math.floor()` and `math.ceil()`?

`math.floor()` always rounds down toward negative infinity, while `math.ceil()` always rounds up toward positive infinity. For positive numbers, floor rounds toward zero and ceil rounds away from zero.

### 2. Does `math.floor()` work with negative numbers?

Yes, but it's important to understand that `math.floor()` rounds toward negative infinity. This means -2.3 becomes -3, not -2, because -3 is the largest integer less than or equal to -2.3.

### 3. What happens if I pass an integer to `math.floor()`?

If you pass an integer to `math.floor()`, it returns the same integer unchanged. For example, `math.floor(5)` returns 5.

### 4. What happens if I pass a string to `math.floor()`?

Passing a string to `math.floor()` will result in an error. The function expects a numeric value. Use `tonumber()` to convert strings to numbers first if needed.

### 5. Is there a performance difference between `math.floor()` and other rounding methods?

`math.floor()` is highly optimized and generally very fast. It's typically more efficient than manual rounding approaches and is the standard way to perform floor operations in Lua.
