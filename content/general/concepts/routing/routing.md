---
Title: 'Routing'
Description: 'The process of deciding what path packets travel across a network is called routing.'
Subjects:
  - 'Computer Science'
  - 'Cybersecurity'
  - 'Web Development'
Tags:
  - 'Cybersecurity'
  - 'Networking'
CatalogContent:
  - 'learn/introduction-to-cybersecurity'
  - 'paths/computer-science'
---

When one device communicates to another across a network, such as a PC communicating to a printer across a LAN, or a phone's web browser communicating to a web server over the Internet, there are generally multiple ways the signals, called packets, can travel from the source to the destination. The process of deciding what path packets travel across a network is called routing. The process of routing is executed by devices called routers that live on the network where there are junctions (nodes) between these various paths.

A router can be physical piece of hardware, or it can be software based. Software-based routers tend to be more limited in functionality.

In deciding paths to route traffic, a router always has some default path to send traffic with no specific destination specified. For traffic with a specific destination, if there is more than one path, the router can make a decision on what path to use based on several criteria, which can include:

- Hop Count
- Bandwidth
- Delay/Latency

## Type of Routing

There are several types of routing, based on the characteristics of the destination:

- Unicast Routing: the packet is being sent to a single specified location.
- Broadcast Routing: the packet is sent to all nodes on the network, even nodes that haven't requested it.
- Multicast Routing: like broadcast routing, but packets are only sent to nodes that want them.
- Anycast Routing: the destination consists of several devices with the same logical address, and the packet is routed to the closest of these devices.
