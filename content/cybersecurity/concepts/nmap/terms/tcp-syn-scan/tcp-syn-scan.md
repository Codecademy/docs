---
Title: 'TCP SYN Scan'
Description: 'Performs a scan quickly, efficientily and stealthly. The most popular scan option'
Subjects:
  - 'Networking'
  - 'Cybersecurity'
Tags:
  - 'Networking'
  - 'Cybersecurity'
  - 'Ethical Hacking'
  - 'Open Source'
CatalogContent:
  - 'introduction-to-cybersecurity'
  - 'introduction-to-ethical-hacking'
  - 'paths/scan-systems-with-nmap'
---

A ***TCP SYN Scan** is quick and efficient scan that can indicate open, filtered and closed port states. It is requested by passing the -sS option to Nmap

TCP SYN Scan is also stealthy because it never completes the full TCP connection, so is less likely to be blocked by firewalls.

## Syntax

To perform a TCP SYN scan on `<target>`:

```
nmap -sS <target>
```

## Example

[Text, code, images, etc. about example 1]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```