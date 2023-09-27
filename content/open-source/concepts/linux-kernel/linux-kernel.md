---
Title: 'Linux Kernel'
Description: 'The Linux kernel is the core program that runs the Linux operating system (OS).'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Developer Tools'
  - 'Linux'
  - 'Open Source'
  - 'Operating Systems'
  - 'Unix'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/code-foundations'
---

The **Linux kernel** is the core program that runs the [Linux](https://www.codecademy.com/resources/docs/open-source/linux) operating system (OS). It’s the most important component of Linux and serves as a bridge between the software and hardware of Linux machines.

The Linux kernel is a free and [open source](https://www.codecademy.com/resources/docs/open-source) operating system kernel that is derived from [Unix](https://www.codecademy.com/resources/docs/general/unix). Other Linux-derived kernels exist in operating systems such as Android and ChromeOS.

## Functions of the Linux Kernel

Some primary functions of the Linux kernel are listed below.

### Hardware Interface

The Linux kernel connects the Linux user space with the hardware. It interprets requests from applications and sends them to the appropriate hardware resources. These include internal hardware, such as the [CPU](https://www.codecademy.com/resources/docs/general/computer-hardware/cpu) or [RAM](https://www.codecademy.com/resources/docs/general/computer-hardware/ram), and peripheral hardware, such as storage disks or monitors.

When an application needs to perform a task, it sends a request to the Linux OS. Then, the Linux kernel determines where to send the request. For example, if a user began listening to music on their computer, the Linux kernel would have to send a request to multiple hardware resources, including speakers or headphones.

### Memory Management

The Linux kernel is responsible for managing and allocating the computer’s memory. This includes supervising how much memory is used, what is being stored, and the location where these items are stored. The Linux kernel is responsible for memory in the user space as well as implementing virtual memory.

### Process Scheduling and Management

The Linux kernel manages and determines how to fairly distribute the resources of the CPU across many processes that run simultaneously. It controls which processes use the CPU’s resources and for how long.

Different processes have different priority levels, and higher priority processes typically get more resources. When a higher priority process requests more resources, these additional resources are given at the expense of lower priority processes. The Linux kernel is in charge of managing all this, and it allocates and deallocates resources to different processes as necessary.

### Security and System Calls

The Linux kernel is responsible for performing actions requested by system calls. A system call is a request from the user space to the OS or “kernel space”. All requests sent to the OS are system calls, including those exampled above.

The system call design allows for separation of the user space and kernel space. This is because many risks exist in the user space, but more damage can be done to the system from the kernel space. This design provides additional security to the system, because it provides an additional layer between the user and the internal kernel.
