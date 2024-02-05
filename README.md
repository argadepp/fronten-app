# Frontend App

Frontend App is an application that simplifies the deployment of Frappe-based apps on a remote Ubuntu instance. It combines a Node.js backend for handling deployments and a Flask frontend for user interaction.
![Home Page](https://github.com/argadepp/fronten-app/blob/master/images/home.JPG)

![Deploy App](https://github.com/argadepp/fronten-app/blob/master/images/details.JPG)

![Process Page](https://github.com/argadepp/fronten-app/blob/master/images/process.JPG)
## Quick Start

1. Clone the repository:

   ```bash
   git clone https://github.com/argadepp/fronten-app.git

Build the Docker image:

2. docker-compose build

3. docker-compose up

4. Access the frontend at http://localhost:5000 in your browser.

Prerequisites
Ensure that your VPS meets the following requirements:

Ubuntu instance with at least 2 CPUs, 4GB RAM, and 20+ GB root volume.
Create a user with sudo rights, including the ability to install packages.
The user should have a password for authentication.

Usage
Open the frontend application in your browser.

Provide the following inputs:

IP address of your Ubuntu instance
Username and password of the user on the Ubuntu instance
SSH port for connecting to the instance
Domain for the Frappe application
Choose an app from the dropdown (currently supporting Frappe HRMS, Healthcare, Helpdesk, and Builder).
Click the "Deploy" button to initiate the deployment process.

Assurity
This application is designed to deploy Frappe applications within 15 minutes. If you encounter any issues, please check your VPS configuration and ensure that the prerequisites are met.