---
Title: 'Jupyter Magic Commands'
Description: 'Special commands in Jupyter Notebook that enhance interactivity, manage the environment, and streamline workflow.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'Data Analysis'
  - 'Distributions'
CatalogContent:
  - 'learn-data-science'
  - 'paths/data-science'
---

Jupyter Notebook provides **magic commands**, which are special commands designed to enhance interactivity, streamline execution, and optimize workflows. These commands allow users to perform file operations, timing, debugging, and system interactions without leaving the notebook environment.

Magic commands come in two types:

- **Line magics (`%`):** Operate on a single line of code.
- **Cell magics (`%%`):** Apply to the entire cell

## Working of Jupyter Magic Commands

Magic commands simplify tasks by integrating system calls, performance measurement, and external scripting. They are prefixed with `%` for line magic or `%%` for cell magic.

For example, the `%timeit` command measures the execution time of a Python statement:

```py
%timeit sum(range(1000))
```

The `%%writefile` command writes code to a new file:

```py
%%writefile sample.py
print("Hello, Jupyter Magic!")
```

## Common Jupyter Magic Commands

1. Execution & Timing:
  - `%timeit`: Runs an statement multiple times to get average execution time.
  - `%%time`: Measures execution time of an entire cell.
2. File & System Operations:
  - `%pwd`: Displays the current working directory.
  - `%ls`: Lists files in the directory.
  - `%%writefile filename.py`: Saves code to a file.
3. Environment & Debugging:
  - `%matplotlib inline`: Displays plots within the notebook.
  - `%debug`: Activates the interactive debugger.
  - `%who / %whos`: Lists active variables.
4. Running External Code:
  - `%run script.py`: Executes a Python script.

## Use Cases

Jupyter magic commands are widely used in data science, machine learning, and research to:
- Improve efficiency by quickly checking execution times.
-  Manage the notebook environment and workspace.
-  Integrate system operations without switching interfaces.
-  Enhance debugging and profiling for better performance.
