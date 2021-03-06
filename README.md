# express-vue-template

IMPORTANT: This project is a work in progress, so code may be sloppy and/or broken at any point in time. Feel free to use it at your own discretion.

A simple template that contains an Express server and a Vue client app, based on Cody Seibert's awesome Vue tutorial here: https://www.youtube.com/watch?v=Fa4cRMaTDUI
Tutorial on Github: https://github.com/codyseibert/tab-tracker

Live demo to follow.

# Setup

You need to have Node Js installed: https://nodejs.org/en/

You must at least have **NODE version 8.2.1**

Don't forget to correctly set your API endpoint in /client/src/services/Api.js!

### Client - Terminal A
```
cd client
npm install
npm start
```

### Server - Terminal B
```
cd server
npm install
npm start
```
# Usage

There are two simple example pages in this template, namely at /register and /test. The button on the /register page will show how a POST API call can be made to the server that returns an object that can be displayed. The button on the /test page will show the same functionality for a GET request.
