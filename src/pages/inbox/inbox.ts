import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})                                           
export class InboxPage {

  // You can get this data from your API. This is a dumb data for being an example.
  public messages = [
    {
      id: 1,
      profile_img: 'https://source.unsplash.com/160x150',
      sender: 'Anna Blum',
      last_message: 'This sounded nonsense to Alice, so she said nothing, but set off at once toward...',
      time: '1:08 PM'
    },
    {
      id: 2,
      profile_img: 'https://source.unsplash.com/160x150',
      sender: 'Iread Nathan',
      last_message: 'Thus much I thought proper to tell you in relation to yourself, and to the trust I...',
      time: 'YESTERDAY'
    },
    {
      id: 3,
      profile_img: 'https://source.unsplash.com/160x150',
      sender: 'Christopher Ogden',
      last_message: 'OK!',
      time: 'YESTERDAY'
    },
    {
      id: 4,
      profile_img: 'https://source.unsplash.com/160x150',
      sender: 'Gavin',
      last_message: 'This sounded a very good reason, and Alice was quite pleased to know it. ',
      time: 'APRIL 22'
    },
    {
      id: 5,
      profile_img: 'https://source.unsplash.com/160x150',
      sender: 'Kimberely Hardman',
      last_message: 'It was some time before he obtained any answer, and the reply, when made, was...',
      time: 'APRIL 22'
    },
    {
      id: 6,
      profile_img: 'https://source.unsplash.com/160x150',
      sender: 'Kaylee Morrison',
      last_message: 'I am installing Ubuntu right now.',
      time: 'APRIL 22'
    }
    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  goNewMessage() {
  }

  goMessageDetail(sender:string, profile_img:string, last_message:string) {
    this.app.getRootNav().push(ChatPage);
  // this.navCtrl.push(ChatPage)
  }

}
