# Release notes

## SQL Agent 20.4.0

2021 June

### Fixes

- **SQLAG-88**: Fixed an issue in the SQL Agent to retry accessing tracking files if they are locked by another process without loosing any messages there, which could result in jobs not being tracked in OpCon.
- **SQLAG-87**: Fixed an issue in SQLAgent where it took a long time to retrieve SQL Server jobs output via SMO API. A config option ('usesmoapi', default set to 'true') now allows the agent to use a direct call to fetch the job output from SQL Server job, when the option is set to 'false'.
- **SQLAG-86**: Fixed an issue where SQL Agent increased its memory usage over time, if several jobs failed during initialization.

## SQL Agent 20.3.0

2021 April

### Fixes

- **SQLAG-85**: Fixed an issue in SQL Agent where fetching the output of a SQL job had performance problems. Now appropriate filtering to fetch job information significantly improves the performance.
- **SQLAG-4**: Fixed an issue where the SQL Agent failed to capture a quick running job's status before its completion resulting in a "NullReferenceException".
- **SQLAG-84**: Fixed an issue in SQL Agent where a restart of the agent while there are jobs in the tracking file, sometimes resulted in the agent shutting down.
- **SQLAG-83**: Fixed an issue in SQL Agent where it was unable to process new messages due to a connection refresh problem. When a connection to the agent is dropped and a new one is established, now the agent refreshes the outgoing message context with the new connection.

## SQL Agent 20.2.0

2021 February

### Fixes

- **SQLAG-80**: Fixed an issue in SQL agent where a DTExec job for ISSERVER had problems impersonating a Windows domain user.
- **SQLAG-79**: Fixed an issue in SQL Agent where a long schedule or job name resulted in an error creating job output files as its name passed the max length allowed. Now truncated names are used to limit the number of characters so this error can't happen.

## SQL Agent 20.1.0

2020 December

### Fixes

- **SQLAG-75**: Fixed an issue in SQL Agent where communication to Netcom stopped if the agent was marked down and up in OpCon while jobs were running.
- **SQLAG-70**: Fixed an issue in SQL Agent where the agent did not communicate back to OpCon due to tracking file locking issues and not correctly initializing the connection with SMANetcom after it got dropped off.
- **SQLAG-69**: Fixed an issue in SQL Agent where the user running the SQL job needed admin privileges on the SQL agent machine to impersonate the user. Now, the batch user won't need admin privileges.
- **SQLAG-68**: Fixed an issue with SQL Agent where an unhandled exception in the user impersonation logic brought down the agent.

## SQL Agent 20.0.0

2020 August

### New Features

- SQL Agent is now able to run SSIS packages using MS SQL DTExec job action using Windows Authentication.
- SQL Agent now allows running SSIS packages on Integration Services Server (ISSERVER).

### Fixes

- Fixed an issue where the SQL Agent would fail to process non-ASCII characters for Job Output Retrieval System (JORS) requests.
- Fixed an issue where a colon in SQL agent job name caused a file not found error when fetching job output.
- Fixed an issue in SQL Agent where it did not track SQL Server jobs after an agent restart.

## SQL Agent 18.3.2

2019 March

### Fixes

- Fixed an issue with the SQL Agent where memory usage increased each time a job ran and never decreased.
- Fixed an issue where the SQL Agent would not check for all possible failure conditions after attempting to start a SQL Agent job on the SQL Server.

## SQL Agent 18.3.1

2018 December

### Fixes

- Fixed an issue with the SQL Agent where a DataReader error was thrown and a job would fail with no retry attempted when trying to query the job status within MSSQLServer, but the job in MSSQLServer was still running and eventually went on to finish successfully.

## SQL Agent 18.3.0

2018 November

### Fixes

- Fixed an issue with the SMA OpCon Agent for SQL service where sometimes it was stuck in a Started status when the actual status was Running.
- Fixed an issue with the SQL Agent where the agent allowed concurrent connections from multiple SMANetComs.
- Fixed an issue with the SQL Agent where the agent would not close a connection properly and would then accept a second connection while already connected to a service instead of refusing the second connection.
- Fixed an issue with the tracking files where a "System.NullReferenceException: Object reference not set to an instance of an object" error would be thrown.
- Fixed an issue with the SQL Agent where the JobOutput/Archives directory was not correctly cleaned.

## SQL Agent 18.1.0

2018 June

### Fixes

- Fixed an issue where the Connector Framework (.Net) had a defect in MonitorEndOffset handling. If the job user had a custom decimal separator (other than a period) defined in the Windows regional settings, the SQL Agent job ran into the error: "Invalid type in job XML. Integer expected, received: 0.0." The defect is fixed in version 18.1.0.0 of the SQL Agent and Connector Framework (.Net).

## SQL Agent 17.1.4

2018 July

### Fixes

- Fixed an issue where the Connector Framework (.Net) had a defect in MonitorEndOffset handling. If the job user had a custom decimal separator (other than a period) defined in the Windows regional settings, the SQL Agent job ran into the error: "Invalid type in job XML. Integer expected, received: 0.0." The defect is fixed in version 17.1.4 of the SQL Agent and Connector Framework (.Net).
