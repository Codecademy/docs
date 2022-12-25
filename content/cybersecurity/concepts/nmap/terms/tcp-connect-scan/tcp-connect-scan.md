---
Title: 'TCP Connect Scan'
Description: 'A **TCP Connect Scan** is a type of Nmap scan that establishes a complete connection to the target'
Subjects:
  - 'Computer Science'
  - 'Networking'
Tags:
  - 'Networking'
  - 'Cybersecurity'
  - 'Ethical Hacking'
CatalogContent:
  - 'introduction-to-cybersecurity'
  - 'paths/scan-systems-with-nmap'
---

A **TCP Connect Scan** `-sT` is a type of Nmap scan that establishes a complete connection to the target by completing a TCP 3-way handshake. 
Transmission Control Protocol (TCP) is a connection-oriented protocol used in modern networking, like a HTTP/HTTPS connection to view this article.
After Nmap's TCP connect scan completes the three way handsshake, Nmap then terminates the connection.

This is not to be confused with another common scan option, *TCP Syn Scan* `-sS` which does not complete its connection to the target host.

## Syntax

```pseudo
nmap -sT <target>
```

The above conducts a TCP Connect Scan on `<target>`

## Example

The following example performs a TCP Connect Scan on the site [scanme.nmap.org](http://scanme.nmap.org/):

```shell
nmap -sT scanme.nmap.org
```

> **Note:** This is a site explicitly set up for testing Nmap. Scans should only be performed on domains with explicit permissions given to the user.