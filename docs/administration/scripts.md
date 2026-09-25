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

## Job environment variables

When the SQL Agent starts a job that runs a command-line client (MS SQL Script, MS SQL DTExec, MySQL, Oracle), it sets the following environment variables in the job's process environment. MS SQL Job and Other DB (ODBC and OLE DB) jobs run inside the agent and do not receive them. Scripts invoked as the job body (`.sql` or `.bat` files run by the agent) can read these variables.

:::caution Not available in InitializationScript or TerminationScript
These variables are set per-job at the time a job process starts. InitializationScript and TerminationScript run at service start/stop — no job is running at that point, so none of these variables are available in those scripts.
:::

The agent sets one of two groups of variables, depending on the account the job runs as: the `SMA_` group when the job runs as its Windows User ID, or the `SMA_MSLSAM_` group when it runs as the SQL Agent service account. A script that must work in both cases should check for both names.

### Job runs as its Windows User ID

The agent sets these variables when the job definition has a **Windows User ID**.

| Variable | Description |
|---|---|
| `SMA_SAM_JOB_ID` | The unique SAM job identifier for the running job. |
| `SMA_JOB_NAME` | The name of the job as defined in OpCon. |
| `SMA_SCHEDULE_DATE` | The schedule date for the job (YYYYMMDD format). |
| `SMA_SCHEDULE_NAME` | The name of the schedule that contains the job. |
| `SMA_SCHEDULE_FREQ` | The schedule frequency name for the job. |
| `SMA_JOBOUTPUT_FILENAME` | The full path to the job output file for the current run. |

### Job runs as the service account

The agent sets these variables instead when the job has no **Windows User ID**, or when it begins with `USE SERVICE ACCOUNT`. They carry the same information as the `SMA_` group.

| Variable | Description |
|---|---|
| `SMA_MSLSAM_SAM_JOB_ID` | The unique SAM job identifier for the running job. |
| `SMA_MSLSAM_JOB_NAME` | The name of the job as defined in OpCon. |
| `SMA_MSLSAM_SCHEDULE_DATE` | The schedule date for the job (YYYYMMDD format). |
| `SMA_MSLSAM_SCHEDULE_NAME` | The name of the schedule that contains the job. |
| `SMA_MSLSAM_SCHEDULE_FREQ` | The schedule frequency name for the job. |
| `SMA_MSLSAM_JOBOUTPUT_FILENAME` | The full path to the job output file for the current run. |

## Related topics

- [SQLAgent.ini file configuration](./configuration-file.md)
- [Service configuration options](./service-configuration.md)
