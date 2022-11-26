---
Title: 'Nmap scan'
Description: 'The most basic type of scan is done with the command-line interface (CLI) command Nmap with just a target specified.'
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

The most basic type of **scan** is done with the command-line interface (CLI) command `nmap` with just a target specified. The target is the IP address or domain name being scanned. It should be a domain the user owns or one the user has written permission to scan.

## Syntax

```pseudo
nmap target
```

Where `target` is the IP address or domain name being scanned. The command by itself scans 1,000 TCP ports on the target host.

Nmap divides ports into one of six states:

- `open`: The port is open and actively accepting connections.
- `closed`: The port is accessible, but no application is accepting connections through it.
- `filtered`: Nmap can't tell if the port is open because a firewall or other packet filtering is preventing access.
- `unfiltered`: The port is accessible, but Nmap cannot determine if the port is open or closed.
- `open|filtered`: Nmap cannot tell if a port is open or filtered.
- `closed|filtered`: Nmap cannot tell if a port is closed or filtered.

## Example

```shell
nmap scanme.nmap.org
```

> **Note:** `scanme.nmap.org` is a domain set up explicitly for people to test Nmap with.

The output of this command looks like this:

```shell
Starting Nmap 7.93 ( https://nmap.org ) at 2022-10-25 12:22 Eastern Daylight Time
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.086s latency).
Other addresses for scanme.nmap.org (not scanned): 2600:3c01::f03c:91ff:fe18:bb2f
Not shown: 992 closed tcp ports (reset)
PORT      STATE    SERVICE
22/tcp    open     ssh
25/tcp    filtered smtp
80/tcp    open     http
135/tcp   filtered msrpc
139/tcp   filtered netbios-ssn
445/tcp   filtered microsoft-ds
9929/tcp  open     nping-echo
31337/tcp open     Elite

Nmap done: 1 IP address (1 host up) scanned in 18.26 seconds
```
