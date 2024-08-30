---
Title: 'Config'
Description: 'Git configuration is a fundamental aspect of using Git, allowing users to customize various settings and preferences on both a global and repository-specific level.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
Tags:
  - 'Git'
  - 'Version Control'
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
---

**Git configuration** is a fundamental aspect of using Git, allowing users to customize various settings and preferences on both a global and repository-specific level. Configuration settings manage various aspects of the profile and operation of Git, including identity details, preferred text editors, merge strategies, and more. Git stores these settings in configuration files, making it essential for efficient and smooth collaboration with Git.

## Viewing Git Configurations

To view Git a configuration, utilize the `git config` command. To see global configuration settings, use:

```shell
git config --global --list
```

## Setting Git Configurations

Git configurations can be set using the `git config` command. For instance, to set name and email address, which are crucial for authorship identification:

```shell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Repository-specific configurations can also be set without the `--global` flag.

## Removing Git Configurations

To remove a specific configuration setting, use the `--unset` flag with the `git config` command. For example, to remove the user email from the global configuration:

```shell
git config --global --unset user.email
```

## Git Configuration Files

Git stores all of these configuration settings in simple files which can be found in different places:

- Global settings are saved in a file called `.gitconfig` in the user's home directory.
- Project-specific settings are saved in `.git/config` within the repository.

> **Note:** Settings in the repository's local configuration file will override settings in the global file.

These files are just plain text files and can be edited directly rather than using the `git config` commands. A basic configuration file that sets user info and adds some aliases may look like:

```plaintext
[user]
  name = Jane Doe
  email = JaneDoe@example.com
[alias]
  ci = commit
  co = checkout
  st = status
```
