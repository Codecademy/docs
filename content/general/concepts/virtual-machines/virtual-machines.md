---
Title: 'Virtual Machines'
Description: 'Virtual machines are software resources that can perform the same tasks as physical computers.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Servers'
  - 'Cybersecurity'
CatalogContent:
  - 'foundations-of-cloud-computing'
  - 'paths/computer-science'
---

A **virtual machine (VM)** is a software resource that can perform the same computing functions as a physical computer system, such as running applications or storing data. However, VMs do not use physical hardware to perform these tasks. Instead, VMs exist as code and use software-defined versions of hardware that are installed on a host [server](https://www.codecademy.com/resources/docs/general/server).

A single server or physical computer can run multiple VMs at the same time. Each VM has its own operating system and functions as an independent compute resource, even though they may share the same host server. For example, a computer running macOS could use a VM to run a separate instance of the Windows operating system from the same computer.

## How Do VMs Work?

VMs run on top of the operating system of the host machine, similar to other applications on a physical computer. All VMs on a single host share the same physical resources, such as memory and storage.

Multiple VMs can be managed with a software known as a “hypervisor”. A hypervisor is used to create, manage, and run the VMs on a host machine. The hypervisor is used to manage hardware resources from the host machine, which enables these resources to be shared amongst multiple VMs.

## Benefits of VMs

Virtual machines can provide many benefits, such as:

### Improved Hardware Utilization

Multiple VMs can be run on a single physical server or computer. This allows physical hardware to be used more efficiently because a single VM frequently does not use enough resources to need its own dedicated hardware. Assigning multiple VMs to a single physical host also lowers costs by reducing the number of physical computers needed.

### Organize Development and Test Environments

VMs can provide separate environments with separate operating systems, which can be used for development and testing purposes. VMs make it easy to separate testing resources and conduct tests which won’t have any impact on production or other surrounding environments.

### Increased Security

Using separate VMs is considered a secure way to explore potentially malicious applications or viruses. Because VMs are separate environments from the host, they can be used for these tasks without the risk of compromising the host machine.

VMs can also improve security because VMs are isolated from the host computer and each other. If an attacker gained access to a single VM, they won’t have access to the host machine or other VMs that share the same host.

### Increased Flexibility

VMs are flexible and can easily be migrated to different hypervisors or hosts. Resources on a VM can also be added and removed easily, and different VMs can be used to operate different displays and operating systems from the same host machine.

## Who Uses VMs?

Nearly all software companies use virtual machines and other virtualization technology. VMs are a fundamental component of [cloud computing](https://www.codecademy.com/resources/docs/general/cloud-computing), [cybersecurity](https://www.codecademy.com/resources/docs/general/cybersecurity), and more.
