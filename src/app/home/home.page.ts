import { Component } from '@angular/core';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public googlePlus: GooglePlus){

  }
  login(){
    this.googlePlus.login({
      'webClientId': '948601486045-ele1qbfinjbur19a9rp0fru9hd01lu80.apps.googleusercontent.com',
      'offline': true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(success=>{
        alert("Logged in");
      }).catch(faliure=>{
        alert("Faliure");
      })
    })
  }

}
