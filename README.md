# medi-appointment


This is a proof of concept for a medical appointment scheduling  app that will help doctors schedule appointments for various kinds of services offered by them . The app also integrates with a third party service for getting in touch with patients in a HIPPA compliant manner.

# Technology

* Angular 7
* Ionic
* Firebase Database. 
* Authentication 
* Express JS  + Node.js for backend 
* Google Calendar API to  manage appointments 



# How it works

This is an Angular 7 application with Ionic Framework. Google Authentication is done  using Firebase. I have used Firebase database to store doctor and patients and production company details.
I have a api logic in setMDserver.js using  node.js's express framework. 
Google Calendar API helps retrieve doctor's calendar and create new appointment as well.

# Run 

* Create your API key and Web Client by following the steps mentioned in https://developers.google.com/calendar/

* Replace the existing Key and Web Client in index.js file with your Credentials

* Clone the application.
```
  git clone https://github.com/debanjana/medi-appointment.git
 ```

* Run to run the Rest API 
```
node setMDserver.js
```

* Run to load the app
```
ionic serve` 
```
