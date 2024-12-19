# Python Virtual environments

## Introduction

The virtual environments in Python are an excellent resource for managing and controlling the dependencies when working with a particular project.

As the name may suggest, it is a virtual space when the developer can configure all requisites, dependencies that are needed for the task. 
The developer can isolate the conditions for this project using dependencies, fixed version of that dependencies, and those will only be available inside the virtual environment and not in the whole operative system.

## How to use it?
In order to create a virtual environment in Python, these are the steps:
Open the terminal.
Enter “python -m venv |name_of_environment|” 
Activate the virtual environment by entering: “source environment/bin/activate” for Unix systems and “env/Scripts/activate” for Windows.
To deactivate/exit from  the environment just type in the console “deactivate”.
If it is required to check the version of the dependencies in use, the command “pip freeze” is useful.

There’s one option where python can create a requirements file in case it is needed to communicate to other colleagues about the requirements needed to run the virtual environment with the same dependencies.

Typing “pip freeze > requirements.txt” will create a requirements file with such name containing all what other team member will need to run the environment it the computer.
The just would have to type: “pip install -r requirements.txt” after they create their virtual environment in their computer.
  Results from CHATGPT  # Python Virtual Environments

## Introduction

Virtual environments in Python are an essential tool for managing and controlling dependencies within a specific project.

As the name suggests, a virtual environment provides an isolated space where developers can configure all necessary requirements and dependencies for their project. This ensures that these dependencies, including specific versions, are confined to the virtual environment and do not interfere with the global system environment or other projects.

## Syntax

### Creating a Virtual Environment
To create a virtual environment, use the following command:
```bash
python -m venv <name_of_environment>
```

### Activating the Virtual Environment
For Unix/MacOS:
```bash
source <name_of_environment>/bin/activate
```
For Windows:
```bash
<name_of_environment>\Scripts\activate
```

### Deactivating the Virtual Environment
To deactivate, simply type:
```bash
deactivate
```

### Checking Installed Dependencies
To view the installed dependencies within the virtual environment:
```bash
pip freeze
```

### Generating a Requirements File
To generate a `requirements.txt` file for sharing the dependencies:
```bash
pip freeze > requirements.txt
```

### Installing Dependencies from a Requirements File
To install the dependencies listed in a `requirements.txt` file:
```bash
pip install -r requirements.txt
```

## Example

1. Open your terminal and navigate to your project folder.
2. Create a virtual environment:
   ```bash
   python -m venv my_env
   ```
3. Activate the virtual environment:
   For Unix/MacOS:
   ```bash
   source my_env/bin/activate
   ```
   For Windows:
   ```bash
   my_env\Scripts\activate
   ```
4. Install a package (e.g., `requests`):
   ```bash
   pip install requests
   ```
5. Check the installed dependencies:
   ```bash
   pip freeze
   ```
6. Save the dependencies to a requirements file:
   ```bash
   pip freeze > requirements.txt
   ```
7. Share the `requirements.txt` file with your colleagues.
8. To replicate the environment on another machine, they can run:
   ```bash
   pip install -r requirements.txt
   ```
9. When done, deactivate the virtual environment:
   ```bash
   deactivate
