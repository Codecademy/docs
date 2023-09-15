---
Title: 'Environment Variables'
Description: 'Environment variables consist of name-value pairs and are set outside of applications, but are accessible to them from the environment in which the applications are run.'
Subjects:
  - 'Bash/Shell'
  - 'Computer Science'
Tags:
  - 'Bash/Shell'
  - 'Command Line'
  - 'Linux'
  - 'Unix'
CatalogContent:
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

**Environment variables** consist of name-value pairs and are set outside of applications, but are accessible to them from the environment in which the applications are run.

Environment variables are often set via the [terminal](https://www.codecademy.com/resources/docs/command-line/terminal) or in a script. How they are managed and retrieved varies depending on the operating system or environment. For example, they can be used to store system configuration data or private keys for applications.

## Relationship with Unix and Unix-like Variants

On [Unix](https://www.codecademy.com/resources/docs/general/unix) and Unix-like variants such as [Linux](https://www.codecademy.com/resources/docs/open-source/linux), environment variables allow for configuration of the system and its applications. They can contain information such as the default language for the system, which default text editor to use, and paths to executable files.

## Some Common Environment Variables

| Variable | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| `PATH`   | Contains a list of directories that the terminal searches for commands. |
| `HOME`   | The default path to the current user's home directory.                  |
| `USER`   | The current user's name.                                                |
| `LANG`   | The default locale.                                                     |
