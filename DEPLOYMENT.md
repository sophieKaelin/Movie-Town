# Group Z - Movie Town

## **_*Deployment Information*_**

<!--Feel free to change the headings around, not sure what they should be set to.-->

## Deployed link

https://polar-cliffs-71508.herokuapp.com/

## How to run/build

There are two ways to run the project. The first way being to create a build and then access the front-end interface through the server. This is the way that the project was deployed. The second way is to have the server and client run separately. However, this would require changing the "/api/" references in the project to "http://localhost:3001/api/".

### Method 1: Build

After downloading the project, run the `npm install` command to install all the project dependencies. Once this has completed, we need to create a build of the front-end. We do this by running `npm run build` and this will trigger the `create-react-app` package to create a project build locally. After this has finished, we can run the server and then access the project through the specified port on the localhost. The server is run using `npm run server`.

In short, run the following commands:

```
npm install
npm run build
npm run server
```

### Method 2: Run two FE + BE

#### **Front-End**

Below are the commands used to run the front-end of the application. `npm install` command is used to download all the latest node packages. If the application is up-to-date then the `npm start` command is used to run the front-end scripts as per the scripts start property in `packages.json`

```
npm install
npm start
```

#### **Back-End**

Below are the commands used to run the back-end of the application. `npm install` command is used to download all the latest node packages. If the application is up-to-date then the `npm run server` command is used to start the server and connect to the database

```
npm install
npm run server
```

## Continuous Integration

CI was not implemented in this project after seeing the message about credit being exceeded.
