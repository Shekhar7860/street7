import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';   


@Component({
  selector: 'page-invite-teammates',
  templateUrl: 'invite-teammates.html',
})
export class InviteTeammatesPage {

  private allContacts: any; 
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public contacts: Contacts) {
    this.fetchDeviceContact();
  }
  fetchDeviceContact(){
    /* this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], {filter: "", multiple: true})
    .then(data => {
      this.allContacts = data
    });
    alert(this.allContacts); */
  }  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InviteTeammatesPage');
  }
  add_remove_friends(evnt) {
   
  }
}
