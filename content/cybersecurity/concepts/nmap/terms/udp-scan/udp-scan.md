---
Title: 'UDP Scan'
Description: 'Scans (only) the UDP Ports of a target, which are not scanned in a regular scan. Can be combined with any TCP scan'
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

An **UDP Scan** scans (only) the UDP Ports of a target, while the [regular scan](https://www.codecademy.com/resources/docs/cybersecurity/nmap/nmap-scan) only scans the TCP Ports. It is performed by using the `-sU` option and can be combined with any TCP scan type, for example SYN scan (`-sS`) to scan UDP and TCP Ports in the same run. UDP Scan is normally slower and more difficult than a TCP scan.

## Syntax

```pseudo
nmap -sU <target>
```

The above conducts an UDP scan on `<target>`.

## Example

The following example runs an UDP scan on the site [scanme.nmap.org](http://scanme.nmap.org/):

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
