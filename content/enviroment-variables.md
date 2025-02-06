---
title: Environment Variables
topic: Programming Basics
authors: Marissa Alvarez
---

## What Are Environment Variables?

Environment variables are dynamic-named values that can affect the behavior of running processes on a computer. They are used to store configuration settings, system information, and other data that programs can access.

## Common Uses

- **Configuration**: Storing API keys, database credentials, or file paths.
- **System Information**: Providing details about the operating system or user environment.
- **Behavior Control**: Enabling or disabling features (e.g., `DEBUG=true`).

## Examples

### Linux/macOS
```bash
export API_KEY="12345"
echo $API_KEY
