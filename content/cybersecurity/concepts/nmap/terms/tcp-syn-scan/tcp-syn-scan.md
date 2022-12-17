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

A ***TCP SYN scan*** is quick and efficient scan that can indicate open, filtered and closed port states. It is requested by passing the -sS option to Nmap.
TCP SYN Scan is also stealthy because it never completes the full TCP connection, so is less likely to be blocked by firewalls.

## Syntax

To perform a TCP SYN scan on `<target>`:

```pseudo
nmap -sS <target>
```

Root privileges might be required, in this case just type `sudo` before the command and entry your password when requested.

```pseudo
sudo nmap -sS <target>
```

## Example

To execute a TCP SYN scan on the target [scanme.nmap.org](http://scanme.nmap.org/), use the following command:

```shell
$ sudo nmap -sS scanme.nmap.org
```

> **Warning:** Explicity permission must be granted in order to scan a domain target.
> [Scanme.Nmap.Org](http://scanme.nmap.org/) is a service provided by the [Nmap Security Scanner Project](https://nmap.org) for test purposes.

The output of the previous command:

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
