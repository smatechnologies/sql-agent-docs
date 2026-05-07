---
sidebar_label: 'SQL Agent'
title: SQL Agent overview
description: "Overview of the SQL Agent for OpCon."
tags:
  - Conceptual
  - System Administrator
  - Agents
---

# SQL Agent overview

## What is it?

The **SQL Agent** is an OpCon agent that lets OpCon schedule SQL queries and database jobs in a Windows environment. It acts as the bridge between OpCon and your databases, so a single OpCon schedule can drive work across many platforms.

You can use the SQL Agent to:

- Schedule SQL Server Agent jobs and trigger them on a defined cadence.
- Run T-SQL scripts directly against MS SQL Server, MySQL, or Oracle.
- Run SSIS packages through `dtexec`.
- Connect to any other database that exposes an ODBC or OLE DB connection.
- Capture each job's output for review and troubleshooting.

The current version is **22.5.0**. See [Release notes](./release-notes.md) for what's new.

## Where to start

| If you want to... | Go to |
|---|---|
| Stand up a new SQL Agent on a machine | [New installation](./installation/new-installation.md) |
| Update an existing SQL Agent | [Upgrade](./installation/upgrade-installation.md) |
| Tune agent settings or change the service account | [Administration](./administration/overview.md) |
| Look up an example for a specific job type | [SQL job actions](./reference/job-actions.md) |
| See what changed between versions | [Release notes](./release-notes.md) |

## FAQs

**What databases does the SQL Agent support?**
The SQL Agent allows OpCon to schedule SQL queries or jobs against MS SQL Server, MySQL, Oracle, ODBC/OLE DB, and SSIS.

**Where does the SQL Agent run?**
The SQL Agent runs in a Windows environment.

**What is the current version of the SQL Agent?**
The current version is 22.5.0.

## Related topics

- [Release notes](./release-notes.md)
- [New installation](./installation/new-installation.md)
- [SQL job actions](./reference/job-actions.md)
