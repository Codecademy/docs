---
Title: 'pip'

Description: 'pip is a tool used in Python to implement packages, pre-designed code with specific functionality, into a user's Python project. Essentially the 'npm' of Python.'

Tags:
  - 'Conceptual'
  - 'Packages'

CatalogContent:
  - 'learn-python-3'
  - 'paths/learn-python3'
---

`pip` is the package installer used in Python to install code packages. A similar tool is Node Package Manager (npm) in JavaScript. Much like npm, `pip` is the same community driven package space, but for Python.

## Packages

The concept of packages is not unique to `pip`. A package is essentially a collection of code that is designed for a specific purpose. One example is the [neuralart](https://pypi.org/project/neuralart/) project, which is a project on Python Package Index (PyPI) that is used for "rendering generative art from a randomly initialized neural network." It's a very cool package that creates computer generated art.

## Python Package Index Repository (PyPI)

[The Python Package Index Repository](https://pypi.org/), otherwise called PyPI, hosts a large collection of these packages. The primary tool used to interact with PyPI is the command line, specifically `pip`. Packages on this network typically offer a list of requirements to run the package, how to install it, as well as examples of the package being implemented

## `pip` installation

`pip` commonly comes with the installation of Python. Therefore, the first step in installing `pip` is verifying that it is already installed. This step can vary between versions of Python as well as what machine it is running on. The examples below are for version 3.6.3 and above. They are also meant for Windows. A good resource for more specific instructions would be the [official python tutorial on installing packages](https://packaging.python.org/tutorials/installing-packages/).

```
py --version
```

At the time of writting this, the latest version of Python is 3.9.7. To upgrade Python, [python.org](python.org) will have the latest version for install.

Now, to check the latest version of `pip` the following command should be run in the terminal:

```
py -m pip --version
```

If `pip` is already installed, it's version will appear in the terminal.

If `pip` is out of date, the following command will upgrade it:

```
py -m pip install --upgrade
```

Finally, it is now possible to start installing packages from PyPI. In the following example, a fake package called "ACoolPackage" will be used. This isn't a real package on PyPI, rather it is just a placeholder for a real package. It is recommended to visit the PyPI page of the package being installed for specific instructions.

```
py -m pip install "ACoolPackage"
```
