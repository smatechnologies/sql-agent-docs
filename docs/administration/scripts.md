---
sidebar_label: "InitializationScript and TerminationScript"
---

# Using the InitializationScript and TerminationScript

The InitializationScript is typically used for mapping network drives or printers which are used by the jobs started by the agent. From Windows XP onwards, Microsoft introduced the concept of User session based mapping, which means that drives mapped from one user session are not accessible to another session for the same user. If your agent is running as a domain account and needs to access some programs that are on a network, it is best to map those network paths using an InitializationScript that runs on agent startup.

A TerminationScript is used to unmap any network drives or printers mapped during the agent initialization.

:::info Example
InitializationScript for mapping drives:
:::

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

:::info Example
TerminationScript for unmapping drives and printer shares:
:::

```bat
///// Disconnect from a share
NET USE Z: /DELETE
 
///// Disconnect from a printer share
NET USE LPT1 /DELETE
 
///// Send notification to a user or computer
net send machine/username "Agent Stopped"
```
