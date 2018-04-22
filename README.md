# CyberSec

> Cybersecurity capstone project
> This is a simple messaging system that allows authentication and sending messages to other users using their email
> you need to logout to access the dbdump
This application is deployed on
https://cybersecuritycapstone.firebaseapp.com/login

## Project Description

### task
Your task for the next few weeks is to build a simple, secure messaging system. Users should be able to post messages to other user, and read messages sent to them. The system must be secure so no unauthorized people should be able to read a message.

### Web Server Details
Your messaging system must be web-based. You can either run your code on your own server OR provide a package that will run a local server on the user’s machine. In either case, you must also provide your source code.

### Requirements
All the functionality outlined in the interface details must be accessible over an http connection with HTML-based web pages. You cannot embed an applet, servlet, flash, or other application in a web page to serve as this project.

### Access
If you implement this on your own server, you should provide the URL of the home page.

If you provide a local repository, it must meet the following requirements.

• An evaluator can download an archive that contains all the necessary libraries and code.

• An automated system will invoke make in the build directory of your submission.

• make must function without internet connectivity and it must return within ten minutes.

• Evaluators should not require any libraries or installation on their own machines. All necessary libraries must be included in your archive.

• Your software must be actually built, through initiation of make, from source (not including libraries you might use). Submitting binaries (only) is not acceptable.

make should produce an executable file that can be launched to run the server. Your server must be accessible through any web browser on the machine where the server is running at http://localhost:5813

### Functionality
Interface
The user interface is the way users and evaluators will interact with your messaging system. You should think carefully about the usability of the interface, particularly with respect to the security elements.

It must include the following pages:

• index.html, the default home page, which should have links to “Register” or “Log in”

• Registration page where users register for the system. You can design your own process. For example, you may have users provide all their information, including a username and password, up front or you can create a multi-step registration process with email verification, etc. You can use whatever type of password / authentication system you like. After successfully registering, users should be taken to the login page.

• Login page, where users authenticate. If a user does not remember their login information, there should be some way to reset it (use whatever you like – email, text, security questions, etc.) After successfully authenticating, they should be taken to their inbox.

• Inbox, where users can see messages sent to them. You can display this however you like – clickable with previews like email, a long running list of messages similar to the Twitter newsfeed, or anything else you like. The requirements are simply that the user can see new messages sent to them. You can decide how you want to manage message storage after they have been read the first time.

• Send message page allows users to send messages to other users. One user should be able to address a message to another by username.

You are free to create other pages as you see fit.

Message Storage
You may store your message data anyway you like. Use flat files, databases, etc. However, you must encrypt the data before you store it. You can use whatever encryption mechanism you like.

Evaluators should be able to dump your database and view the contents. This should be accessible at http://example.com/YOUR HOME DIRECTORY/dbdump if you are running on your own server or http://localhost:5813/dbdump if you are providing a local server. Dump the data as plain text files using whatever formatting you like. If the data is encrypted, you can dump it as encrypted. If there are binaries, use whatever plain-text export functionality your database has. The goal here is for people to see how your data is stored, not to review every entry in the database.

Rules
• Do not obfuscate your code

• Teams must do their own work and not share solutions with others.


## List of used libraries

### vue-js-bootstrap
this library is used to add the bootstrap library to the project

### vue-js-firebase
this library has the basic capability of authentication, storing realtime database on firebase

### vue-js-vuefire
this is a plugin that makes vue-js treat firebase ref objects as native objects

### vue-js-autocomplete
this is a plugin that display an autocomplete list (used when displaying the email to send to)


## Images snapshots

> Login

![alt text](https://image.ibb.co/bOjoEH/1.png)

> Sign up

![alt text](https://image.ibb.co/ccKoEH/2.png)

> Profile

![alt text](https://image.ibb.co/jEBqTc/3.png)

> Message sample

![alt text](https://image.ibb.co/cR061x/4.png)

> Database dump

![alt text](https://image.ibb.co/bQ3gZH/5.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# please note there is a make file in the project that would automoate the tasks
make build
make run
```

## Author And Project Management
Elias Al Homsi

Elias Al Homsi Software Lead total hours spend on the project is 25 hours per week Leadership roles: hold meetings and coordinates integration of new developed features. Most of the technical tasks and server/firebase/pipeline/automation/bashcripting. Created a stub for testing the controller using the service. Wrote the 90% of the backend, and Webfrontend.


Thank you,
Sincerely,