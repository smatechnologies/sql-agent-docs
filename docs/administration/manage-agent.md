---
sidebar_label: 'Manage the agent'
title: Manage the SQL Agent service
description: "Procedures for starting and stopping the SQL Agent service from the Windows Service Control Manager."
tags:
  - Procedural
  - System Administrator
  - Administration
---

# Manage the SQL Agent service

## What is it?

The SQL Agent runs as a Windows service. Use the Windows **Service Control Manager** to start and stop the service whenever you need to:

- Apply changes to non-dynamic settings in SQLAgent.ini.
- Recover from a hung agent.
- Pause the agent for maintenance.
- Confirm the service is up after a host reboot.

The procedures below walk through both directions.

## Start the agent

Start the agent after a stop, after a reboot if the service did not auto-start, or after changing non-dynamic settings.

To start the SQL Agent, complete the following steps:

1. Go to **Start** > **Control Panel** > **Administrative Tools** > **Services**.
2. Select **SMA OpCon Agent for SQL** in the **Services** list. The **SMA OpCon Agent for SQL Properties** dialog displays.
3. Confirm that the **Startup Type** is set to **Automatic (Delayed Start)**. If it is not, complete the following steps:
   1. Select **Automatic (Delayed Start)** from the **Startup Type** list.
   2. Select **OK**.
4. Go to **Action** and select **Start**.
5. Confirm the **Status** is **Started**.
6. Close the **Services** window.

:::tip Why Automatic (Delayed Start)?
Delayed Start lets other system services and dependencies finish initializing before the SQL Agent comes up, which avoids a class of startup-timing failures. SMA Technologies recommends this setting.
:::

## Stop the agent

Stop the agent before applying upgrades, changing static settings, or doing maintenance that requires the service to be down.

:::caution Drain running jobs first
Stopping the service while jobs are running can leave those jobs without final status reporting. Confirm running jobs are at **0** before you stop the service. See the *Check for running jobs* procedure in [Upgrade installation](../installation/upgrade-installation.md#check-for-running-jobs) for the full drain procedure.
:::

To stop the SQL Agent, complete the following steps:

1. Go to **Start** > **Control Panel** > **Administrative Tools** > **Services**.
2. Select **SMA OpCon Agent for SQL** in the **Services** list.
3. Go to **Action** and select **Stop**.
4. Confirm the **Status** is **Stopped**.
5. Close the **Services** window.

## Related topics

- [Service configuration options](./service-configuration.md) — Configure the account the service runs as.
- [SQLAgent.ini file configuration](./configuration-file.md) — Settings that require a service restart.
- [Upgrade installation](../installation/upgrade-installation.md) — Full upgrade flow including job draining.
