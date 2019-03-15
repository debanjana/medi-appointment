import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public productionOptions = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'View Latest Bills',
      url: '/production-bills-view',
      icon: 'list'
    },
    {
      title: 'Book Appointments',
      url: '/production-book-appointment',
      icon: 'list'
    },
    {
      title: 'Edit Account Details',
      url: '/production-modify-account-info',
      icon: 'list'
    },
    {
      title: 'Add New Production Company',
      url: '/production-add-new-company',
      icon: 'list'
    },
    {
      title: 'Generate Access Code',
      url: '/list',
      icon: 'key'
    }

  ];

  public doctorOptions = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Appointments',
      url: '/production-bills-view',
      icon: 'list'
    },
    {
      title: 'Calendar',
      url: '/production-book-appointment',
      icon: 'list'
    },
    {
      title: 'Pharmacy Locator',
      url: '/production-modify-account-info',
      icon: 'list'
    },
    {
      title: 'Klara',
      url: '/production-add-new-company',
      icon: 'list'
    },
    {
      title: 'Doxy.ME',
      url: '/list',
      icon: 'key'
    },
    {
      title: '"Whiteboard"',
      url: '/list',
      icon: 'key'
    },
    {
      title: 'I Health API TOOLS',
      url: '/list',
      icon: 'key'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  isCurentUserDoctor(){
    if(this.userService.currentUser === "doctor"){
      return true;
    }
  }

  isCurrentUserProductionCompany(){
    if(this.userService.currentUser === "production"){
      return true;
    }
  }
}
