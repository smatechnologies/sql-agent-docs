# New installation

If the SQL Agent has not been installed on the machine, then follow these procedures for the first
installation.

## Prerequisites
1. The machine will need to have either the management studio for thier database installed, or that databases command line program.  

:::tip Example
MSSQL would need either SQL Server Management Studio or SQLCMD.exe installed.
Oracle would need SQLcl.


## Install the SQL Agent

1. Log in to the Windows machine as a Local Administrator.
2. Exit all running applications on the desktop (including OpCon applications).
3. Double-click the **SMA OpCon Agent for SQL Install**.exe in the OpCon installation media. The *language* screen displays.
4. Select the desired language for the installation screens and click **OK**. The **Welcome** screen displays.
5. Click **Next**. The **Destination Folder** screen displays.
6. Change the target location for the installation or retain the default location.
7. Click **Next**. The **Configure Instance Name** screen displays.
8. *(Optional)* Enter a unique instance name by which to identify the SQL Agent.
9. Click **Next**. The **Select Path for File Migration to ProgramData** screen displays.
10. Click **Skip**. The **Select Path for Output Files** screen displays.
11. Change the directory for the output files or retain the default location.
12. Click **Next**. The **Configure Ports** screen displays.
13. Change the values or retain the default values.
14. Click **Next**. The **Setup Type** screen displays.
15. Select the Setup Type: **Complete** or **Custom**.
    - For a Custom install, the **Custom Setup** screen displays.
16. Click **Next**. The **Ready to Install the Program** screen displays.
17. Click **Install**.
18. Click **Finish** on the **InstallShield Wizard Completed** screen.

:::note
The installation writes the log file named SMA_OpCon_SQL_Agent_Install.log to the Windows directory. Consult this file if any installation problems are suspected.
:::

## Service startup setup

By default, the SMA OpCon Agent for SQL service is set for an Automatic (Delayed Start) startup and for running under the local system account. If you want to change the default settings, perform the procedure in this section.

:::caution
SMA Technologies recommends leaving the SMA OpCon Agent for SQL service set to Automatic (Delayed Start) to avoid potential issues at startup time while other services and programs start up.
:::

### Set up service startup

1. Use the following menu path on the Application server: **Start \> Control Panel \> Administrative Tools**.
2. Click the **Administrative Tools** icon. The **Administrative Tools** window displays.
3. Double-click the **Services** icon. The **Services** window displays.
4. Double-click the newly installed **SMA OpCon Agent for SQL** service. The **SMA OpCon Agent for SQL Properties** dialog displays with the **General** tab in focus.
5. Select the **Service Startup type**:
    - **Automatic (Delayed Start)**
    - **Automatic**
    - **Manual**
    - **Disabled**
6. Click on the **Log On** tab.
7. Select one of the following two **Log on as** options for the service:
    - **Local System account**: If the service will run as the local system account, select this option to delete the default Domain User displayed in the text box.
    - **This account**: If the service will run as a user because it needs access to network directories, enter a *Domain User* in the text box, enter the *Password* for the Domain User, and re-enter the *Password* to confirm.
8. Click the **OK** button.

## Machine creation

When a SQL Agent is installed, create a machine record with a unique Machine name and Socket number in OpCon. If the machine was previously defined in OpCon, you may skip this procedure.

### Create the Machine in OpCon

1. Use menu path: **Start \> Programs \> OpConxps \> [Enterprise Manager]{.GeneralDesktopUI}**. The **OpCon Login** screen displays.
2. Enter a *case-sensitive User Login ID* (e.g., ocadm) in the **Username** text box.
3. Enter the *case-sensitive password for the user* in the **Password** text box.
4. Select the **profile** in the **Profile** drop-down list.
5. Click the **Login** button to log in to the [Enterprise Manager]{.GeneralDesktopUI}.
6. Double-click on **Machines** under the **Administration** topic in the Navigation Panel. The **Machines** screen displays.
7. Click the **Add** button on the **Machines** toolbar.
8. Enter the *official host name or alias based on the agent machine* in the **Name** text box.
9. Enter *any relevant documentation* for this agent machine in the **Documentation** text box.
10. Select **SQL** in the **Machine Type** drop-down list.
11. Set the *value* to a unique number (e.g., 21100) in the **Socket Number** box. The socket number entered here must match the socket entered in the agent configuration file.
12. *(Optional)* Enter the *IPv4 or IPv6 address* in the **IP Address** field.
13. *(Optional)* Enter the *name* in the **Fully Qualified Domain Name** field.
14. Click the **Save** button on the **Machines** toolbar.
15. *(Optional)* Click **Open Advanced Settings Panel** and review and update as necessary:
    - Click the Advanced Options save button to store all changes.
16. *(Optional)* Start communication with the machine by:
    - Right-clicking over the graphic to enable the menu in the **Communication Status** frame.
    - Selecting **Start Communication** from the menu.
17. Click on the **x** to the right of the **Machines** tab to close the **Machines** screen.
