---
sidebar_label: 'Service configuration'
title: Service configuration options
description: "Configuration options for the SQL Agent service logon, including running as the Local System Account or as a Windows Domain User."
tags:
  - Procedural
  - System Administrator
  - Administration
---

# Service configuration options

## What is it?

The SQL Agent service can run under two different account types, and the choice you make affects the agent's security boundary, network access, and performance:

- **Local System Account** *(recommended)* — The agent has all of the system-level privileges it needs without extra configuration. Manage access to UNC paths and shared drives through the user account that runs the job and through startup scripts defined in the SQLAgent.ini file.
- **Windows Domain User** — Choose this only when site policy or specific network access requirements rule out Local System.

In Local System mode, select a Windows User account from your network for the Windows User ID in the job definition in Solution Manager.

For information on configuring mapped network drives in the SQLAgent.ini file, see [Using the InitializationScript and TerminationScript](scripts). For information on adding a batch user for SQL, refer to [Adding a Batch User for SQL](https://help.smatechnologies.com/opcon/core/rolling/Files/UI/Enterprise-Manager/Adding%20Batch%20Users.htm#Adding2) in the **OpCon** online help.

## Run the SQL Agent as the Local System Account

The Local System Account must have the following advanced Windows privileges:

- Act as part of the operating system
- Adjust memory quotas for a process
- Log on as a service
- Log on as a batch job
- Replace a process-level token

### Configure the SQL Agent to run as a Local System Account

To configure the SQL Agent to run as a Local System Account, complete the following steps:

1. Go to **Start** > **Control Panel** > **Administrative Tools** > **Services**.
2. Select the SQL Agent service from the **Services** list. The **Properties** dialog displays.
3. If not selected already, select **Automatic (Delayed Start)** from the **Startup Type** list.
4. Select the **Log On** tab.
5. Select the **Local System account** option.
6. Select **OK**.
7. Close the **Services** window.

## Run the SQL Agent as a Windows Domain User

:::tip Local System is preferred
SMA Technologies strongly recommends running the agent as the Local System Account. Use a Domain User only when your environment requires it.
:::

The domain user must have:

- **Membership in the local Administrators group**.
- **The following advanced Windows privileges:**
  - Act as part of the operating system
  - Adjust memory quotas for a process
  - Log on as a service
  - Log on as a batch job
  - Replace a process-level token

:::caution First-time login required
The domain user must have signed in to this machine at least once before you start the service. The initial sign-in creates the Windows user profile that the SQL Agent needs in order to run as a Domain User.
:::

Contact your domain administrator to acquire the required privileges.

### Add advanced Windows privileges

To add the required advanced Windows privileges, complete the following steps:

1. Go to **Start** > **Control Panel** > **Administrative Tools** > **Local Security Policy**.
2. Under **Security Settings**, select **Local Policies** > **User Rights Assignment**.
3. For each privilege in the list above, select the privilege and select **Add User Or Group**.
4. In the **Select Users Or Groups** dialog, select **Locations** and choose the machine or domain depending on whether you are adding a local user or a domain user.
5. In the object name field, enter the name of the user. To add the Local System Account, choose the current machine and enter `SYSTEM`.
6. Repeat steps 3 through 5 for each privilege.

### Configure the SQL Agent to run as a Domain User

To configure the SQL Agent to run as a Domain User, complete the following steps:

1. Go to **Start** > **Control Panel** > **Administrative Tools** > **Services**.
2. Select the SQL Agent service from the **Services** list. The **Properties** dialog displays.
3. If not selected already, select **Automatic (Delayed Start)** from the **Startup Type** list.
4. Select the **Log On** tab.
5. Select the **This account** option.
6. Select **Browse** to find the domain user.
7. Select the domain user.
8. Select **OK**.
9. In the **Password** field, enter the password.
10. In the **Confirm Password** field, re-enter the password.
11. Select **OK**.
12. Close the **Services** window.

## Related topics

- [Manage the SQL Agent service](./manage-agent.md) — Start and stop the service after changing the logon account.
- [InitializationScript and TerminationScript](./scripts.md) — Map network drives the agent needs in either logon mode.
- [SQLAgent.ini file configuration](./configuration-file.md)
