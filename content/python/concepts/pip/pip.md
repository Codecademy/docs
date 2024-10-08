---
Title: 'pip'
Description: 'pip offers practical ways to install and use pre-made code for Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Command Line'
  - 'Packages'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

[**pip**](https://pypi.org/project/pip) is the package installer used in Python to install code packages. A similar tool is Node Package Manager ([npm](https://www.codecademy.com/resources/docs/javascript/npm)) in JavaScript. Much like npm, `pip` is the same community-driven package space, but for Python.

## Packages

The concept of packages is not unique to `pip`. A package is a collection of code that is designed for a specific purpose. These packages are also meant to be re-used and distributed by other developers.

One example is [Flask](https://pypi.org/project/Flask/). Much like how [Express](https://www.codecademy.com/resources/docs/open-source/express) can facilitate the creation of server routes for backend development in JavaScript, Flask can offer the same reproducible and concise solution for developers who use Python.

## Python Package Index Repository (PyPI)

The [Python Package Index Repository](https://pypi.org/) (PyPI), hosts a large collection of packages. The official package installer of PyPI is `pip`, which is used in the command line. A good practice to understand how to use a package is reading its documentation on PyPI.

Documentation on PyPI typically comes with the following:

- A list of requirements to run the package.
- Instructions for installing the package.
- One or more examples of how the package is implemented.

## `pip` Installation

`pip` commonly comes with the installation of Python. Therefore, the first step in installing `pip` is verifying that it is already installed. This step can vary between versions of Python as well as what machine it is running on. The examples below are for version 3.6.3 and above. A good resource for more specific instructions would be the [official Python tutorial on installing packages](https://packaging.python.org/tutorials/installing-packages/).

```shell
# Windows
py --version

# Linux/macOS
python3 --version
```

It should be noted that as per the [pip documentation](https://pip.pypa.io/en/stable/development/release-process/?highlight=python%202#:~:text=pip%E2%80%99s%20public%20API.-,Python%202%20Support,-%C2%B6), `pip` maintainers are no longer supporting Python 2 and below.

To upgrade Python, [python.org](python.org) will have the latest version for install. In addition, Python 3.4 and above will have `pip` [installed by default](https://docs.python.org/3/installing/index.html#key-terms).

The following command is run to check the latest version `pip`:

```shell
# Windows
py -m pip --version

# Linux/macOS
python -m pip --version
```

If `pip` is already installed, its version will appear in the terminal.

If `pip` is out of date, the following command will upgrade it:

```shell
# Windows
py -m pip install --upgrade

# Linux/macOS
python -m pip install --upgrade
```

Finally, it is now possible to start installing packages from PyPI. In the following example, a fake package called `ACoolPackage` will be used. This isn't a real package on PyPI, rather it is just a placeholder for a real package. It is recommended to visit the PyPI page of the package being installed for more specific instructions.

```shell
py -m pip install ACoolPackage
```

## Virtual Environments with `pip`

Managing dependencies effectively is crucial when working on multiple Python projects. Without isolation, different projects might require different versions of the same package, which can lead to conflicts. This is where virtual environments come in. They allow users to create isolated environments for each project, ensuring that dependencies do not interfere with one another.

### Setting Up a Virtual Environment

The step-by-step process of setting up a virtual environment is described below.

Step 1: Create a virtual environment

```shell
python -m venv venv_name
```

This creates a new directory (`venv_name`) that contains a standalone Python installation and a local copy of `pip`.

Step 2: Activate the virtual environment

```shell
# Windows
venv_name\Scripts\activate

# Linux/macOS
source venv_name/bin/activate
```

After activation, any `pip` commands will install packages only within the virtual environment, ensuring isolation.

Step 3: Install dependencies

Once the environment is activated, the project's dependencies can be installed:

```shell
pip install -r requirements.txt
```

Step 4: Deactivate the virtual environment

When the usage is complete, the virtual environment can be deactivated by simply running:

```shell
deactivate
```

### Generating a `requirements.txt` File

To help others reproduce the environment, a `requirements.txt` file can be generated. This file lists all the installed packages and their versions:

```shell
pip freeze > requirements.txt
```

This file can then be used to create the same environment by running:

```shell
pip install -r requirements.txt
```
