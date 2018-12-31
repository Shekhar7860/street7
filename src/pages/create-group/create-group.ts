import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {
  public messages = [
    {
      id: 1,
      profile_img: 'https://source.unsplash.com/160x150',
      sender: 'Anna Blum',
      last_message: 'This sounded nonsense to Alice, so she said nothing, but set off at once toward...',
      time: '1:08 PM',
      review_star:5
    },
    {
      id: 2,
      profile_img: 'https://source.unsplash.com/160x150',
      sender: 'Iread Nathan',
      last_message: 'Thus much I thought proper to tell you in relation to yourself, and to the trust I...',
      time: 'YESTERDAY',
      review_star:5
    },
    {
      id: 3,
      profile_img: 'https://source.unsplash.com/160x150',
      sender: 'Christopher Ogden',
      last_message: 'OK!',
      time: 'YESTERDAY',
      review_star:5
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateGroupPage');
  }
  add_remove_friends(evnt,str) {
   
  }
}
