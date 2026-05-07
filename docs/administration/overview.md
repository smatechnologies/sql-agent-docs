---
sidebar_label: 'Administration'
title: Administration overview
description: "Overview of administration topics for the SQL Agent, including service configuration, the SQLAgent.ini file, managing the agent service, and initialization and termination scripts."
tags:
  - Conceptual
  - System Administrator
  - Administration
---

# Administration overview

## What is it?

This section covers day-to-day administration of the SQL Agent. Use these pages to configure how the service runs, edit the SQLAgent.ini configuration file, start and stop the agent, and set up scripts that run when the agent starts or stops.

## Pick the right page

| If you want to... | Go to |
|---|---|
| Choose the account the service runs as | [Service configuration](./service-configuration.md) |
| Look up or change a setting in SQLAgent.ini | [Configuration file](./configuration-file.md) |
| Start or stop the agent service | [Manage the agent](./manage-lsam.md) |
| Map network drives the agent needs | [InitializationScript and TerminationScript](./scripts.md) |

## In this section

- [Service configuration](./service-configuration.md) — Configuration options for the SQL Agent service logon, including running as the Local System Account or as a Windows Domain User.
- [Configuration file](./configuration-file.md) — Reference for the SQLAgent.ini configuration file, including general settings, TCP/IP parameters, debug options, and JORS settings.
- [Manage the agent](./manage-lsam.md) — Procedures for starting and stopping the SQL Agent service from the Windows Service Control Manager.
- [InitializationScript and TerminationScript](./scripts.md) — How to use the InitializationScript and TerminationScript to map and unmap network resources.
