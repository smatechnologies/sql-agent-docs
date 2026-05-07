---
sidebar_label: 'Upgrade'
title: Upgrade installation
description: "Procedures for upgrading an existing SQL Agent on a Windows system."
tags:
  - Procedural
  - System Administrator
  - Installation
---

# Upgrade installation

## What is it?

This page walks you through upgrading an existing SQL Agent on a Windows machine. If the SQL Agent is not yet installed, see [New installation](./new-installation.md) instead.

A complete upgrade has five phases:

1. **Drain running jobs** so the agent can be stopped safely.
2. **Stop the service** before the installer runs.
3. **Run the installer in upgrade mode** to update the agent.
4. **Restart the service** with its previous "Log on as" settings restored.
5. **Resume communication** with the agent from OpCon.

## Before you begin

Before you start the upgrade, gather:

- **Local Administrator** sign-in rights for the Windows user running the installer.
- **The OpCon installation media** containing the **SMA OpCon Agent for SQL Install**.exe file.
- **The "Log on as" credentials** for every agent instance on the machine.

:::caution Capture domain user passwords first
Before proceeding, check the services settings for "Log on as" in the service's properties. If any of the services log on as a domain user with password, make sure you have the password before proceeding with the upgrade. If multiple instances of the agent are installed on the machine, be sure to note this information for every instance.
:::

## Check for running jobs

The agent must be idle before you stop the service — otherwise running jobs will not have a chance to report their final status back to OpCon.

To verify no jobs are running before the upgrade, complete the following steps:

1. Double-click **Machines Status** under the **Operation** topic. The **Machines Status** screen displays.
2. Confirm the number of running jobs is **0** for the Windows machine.
3. If running jobs exist, contact the OpCon administrator about whether to:
   - Wait for the processes to end, **- or -**
   - **Kill** the processes on the Windows side.
4. Repeat step 3 until the **Machines Status** screen indicates **Running Jobs** of `0/<max>`.
5. Right-click the machine and select **Stop Communication** from the menu.

## Stop the service

To stop the service, complete the following steps:

1. On the Application server, use the menu path: **Start \> Administrative Tools \> Server Manager**. The **Administrative Tools** window displays.
2. Expand (**+**) the **Configuration** option.
3. Select **Services**. The **Services** window displays.
4. In the **Services** list, select **SMA OpCon Agent for SQL**.
5. Use the menu path: **Action \> Stop**.
6. Confirm the *Service's* **Status** is **Stopped**.

## Install the SQL Agent upgrade

The installer is a wizard with four configuration screens (output path, ports, setup type) followed by a final install step. Default values are safe for most environments — change them only if you have a reason to.

### Start the installer in upgrade mode

To start the installer in upgrade mode, complete the following steps:

1. Sign in to the machine as a Windows user with Local Administrative Rights.
2. Exit all running applications on the desktop, including any OpCon applications.
3. Double-click the **SMA OpCon Agent for SQL Install**.exe file in the OpCon installation media. The **Multi-instance Maintenance** screen displays.
4. Select the **Maintain or upgrade an existing instance** option.
5. Select the instance you want to upgrade from the table below the options.
6. Select **Next**. The **Welcome** screen displays.
7. Select **Next**. The **Program Maintenance** screen displays.
8. Select **Modify** to upgrade the agent.

### Configure paths and ports

To configure the installation paths and ports, complete the following steps:

1. Select **Next**. The **Select Path for Output Files** screen displays.
2. Change the directory for the output files or retain the default location.
3. Select **Next**. The **Configure Ports** screen displays.
4. Change the port values or retain the default values.

### Run the upgrade and restore service credentials

To run the upgrade, complete the following steps:

1. Select **Next**. The **Setup Type** screen displays.
2. Select the Setup Type: **Complete** or **Custom**.
    - For a Custom install, the **Custom Setup** screen displays.
3. Select **Next**. The **Ready to Modify the Program** screen displays.
4. Select **Install**.
5. Select **Finish** on the **InstallShield Wizard Completed** screen.
6. Reconfigure the service "Log on as" settings using the credentials you captured in *Before you begin*.

:::note Troubleshooting
The installer writes a log file named **SMA_OpCon_SQL_Agent_Install.log** to the Windows directory. Consult this file if you suspect any installation problems.
:::

## Restart the service

To restart the service, complete the following steps:

1. On the Application server, use the menu path: **Start \> Administrative Tools \> Server Manager**. The **Administrative Tools** window displays.
2. Expand (**+**) the **Configuration** option.
3. Select **Services**. The **Services** window displays.
4. In the **Services** list, select **SMA OpCon Agent for SQL**.
5. Use the menu path: **Action \> Start**.
6. Confirm the *Service's* **Status** is **Started**.

## Start communication with the agent

To resume communication between OpCon and the upgraded agent, complete the following steps:

1. Double-click **Machines Status** under the **Operation** topic. The **Machines Status** screen displays.
2. Right-click the machine and select **Start Communication** from the menu.

## Related topics

- [New installation](./new-installation.md) — First-time installation procedure.
- [Manage the SQL Agent service](../administration/manage-lsam.md) — Start and stop the agent from the Windows Service Control Manager.
- [Service configuration options](../administration/service-configuration.md) — Detailed guidance on running the service as a Local System Account or Domain User.
- [Release notes](../release-notes.md) — What changed in the version you are upgrading to.
