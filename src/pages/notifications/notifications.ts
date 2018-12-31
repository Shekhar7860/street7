import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  // You can get this data from your API. This is a dumb data for being an example.
  public notifications = [
    {
      id: 1,
      profile_img: 'https://source.unsplash.com/160x150',
      notification_text: 'You have a new friend suggestion : <h3 class="txt-keyperson-notif">Albert Hiosh</h3>',
      notif_time: 'Yesterday at 5:04 PM'
    },
    {
      id: 2,
      profile_img: 'https://source.unsplash.com/160x150',
      notification_text: "<h3 class='txt-keyperson-notif'>Albert Hiosh</h3> commented on your photo." ,
      notif_time: 'Today at 1:54 PM'
    },
    {
      id: 2,
      profile_img: 'https://source.unsplash.com/160x150',
      notification_text: "<h3 class='txt-keyperson-notif'>Albert Hiosh</h3> sent you a friend request that you havn't responded yet." ,
      notif_time: 'Today at 1:54 PM'
    },
    {
      id: 2,
      profile_img: 'https://source.unsplash.com/160x150',
      notification_text: "<h3 class='txt-keyperson-notif'>Albert Hiosh</h3> sent you a friend request that you havn't responded yet." ,
      notif_time: 'Today at 1:54 PM'
    },
    {
      id: 2,
      profile_img: 'https://source.unsplash.com/160x150',
      notification_text: "<h3 class='txt-keyperson-notif'>Carvish clain</h3> liked your profile photo." ,
      notif_time: 'Today at 1:54 PM'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

}
