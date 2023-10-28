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
