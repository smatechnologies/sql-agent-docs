---
sidebar_label: "Configuration file"
title: SQLAgent.ini file configuration
description: "Reference for the SQLAgent.ini configuration file, including general settings, TCP/IP parameters, debug options, and JORS settings."
tags:
  - Reference
  - System Administrator
  - Administration
---

# SQLAgent.ini file configuration

## What is it?

The **SQLAgent.ini** file is the SQL Agent's configuration file. The agent reads it at startup and whenever the file changes on disk. Use this file to:

- Set the maximum number of concurrent jobs.
- Configure communication ports between the agent and OpCon.
- Configure the JORS port for job output retrieval.
- Tune logging and trace levels for troubleshooting.
- Point the agent at initialization and termination scripts.

The SQLAgent.ini file lives in the `<Configuration Directory>\SQLAgent\` directory.

:::note
The Configuration Directory is set during installation and is based on where you installed your programs. For more information, refer to [File Locations](https://help.smatechnologies.com/opcon/core/rolling/Files/Concepts/File%20Locations.htm) in the **Concepts** online help.
:::

## Critical settings

These settings must be correct for the agent to communicate with OpCon at all:

- **MaximumNumberOfJobs** — The maximum number of jobs the agent processes concurrently.
- **SocketNumberToSAM** — The socket the agent uses to communicate with SMANetCom. This **must** match the Socket Number on the Machines screen in the Enterprise Manager.
- **JORSSocket** — The socket the JORS service uses. This **must** match the JORS Port Number in the Advanced Machine Properties screen in the Enterprise Manager.

If either socket value does not match its OpCon counterpart, jobs cannot start and job output cannot be retrieved.

## Modify the SQLAgent.ini file

To modify the SQLAgent.ini file, complete the following steps:

1. Right-click the **Start** button.
2. Select **Explore** from the menu.
3. Browse to `<Configuration Directory>\SQLAgent\` for the desired SQL Agent instance.
4. Find the **SQLAgent.ini** file.
5. Right-click the file and select **Open With**.
6. Select an ASCII text editor (e.g., Notepad) from the **Choose the program you want use** list.
7. In the text editor, make any necessary modifications to the .ini file. For complete information on each setting, see the tables below.
8. Use the menu path: **File \> Save**.
9. **Close ☒** the text editor.

:::tip Dynamic vs. static settings
Settings whose **Dynamic** column is **Y** take effect without restarting the agent. Settings marked **N** require a service restart before the change is applied.
:::

## Settings reference

The reference tables below cover the four sections of the SQLAgent.ini file. Each table follows the same column structure: setting name, default value, whether the change is applied dynamically, whether the setting is required, and a description.

### General settings

The basic settings for the SQL Agent.

|[General Settings]|Default|Dynamic|Required|Description|
|--- |--- |--- |--- |--- |
|DisplayServiceName|SMA OpCon Agent for SQL|N|Y|The service name displayed in the Service Control Manager. The name must be unique for each SQL Agent. Do not change this unless there is more than one agent on this physical machine.|
|ShortServiceName|SMA_SQLNET|N|Y|The hidden, internal (i.e., registry) service name SQL refers to. The name must be unique for each SQL Agent. Do not change this unless there is more than one agent on this physical machine.|
|MaximumNumberOfJobs|50|Y|Y|Defines the maximum number of jobs the agent can simultaneously manage. When setting the MaximumNumberOfJobs, consider the SQL Agent machine's processor speed and memory (RAM) size. No job is processed when this setting is 0. Although the maximum value allowed is 500, typical customer usage ranges from 10 to 30 jobs.|
|InitializationScript|Blank|N|N|The full path to the initialization script. The initialization script runs when the SQL Agent service starts. SMA Technologies recommends using this script to map network drives or to perform any other required initialization procedure. Enclose the path in double quotes ("*path*").|
|TerminationScript|Blank|N|N|The full path to the termination script. The termination script runs when the SQL Agent service stops. SMA Technologies recommends using this script to disconnect network drives or to perform any other required termination procedure. Enclose the path in double quotes ("*path*").|

### TCP/IP parameters

The network settings for the SQL Agent.

:::caution Use uppercase
Enter all alphabetic TCP/IP parameter values in uppercase. The SQL Agent service does not start if the values are in lowercase.
:::

|[TCP/IP Parameters]|Default|Dynamic|Required|Description|
|--- |--- |--- |--- |--- |
|SocketNumberToSAM|21100|N|Y|Defines the socket number through which the agent and the SMANetCom communicate. This number must match the Machine's socket number defined in the Enterprise Manager. If there are multiple agents installed on one machine, each agent must have a unique value. For an up-to-date list of unused ports, please refer to the Internet Assigned Numbers Authority at www.iana.org.|
|AllowedIPAddress_1|ANY|Y|N|Determines if communication from the SMANetCom to the agent is restricted to one or more TCP/IP addresses. If ANY is specified, the agent accepts communication from any TCP/IP address. If a specific TCP/IP address is defined (e.g., 126.40.90.231), the agent only accepts communication from the specified address. The agent refuses a connection if communication is attempted from another address. This definition enhances communication security by refusing communications from other TCP/IP addresses. If multiple SAMs are on a network, this address ensures the agent is only accepting messages from the intended SMANetCom. This parameter is case-sensitive.|
|AllowedIPAddress_2|Blank|Y|N|Same as Address_1 explanation.|
|AllowedIPAddress_3|Blank|Y|N|Same as Address_1 explanation.|
|AllowedIPAddress_4|Blank|Y|N|Same as Address_1 explanation.|

### Debug options

The log and trace settings for troubleshooting the SQL Agent.

|[Debug Options]|Default|Dynamic|Required|Description|
|--- |--- |--- |--- |--- |
|ArchiveDaysToKeep|10|Y|N|Determines how many archive folders are retained. Each time it archives a log, the SQL Agent checks for expired archive folders to delete.|
|MaximumLogFileSize|150000|Y|N|Sets the maximum size in bytes for each agent log file. Prevents the accumulation of log messages in a single file. This is a site-specific setting.|
|TraceLevel|0|Y|N|Determines the detail in the information written to the SQLAgent.log file. 0 is standard logging level. 1 is more detailed logging.|
|TraceSAMMessages|ON|Y|N|Enables or disables tracing of SMANetCom communication messages sent to and from the agent. The SQLAgentTrace.log file contains the traced messages. If ON, the incoming SMANetCom messages are traced. If OFF, the incoming SMANetCom messages are not traced. This parameter is case-sensitive. This trace file is helpful for troubleshooting and debugging.|

### JORS settings

Settings for configuring JORS for job output retrieval.

|[JORS Settings]|Default|Dynamic|Required|Description|
|--- |--- |--- |--- |--- |
|JORSSocket|21110|N|Y|Defines the socket number through which the JORS Service communicates. This number must match the JORS Port Number defined in the Enterprise Manager under the Advanced Machine Settings in the Communication Settings category. If there are multiple SQL Agents installed on one machine, each agent's JORS Service must have a unique port. For an up-to-date list of unused ports, please refer to the Internet Assigned Numbers Authority at www.iana.org.|
|MaxJorsFileSize|65536|N|N|The maximum size of a Job Output file retrieved for viewing in OpCon. If the output file is larger than the MaxJorsFileSize, it is truncated when viewed. The minimum and default value is 65536 bytes (64 KB) and the maximum value is 52428800 bytes (50 MB). If an invalid value is specified, the file defaults to 65536.|
|LogComposition|MIX|N|N|LogComposition only applies when a job output file larger than the MaxJorsFileSize is being viewed. **START** presents MaxJorsFileSize bytes from the start of the file. **END** presents MaxJorsFileSize bytes from the end of the file. **MIX** presents half of MaxJorsFileSize bytes from the start of the file and half from the end.|

## FAQs

**Where is the SQLAgent.ini file stored?**
The SQLAgent.ini file is stored in the `<Configuration Directory>\SQLAgent\` directory. The Configuration Directory is set based on where you installed your programs.

**Why won't my SQL Agent service start after editing SQLAgent.ini?**
Check that all alphabetic TCP/IP parameter values are entered in uppercase. The SQL Agent service does not start if these values are in lowercase.

**Which settings change without restarting the agent?**
Settings whose **Dynamic** column is **Y** take effect without restarting the agent. Settings marked **N** require a service restart.

**What is the maximum value for MaximumNumberOfJobs?**
The maximum value allowed is 500, although typical customer usage ranges from 10 to 30 jobs.

## Related topics

- [InitializationScript and TerminationScript](./scripts.md)
- [Job Output Retrieval System](../advanced-features/jors.md)
- [Logging](../advanced-features/logging.md)
