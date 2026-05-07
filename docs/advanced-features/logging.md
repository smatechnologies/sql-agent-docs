---
sidebar_label: 'Logging'
title: Logging
description: "Log files written by the SQL Agent and how the agent archives and retains them."
tags:
  - Conceptual
  - System Administrator
  - Advanced features
---

# Logging

## What is it?

The SQL Agent and its supporting components write log files that record service activity, configuration, and (when tracing is on) detailed diagnostic information. Use these logs to:

- Confirm the agent started cleanly.
- Verify the configuration the agent loaded.
- Trace SMANetCom messages while troubleshooting.
- Investigate intermittent failures.

Logs reside in the `<Output Directory>\SQLAgent\Log\` directory. The Output Directory was set during installation.

:::note
For more information about file locations, refer to [File Locations](https://help.smatechnologies.com/opcon/core/rolling/Files/Concepts/File%20Locations.htm) in the **Concepts** online help.
:::

## Log files

| File | Contents |
|---|---|
| **SQLAgent.log** | Agent processing information. Configuration is also written here at startup and whenever the SQL Agent detects a change to SQLAgent.ini. |
| **SQLAgentTrace.log** | Detailed diagnostic messages. Only written when tracing is activated. |

For details on enabling tracing and tuning log size, see [Debug options](../administration/configuration-file#debug-options) in the SQLAgent.ini reference.

## Log archiving

When a log file reaches the configured maximum size, the SQL Agent archives it. Archived logs live in `<Output Directory>\SQLAgent\Log\Archives\`.

### Archive folder layout

A folder exists in **Archives** for each day the SQL Agent processes. Folders use the naming convention `yyyy_mm_dd (Weekday)`. For example, the folder for January 11, 2008 would be `2008_01_11 (Friday)`.

### Archive file naming

As each log file fills up, the SQL Agent moves it into the current archive folder and renames it using the convention `LogName StartTime - StopTime.log`. For example, an archive file for the time range of 12:58:16 to 13:58:00 would be `SMAAgent 125816 - 135800.log`.

### Retention

By default, the SQL Agent retains **10 days** of archived logs. Adjust this through the **ArchiveDaysToKeep** setting in SQLAgent.ini.

:::note Manual files block purging
The SQL Agent does not purge an archive folder if it contains any files other than archived logs. If you copy files into an archive folder for any reason, retention will skip that folder until the extra files are removed.
:::

## FAQs

**Where do SQL Agent log files live?**
Log files reside in the `<Output Directory>\SQLAgent\Log\` directory. The Output Directory is set during installation.

**How long are archived logs kept by default?**
By default, the SQL Agent retains 10 days of archived logs. To change this, configure the SQLAgent.ini file.

**When does the SQL Agent rotate a log file?**
When a log file reaches a user-configured maximum size, the SQL Agent moves it into the current archive folder and renames it using the `LogName StartTime - StopTime.log` convention.

**Why aren't my old archive folders being purged?**
The SQL Agent does not purge an archive folder if any files other than archived files are present in it. Remove non-archive files from the folder so retention can run.

## Related topics

- [SQLAgent.ini file configuration](../administration/configuration-file.md) — Configure log size, retention, and trace settings.
- [Job Output Retrieval System](./jors.md) — Per-job output capture (separate from agent logs).
