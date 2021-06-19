---
sidebar_label: 'Upgrade'
---

# Upgrade installation

To upgrade a SQL Agent on a Windows system, complete the procedures in this section.

:::caution
Before proceeding, check the services settings for "Log on as" in the service's properties. If any of the services log on as a domain user with password, make sure you have the password before proceeding with the upgrade. If multiple instances of the agent are installed on the machine, be sure to note this information for every instance.
:::

## Check for Running Jobs

1. Double-click on **Machines Status** under the **Operation** topic. The **Machines Status** screen displays.
2. Confirm the number of running jobs is **0** for the Windows machine.
3. If running jobs exists, contact the OpCon administrator if you should:
   - Wait for the processes to end **- or -**
   - **Kill** the processes on the Windows side.
4. Repeat step 3 until the **Machines Status** screen indicates **Running Jobs** of **0/<max\>**.
5. Right-click the machine and select **Stop Communication** from the menu.

## Stop the Service

1. Use the following menu path on the Application server: **Start \> Administrative Tools \> Server Manager**. The **Administrative Tools** window displays.
2. Expand (**+**) the **Configuration** option.
3. Click the **Services** icon. The **Services** window displays.
4. In the **Services** list, select **SMA OpCon Agent for SQL**.
5. Use menu path: **Action \> Stop**.
6. Confirm the *Service's* **Status** is **Stopped**.

## Install the SQL Agent

1. On the machine requiring the SQL Agent, log in as a Windows user with Local Administrative Rights.
2. Exit all running applications on the desktop (including OpCon applications).
3. Double-click the **SMA OpCon Agent for SQL Install**.exe in the OpCon installation media. The **Multi-instance Maintenance** screen displays.
4. Select the **Maintain or upgrade an existing instance** radio button.
5. Select the instance you want to upgrade from the table below the radio buttons.
6. Click **Next**. The **Welcome** screen displays.
7. Click **Next**. The **Program Maintenance** screen displays.
8. Select **Modify** to upgrade the agent.
9. Click **Next**. The **Select Path for Output Files** screen displays.
10. Change the directory for the output files or retain the default location.
11. Click **Next**. The **Configure Ports** screen displays.
12. Change the values or retain the default values.
13. Click Next. The **Setup Type** screen displays.
14. Select the Setup Type: **Complete** or **Custom**.
    - For a Custom install, the **Custom Setup** screen displays.
15. Click **Next**. The **Ready to Modify the Program** screen displays.
16. Click **Install**.
17. Click **Finish** on the **InstallShield Wizard Completed** screen.
18. Reconfigure the service "Log on as" settings.

:::note
The installation writes the log file named SMA_OpCon_SQL \_Agent_Install.log to the Windows directory. Consult this file if any installation problems are suspected.
:::

## Restart the Service

1. Use the following menu path on the Application server: **Start \> Administrative Tools \> Server Manager**. The **Administrative Tools** window displays.
2. Expand (**+**) the **Configuration** option.
3. Click the **Services** icon. The **Services** window displays.
4. In the **Services** list, select **SMA OpCon Agent for SQL**.
5. Use menu path: **Action \> Start**.
6. Confirm the *Service's* **Status** is **Started**.

## Start Communication with the Agent

1. Double-click on **Machines Status** under the **Operation** topic. The **Machines Status** screen displays.
2. Right-click the machine and select **Start Communication** from the menu.
