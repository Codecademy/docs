---
Title: 'UDP Scan'
Description: 'Checks for any UDP ports deployed on a target and can be combined with any TCP scan.'
Subjects:
  - 'Computer Science'
  - 'Cybersecurity'
  - 'Networking'
Tags:
  - 'Networking'
  - 'Cybersecurity'
  - 'Ethical Hacking'
CatalogContent:
  - 'introduction-to-cybersecurity'
  - 'paths/scan-systems-with-nmap'
---

A **user diagram protocol (UDP) scan** checks for any UDP ports that are deployed on a target. Conversely, the [regular scan](https://www.codecademy.com/resources/docs/cybersecurity/nmap/nmap-scan) only scans the TCP ports. UDP scans are normally slower and more difficult than TCP scans.

## Syntax

```pseudo
nmap -sU <target>
```

The `-sU` option is used to perform a UDP scan on a `<target>`. It can be combined with any TCP scan type. For example, a stealth (SYN) scan (`-sS`) checks for UDP and TCP ports in the same run.

## Example

The following example runs a UDP scan on the site [scanme.nmap.org](http://scanme.nmap.org/):

```shell
nmap -sU scanme.nmap.org
```

> **Note:** This is a site explicitly set up for testing Nmap. Scans should only be performed on domains with explicit permissions given to the user.

This results in the following output:

```shell
Starting Nmap 7.93 ( https://nmap.org ) at 2022-12-15 09:20 CET
Stats: 0:07:20 elapsed; 0 hosts completed (1 up), 1 undergoing UDP Scan
UDP Scan Timing: About 45.33% done; ETC: 09:36 (0:08:49 remaining)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.21s latency).
Other addresses for scanme.nmap.org (not scanned): 2600:3c01::f03c:91ff:fe18:bb2f
Not shown: 991 closed udp ports (port-unreach)
PORT      STATE         SERVICE
68/udp    open|filtered dhcpc
123/udp   open          ntp
407/udp   open|filtered timbuktu
17487/udp open|filtered unknown
20164/udp open|filtered unknown
49180/udp open|filtered unknown
49186/udp open|filtered unknown
49198/udp open|filtered unknown
50497/udp open|filtered unknown

Nmap done: 1 IP address (1 host up) scanned in 1073.60 seconds
```
