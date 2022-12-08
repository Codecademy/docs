---
Title: 'Nmap Scripting Engine'
Description: 'Allows for the writing of scripts that automate a wide variety of tasks.'
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

The **Nmap Scripting Engine (NSE)** allows the writing of scripts that automate a wide variety of tasks. As one of the more powerful and flexible features of Nmap, it enables the automation of networking tasks and allows the script to be shared between users.

The embedded Lua programming language is used to write scripts for Nmap. The reference manual for Lua version 5.3 is available [freely online](http://www.lua.org/manual/5.3/).

The NSE is activated with the `-sC` option. The `--script` option can be used to specify a custom set of scripts. The results are integrated into Nmap's output.

> **Note:** Scripts should never be run from untrusted third parties, as they can accidentally or maliciously damage the system or invade the user's privacy.

## Options

The following options are related to NSE:

- `-sC`: Enables the most common scripts.
- `--script`: Chooses scripts by category, directory, or individual script filename.
- `--script-args` and `script-args-file`: Provides arguments to scripts that use/require them.
- `--script-help`: Shows a description of what each selected script does.

Scripts are generally run with a port scan because the state of each port may determine if a script runs or not. It is possible to run scripts without a port scan, using only host discovery, with the `-sn` option. In this case, only host scripts will run. The `-Pn -sn` flag is used to run without a port scan or host discovery. Every host will be assumed up and only host scripts will run.

## Categories

NSE scripts belong to a list of defined categories:

- `auth`: Deals with authentication credentials, or bypassing them.
- `broadcast`: Does discovery of hosts not listed on the command line by broadcasting on the local network.
- `brute`: Uses brute force attacks to guess authentication credentials.
- `default`: The default scripts run with the `-sC` option.
- `discovery`: Tries to actively discover more about the network, querying public registries, SNMP devices, directory services, and so on.
- `dos`: May result in a denial of service.
- `exploit`: Actively exploits some vulnerability.
- `external`: May send data to a third-party database or another resource.
- `fuzzer`: Sends server software unexpected or randomized data in each packet.
- `intrusive`: Cannot be classified `safe` because there's some risk of crashing the target system, using up significant resources, or generally behaving in a way the target may perceive as malicious.
- `malware`: Checks if the target system is affected by malware or backdoors.
- `safe`: Not designed to crash servers, use large amounts of bandwidth or other resources, or exploit security holes.
- `version`: Special category that is an extension of the version detection feature. Cannot be selected explicitly.
- `vuln`: Checks for specific known vulnerabilities and reports when they are found.
