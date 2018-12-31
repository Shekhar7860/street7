import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GlobalsProvider } from "../../providers/globals/globals";
/**
 * Generated class for the OpenPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-open-post',
  templateUrl: 'open-post.html',
})     
export class OpenPostPage {
  section: string = 'two';
  like : string = "md-heart-outline";       
  somethings: any = new Array(20);
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, public globals: GlobalsProvider) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenPostPage');
  }

  changeIcon(){
  if(this.like == "md-heart-outline")
  {
   this.like = "md-heart"
  }
  else
  {
  this.like = "md-heart-outline"
  }
  }

  share(){
  this.socialSharing.share('street7 is a amazing app', 'street7', "gdgdgdgd", 'www.street7.com').then((res) => {
  console.log(res)
}).catch((err) => {
 this.globals.presentToast(err);
});
  }

}      
