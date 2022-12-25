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
