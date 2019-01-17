import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
   loggedinuserdata : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl:AlertController, public popoverCtrl: PopoverController) {
   this.loggedinuserdata = window.localStorage.getItem('userData');
   console.log('userdata' , this.loggedinuserdata)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  logout() {
  
    let alert = this.alertCtrl.create({
    title: 'Confirm Log Out',
    message: 'Are you sure you want to log out?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        console.log("cancel clicked");
        }
      },
      {
        text: 'Log Out',
        handler: () => {
          localStorage.clear();
          this.navCtrl.push(LoginPage);


        }
      }
    ]
  });

 alert.present();
 
  }

  about () {
  let popover = this.popoverCtrl.create(AboutPage);;

  }

}
