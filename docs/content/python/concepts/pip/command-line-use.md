---
Title: 'Command-Line Use of pip'
Description: 'The pip command is used in the terminal to manage Python packages.'
Subjects:
  - 'Code Foundation'
  - 'Developer Tools'
Tags:
  - 'pip'
  - 'packages'
  - 'terminal'
  - 'command line'
Url: '/docs/python/concepts/pip/command-line-use'
---

## Introduction

**pip** (pip installs packages) is a command-line tool used to install and manage Python packages from the Python Package Index (PyPI). It allows developers to easily add third-party libraries and modules to their Python projects.

## Syntax

```
pip install <package-name>
pip uninstall <package-name>
pip list
pip show <package-name>
pip search <package-name>
```

## Example

To install the popular `requests` library, use the following command:

```bash
pip install requests
```

This command will download and install the `requests` package from PyPI. Once installed, you can import and use it in your Python code:

```python
import requests

response = requests.get('https://api.example.com/data')
print(response.json())
```

To see all installed packages, use:

```bash
pip list
```

To uninstall a package, use:

```bash
pip uninstall requests
```
