---
Title: 'OS Detection'
Description: 'One of Nmap's best-known features is remote OS detection using TCP/IP stack fingerprinting.'
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
SeeAlso:
  - 'aggressive-scan'
---

One of Nmap's best known features is remote **OS Detection** using TCP/IP stack fingerprinting. With **OS Detection**, Nmap sends a series of TCP and UDP packets to the specified host and examine the reponces. Nmap then compares the results to its *nmap-os-db* database of more than 2,600 known OS fingerprints and prints out the OS details if there is a match.  
Each fingerprint includes a freeform textual description of the OS, and a classification which provides the vendor name (e.g. Sun), underlying OS (e.g. Solaris), OS generation (e.g. 10), and device type (general purpose, router, switch, game console, etc). Most fingerprints also have a Common Platform Enumeration (CPE) representation, like `cpe:/o:linux:linux_kernel:2.6.`

Note that *root* privilages are required to properly perform the scan.


**OS Detection** is enabled with:

- Enable OS detection (`-O`)

**OS Detection** is controlled with the following options (be sure to include with `-O`):
- Limit **OS detection** to promising targets (`--osscan-limit`)
    - This can save substantial time by only scanning targets that have a critera that makes **OS Detection** more effective, which is if there is at least one open and one closed TCP port are found. Nmap will now attempt **OS Detection** against hosts which do not meet that criteria.
- Guess **OS detection** results (`--osscan-guess; --fuzzy`)
    - When Nmap is unable to detect a perfect OS match, it sometimes offers up near-matches as possibilities. The match has to be very close for Nmap to do this by default. Either of these (equivalent) options make Nmap guess more aggressively. Nmap will still tell you when an imperfect match is printed and display its confidence level (percentage) for each guess.
- Set the maximum number of **OS detection** tries against a target (`--max-os-tries`)
    - By default, Nmap tries five times if conditions are favorable or two times when conditions aren't so good. One may specify a low `--max-os-tries` value to for quicker scans, or a higher number for more retries.
- Increase verbosity level to your **OS Detection** Scan (`-v`)


## Syntax 

```pseudo
nmap -O <target>
```

The above conducts an Nmap scan with **OS Detection** on `<target>`.

## Example

The following example runs a Nmap Scan and enables **OS Detection** on the site [scanme.nmap.org](http://scanme.nmap.org/):

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