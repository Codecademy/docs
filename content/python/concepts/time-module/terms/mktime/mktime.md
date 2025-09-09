# Learn Python: `time.mktime()`

In this lesson, you’ll learn about the `time.mktime()` function in Python’s **time module**.  
This function is used to convert a **struct_time** object (or a tuple representing a time) into the number of **seconds since the epoch**.  

The **epoch** is a reference point for time:  
- On most systems, it’s **January 1, 1970, 00:00:00 UTC**.  
- The value returned is often called a **timestamp** or **Unix time**.  

---

## Why Use `time.mktime()`?

Working with dates and times can be tricky. While humans think in terms of years, months, and days, computers handle time more easily as seconds since the epoch.  

- `time.mktime()` bridges the gap by converting a human-readable **time tuple** into a machine-readable **timestamp**.  
- It’s often used in:
  - Time calculations (e.g., differences between dates)  
  - Scheduling and logging systems  
  - Storing time values in databases  

---

## Syntax

```python
time.mktime(t)
