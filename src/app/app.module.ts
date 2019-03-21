import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FormsModule } from '@angular/forms';

export const firebaseConfig={
  apiKey: "AIzaSyBNjwehBJbQnHdhjKnjDrtwrIdoyaOhwhs",
    authDomain: "setmed-mock.firebaseapp.com",
    databaseURL: "https://setmed-mock.firebaseio.com",
    projectId: "setmed-mock",
    storageBucket: "setmed-mock.appspot.com",
    messagingSenderId: "948601486045"
}
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GooglePlus
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
