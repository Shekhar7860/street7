import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  loggedinuserdata : any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if(window.localStorage.getItem('userData') !== null){
            console.log('userdata' , this.loggedinuserdata)
            this.loggedinuserdata = window.localStorage.getItem('userData'); 
            this.rootPage =  TabsPage
      }
      else
      {
      this.rootPage =  LoginPage
      }
   
  
  }
  
}
