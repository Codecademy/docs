---
Title: 'No Ping Scan'
Description: 'Prevents Nmap from doing any host discovery.'
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

A **no ping scan** prevents Nmap from doing any host discovery. It is specified with the `-Pn` option. By default, Nmap only probes active machines found via host discovery. With this option selected, Nmap will do the requested scanning functions against every target IP specified, as if every one is active. This is done when it is important to find every possible active machine, including ones that may not be responsive to host discovery.

> **Note:** This option is often combined with a [no port scan (-sn)](https://www.codecademy.com/resources/docs/cybersecurity/nmap/no-port-scan).

## Syntax

```pseudo
nmap -Pn <target>
```

This performs a scan of `<target>` without doing host discovery.

## Example

The following example runs a no ping scan on the site [scanme.nmap.org](http://scanme.nmap.org/):

```shell
nmap -Pn scanme.nmap.org
```

> **Note:** `scanme.nmap.org` is a domain set up explicitly for people to test Nmap with.

This results in the following output:

```shell
Starting Nmap 7.93 ( https://nmap.org ) at 2022-12-02 12:14 Eastern Standard Time
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.083s latency).
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

Nmap done: 1 IP address (1 host up) scanned in 22.30 seconds
```
