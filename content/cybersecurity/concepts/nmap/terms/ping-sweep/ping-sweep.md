---
Title: 'Ping Sweep'
Description: 'A network scanning technique to identify active devices on a network by pinging a range of IP addresses.'
Subjects:
  - 'Computer Science'
  - 'Cybersecurity'
  - 'Networking'
Tags:
  - 'Cybersecurity'
  - 'Ethical Hacking'
  - 'Networking'
CatalogContent:
  - 'introduction-to-cybersecurity'
  - 'paths/scan-systems-with-nmap'
---

A **ping-sweep** is a network scanning technique to identify active devices on a network by pinging a range of IP addresses. It is specified with the `-sn` option.  Compared to other methods, ping sweeps can be harder to detect as it is not as aggressive and can skip regular scan stages, making it more of an advantage.

## Syntax

```pseudo
nmap -sn subnetIP/mask
```

The above identifies all of the IP addresses that are currently online without sending any packets to these hosts.

## Example

The following example runs a ping-sweep on `192.168.0.1/24`:

```shell
nmap -sn 192.168.0.1/24
```

This results in the following output:

```shell
Starting Nmap 7.80 ( https://nmap.org ) at 2020-11-06 22:47 PST
Nmap scan report for 192.168.0.1
Host is up (0.010s latency).
Nmap scan report for 192.168.0.101
Host is up (0.087s latency).
Nmap scan report for 192.168.0.102
Host is up (0.041s latency).
Nmap done: 256 IP addresses (3 hosts up) scanned in 4.44 seconds
```