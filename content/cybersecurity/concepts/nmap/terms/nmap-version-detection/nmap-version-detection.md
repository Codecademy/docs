---
Title: 'Nmap Version Detection'
Description: 'Provides information on all identified open ports which interrogating the ports using probes that are understood by specific services.'
Subjects:
  - 'Computer Science'
  - 'Networking'
Tags:
  - 'Ethical Hacking'
  - 'Cybersecurity'
CatalogContent:
  - 'introduction-to-ethical-hacking'
  - 'paths/scan-systems-with-nmap'
---

**Version detection** provides information on all identified open ports interrogating them using probes that generate specific responses by specific services.

## Syntax

Version Detection is used with the `-sV` command, and it allows the user to collect information about the port. This can include the version number, the service type, the operating system, the hostname, etc.

```pseudo
nmap -sV <localhost>
```

The command starts an assessment on `<localhost>`.

The command can be customized with the following options:

- `--allports`
- `--version-intensity`
- `--version-light`
- `--version-all`
- `--version-trace`

## Example

The following example demonstrates the use of Version Detection using `scanme.nmap.org` (a safe test host):

```shell
nmap -sV scanme.nmap.org
```

This outputs:

```shell
$ nmap -sV scanme.nmap.org
Starting Nmap 7.80 ( https://nmap.org ) at 2022-12-11 03:37 UTC
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.074s latency).
Other addresses for scanme.nmap.org (not scanned): 2600:3c01::f03c:91ff:fe18:bb2f
Not shown: 996 closed ports
PORT      STATE SERVICE    VERSION
22/tcp    open  ssh        OpenSSH 6.6.1p1 Ubuntu 2ubuntu2.13 (Ubuntu Linux; protocol 2.0)
80/tcp    open  http       Apache httpd 2.4.7 ((Ubuntu))
9929/tcp  open  nping-echo Nping echo
31337/tcp open  tcpwrapped
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 11.82 seconds
```
