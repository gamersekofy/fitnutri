Hello there, this file will teach everything you need to know to be able to access our server and database!

First off, somewhere in the page will be our PairKey to be able to access the server. Please download the file and MAKE SURE the file is located in downloads directory and not in a different folder, or else you will have issues.

once you've downloaded the PairKey, please go to your terminal.

once in the terminal, please CD into the directory where the PairKey is located. To do that, please use the command: cd Directory (Directory should be the name of the directory as to where the PairKey is downloaded into).

Once you are in the proper Directory, please use this command to access the server: ssh -i CSC648PairKey.pem ubuntu@ec2-54-151-86-174.us-west-1.compute.amazonaws.com

Once you input the command, you should be redirected to our server. 

If you'd like to access our webpage files, please use this command to redirect you there: cd /var/www/html

Once in there, you will be located in the directory of where all the files for the webpage are. To check the teams webpage, please us this command to enter the directory: cd csc648-848-05-sw-engineering-su24-T03

Once inside the directory, you can use this command to list all the files currently in the directory: ls -asl

You should see all the files for the team.

Shifting over to our database, we've set it up so you can use mysql workbench and not the terminal. Below I will provide the needed information to successfully log into our database.

Database access:

Connection Method: Standard TCP/IP Over SSH

Connection Name: Can be your choosing, only shows on your end.

SSH hostname: ec2-54-151-86-174.us-west-1.compute.amazonaws.com

SSH Username: ubuntu

SSH Password: do not touch

SSH Key File: please use the pair key for this one (will be attached in the page).

MySql Hostname: 127.0.0.1

Mysql Server Port: 3306

Username : Team3Data

Password: Team3StrongPassword!

This is our About Us Website:
http://54.151.86.174/about

NOTE: For some reason it would not connect when we did test connection, but if we went to the homepage and clicked the connection, it would prompt us for the password, and would connect right after*).

And that is it! You should have full access to our server and database!
