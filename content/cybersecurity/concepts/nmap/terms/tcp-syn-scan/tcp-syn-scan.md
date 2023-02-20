---
Title: 'TCP SYN Scan'
Description: 'Performs a scan that can indicate open, filtered, and closed port states with a reduced risk of detection, since it never completes a full TCP connection.'
Subjects:
  - 'Networking'
  - 'Cybersecurity'
Tags:
  - 'Networking'
  - 'Cybersecurity'
  - 'Ethical Hacking'
CatalogContent:
  - 'introduction-to-ethical-hacking'
  - 'paths/scan-systems-with-nmap'
---

A **TCP SYN scan** runs by default when running Nmap as root or Administrator. It is the most popular scan option according to [Nmap.org](https://nmap.org). Quick and efficient, this scan can indicate open, filtered, and closed port states. Also known as the half-open scan, it never completes the full TCP connection, so is less likely to be blocked by firewalls.

## Syntax

To perform a TCP SYN scan the `-sS` option is passed to Nmap. Root privileges are required and the target can be any system with an established network connection. The following command performs a scan on `<target>` after entering the user password when prompted:

```pseudo
sudo nmap -sS <target>
```

> **Note:** If logged as root or Administrator, both `sudo` and `-sS` can be omitted. `sudo` stands for "superuser do" and grants root or Administrator access.

## Example

The example below executes a TCP SYN scan on the target [scanme.nmap.org](http://scanme.nmap.org/):

```shell
sudo nmap -sS scanme.nmap.org
```

> **Note:** Explicit permission from the domain target owner must be granted to scan. [Scanme.Nmap.Org](http://scanme.nmap.org/) is a service provided by the [Nmap Security Scanner Project](https://nmap.org) for test purposes.

The command above will output:

```shell
Starting Nmap 7.93 ( https://nmap.org ) at 2022-12-17 09:43 EST
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.18s latency).
Other addresses for scanme.nmap.org (not scanned): 2600:3c01::f03c:91ff:fe18:bb2f
Not shown: 993 closed tcp ports (reset)
PORT      STATE    SERVICE
22/tcp    open     ssh
25/tcp    filtered smtp
80/tcp    open     http
139/tcp   filtered netbios-ssn
445/tcp   filtered microsoft-ds
9929/tcp  open     nping-echo
31337/tcp open     Elite

Nmap done: 1 IP address (1 host up) scanned in 14.76 seconds
```
