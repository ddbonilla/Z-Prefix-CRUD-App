# Z-Prefix-CRUD-App

## Table of Contents
1. [Usage](#usage)
2. [Installation](#installation)
3. [Features](#features)


## Usage
The Basic Organizational Worksheet Log (B.O.W.L) is basic JavaScript inventory application. It allows users to record items details and quantities that can later be retrieved and updated to keep track of inventory levels. 

## Installation
In order to get started, fork this scaffold repository in Github and clone it locally onto your machine.

### The Database Server
* navigate from the repo's local directory to the `server` subfolder
* run `npm install` to install all necessary dependencies
* run `npm run dev` to start up the database server
* navigate to `localhost:3001/` in your local browser to view database requests
* **NOTE:** the database by default will run on your local host at port 3000 if the port is not specified in the .env file
```
$ cd server
$ npm install
$ npm run dev
```

### The User Application
* navigate from the repo's local directory to the `client` subfolder
* run `npm install` to install all necessary dependencies
* run `npm start` to start up the application
* navigate to `localhost:3000/` in your local browser to view the application
* **NOTE:** the application by default will run on your local host at port 3000
* **WARNING:** be sure that the server and the client ports are not conflicting.  If need to be change the server port to one that is avaiable
```
$ cd client
$ npm install
$ npm start
```

## Features

### User Login
Users identified as Managers are able to authenticate themselves to the system by providing their system username and password. If a user does not have an account, they can create one.

### Visitor View
Users can view existing inventory with the use of the Inventory view option without the need to log in. The inventory is order by Item Name. Additionally visitors can select items and review their details (read-only access).

### Manager View (Dashboard)/New item Creation
In addition to the visitor view, when a manager logs in, two new tabs will be available.  The Dashboard which features items that have been logged by the logged user. Managers will be able to click on a particular item and update their information as required (from both the dashboard and/or the Inventory view option). As well the New item creation options will allow Managers to add new entries to the database.  

### Authors
* **David Bonilla** @ https://github.com/ddbonilla

