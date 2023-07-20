---
Title: 'Environment Variables'
Description: 'Environment Variables are name-value pairs that store information related to the current environment. These global variables can be accessed across commands and programs.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Bash/Shell'
Tags:
  - 'Data Types'
  - 'Environment Variables'
  - 'Variables'
  - 'Variable Types'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

**Environment variables** store information related to the current environment like the Operating System and user sessions. These global variables are name-value pairs that can be accessed across commands and programs.

## Listing Environment Variables

Running the `Get-ChildItem` cmdlet on the `Env:` drive lists all the environment variables defined in the current environment.

```shell
PS > Get-ChildItem Env:

Name                           Value
----                           -----
ALLUSERSPROFILE                C:\ProgramData
APPDATA                        C:\Users\Prince\AppData\Roaming
COMPUTERNAME                   DESKTOP
ComSpec                        C:\Windows\system32\cmd.exe
HOMEDRIVE                      C:
NUMBER_OF_PROCESSORS           24
OS                             Windows_NT
PATH                           C:\Program Files\Common Files\Oracle\Java\javapath;C:\Program ...
...
```

A particular environment variable can also be specified by appending its name to the `Env:` drive:

```shell
PS > Get-Childitem Env:HOMEDRIVE

Name                           Value
----                           -----
HOMEDRIVE                      C:
```

## Printing Environment Variables Values

An environment variable's value can directly be printed by accessing the `Value` property:

```shell
PS > (Get-Childitem Env:HOMEDRIVE).Value
C:
```

Alternatively, a shorthand syntax can be used:

```shell
PS > $Env:HOMEDRIVE
C:
```

## Creating Environment Variables

The syntax for creating environment variables is:

```shell
$Env:EXAMPLE_ENV_VAR = "custom value"
```

> **Note:** Per convention, environment variable names are capitalized.
