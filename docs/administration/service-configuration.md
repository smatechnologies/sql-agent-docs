# Service Configuration Options

There are two configuration options for the SQL Agent service logon:

1. Run the Service as the Local System Account.
2. Run the Service as a Windows Domain User

Selection of the logon type affects the security, network access, and performance of the SQL Agent.

SMA Technologies recommends running the agent as Local System because it is the only way for the agent to have all of the system level privileges needed. Access for UNC paths and shared drives must be managed through the user account running the job and through startup scripts defined in the SQLAgent.ini file. In this mode, be sure to select a Windows User account from your network for the Windows User Id in the Job Definitions in the Enterprise Manager.

For information on configuring mapped network drives in the SQLAgent.ini file, refer to [Using the InitializationScript and TerminationScript](scripts). For information on entering a Windows User, refer to [Adding a Batch User for SQL](https://help.smatechnologies.com/opcon/core/rolling/Files/UI/Enterprise-Manager/Adding%20Batch%20Users.htm#Adding2) in the **Enterprise Manager** online help.

## Run the SQL Agent as the Local System Account

The Local System Account must have the following advanced Windows privileges:

- Act as part of the operating system
- Adjust memory quotas for a process
- Log on as a service
- Log on as a batch job
- Replace a process-level token

### Configure the SQL Agent to Run as a Local System Account

1. Use menu path: **Start \> Control Panel**.
2. Double-click the **Administrative Tools** icon.
3. Double-click the **Services** icon to run the Service Control Manager.
4. Double-click the agent in the **Services** list.
5. If not selected already, select **Automatic (Delayed Start)** from the **Startup Type** drop-down list.
6. Click the **Log On** tab.
7. Click **Local System account** radio button.
8. Click **OK**.
9. **Close ☒** the **Services** window.

## Run the SQL Agent as a Windows Domain User

:::tip
SMA Technologies strongly recommends running as Local System Account.
:::

The domain user must have the following:

- Membership in the local Administrators group
- The following advanced Windows privileges:
  - Act as part of the operating system
  - Adjust memory quotas for a process
  - Log on as a service
  - Log on as a batch job
  - Replace a process-level token

:::caution
This user must have logged on to this machine before trying to start the service. The initial login creates a Windows user profile required by the SQL Agent running as a Domain User.
:::

Please refer to the Domain Administrator about acquiring the appropriate privileges.

### Add Advanced Windows Privileges

1. Use menu path: **Start \> Control Panel**.
2. Double-click the **Administrative Tools** icon.
3. Double-click the **Local Security Policy** icon to run the Local security settings editor.
4. Double-click the **Local Policies** under **Security Settings** and select **User Rights Assignment**.
5. Double-click on each privilege from the list above and click on **Add User Or Group** button.
6. In the **Select Users Or Groups** dialog box, click on **Locations** and select the machine or domain depending upon whether adding a Local user or a Domain user.
7. In the object name text box, enter the name of the user. For adding Local System Account choose the current machine. In the object name text box, enter SYSTEM.
8. Repeat steps 6 and 7 for each privilege.

### Configure the SQL Agent to Run as a Domain User

1. Use menu path: **Start \> Control Panel**.
2. Double-click the **Administrative Tools** icon.
3. Double-click the **Services** icon to run the Service Control Manager.
4. Double-click the agent in the **Services** list.
5. If not selected already, select **Automatic (Delayed Start)** from the **Startup Type** drop-down list.
6. Click the **Log On** tab.
7. Click **This account** radio button.
8. Click **Browse** to find the Domain User.
9. Click the Domain User.
10. Click **OK**.
11. Enter the password in the **Password** field.
12. Re-enter the password in the **Confirm Password** field.
13. Click **OK**.
14. **Close ☒** the **Services** window.
