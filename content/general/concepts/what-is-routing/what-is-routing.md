---
Title: 'What is Routing?'
Description: 'Routing, or network routing, involves the process of directing path traffic across one or more networks.'
Subjects:
  - 'Computer Science'
  - 'Internet Routing'
  - 'Routing Protocols'
Tags:
  - 'IPs'
  - 'Routing'
  - 'Protocols'
  - 'TCP/IP'
  - 'AWS Routing'

CatalogContent:
  - 'paths/computer-science'
  - 'paths/devops-career-path'
  - 'paths/backend-engineer-career-path'
---

## What Is Routing?

Routing is the process of directing network traffic and transferring packet data from the source to the destination. Routing is performed by a special device known as a router. The router works at the heart of the network layer in the [OSI model](https://en.wikipedia.org/wiki/OSI_model) and in the internet layer of the[ TCP/IP model](https://en.wikipedia.org/wiki/Internet_protocol_suite).

## Routers and Routing Protocols

A router is a networking device that forwards the data packet based on the information available in the packet header and forwarding table. It uses an algorithm that is nothing but software responsible for deciding which path is optimal for the packet can be transmitted.

The routing protocols use metrics to determine the best path for the packet delivery, including:

- Hop count
- Bandwidth
- Delay
- Current load on the path

Together, these metrics are used by the routing algorithm to determine the optimal path to the destination. The routing algorithm initializes and maintains the routing table for the process of path determination.

## How Does Routing Work?

Routers refer to internal routing tables to make decisions about how to route packets along network paths. A routing table records the paths that packets should take to reach every destination that the router is responsible for. Think of train timetables, which train passengers consult to decide which train to catch. Routing tables are like that, but for network paths rather than trains.

Routers work in the following way: when a router receives a packet, it reads the headers* of the packet to see its intended destination, like the way a train conductor may check a passenger's tickets to determine which train they should go on. It then determines where to route the packet based on information in its routing tables.

Routers do this millions of times a second with millions of packets. As a packet travels to its destination, it may be routed several times by different routers.

## Routing Tables: Static and Dynamic

Routing tables can either be static or dynamic. Static routing tables do not change. A network administrator manually sets up static routing tables. This essentially sets in stone the routes data packets take across the network, unless the administrator manually updates the tables.

Dynamic routing tables update automatically. Dynamic routers use various routing protocols (see below) to determine the shortest and fastest paths. They also make this determination based on how long it takes packets to reach their destination — similar to the way Google Maps, Waze, and other GPS services determine the best driving routes based on past driving performance and current driving conditions.

Dynamic routing requires more computing power, which is why smaller networks may rely on static routing. But for medium-sized and large networks, dynamic routing is much more efficient.

## What are the main routing protocols?

In networking, a protocol is a standardized way of formatting data so that any connected computer can understand the data. A routing protocol is a protocol used for identifying or announcing network paths.

Routing protocols provide a standard way of formatting the data so that any connected device maybe servers or local systems can understand the data.Routing protocol is basically a way that is used for indentifying the network paths to travesre for the data.

* The following are some protocols that help packets to find their way across the internet:

IP: The Internet Protocol (IP) specifies the origin and destination for each data packet. Routers inspect each packet's IP header to identify where to send them.

BGP: The Border Gateway Protocol (BGP) routing protocol is used to announce which networks control which IP addresses, and which networks connect to each other. (The large networks that make these BGP announcements are called autonomous systems.) BGP is a dynamic routing protocol.

OSPF: The Open Shortest Path First (OSPF) protocol is commonly used by network routers to dynamically identify the fastest and shortest available routes for sending packets to their destination.

RIP: The Routing Information Protocol (RIP) uses "hop count" to find the shortest path from one network to another, where "hop count" means number of routers a packet must pass through on the way. (When a packet goes from one network to another, this is known as a "hop.")

## AWS Routing?

Today most of the tech giants use managed routing services provided by cloud service providers like AWS, GCP and Azure. This article gives a good insight on how routing works in the AWS by abstracting the complexity of all the perplexing configurations that are involved in Internet Routing.More on this at
[AWS ROUTING](https://medium.com/@mda590/aws-routing-101-67879d23014d)
