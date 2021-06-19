# SQL Job Actions

For more information on SQL Agent job fields, refer to [SQL Job Details](https://help.smatechnologies.com/opcon/core/rolling/Files/Concepts/SQL%20Job%20Details.htm) in the **Concepts** online help.

## MS SQL DTExec

For more information on the MS SQL DTExec job type, refer to [Fields for MS SQL DTExec](https://help.smatechnologies.com/opcon/core/rolling/Files/Concepts/SQL-Job-Details.md#Fields_for_MS_SQL_DTExec) in the **Concepts** online help.

The following is an example of how to define a MS SQL DTExec job with FILE as the Connection type:

![Defining MS SQL DTExec with FILE Connection](../static/img/Defining-MS-SQL-DTExec-with-FILE-Connection.png "Defining MS SQL DTExec with FILE Connection")

The following is an example of how to define a MS SQL DTExec job with SQL as the Connection type:

![Defining MS SQL DTExec with SQL Connection](../static/img/Defining-MS-SQL-DTExec-with-SQL-Connection.png "Defining MS SQL DTExec with SQL Connection")

## MS SQL Job

For more information on the MS SQL Job type, refer to [Fields for MS SQL Job](https://help.smatechnologies.com/opcon/core/rolling/Files/Concepts/SQL-Job-Details.md#Fields_for_MS_SQL_Job) in the **Concepts** online help.

The following is an example of how to start a MS SQL Server Agent job and monitor it until completion:

![Defining MS SQL Job to Monitor until Completion](../static/img/Defining-MS-SQL-Job-to-Monitor-until-Completion.png "Defining MS SQL Job to Monitor until Completion")

The following is an example of a MS SQL Server Agent job to monitor only when the MS SQL Server Agent job is running:

![Defining MS SQL Job to Monitor while Job Runs](../static/img/Defining-MS-SQL-Job-to-Monitor-while-Job-Runs.png "Defining MS SQL Job to Monitor while Job Runs")

The following is an example of how to start a MS SQL Server Agent job and monitor it until the specified run time:

![Defining MS SQL Job to Monitor with Specified End Time](../static/img/Defining-MS-SQL-Job-to-Monitor-with-Specified-End-Time.png "Defining MS SQL Job to Monitor with Specified End Time")

The following is an example of how to start and monitor a MS SQL Server Agent job with a password overwrite option:

![Defining MS SQL Job to Monitor with Password Overwrite Option](../static/img/Defining-MS-SQL-Job-to-Monitor-with-Password-Overwrite-Option.png "Defining MS SQL Job to Monitor with Password Overwrite Option")

## MS SQL Script

For more information on the MS SQL Script job type, refer to [Fields for MS SQL Script](https://help.smatechnologies.com/opcon/core/rolling/Files/Concepts/SQL-Job-Details.md#Fields_for_MS_SQL_Script) in the **Concepts** online help.

The following is an example of how to define a MS SQL Script job with In Line Script job details:

![Defining MS SQL Script with In Line Script](../static/img/Defining-MS-SQL-Script-with-In-Line-Script.png "Defining MS SQL Script with In Line Script")

The following is an example of how to define a MS SQL Script job with In Line Script and Environment Variables:

![Defining MS SQL Script with Environment Variables](../static/img/Defining-MS-SQL-Script-with-Environment-Variables.png "Defining MS SQL Script with Environment Variables")

The following is an example of how to define a MS SQL Script job with In Line Script with Environment Variables:

![Defining MS SQL Script with In Line Script and Environment Variables](../static/img/Defining-MS-SQL-Script-with-In-Line-Script-and-Environment-Variables.png "Defining MS SQL Script with In Line Script and Environment Variables")

The following is an example of how to define a MS SQL Script job with a job output file and a password overwrite option:

![Defining MS SQL Script with Output File Path and Password Overwrite Option](../static/img/Defining-MS-SQL-Script-with-Output-File-Path-and-Password-Overwrite-Option.png "Defining MS SQL Script with Output File Path and Password Overwrite Option")

The following is an example of how to define a MS SQL Script job with Windows Authentication and Script File:

![Defining MS SQL Script with Windows Authentication and Script File](../static/img/Defining-MS-SQL-Script-with-Windows-Authentication-and-Script-File.png "Defining MS SQL Script with Windows Authentication and Script File")

## MySQL

For more information on the MySQL job type, refer to [Fields for MySQL](https://help.smatechnologies.com/opcon/core/rolling/Files/Concepts/SQL-Job-Details.md#Fields_for_MySQL) in the **Concepts** online help.

The following is an example of a MySQL job with a default port:

![Defining MySQL with Default Port](../static/img/Defining-MySQL-with-Default-Port.png "Defining MySQL with Default Port")

The following is an example of a MySQL job with a password overwrite option:

![Defining MySQL with Password Overwrite Option](../static/img/Defining-MySQL-with-Password-Overwrite-Option.png "Defining MySQL with Password Overwrite Option")

The following is an example of a MySQL job details to use for Environment Variables:

Script File Path: C:\\SQLScripts\\mysql_insert_params.sql

"Mysql_insert_params.sql" script details:

```sql
Insert into address (Lastname, Firstname, Address) values (@LN, @FN, @ADS);
```

![Defining MySQL with Environment Variables](../static/img/Defining-MySQL-with-Environment-Variables.png "Defining MySQL with Environment Variables")

## Oracle

For more information on the [Oracle]{.GeneralAgentName(JobType5)} job type, refer to [Fields for Oracle](https://help.smatechnologies.com/opcon/core/rolling/Files/Concepts/SQL-Job-Details.md#Fields_for_Oracle) in the **Concepts** online help.

The following is an example of an [Oracle]{.GeneralAgentName(JobType5)} job with an output file path and a password overwrite option:

![Defining Oracle with Output File Path and Password Overwrite Option](../static/img/Defining-Oracle-with-Output-File-Path-and-Password-Overwrite-Option.png "Defining Oracle with Output File Path and Password Overwrite Option")

The following is an example of an [Oracle]{.GeneralAgentName(JobType5)} job with parameters:

![Defining Oracle with Parameters](../static/img/Defining-Oracle-with-Parameters.png "Defining Oracle with Parameters")

The following is an example of an [Oracle]{.GeneralAgentName(JobType5)} job with encrypted parameters:

![Defining Oracle with Encrypted Parameters](../static/img/Defining-Oracle-with-Encrypted-Parameters.png "Defining Oracle with Encrypted Parameters")

The following is an example of an [Oracle]{.GeneralAgentName(JobType5)} job with a Connection ID:

![Defining Oracle with Connection ID](../static/img/Defining-Oracle-with-Connection-ID.png "Defining Oracle with Connection ID")

## Other DB

For more information on the [Other DB]{.GeneralAgentName(JobType6)} job type, refer to [Fields for Other DB](https://help.smatechnologies.com/opcon/core/rolling/Files/Concepts/SQL-Job-Details.md#Fields_for_Other_DB) in the **Concepts** online help.

The following two examples are of an Other DB job with DSN Name and In Line Script with Environment Variables:

![Defining Other DB using DSN Name with In Line Script and Environment Variables 1](../static/img/Defining-Other-DB-using-DSN-Name-with-In-Line-Script-and-Environment-Variables-1.png "Defining Other DB using DSN Name with In Line Script and Environment Variables 1")

Defining Other DB using DSN Name with In Line Script and Environment Variables 2

![Defining Other DB using DSN Name with In Line Script and Environment Variables 2](../static/img/Defining-Other-DB-using-DSN-Name-with-In-Line-Script-and-Environment-Variables-2.png "Defining Other DB using DSN Name with In Line Script and Environment Variables 2")

The following is an example of an Other DB job with DSN Name with a password overwrite option:

![Defining Other DB using DSN Name with Overwrite Password Option](../static/img/Defining-Other-DB-using-DSN-Name-with-Overwrite-Password-Option.png "Defining Other DB using DSN Name with Overwrite Password Option")

The following is an example of an Other DB job with an OleDB Connection String:

![Defining Other DB using OleDB Connection String with In Line Script](../static/img/Defining-Other-DB-using-OleDB-Connection-String-with-In-Line-Script.png "Defining Other DB using OleDB Connection String with In Line Script")

The following two examples are of an Other DB job with an OleDB Connection String with Script File and Environment Variables:

Insert-with-params.sql script file details:

```sql
declare @LN varchar(25), @FN varchar(25), @Ads varchar(50), @zip int;

set @LN = $(LN);

set @FN = $(FN);

set @Ads = $(Ads);

set @zip = $(zip);

select * from address where Lastname = @LN;

insert into address values(@LN,@FN,@Ads,@zip);
```

![Defining Other DB using OleDB Connection String with Script File](../static/img/Defining-Other-DB-using-OleDB-Connection-String-with-Script-File.png "Defining Other DB using OleDB Connection String with Script File")

Defining Other DB using OleDB Connection String with Environment Variables

![Defining Other DB using OleDB Connection String with Environment Variables](../static/img/Defining-Other-DB-using-OleDB-Connection-String-with-Environment-Variables.png "Defining Other DB using OleDB Connection String with Environment Variables")

The following is an example of an Other DB job with an ODBC Connection String with In Line Script:

![Defining Other DB using ODBC Connection String with In Line Script](../static/img/Defining-Other-DB-using-ODBC-Connection-String-with-In-Line-Script.png "Defining Other DB using ODBC Connection String with In Line Script")

The following is an example of an Other DB job with an ODBC Connection String with In Line Script with Environment Variables:

![Defining Other DB using ODBC Connection String with In Line Script and Environment Variables](../static/img/Defining-Other-DB-using-ODBC-Connection-String-with-In-Line-Script-and-Environment-Variables.png "Defining Other DB using ODBC Connection String with In Line Script and Environment Variables")
