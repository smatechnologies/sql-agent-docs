---
sidebar_label: 'New installation'
title: New installation
description: "Procedures for installing the SQL Agent for the first time on a Windows machine and creating its OpCon machine record."
tags:
  - Procedural
  - System Administrator
  - Installation
---

# New installation

## What is it?

This page walks you through a first-time SQL Agent install on a Windows machine. If the SQL Agent is already installed and you need to update it, see [Upgrade](./upgrade-installation.md) instead.

A complete install has three phases:

1. **Install the SQL Agent** software on the Windows machine.
2. **Configure how the service starts** (startup type and account).
3. **Create the machine record** in OpCon so the agent can communicate with the scheduler.

## Prerequisites

Before you start the installer, make sure the machine has:

- **Local Administrator** sign-in rights for the Windows user running the installer.
- **.NET Framework 4.8** installed on the machine. The installer will install it if it is not already present.
- **The OpCon installation media** containing the **SMA OpCon Agent for SQL Install**.exe file.
- **A management studio or command-line client** for the database the agent will run jobs against.

:::tip Examples of supported clients
- **MS SQL Server**: SQL Server Management Studio or `SQLCMD.exe`.
- **Oracle**: SQLcl.
:::

## Install the SQL Agent

The installer is a wizard with four configuration screens (instance name, output path, ports, setup type) followed by a final install step. Default values are safe for most environments — change them only if you have a reason to.

### Start the installer

To start the installer, complete the following steps:

1. Sign in to the Windows machine as a Local Administrator.
2. Exit all running applications on the desktop, including any OpCon applications.
3. Select the **SMA OpCon Agent for SQL Install**.exe file in the OpCon installation media to run it. The *language* screen displays.
4. Select the desired language for the installation screens and select **OK**. The **Welcome** screen displays.

### Configure paths, instance name, and ports

To configure the installation paths and ports, complete the following steps:

1. Select **Next**. The **Destination Folder** screen displays.
2. Change the target location for the installation or retain the default location.
3. Select **Next**. The **Configure Instance Name** screen displays.
4. *(Optional)* Enter a unique instance name to identify the SQL Agent. Use this if you plan to run more than one agent instance on the same machine.
5. Select **Next**. The **Select Path for File Migration to ProgramData** screen displays.
6. Select **Skip**. The **Select Path for Output Files** screen displays.
7. Change the directory for the output files or retain the default location.
8. Select **Next**. The **Configure Ports** screen displays.
9. Change the port values or retain the default values.

:::note
Note the port values you choose — you will need to enter the matching socket number in OpCon when you create the machine record later.
:::

### Run the installation

To run the installation, complete the following steps:

1. Select **Next**. The **Setup Type** screen displays.
2. Select the Setup Type: **Complete** or **Custom**.
    - For a Custom install, the **Custom Setup** screen displays.
3. Select **Next**. The **Ready to Install the Program** screen displays.
4. Select **Install**.
5. Select **Finish** on the **InstallShield Wizard Completed** screen.

:::note Troubleshooting
The installer writes a log file named **SMA_OpCon_SQL_Agent_Install.log** to the Windows directory. Consult this file if you suspect any installation problems.
:::

## Service startup setup

By default, the SMA OpCon Agent for SQL service is set to **Automatic (Delayed Start)** and runs under the local system account. Most environments do not need to change these defaults.

:::caution Recommended
SMA Technologies recommends leaving the SMA OpCon Agent for SQL service set to **Automatic (Delayed Start)** to avoid potential issues at startup time while other services and programs start up.
:::

Use the procedure below if you need to change the startup type or the account the service runs as.

### Set up service startup

To set up service startup, complete the following steps:

1. Go to **Start** > **Control Panel** > **Administrative Tools** > **Services**.
2. Select the newly installed **SMA OpCon Agent for SQL** service. The **SMA OpCon Agent for SQL Properties** dialog displays with the **General** tab in focus.
3. Select the **Service Startup type**:
    - **Automatic (Delayed Start)** *(recommended)*
    - **Automatic**
    - **Manual**
    - **Disabled**
4. Select the **Log On** tab.
5. Select one of the following two **Log on as** options for the service:
    - **Local System account** — Select this option if the service will run as the local system account. Selecting it deletes the default Domain User displayed in the field.
    - **This account** — Select this option if the service needs access to network directories. Enter the *Domain User* in the field, enter the *Password* for the Domain User, and re-enter the *Password* to confirm.
6. Select **OK**.

## Machine creation

After the agent is installed, create a machine record in OpCon so the scheduler can communicate with the agent. You only need to do this once per machine — if the machine was previously defined in OpCon, you may skip this procedure.

### Create the machine in OpCon

To create the machine in OpCon, complete the following sub-procedures in order.

#### Sign in to Solution Manager

To sign in, complete the following steps:

1. Open Solution Manager in your browser and enter the URL provided by your OpCon administrator.
2. Enter a *case-sensitive User Login ID* (e.g., `ocadm`) in the **Username** field.
3. Enter the *case-sensitive password for the user* in the **Password** field.
4. Select **Login**.

#### Add the machine record

To add the machine record, complete the following steps:

1. Go to **Administration** > **Agents**. The **Agents** screen displays.
2. Select **Add** to create a new agent record.
3. Enter the *official host name or alias based on the agent machine* in the **Name** field.
4. Enter *any relevant documentation* for this agent machine in the **Documentation** field.
5. Select **SQL** in the **Machine Type** list.
6. Set the *value* to a unique number (e.g., `21100`) in the **Socket Number** box.

   :::caution Match the agent configuration
   The socket number entered here must match the socket entered in the agent configuration file. If the values do not match, OpCon cannot communicate with the agent.
   :::

7. *(Optional)* Enter the *IPv4 or IPv6 address* in the **IP Address** field.
8. *(Optional)* Enter the *name* in the **Fully Qualified Domain Name** field.
9. Select **Save**.

#### Start communication

To start communication with the agent, complete the following steps:

1. On the **Agents** screen, locate the agent you just created.
2. Right-click the agent and select **Start Communication** from the menu.

## Related topics

- [SQLAgent.ini file configuration](../administration/configuration-file.md) — Where to find and edit the agent configuration file.
- [Service configuration options](../administration/service-configuration.md) — Detailed guidance on running the service as a Local System Account or Domain User.
- [Manage the SQL Agent service](../administration/manage-agent.md) — How to start and stop the agent after installation.
- [Multiple instances](./multiple-instances.md) — Install additional SQL Agent instances on the same machine.
