import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, LoadingController, ToastController, Platform } from 'ionic-angular';

/*
  Generated class for the GlobalsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalsProvider {
	loading: any;
  constructor(
  	public http: HttpClient,
  	public loadingCtrl: LoadingController, 
  	private toastCtrl: ToastController
  	) {
    console.log('Hello GlobalsProvider Provider');
  }
  showLoader(msg){
    this.loading = this.loadingCtrl.create({
        content: msg
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
