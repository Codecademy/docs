---
Title: 'Aggressive Scan'
Description: 'Provides far better information than a standard scan, but is more likely to be detected.'
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

An **aggressive scan** provides far better information than a [regular scan](https://www.codecademy.com/resources/docs/cybersecurity/nmap/nmap-scan), but is more likely to be detected. It is performed by using the `-A` option and enables the following:

- OS detection (`-o`)
- Version detection (`-sV`)
- Script scanning (`-sC`)
- Traceroute (`--traceroute`)

Aggressive scans send out more probes than a regular scan, and are more likely to be detected during a security audit.

## Syntax

```pseudo
nmap -A <target>
```

The above conducts an aggressive scan on `<target>`.

## Example

The following example runs an aggressive scan on the site [scanme.nmap.org](http://scanme.nmap.org/):

```shell
nmap -A scanme.nmap.org
```

> **Note:** This is a site explicitly set up for testing Nmap. Scans should only be performed on domains with explicit permissions given to the user.

This results in the following output:

```shell
Starting Nmap 7.93 ( https://nmap.org ) at 2022-11-27 11:53 Eastern Standard Time
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.12s latency).
Other addresses for scanme.nmap.org (not scanned): 2600:3c01::f03c:91ff:fe18:bb2f
Not shown: 992 closed tcp ports (reset)
PORT      STATE    SERVICE      VERSION
22/tcp    open     ssh          OpenSSH 6.6.1p1 Ubuntu 2ubuntu2.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   1024 ac00a01a82ffcc5599dc672b34976b75 (DSA)
|   2048 203d2d44622ab05a9db5b30514c2a6b2 (RSA)
|   256 9602bb5e57541c4e452f564c4a24b257 (ECDSA)
|_  256 33fa910fe0e17b1f6d05a2b0f1544156 (ED25519)
25/tcp    filtered smtp
80/tcp    open     http         Apache httpd 2.4.7 ((Ubuntu))
|_http-title: Go ahead and ScanMe!
|_http-favicon: Nmap Project
|_http-server-header: Apache/2.4.7 (Ubuntu)
135/tcp   filtered msrpc
139/tcp   filtered netbios-ssn
445/tcp   filtered microsoft-ds
9929/tcp  open     nping-echo   Nping echo
31337/tcp open     tcpwrapped
Aggressive OS guesses: Linux 5.4 (99%), Linux 5.0 - 5.4 (99%), Linux 4.15 - 5.6 (97%), Linux 2.6.32 - 3.13 (96%), Linux 5.0 - 5.3 (95%), Linux 5.1 (95%), Linux 2.6.22 - 2.6.36 (95%), Linux 3.10 - 4.11 (95%), Linux 5.0 (94%), Linux 2.6.32 (94%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 18 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 443/tcp)
HOP RTT       ADDRESS
1   3.00 ms   dsldevice.attlocal.net (192.168.1.254)
2   ... 5
6   35.00 ms  32.130.17.77
7   33.00 ms  cgcil403igs.ip.att.net (12.122.132.121)
8   36.00 ms  be3039.ccr41.ord03.atlas.cogentco.com (154.54.12.85)
9   33.00 ms  be2766.ccr42.ord01.atlas.cogentco.com (154.54.46.177)
10  61.00 ms  be2832.ccr22.mci01.atlas.cogentco.com (154.54.44.169)
11  65.00 ms  be3036.ccr22.den01.atlas.cogentco.com (154.54.31.89)
12  90.00 ms  be3038.ccr32.slc01.atlas.cogentco.com (154.54.42.97)
13  92.00 ms  be3109.ccr21.sfo01.atlas.cogentco.com (154.54.44.137)
14  94.00 ms  be3178.ccr21.sjc01.atlas.cogentco.com (154.54.43.70)
15  97.00 ms  be2063.rcr21.b001848-1.sjc01.atlas.cogentco.com (154.54.1.162)
16  99.00 ms  38.142.11.154
17  100.00 ms if-1-6.csw5-fnc1.linode.com (173.230.159.67)
18  118.00 ms scanme.nmap.org (45.33.32.156)

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 53.73 seconds
```
