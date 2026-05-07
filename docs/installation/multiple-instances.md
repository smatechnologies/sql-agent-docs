---
sidebar_label: 'Multiple instances'
title: Install additional SQL Agent instances
description: "How to install additional SQL Agent instances on a single machine."
tags:
  - Procedural
  - System Administrator
  - Installation
---

# Install additional SQL Agent instances

## What is it?

You can install more than one instance of the SQL Agent on a single machine. Each instance must have a unique instance name and port number so OpCon can communicate with each one independently. Use multiple instances when:

- You need to isolate jobs running against different databases or environments.
- Different agent instances must run under different service accounts.
- You want to scale concurrent job throughput on the same host.

## Install another instance

The installer detects an existing SQL Agent on the machine and automatically prompts you to install a new instance.

To install an additional SQL Agent instance, complete the following steps:

1. Repeat the [Install the SQL Agent](new-installation.md#install-the-sql-agent) procedure. The installation package automatically transforms to install a new instance of the agent.

   :::tip Use a unique instance name and port
   On the **Configure Instance Name** screen, enter a name that distinguishes this instance from the others. On the **Configure Ports** screen, set port values that are not already in use by another agent on the machine.
   :::

2. Define a new machine in OpCon with a unique name and port number using the procedure for [Machine creation](new-installation.md#machine-creation). The socket number you set in OpCon must match the port you chose in the installer.

## Related topics

- [New installation](./new-installation.md)
- [SQLAgent.ini file configuration](../administration/configuration-file.md)
- [Service configuration options](../administration/service-configuration.md)
