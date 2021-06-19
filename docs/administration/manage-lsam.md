# Managing the LSAM

To control the SQL Agent status, use the Windows Service Control Manager. The procedures below explain the process of starting and stopping the SQL Agent.

## Start the Agent

1. Use menu path: **Start \> Control Panel**.
2. Double-click the **Administrative Tools** icon.
3. Double-click the **Services** icon to run the Service Control Manager.
4. Double-click **SMA OpCon Agent for SQL** in the **Services** list.
5. Confirm that the *Service\'s* **Startup Type** is set to **Automatic (Delayed Start)**. If it is not, change the Startup type with the following steps:
   1. Select **Automatic (Delayed Start)** from the **Startup Type** drop-down list box.
   2. Click **OK**.
6. Use menu path: **Action \> Start**.
7. Confirm the *Service\'s* **Status** is **Started**.
8. **Close ☒** the **Services** window.

## Stop the Agent

1. Use menu path: **Start \> Control Panel**.
2. Double-click the **Administrative Tools** icon.
3. Double-click the **Services** icon to run the Service Control Manager.
4. Click **SMA OpCon Agent for SQL** in the **Services** list.
5. Use menu path: **Action \> Stop**.
6. Confirm the *agent's* **Status** is **Stopped**.
7. **Close ☒** the **Services** window.
