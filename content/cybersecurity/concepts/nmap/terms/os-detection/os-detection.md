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
Catalog Content:
  - 'introduction-to-cybersecurity'
  - 'paths/scan-systems-with-nmap'
See Also:
  - 'aggressive-scan'
---

One of Nmap's best known features is remote **OS Detection** using TCP/IP stack fingerprinting. With **OS Detection**, Nmap sends a series of TCP and UDP packets to the specified host and examine the reponces. Dozens of tests to are purformed, such as TCP ISN sampling, TCP options support and ordering, IP ID sampling, and the initial window size check, Nmap compares the results to its nmap-os-db database of more than 2,600 known OS fingerprints and prints out the OS details if there is a match.
Each fingerprint includes a freeform textual description of the OS, and a classification which provides the vendor name (e.g. Sun), underlying OS (e.g. Solaris), OS generation (e.g. 10), and device type (general purpose, router, switch, game console, etc). Most fingerprints also have a Common Platform Enumeration (CPE) representation, like `cpe:/o:linux:linux_kernel:2.6.`

Note that *root* privilages are required to properly perform the scan. If user is not logged the *root* account, prefacing each command with `sudo` may be used while logged in an account with proper administrative privilages.