---
Title: 'TCP Connect Scan'
Description: 'Establishes a complete connection to the target host.'
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

A **TCP connect scan** establishes a complete connection to the target host by completing a TCP three-way handshake. After the scan is complete, Nmap terminates the connection.

> **Note:** This is not to be confused with another common scan technique, the TCP SYN stealth scan (`-sS`), which completes up to half of its connection with the target host. Therefore, the TCP connect scan takes longer and requires more packets to perform.

The following image shows how this scan connects with the TCP three-way handshake and then terminates afterward:

![TCP handshake and network scan](https://static-assets.codecademy.com/skillpaths/learn-nmap/Performing_Basic_Network_Scans/network_scan_01.png)

## Syntax

```pseudo
nmap -sT <target>
```

A TCP connect scan connects to a <target> host (e.g., a [URL](https://www.codecademy.com/resources/docs/general/url) or IP address).

## Example

The following example performs a TCP connect scan on the site [scanme.nmap.org](http://scanme.nmap.org/):

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
