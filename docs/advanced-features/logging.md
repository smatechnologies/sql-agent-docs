# Logging

The SQL Agent and its supporting components write several log files to record information. The logs reside in the <Output Directory\>\\SQLAgent\\Log\\ directory.

:::note
The Output Directory was configured during the installation. For more information, refer to [File Locations](https://help.smatechnologies.com/opcon/core/rolling/Files/Concepts/File%20Locations.htm) in the **Concepts** online help.
:::

The log files include:

- **SQLAgent.log**: The SQL Agent writes processing information to the SQLAgent.log file. Additionally, the SQL Agent writes all configuration information to the log when it starts or when it detects a change to the SQLAgent.ini file.
- **SQLAgentTrace.log**: If tracing is activated, the [SQL Agent]{.GeneralAgentName} writes detailed messages to the SQLAgentTrace.log file.

When log files reach a user-configured maximum size, the SQL Agent archives them. The <Output Directory\>\\SQLAgent\\Log\\Archives\\ folder is the location of all archived log files.

:::note
The Output Directory was configured during the installation. For more information, refer to [File Locations](https://help.smatechnologies.com/opcon/core/rolling/Files/Concepts/File%20Locations.htm) in the **Concepts** online help.
:::

A folder exists in the Archives folder for each day the SQL Agent processes. The folder names use the following naming convention: yyyy_mm_dd (Weekday). For example, the folder name for January 11, 2008 would be 2008_01_11 (Friday).

As each log file fills up, the SQL Agent moves the log file into the current archive folder and renames it using the following naming convention: LogName StartTime - StopTime.log. For example, a SQL Agent archive file for the time range of 12:58:16 to 13:58:00 would be SMAAgent 125816 - 135800.log.

By default, the SQL Agent retains 10 days of Archived logs. Configure the SQLAgent.ini file to adjust this setting. For information on the Configuration of debug/log settings, refer to [Debug options](../administration/configuration-file#debug-options).

:::note
The SQL Agent does not purge any archive folders if any files other than archived files are present.
:::
