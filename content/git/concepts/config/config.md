---
title: Git Config
---

# Git Config

**Git configuration** is a fundamental aspect of using Git, allowing users to customize various settings and preferences on both a global and repository-specific level. Configuration settings in Git help you manage aspects such as your identity, preferred text editor, merge strategies, and much more. Git stores these settings in configuration files, and understanding how to work with these configurations is essential for efficient and smooth collaboration with Git.

## Viewing Git Configurations

You can view your Git configuration using the `git config` command. To see your global configuration settings, use:

```bash
git config --global --list
```

## Setting Git Configurations 

You can set your Git configurations using the git config command. For example, to set your name and email address, which are crucial for authorship identification:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
You can also set repository-specific configurations without the --global flag.

## Removing Git Configurations

If you need to remove a specific configuration setting, use the --unset flag with the git config command. For example, to remove the user email from your global configuration:

```bash
git config --global --unset user.email
```