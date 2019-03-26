var express = require('express');
var firebase = require('firebase');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); //need to parse HTTP request body

var config = {
    apiKey: "AIzaSyDcqX3UE_FuiZI6MwjrBSD5rnu91Wm9oFk",
    authDomain: "safeset-d2044.firebaseapp.com",
    databaseURL: "https://safeset-d2044.firebaseio.com",
    projectId: "safeset-d2044",
    storageBucket: "safeset-d2044.appspot.com",
    messagingSenderId: "377658325101"
  };
var fireApp = firebase.initializeApp(config);
  
//Fetch instances -- one time use authentication codes
app.get('/onetimeauthenticationcode', function (req, res) {

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/AuthenticationKeys/");

	//Attach an asynchronous callback to read the data
	userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

//Fetch instances -- Set Medic authentication codes
app.get('/setmedicauthenticationcodes', function (req, res) {

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/Med Auth Keys/");

	//Attach an asynchronous callback to read the data
	userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});


//Fetch services
app.get('/doctors/:uid/services', function (req, res) {

	var UID = req.body.UID;

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/Users/Doctors/" + UID +'/Services/');

	//Attach an asynchronous callback to read the data
	userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

//Fetch patients emergency contact info
app.post('/patients/emergencycontact/', function (req, res) {

	var UID = req.body.UID;

	console.log("HTTP Post Request");
	var userReference = firebase.database().ref('/Users/Patients/'+ UID + '/Emergency Contact/');

	//Attach an asynchronous callback to read the data
	userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});


//Fetch Patient Profile pic ______________________________________________
app.get('/patients/:uid/profilepic/', function (req, res) {

	var UID = req.body.UID;

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/Users/Patients/" + UID + '/ProfilePic/');

	//Attach an asynchronous callback to read the data
	userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});


//Fetch Set Medic Profile pic ______________________________________________
app.get('/setmedics/:uid/profilepic', function (req, res) {

	var UID = req.body.UID;

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/Users/SetMedics/" + UID + '/ProfilePic/');

	//Attach an asynchronous callback to read the data
	userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

//Fetch Doctor Profile pic ______________________________________________
app.get('/doctors/:uid/profilepic/', function (req, res) {

	var UID = req.body.UID;

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/Users/Doctors/" + UID + '/ProfilePic/');

	//Attach an asynchronous callback to read the data
	userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

//Fetch Prroduction Management Profile pic ______________________________________________
app.get('/productionmanagement/:uid/profilepic/', function (req, res) {

	var UID = req.body.UID;

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/Users/ProductionManagement/"+ UID + '/ProfilePic/');

	//Attach an asynchronous callback to read the data
	userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});


//Fetch
app.get('/', function (req, res) {


	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/Users/");

	//Attach an asynchronous callback to read the data
	userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

//Create new instance ---------------- Patient sign up
app.post('/patients/', function (req, res) {

	console.log("HTTP Post Request");

	var UID = req.body.UID;
	var name = req.body.name;
	var phone = req.body.phone;
	var email = req.body.email;
	var dob = req.body.dob;
	var profilepic = req.body.profilepic;
	var ecname = req.body.ecname;
	var ecphone = req.body.ecphone;
	var ecemail = req.body.ecemail;
	var state = req.body.state;
	var street = req.body.street;
	var town = req.body.town;
	var zip = req.body.zip;


	var referencePath = '/Users/'+ 'Patients/';
	var userReference = firebase.database().ref(referencePath);
	userReference.child(UID).set({ Phone : phone, Name : name, Email : email, DOB : dob, ProfilePicture: profilepic}), 
	function(error) {
	   if (error) {
		   res.send("Data could not be saved." + error);
	   } 
	   else {
		   res.send("Data saved successfully.");
	   }}

	userReference.child(UID).child('Emergency Contact/').set({Name: ecname, Phone: ecphone, Email: ecemail}, 
				function(error) {
				   if (error) {
					   res.send("Data could not be updated." + error);
				   } 
				   else {
					   res.send("Data updated successfully.");
				   }
			   });
	userReference.child(UID).child('Mailing Address/').set({State: state, Town: town, Street: street, Zip: zip}, 
				function(error) {
				   if (error) {
					   res.send("Data could not be updated." + error);
				   } 
				   else {
					   res.send("Data updated successfully.");
				   }
			   });
});

//Create new instance ---------------- Doctor sign up
app.put('/doctors/', function (req, res) {

	console.log("HTTP Put Request");

	var UID = req.body.UID;
	var name = req.body.Name;
	var phone = req.body.Phone;
	var email = req.body.Email;
	var profilepic = req.body.profilepic;
	var state = req.body.state;
	var street = req.body.street;
	var town = req.body.town;
	var zip = req.body.zip;

	var referencePath = '/Users/Doctors/';
	var userReference = firebase.database().ref(referencePath);
	userReference.child(UID).set({Name : name, Phone : phone, Email : email, ProfilePicture: profilepic}), 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			}
	userReference.child(UID).child('LocationOfPractice/').set({State: state, Town: town, Street: street, Zip: zip}, 
				function(error) {
				   if (error) {
					   res.send("Data could not be updated." + error);
				   } 
				   else {
					   res.send("Data updated successfully.");
				   }
			   });
});

//Create new instance ---------------- Add services for specific doctor
app.post('/doctors/:uid/services/:nameofservice/', function (req, res) {

	console.log("HTTP Post Request");

	var UID = req.body.UID;
	var NameOfService = req.body.nameofservice;
	var durationinminutes = req.body.durationinminutes;
	var priceperhour = req.body.priceperhour;
	var booltravelneeded = req.body.booltravelneeded;
	

	var referencePath = '/Users/Doctors/'+UID ;
	var userReference = firebase.database().ref(referencePath);
	userReference.child("Services").child(NameOfService).set({DurationInMinutes: durationinminutes, PricePerHour: priceperhour, BoolTravelNeeded: BoolTravelNeeded}), 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			}
});


//Create new instance ---------------- Set Medic sign up
app.post('/setmedic/', function (req, res) {

	console.log("HTTP Post Request");

	var UID = req.body.UID;
	var name = req.body.Name;
	var phone = req.body.Phone;
	var email = req.body.Email;
	var profilepic = req.body.profilepic;
	var medauthkey = req.body.medauthkey;

	var referencePath = '/Users/'+ 'SetMedic/';
	var userReference = firebase.database().ref(referencePath);
	userReference.child(UID).set({Name : name, Phone : phone, Email : email, ProfilePicture: profilepic, MedAuthKey : medauthkey}), 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			}
});

//Create new instance ---------------- Production Management sign up (how to do so.....)
app.post('/productionmanagement/:uid/', function (req, res) {

	console.log("HTTP Post Request");

	var UID = req.body.UID;
	var name = req.body.Name;
	var phone = req.body.Phone;
	var email = req.body.Email;
	var profilepic = req.body.profilepic;
	var medauthkey = req.body.medauthkey;

	var referencePath = '/Users/'+ 'ProductionManagement/';
	var userReference = firebase.database().ref(referencePath);
	userReference.child(UID).set({Name : name, Phone : phone, Email : email, ProfilePicture: profilepic, MedAuthKey : medauthkey}), 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			}

	var referencePath = '/MedAuthKeys/';
	var userReference = firebase.database().ref(referencePath);
	userReference.set({medauthkey : UID}), 
					function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
				}
});

//Create new instance ---------------- Add Bill to Production Company
app.post('/productioncompany/:uid/bills/', function (req, res) {

	console.log("HTTP Post Request");

	var UID = req.body.UID;
	var date = req.body.date;
	var cost = req.body.cost;
	
	var referencePath = '/ProductionCompany/'+ UID;
	var userReference = firebase.database().ref(referencePath);
	userReference.child("Bills").set({date: cost}), 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			}
});



//Create new instance ---------------- add supervising accounts
app.post('/productioncompany/:uid/supervisingaccounts/', function (req, res) {

	console.log("HTTP Post Request");

	var UID = req.body.UID;
	var role = req.body.role;
	var email = req.body.email;
	
	var referencePath = '/ProductionCompany/'+ UID;
	var userReference = firebase.database().ref(referencePath);
	userReference.child("SupervisingAccounts").set({role: email}), 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			}
});


//Update existing instance
app.post('/test', function (req, res) {

	console.log("HTTP POST Request");

	res.send(req);

	// var referencePath = '/';
	// var userReference = firebase.database().ref(referencePath);
	// userReference.update({}, 
	// 			 function(error) {
	// 				if (error) {
	// 					res.send("Data could not be updated." + error);
	// 				} 
	// 				else {
	// 					res.send("Data updated successfully.");
	// 				}
	// 		    });
});

//Delete an instance
app.delete('/', function (req, res) {

   console.log("HTTP DELETE Request");
   //todo
});

var server = app.listen(8080, function () {
  
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
});