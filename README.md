# Connect With Me        
Connect With Me is a Social Media platform for Business Professionals to keep in contact with their peers, search for jobs, post job openings, build resumes, and have a profile designed to market themselves to potential recruiters.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Database Structure](#database-structure)
- [Video Demo](#video-demo)
- [Deployed Application](#deployed-application)
- [Contact](#developers)



## Installation
End users will be able to access the site with the link in this ReadME. This is a react based application so if you would like to install it yourself you can! Installation is easy! Once you have cloned the code to your own repository you can run "npm i" from the root folder. This will install all dependencies needed in the server and client folders. Once all dependencies are installed you can run "npm run develop" this will start both the client and server concurrently, establish a connection to the MongoDB, and opens the application in your default browser.

## Usage
Upon first visiting the site users will be prompted to Sign in or Sign up. 

Upon sign in/up a token will be generated allowing access to other components of the application. 

Upon Visiting the "Home" page users will see a feed of posts from their peers, a list of their peers, and a section to create a post of their own. 

Upon accessing the "Jobs" tab users will see a list of current job openings posted by recruiters on the platform. They will also be able to create a job posting so 
they can find potential canidates. 

Upon clicking on the "Profile" tab the user will see their profile which includes their posts, an about section, and a resume section that is displayed for all users to see. 

Upon clicking the "Resume" tab users will be presented with a Form asking for some information about their skills, education, and previous employment. 

Upon submitting the Resume form a downloaded resume will be provided in a formated DOCX file and the resume on their Profile will be updated as well.

## Features
This application was built using React, MongoDB, GraphQL, and a DOCX file creator package. 

Full list of NPM packages

### Client
    "@apollo/client": "^3.7.3",
    
    "@ionic/react": "^6.4.1",
    
    "@testing-library/jest-dom": "^5.16.4",
    
    "@testing-library/react": "^11.1.0",
    
    "@testing-library/user-event": "^13.5.0",
    
    "docx": "^7.8.0",
    
    "file-saver": "^2.0.5",
    
    "ionicons": "^6.0.4",
    
    "react": "17.0.2",
    
    "react-dom": "17.0.2",
    
    "react-icons": "^4.7.1",
    
    "react-router-dom": "^6.6.0",
    
    "react-scripts": "5.0.1",
    
    "web-vitals": "^2.1.4",
    
    "jwt-decode": "^3.1.2",
    
    "graphql": "^15.4.0"

### Server
    "apollo-server-express": "^3.6.2",
    
    "bcrypt": "^5.0.0",
    
    "express": "^4.17.2",
    
    "graphql": "^16.3.0",
    
    "jsonwebtoken": "^8.5.1",
    
    "mongoose": "^6.1.8"
    
### Root
"concurrently": "^5.1.0"

### Scitpts (Run in Root Folder)
"npm run install" - Installs all dependencies across client and server,

"npm run start" - Starts the server,

"npm run develop" - starts the server and the client concurrently, establsihes connections to the DB, links client and server,

"npm run build" - builds the application
    
    
## Database Structure
![Connect With Me Data Structure](https://user-images.githubusercontent.com/108016215/209975026-74535339-8d84-4ea9-948c-036b7e127207.png)

## Video Demo 

## Deployed Application

## Developers

Rexx Madsen
Rexxmadsen@gmail.com
https://github.com/Avialmonanay

Michelle Hales

https://github.com/mich-hales

Noah Brimhall

https://github.com/NoahBrimhall6

Allen Robson

https://github.com/TheManamana

