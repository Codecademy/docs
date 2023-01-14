---
Title: 'OS Detection'
Description: 'Remotely scans a target host and presents details of its operating system if there is a match.'
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

**Operating system (OS) detection** is a feature in Nmap that remotely [scans](https://www.codecademy.com/resources/docs/cybersecurity/nmap/nmap-scan) a target host and presents details of its operating system if there is a match. TCP/IP stack fingerprinting is used to send a series of probes (e.g., TCP and UDP packets) to the specified host and examines the responses. The results are then compared to the `nmap-os-db` database 2,600+ known OS fingerprints, and the details are printed if there is a match.

> **Note:** Root privileges are required to properly perform the scan.

## Syntax

```pseudo
nmap -O <target>
```

OS detection is enabled with the `-O` option and applied to a host `<target>` (e.g., a [URL](https://www.codecademy.com/resources/docs/general/url) or IP address).

The following options are available for OS detection:

- `--osscan-limit`: Limits detection to only host targets with at least one open and one closed TCP port, and ignores hosts that do not meet this criteria.
- `--osscan-guess; --fuzzy`: Presents possible results if a perfect OS match can't be found.
  - The match has to be very close for Nmap to do this by default. Either of these (equivalent) options make Nmap guess more aggressively. Nmap will still tell when an imperfect match is printed and display its confidence level (0% - 100%) for each guess.
- `--max-os-tries`: Sets the maximum number of detection attempts against a target.
  - By default, Nmap tries five times if conditions are favorable or two times when conditions aren't so good. A specific amount of tries can be specified; the lower the amount, the quicker the scan.
- `-v`: Provides more information from an OS detection scan, including an incremental ID for each IP packet header sent.

## Example

The following example runs a Nmap Scan and enables OS detection on the site [scanme.nmap.org](http://scanme.nmap.org/):

```shell
nmap -O scanme.nmap.org
```

> **Note:** This is a site explicitly set up for testing Nmap. Scans should only be performed on domains with explicit permissions given to the user.

This results in the following output:

```shell
Starting Nmap 7.93 ( https://nmap.org ) at 2022-12-17 19:59 EST
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.089s latency).
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
Device type: general purpose
Running: Linux 5.X
OS CPE: cpe:/o:linux:linux_kernel:5
OS details: Linux 5.0 - 5.4
Network Distance: 10 hops

OS detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 6.96 seconds
```

Each fingerprint includes a freeform textual description of the OS, and a classification which provides the following:

- A vendor name (e.g., Sun)
- The underlying `OS details` that include the name and version (e.g., `Linux 5.0 - 5.4`)
- The device type (`general purpose`, `router`, `switch`, `game console`, etc)

Most fingerprints also have a common platform enumeration (`OS CPE`) representation, like `cpe:/o:linux:linux_kernel:5`.
