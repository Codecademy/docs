---
Title: 'asin()'
Description: 'Returns the inverse sine in radians of a given value.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Trigonometry'
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

Lua's `math.asin()` function calculates the inverse sine, also known as arcsine, of a given value. In other words, it finds the angle in radians whose sine equals the given value. The function takes a number between -1 and 1 as input and returns the corresponding angle in radians. This is particularly useful in various applications, such as physics simulations and game development, where understanding angles and trajectories is essential.

> **Note**: Mastering the intricacies of `math.asin()` is crucial for anyone in the programming field. Although specific tasks might be accomplished through libraries and frameworks, a solid understanding of how the function works is fundamental. It not only aids in solving immediate problems but also empowers programmers to develop new applications and innovate in their domains.

## Syntax

The `math.asin()` function must be called with an argument using the following syntax:

```pseudo
math.asin(x)
```

- Where `x` is a number between - 1 and 1. If no argument is passed, the program will raise an error.

## Example 1

The following example shows the usage of `math.asin()`:

```lua
print(math.asin(1))
```

Output:

```shell
1.5707963267949
```

## Example 2

The Lua script below provides a deeper example of `math.asin()`. It calculates and prints the launch angle in degrees required to hit a target 15 meters away using an arrow traveling at a speed of 10 meters per second, demonstrating the use of the `math.asin()` function in trigonometric calculations for projectile motion.

```lua
-- Fixed values
local arrow_speed = 10 -- speed of the arrow in meters per second
local target_distance = 15 -- distance to the target in meters

-- Calculating launch angle using simplified formula
local launch_angle_radians = math.asin(target_distance / (arrow_speed * 2))
local launch_angle_degrees = launch_angle_radians * (180 / math.pi)

print("To hit the target at " .. target_distance .. " meters with an arrow speed of " .. arrow_speed .. " m/s,")
print("launch the arrow at an angle of " .. launch_angle_degrees .. " degrees.")
```

This will result in the following output:

```shell
To hit the target at 15 meters with an arrow speed of 10 m/s,
launch the arrow at an angle of 48.590377890729 degrees.
```

- The `math.asin()` function is crucial in the above example and demonstrates its relevance in trigonometric calculations for real-world scenarios. It helps determine the launch angle of the arrow required to hit the target at the specified distance based on the given arrow speed. By using `math.asin()`, the code calculates the angle without directly manipulating trigonometric functions, providing a simpler and more intuitive way to find the solution for this particular problem.
