---
Title: 'Nmap Scripting Engine'
Description: 'The Nmap Scripting Engine (NSE) allows the writing of scripts that automate a wide variety of tasks.'
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

The **Nmap Scripting Engine (NSE)** allows the writing of scripts that automate a wide variety of tasks. It is one of the more powerful and flexible features of Nmap. It allows the automation of networking tasks, and allows the script itself to be shared between users.

The embedded Lua programming language is used to write scrips for Nmap. The refrence manual for Lua version 5.3 is avalible [freely online](http://www.lua.org/manual/5.3/).

The scripting engine is activated with the `-sC` option. The `--script` option can be used to specify a custom set of scripts. The results are intgrated into Nmap's output.

## Options

The following options are related to NSE:

- `-sC`: enables the most common scripts.
- `--script`: choses scripts by category, directory or individual script filename.
- `--script-args` and `script-args-file`: provide arguments to scripts that use/require them.
- `--script-help`: shows a description of what each selected script does.

Scripts are generally run with a port scan because the state of each port may determine if a script runs or not. It is possible to run scripts without a port scan, using only host discovery, with the `-sn` option. In this case only host scripts will run. To run without a port scan or host discovery, use `-Pn -sn`. Every host will be assumed up and only host scripts wil run.

## Categories

NSE scripts belong to a list of defined categories:

- `auth`: Deals with authentication credentials, or bypassing them.
- `broadcast`: Does discovery of hosts not listed on command line by broadcasting on the local network.
- `brute`: Uses brute force attacks to guess authentication credentials.
- `default`: These scripts are the default scripts run with the `-sC` option.
