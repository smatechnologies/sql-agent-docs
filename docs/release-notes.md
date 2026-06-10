---
sidebar_label: 'Release notes'
title: SQL Agent release notes
description: "Version history and change details for the SQL Agent, including new features, improvements, and bug fixes."
tags:
  - Reference
  - System Administrator
  - Agents
---

# SQL Agent release notes

## 22

### 22.5.0

**Released:** 04/2026

This release hardens connection recovery behavior and upgrades the .NET Framework requirement.

#### Improvements

- **Improved connection recovery.** The agent now closes a broken connection and waits for SMANetCom to reconnect before retrying queued messages, preventing stale connection state from blocking new connections on reconnect.

#### Upgrade notes

- .NET Framework 4.8 is now required. The installer will install it if it is not already present on the machine.

---

### 22.4.0

**Released:** 09/2025

This release improves stability of the Job Output Retrieval System (JORS).

#### Improvements

- **Improved JORS request handling.** The agent now validates JORS request parameters and handles malformed requests without crashing, ensuring the JORS service remains available for job output retrieval.

---

### 22.2.0

**Released:** 08/2025

This release resolves a long-standing memory issue affecting high-volume environments.

#### Bug fixes

- **Fixed a memory leak** that caused memory usage to grow over time and required periodic service restarts. Environments processing large numbers of jobs will see stable memory consumption between restarts.

---

### 22.1.0

**Released:** 07/2025

This release adds diagnostic information to ODBC and OLE DB job output.

#### Improvements

- **Added connection error details to job output** for Other DB (ODBC and OLE DB) jobs. When a connection fails, the error information is now written to job output, making it easier to diagnose database connectivity problems without reviewing agent logs.

---

### 22.0.0

**Released:** 08/2023

This release updates the .NET Framework requirement and resolves a communication issue.

#### Improvements

- **Updated .NET Framework requirement to 4.7.2.** The framework is installed with the agent if it is not already present.

#### Bug fixes

- **Fixed an issue where job completion status messages were not sent to SMANetCom after a network error.** Jobs that completed during a network disruption now report their final status correctly when the connection is restored.

---

## 20

### 20.8.0

**Released:** 03/2023

#### Bug fixes

- **Fixed an issue where an MS SQL Server Agent job remained in a running state** after a database disconnect occurred while the agent was monitoring job status. The agent now refreshes the database connection and resumes monitoring automatically.

---

### 20.7.0

**Released:** 04/2022

#### Bug fixes

- **Fixed an issue where job completion was not always communicated back to OpCon** when a SQL Server Agent job finished. Job statuses are now reliably reported.
- **Fixed an issue where an Oracle job failed when the Other Options field was populated.** Oracle jobs with additional options now run as expected.

---

### 20.6.0

**Released:** 11/2021

#### Bug fixes

- **Fixed an issue where a network disruption caused the agent to flood its outbound message queue.** When the agent does not receive a socket close event, it now closes the connection and listens for new requests instead of retrying indefinitely.
- **Fixed an issue where the agent did not close a dropped connection**, preventing new connections from being accepted. The agent now detects stale connections and closes them correctly.

---

### 20.5.0

**Released:** 06/2021

#### Bug fixes

- **Fixed an issue where Windows logon sessions were not cleaned up** after Windows Authentication jobs ran. The fix reduces the time required to stop the agent service in high-volume environments and reduces memory consumption by the Windows Logon Management process.

---

### 20.4.0

**Released:** 06/2021

#### Bug fixes

- **Fixed an issue where jobs could be lost if tracking files were locked** by another process. The agent now retries file access until the lock is released, preventing jobs from being dropped from OpCon tracking.
- **Fixed a performance issue with MS SQL Server Agent job output retrieval** using the SMO API. A new configuration option (`UseSmoApi` in the JORS Settings section of SQLAgent.ini) allows the agent to use a direct stored procedure call instead of the SMO API when set to `False`. The default is `True`.
- **Fixed a memory growth issue** that occurred when multiple jobs failed during initialization. Memory is now released correctly after initialization failures.

---

### 20.3.0

**Released:** 04/2021

#### Bug fixes

- **Fixed a performance issue with SQL Server Agent job output retrieval.** The agent now applies more precise filtering when fetching job history, significantly reducing retrieval time.
- **Fixed an issue where a fast-finishing job's status was not captured**, resulting in a null reference error. The agent now handles rapid job completion correctly.
- **Fixed an issue where the agent shut down unexpectedly** when restarting with jobs still in the tracking file. Restart behavior is now stable when jobs are in progress.
- **Fixed an issue where the agent stopped processing new messages** after a connection was dropped and re-established. The agent now refreshes its outbound message context with the new connection.

---

### 20.2.0

**Released:** 02/2021

#### Bug fixes

- **Fixed an issue where a DTExec (SSIS) job could not impersonate a Windows domain user** when the package was stored on an Integration Services Server (ISSERVER). Domain user impersonation now works correctly for ISSERVER packages.
- **Fixed an issue where a long schedule or job name caused an error** when creating job output files. Names that exceed the file system limit are now truncated automatically.

---

### 20.1.0

**Released:** 12/2020

#### Bug fixes

- **Fixed an issue where agent communication to SMANetCom stopped** if the agent was marked down and then up in OpCon while jobs were running. Communication resumes correctly after the agent is brought back online.
- **Fixed a tracking file locking issue** that prevented the agent from communicating back to OpCon and from correctly reinitializing the connection after it was dropped. Connection handling is now reliable after reconnects.
- **Fixed an issue where the batch user running a SQL job required local administrator privileges** on the agent machine in order to impersonate the job user. Batch users no longer need administrator privileges.
- **Fixed an issue where an unhandled exception in the user impersonation logic** caused the agent to crash. The exception is now handled and the agent remains running.

---

### 20.0.0

**Released:** 08/2020

This release adds Windows Authentication support for SSIS packages and support for Integration Services Server.

#### New features

- **Added Windows Authentication support for MS SQL DTExec jobs.** SSIS packages run via `dtexec` can now authenticate using the Windows account of the executing user rather than requiring SQL Server credentials.
- **Added Integration Services Server (ISSERVER) support for MS SQL DTExec jobs.** SSIS packages stored on an Integration Services Server can now be run directly from OpCon.

#### Bug fixes

- **Fixed an issue where non-ASCII characters in JORS requests caused failures.** Job output retrieval now works correctly for jobs with names or paths that contain non-ASCII characters.
- **Fixed an issue where a colon in a job name caused a file not found error** when fetching job output. Job names with colons are now handled correctly by the output file naming logic.
- **Fixed an issue where SQL Server Agent jobs were not tracked after an agent restart.** Jobs that were running when the agent restarted are now correctly re-tracked after the agent comes back online.

---

## 18

### 18.3.2

**Released:** 03/2019

#### Bug fixes

- **Fixed a memory leak** that caused memory usage to increase each time a job ran and never decrease. Memory is now released correctly after each job completes.
- **Fixed an issue where not all failure conditions were checked** after attempting to start a SQL Server Agent job. The agent now checks the full set of failure conditions before reporting job status.

---

### 18.3.1

**Released:** 12/2018

#### Bug fixes

- **Fixed an issue where a DataReader error caused a SQL Server Agent job to fail** even when the job on the SQL Server side was still running and eventually completed successfully. The agent now correctly handles transient DataReader errors and continues monitoring the job.

---

### 18.3.0

**Released:** 11/2018

#### Bug fixes

- **Fixed an issue where the SQL Agent service reported a Started status** when it was actually in a Running state. Service status is now reported accurately.
- **Fixed an issue where the agent accepted concurrent connections from multiple SMANetCom instances.** The agent now correctly accepts only one connection at a time.
- **Fixed an issue where the agent did not close a connection properly** and accepted a second connection while already connected, instead of refusing it. Connection handling now enforces single-connection behavior.
- **Fixed a null reference exception in the tracking file logic.** Tracking files are now read without throwing unhandled exceptions.
- **Fixed an issue where the job output archive directory was not cleaned correctly.** The archive folder is now purged on schedule as configured by `ArchiveDaysToKeep`.

---

### 18.1.0

**Released:** 06/2018

#### Bug fixes

- **Fixed an issue where jobs failed with an "Invalid type in job XML" error** when the Windows regional settings on the agent machine used a non-period decimal separator. The MonitorEndOffset value is now parsed correctly regardless of the machine's regional settings.

---

## 17

### 17.1.4

**Released:** 07/2018

#### Bug fixes

- **Fixed an issue where jobs failed with an "Invalid type in job XML" error** when the Windows regional settings on the agent machine used a non-period decimal separator. This is the same fix as in version 18.1.0, backported to the version 17 line.
