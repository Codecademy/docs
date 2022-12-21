---
Title: 'No Port Scan'
Description: 'Prevents Nmap from doing a port scan after host discovery.'
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

A **no port scan** prevents Nmap from doing a port scan after host discovery. It is specified with the `-sn` option. Used by itself, it is also known as a "ping" scan. It is less intrusive and attracts less attention than a full port scan.

> **Note:** This option is often combined with a [no ping scan (`-Pn`)](https://www.codecademy.com/resources/docs/cybersecurity/nmap/no-ping-scan).

## Syntax

```pseudo
nmap -sn <target>
```

This performs a scan of `<target>` without doing a port scan.

## Example

The following example runs a no ping scan on the site [scanme.nmap.org](http://scanme.nmap.org/):

```shell
nmap -sn scanme.nmap.org
```

> **Note:** `scanme.nmap.org` is a domain set up explicitly for people to test Nmap with.

This results in the following output:

```shell
Starting Nmap 7.93 ( https://nmap.org ) at 2022-11-29 12:45 Eastern Standard Time
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.093s latency).
Other addresses for scanme.nmap.org (not scanned): 2600:3c01::f03c:91ff:fe18:bb2f
Nmap done: 1 IP address (1 host up) scanned in 11.48 seconds
```
