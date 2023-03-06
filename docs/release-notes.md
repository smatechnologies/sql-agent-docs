# Release notes

## SQL Agent 20.8.0

2023 March

:white_check_mark: **SQLAG-95**: Fixed an issue with MSSQLAgent Job stuck in "running" state when a database disconnect occurs with SMO library while monitoring running job status. It will refresh the database connection and resume monitoring the job.

## SQL Agent 20.7.0

2022 April

:white_check_mark: **SQLAG-94**: Fixed an issue in SQL Agent where a job completion on SQL Server side was not always communicated back to the OpCon side.

:white_check_mark: **SQLAG-93**: Fixed an issue in SQL Agent where an Oracle job failed if it had "Other Options" specified.

## SQL Agent 20.6.0

2021 November

:white_check_mark: **SQLAG-92**: Fixed an issue where a network disruption (socket close) event that is not received by the SQL agent, causes the agent to repeatedly send messages to OpCon, and flood its max messages queue, instead of closing and listening to new connection requests.

:white_check_mark: **SQLAG-91**: Fixed an issue where SQL Agent did not drop a connection if a disconnect event did not trigger and so it would never allow new connections to it.

## SQL Agent 20.5.0

2021 June

:white_check_mark: **SQLAG-89**: Fixed an issue in SQL Agent where Windows logon sessions were not getting cleaned up and resulted in an increase in time to stop the agent service after a large load of Windows Auth jobs run through it and more memory consumption by the Windows Logon Management process (lsass.exe).

## SQL Agent 20.4.0

2021 June

:white_check_mark: **SQLAG-88**: Fixed an issue in the SQL Agent to retry accessing tracking files if they are locked by another process without loosing any messages there, which could result in jobs not being tracked in OpCon.
:white_check_mark: **SQLAG-87**: Fixed an issue in SQLAgent where it took a long time to retrieve SQL Server jobs output via SMO API. A config option ('usesmoapi', default set to 'true') now allows the agent to use a direct call to fetch the job output from SQL Server job, when the option is set to 'false'.
:white_check_mark: **SQLAG-86**: Fixed an issue where SQL Agent increased its memory usage over time, if several jobs failed during initialization.

## SQL Agent 20.3.0

2021 April

:white_check_mark: **SQLAG-85**: Fixed an issue in SQL Agent where fetching the output of a SQL job had performance problems. Now appropriate filtering to fetch job information significantly improves the performance.
:white_check_mark: **SQLAG-4**: Fixed an issue where the SQL Agent failed to capture a quick running job's status before its completion resulting in a "NullReferenceException".
:white_check_mark: **SQLAG-84**: Fixed an issue in SQL Agent where a restart of the agent while there are jobs in the tracking file, sometimes resulted in the agent shutting down.
:white_check_mark: **SQLAG-83**: Fixed an issue in SQL Agent where it was unable to process new messages due to a connection refresh problem. When a connection to the agent is dropped and a new one is established, now the agent refreshes the outgoing message context with the new connection.

## SQL Agent 20.2.0

2021 February

:white_check_mark: **SQLAG-80**: Fixed an issue in SQL agent where a DTExec job for ISSERVER had problems impersonating a Windows domain user.
:white_check_mark: **SQLAG-79**: Fixed an issue in SQL Agent where a long schedule or job name resulted in an error creating job output files as its name passed the max length allowed. Now truncated names are used to limit the number of characters so this error can't happen.

## SQL Agent 20.1.0

2020 December

:white_check_mark: **SQLAG-75**: Fixed an issue in SQL Agent where communication to Netcom stopped if the agent was marked down and up in OpCon while jobs were running.
:white_check_mark: **SQLAG-70**: Fixed an issue in SQL Agent where the agent did not communicate back to OpCon due to tracking file locking issues and not correctly initializing the connection with SMANetcom after it got dropped off.
:white_check_mark: **SQLAG-69**: Fixed an issue in SQL Agent where the user running the SQL job needed admin privileges on the SQL agent machine to impersonate the user. Now, the batch user won't need admin privileges.
:white_check_mark: **SQLAG-68**: Fixed an issue with SQL Agent where an unhandled exception in the user impersonation logic brought down the agent.

## SQL Agent 20.0.0

2020 August

:eight_spoked_asterisk: SQL Agent is now able to run SSIS packages using MS SQL DTExec job action using Windows Authentication.
:eight_spoked_asterisk: SQL Agent now allows running SSIS packages on Integration Services Server (ISSERVER).
:white_check_mark: Fixed an issue where the SQL Agent would fail to process non-ASCII characters for Job Output Retrieval System (JORS) requests.
:white_check_mark: Fixed an issue where a colon in SQL agent job name caused a file not found error when fetching job output.
:white_check_mark: Fixed an issue in SQL Agent where it did not track SQL Server jobs after an agent restart.

## SQL Agent 18.3.2

2019 March

:white_check_mark: Fixed an issue with the SQL Agent where memory usage increased each time a job ran and never decreased.
:white_check_mark: Fixed an issue where the SQL Agent would not check for all possible failure conditions after attempting to start a SQL Agent job on the SQL Server.

## SQL Agent 18.3.1

2018 December

:white_check_mark: Fixed an issue with the SQL Agent where a DataReader error was thrown and a job would fail with no retry attempted when trying to query the job status within MSSQLServer, but the job in MSSQLServer was still running and eventually went on to finish successfully.

## SQL Agent 18.3.0

2018 November

:white_check_mark: Fixed an issue with the SMA OpCon Agent for SQL service where sometimes it was stuck in a Started status when the actual status was Running.
:white_check_mark: Fixed an issue with the SQL Agent where the agent allowed concurrent connections from multiple SMANetComs.
:white_check_mark: Fixed an issue with the SQL Agent where the agent would not close a connection properly and would then accept a second connection while already connected to a service instead of refusing the second connection.
:white_check_mark: Fixed an issue with the tracking files where a "System.NullReferenceException: Object reference not set to an instance of an object" error would be thrown.
:white_check_mark: Fixed an issue with the SQL Agent where the JobOutput/Archives directory was not correctly cleaned.

## Older Versions

<details>
<summary>See all</summary>
<br />

#### SQL Agent 18.1.0

2018 June

:white_check_mark: Fixed an issue where the Connector Framework (.Net) had a defect in MonitorEndOffset handling. If the job user had a custom decimal separator (other than a period) defined in the Windows regional settings, the SQL Agent job ran into the error: "Invalid type in job XML. Integer expected, received: 0.0." The defect is fixed in version 18.1.0.0 of the SQL Agent and Connector Framework (.Net).

#### SQL Agent 17.1.4

2018 July

:white_check_mark: Fixed an issue where the Connector Framework (.Net) had a defect in MonitorEndOffset handling. If the job user had a custom decimal separator (other than a period) defined in the Windows regional settings, the SQL Agent job ran into the error: "Invalid type in job XML. Integer expected, received: 0.0." The defect is fixed in version 17.1.4 of the SQL Agent and Connector Framework (.Net).

</details>
