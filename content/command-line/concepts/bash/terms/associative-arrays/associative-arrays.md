---
Title: 'Associative Arrays'
Description: 'Stores and retrieves data using key-value pairs in Bash scripts'
Subjects:
  - 'Bash/Shell'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Bash/Shell'
  - 'Data Structures'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

**Associative arrays** in Bash are key-value pair [data structures](https://www.codecademy.com/resources/docs/general/data-structures) that allow users to store and retrieve values using unique keys instead of numeric indices. First introduced in Bash version 4, they provide a powerful way to organize and manipulate data in shell scripts.

Associative arrays are particularly useful for creating lookup tables, storing configuration settings, counting occurrences, and organizing complex data in shell scripts. Their ability to use strings as indexes makes them more flexible than traditional indexed arrays when working with named data.

## Syntax

To work with associative arrays in Bash, we need to understand the following syntax elements:

- `declare -A array_name`: Creates an empty associative array. The `-A` option is required to specify an associative array.
- `array_name[key]=value`: Assigns a value to a specific key in the array.
- `${array_name[key]}`: Retrieves the value associated with a specific key.
- `${!array_name[@]}`: Returns all keys in the array.
- `${array_name[@]}`: Returns all values in the array.
- `unset array_name[key]`: Removes a specific key-value pair from the array.
- `unset array_name`: Deletes the entire array.

**Return value:**

Associative arrays return the values associated with the specified keys when accessed.

## Example 1: Creating and populating basic associative arrays

The following example demonstrates how to declare and initialize an associative array in Bash:

```bash
# Declare an associative array
declare -A user_details

# Add key-value pairs
user_details[name]="John Doe"
user_details[email]="john@example.com"
user_details[age]=30
user_details[role]="Developer"

# Print a specific value
echo "Name: ${user_details[name]}"

# Print all keys
echo "Available information: ${!user_details[@]}"

# Print all values
echo "User details: ${user_details[@]}"
```

The output will be as follows:

```shell
Name: John Doe
Available information: name email role age
User details: John Doe john@example.com Developer 30
```

This example demonstrates the creation of an associative array called `user_details`, which stores various pieces of information about a user. The keys are strings (`'name'`, `'email'`, `'age'`, `'role'`), allowing access to specific values using those keys.

## Example 2: Building a configuration manager with associative arrays

Associative arrays are perfect for configuration management in Bash scripts. Here's how they can be used to store and retrieve application settings:

```bash
#!/bin/bash

# Declare an associative array for configuration
declare -A config

# Load configuration values
config[db_host]="localhost"
config[db_port]="3306"
config[db_user]="admin"
config[db_name]="myapp"
config[app_env]="development"
config[debug]="true"
config[log_level]="info"

# Function to get configuration value
get_config() {
  local key=$1
  local default_value=$2

  # If the key exists in the array, return its value
  if [[ -n "${config[$key]+x}" ]]; then
    echo "${config[$key]}"
  else
    # Otherwise return the default value
    echo "$default_value"
    fi
}

# Usage examples
echo "Database Host: $(get_config db_host)"
echo "Log Level: $(get_config log_level 'warning')"
echo "Cache Time: $(get_config cache_time '3600')"  # Doesn't exist, will use default

# Check if debug mode is enabled
if [[ "$(get_config debug)" == "true" ]]; then
    echo "Debug mode is enabled"
fi
```

The output will be as follows:

```shell
Database Host: localhost
Log Level: info
Cache Time: 3600
Debug mode is enabled
```

This example demonstrates using an associative array to manage configuration settings. The `get_config` function retrieves values by key and provides default values for missing keys, making the configuration system robust and flexible.

## Example 3: Creating a word frequency counter with associative arrays

Associative arrays are excellent for counting and tracking occurrences. Here's how to build a simple word frequency counter:

```bash
#!/bin/bash

# Declare an associative array for word counts
declare -A word_counts

# Sample text to analyze
text="Bash scripting is powerful. Bash allows automation of repetitive tasks.
Learn Bash to become more efficient at command line tasks."

# Convert to lowercase and split into words
for word in $(echo "$text" | tr '[:upper:]' '[:lower:]' | tr -d '.' | tr ' ' '\n'); do
  # Skip empty words
  if [[ -z "$word" ]]; then
    continue
  fi

  # Increment the count for this word
  if [[ -z "${word_counts[$word]}" ]]; then
    word_counts[$word]=1
  else
    ((word_counts[$word]++))
  fi
done

# Print the results
echo "Word frequency analysis:"
echo "-----------------------"

# Sort words by frequency (highest first)
for word in "${!word_counts[@]}"; do
    echo "$word: ${word_counts[$word]}"
done | sort -rn -k2
```

Output:

```shell
Word frequency analysis:
-----------------------
bash: 3
to: 2
tasks: 2
powerful: 1
of: 1
more: 1
line: 1
learn: 1
is: 1
efficient: 1
command: 1
become: 1
at: 1
automation: 1
allows: 1
scripting: 1
repetitive: 1
```

This example showcases how associative arrays can be used to count word frequencies in a text. The array keys are words, and the values are the number of occurrences. This pattern is commonly used in text processing and log analysis.

To further enhance your Bash scripting skills, consider taking our [Learn Bash Scripting](https://www.codecademy.com/learn/bash-scripting) course.
