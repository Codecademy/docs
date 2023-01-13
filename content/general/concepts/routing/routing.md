---
Title: 'Routing'
Description: 'Routing is the process of deciding what paths communication signals may take across one or more networks.'
Subjects:
  - 'Computer Science'
  - 'Cybersecurity'
  - 'Web Development'
Tags:
  - 'Cybersecurity'
  - 'Networking'
CatalogContent:
  - 'introduction-to-cybersecurity'
  - 'paths/computer-science'
---

**Routing** is the process of deciding what paths communication signals may take across one or more networks. This process is used in many scenarios related to computer networking, including:

- A PC communicating with a printer across a Local Area Network, or LAN.
- A phone's web browser communicating with a web server over the Internet.

Through routing, these communication signals, called packets, can take multiple paths from the source to the destination.

## Routers

The process of routing is executed by devices known as routers. They live on the network where there are junctions (nodes) between these various paths. Routers can either be physical pieces of hardware or software based, which tend to be more limited in functionality.

A router always has some default path to send network traffic if no specific destination is specified. For packets with a specific destination, if there is more than one path, the router can make a decision on what path to use based on several criteria, which can include:

- Hop Count: The number of intermediate devices (routers) between the source and destination.
- Bandwidth: The maximum amount of data that can travel a route in a given period of time.
- Delay/Latency: The time between a signal sent on a route, and the response received.

## Types of Routing

There are several types of routing, based on the characteristics of the destination:

- Unicast Routing: The packet is being sent to a single specified location.
- Broadcast Routing: The packet is sent to all nodes on the network, even nodes that haven't requested it.
- Multicast Routing: Similar to broadcast routing, but packets are only sent to nodes that want them.
- Anycast Routing: The destination consists of several devices with the same logical address and the packet is routed to the closest of these devices.
