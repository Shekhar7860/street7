import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalsProvider } from "../../providers/globals/globals";
import { AngularFireDatabase } from '@angular/fire/database';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
      
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})                                                                          
export class ChatPage {
  message:any;
  chats : any;                    
  messages:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public globals: GlobalsProvider, public db : AngularFireDatabase) {
  this.chats = this.db.database.ref('chats');
  this.chats.on('child_added', resp => {
   
      this.messages.push(resp.val());
   
      console.log(this.messages)           
  })
  }
            
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
              
  sendMessage () {
  if(this.message)
  {
  this.chats = this.db.database.ref('chats');
  this.chats.push({
  message : this.message
  })
   this.globals.presentToast("sending message");
  }
  else
  {
   this.globals.presentToast("please enter message");
  }
  this.message = ""
  }

}
