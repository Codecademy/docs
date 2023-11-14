---
Title: 'Ping Sweep'
Description: 'Identifies active devices on a network by pinging a range of IP addresses.'
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

A **ping sweep** is a network scanning technique to identify active devices on a network by pinging a range of IP addresses. Compared to other methods, ping sweeps can be harder to detect as it is not as aggressive and can skip regular scan stages, making it more of an advantage.

## Syntax

Below, all of the IP addresses that are currently online will be identified without sending any packets to the hosts.

```pseudo
nmap -sn subnetIP/mask
```

- `subnetIP` is a smaller range of IP addresses of the whole network (commonly used to group items on a network together for organizational, security, and efficiency sake).
- `mask` helps identify which part of the IP address is dedicated to the network, and which part is dedicated to the host devices on the network. This knowledge is needed in order to create subnets.

## Example

The following example runs a ping sweep on `subnetIP/mask`:

```shell
nmap -sn subnetIP/mask
```

This may result in the following output:

```shell
Starting Nmap 7.80 ( https://nmap.org ) at 2020-11-06 22:47 PST
Nmap scan report for subnetIP/mask
Host is up (0.010s latency).
Nmap scan report for subnetIP/mask
Host is up (0.087s latency).
Nmap scan report for subnetIP/mask
Host is up (0.041s latency).
Nmap done: 256 IP addresses (3 hosts up) scanned in 4.44 seconds
```
