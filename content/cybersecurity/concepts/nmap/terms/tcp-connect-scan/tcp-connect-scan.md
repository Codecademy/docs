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

This is not to be confused with another common scan technique, *TCP Syn Scan* `-sS` which does not complete its connection to the target host.

Drawbacks to using TCP connect scan include:
  - Longer scan times
  - Target machines are more likely to log your connections purformed during the scan.

  <!-- add an image here? https://static-assets.codecademy.com/skillpaths/learn-nmap/Performing_Basic_Network_Scans/network_scan_01.png -->

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

This results in the following output:

```shell
Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-24 17:08 EST
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.095s latency).
Other addresses for scanme.nmap.org (not scanned): 2600:3c01::f03c:91ff:fe18:bb2f
Not shown: 992 closed ports
PORT      STATE    SERVICE
22/tcp    open     ssh
25/tcp    filtered smtp
80/tcp    open     http
135/tcp   filtered msrpc
139/tcp   filtered netbios-ssn
445/tcp   filtered microsoft-ds
9929/tcp  open     nping-echo
31337/tcp open     Elite

Nmap done: 1 IP address (1 host up) scanned in 4.03 seconds
```