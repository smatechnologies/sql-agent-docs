---
sidebar_label: "InitializationScript and TerminationScript"
title: Using the InitializationScript and TerminationScript
description: "How to use the InitializationScript and TerminationScript to map and unmap network resources for the SQL Agent."
tags:
  - Conceptual
  - System Administrator
  - Administration
---

# Using the InitializationScript and TerminationScript

## What is it?

The SQL Agent can run two optional scripts:

- **InitializationScript** — Runs when the agent service starts. Use it to set up resources the agent needs for the lifetime of the service, such as mapped network drives and printer shares.
- **TerminationScript** — Runs when the agent service stops. Use it to clean up resources created by the InitializationScript.

## Why you might need an InitializationScript

From Windows XP onwards, Microsoft introduced **per-session drive mapping**: drives mapped from one user session are not accessible to another session for the same user. If your agent runs as a domain account and needs to access programs on a network share, the agent's session won't see drives mapped from any other session — including drives you mapped interactively.

The fix is to map those drives in an InitializationScript so they exist in the same session as the agent. The TerminationScript then unmaps them when the service stops, leaving the system clean.

## Configure the scripts

Configure the script paths in the SQLAgent.ini file using the **InitializationScript** and **TerminationScript** settings. See [SQLAgent.ini file configuration](./configuration-file.md#general-settings) for the setting reference.

## Examples

### InitializationScript

The example below maps a long-named file share, a printer share, an unprotected share, and a password-protected share, then sends a startup notification.

```bat
///// Join a file share (Drive MAP) - with a long share name
NET USE Z: "\\ComputerName\ShareName"
 
///// Join a Printer Share
NET USE LPT1: "\\ComputerName\printer_share"
 
///// Join an unprotected network share
NET USE Z: "\\ComputerName\ShareName"
 
///// Join a password protected file share (Drive MAP)
NET USE Z: \\ComputerName\ShareName[\volume] [password | *] [/USER:[domainname\]username]
 
///// Send notification to a user or computer
net send machine/username "Agent Started"
```

### TerminationScript

The example below disconnects the share and printer mapped above and sends a stop notification.

```bat
///// Disconnect from a share
NET USE Z: /DELETE
 
///// Disconnect from a printer share
NET USE LPT1 /DELETE
 
///// Send notification to a user or computer
net send machine/username "Agent Stopped"
```

## Related topics

- [SQLAgent.ini file configuration](./configuration-file.md)
- [Service configuration options](./service-configuration.md)
