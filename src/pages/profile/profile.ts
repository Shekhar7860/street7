import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { InviteTeammatesPage } from '../invite-teammates/invite-teammates';
import { SettingsPage } from '../settings/settings';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { InviteToStreet7Page } from '../invite-to-street7/invite-to-street7';
import { OpenPostPage } from '../open-post/open-post';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public posts = [
    {
      id: 1,
      post_image: 'https://source.unsplash.com/160x150',
      post_title: 'For You'
    },
    {
      id: 2,
      post_image: 'https://source.unsplash.com/160x150',
      post_title: 'Style'
    },
    {
      id: 3,
      post_image: 'https://source.unsplash.com/160x150',
      post_title: 'Fitness'
    },
    {
      id: 4,
      post_image: 'https://source.unsplash.com/160x150',
      post_title: 'Beautfy'
    },
    {
      id: 5,
      post_image: 'https://source.unsplash.com/160x150',
      post_title: 'Property'
    },
    {
      id: 6,
      post_image: 'https://source.unsplash.com/160x150',
      post_title: 'Property'
    },
    {
      id: 6,
      post_image: 'https://source.unsplash.com/160x150',
      post_title: 'Property'
    },
    {
      id: 6,
      post_image: 'https://source.unsplash.com/160x150',
      post_title: 'Property'
    }
  ];
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
  profile_tab : any;
  public footerIsHidden: boolean = false;

  constructor(public app: App,public navCtrl: NavController, public navParams: NavParams) {
    this.profile_tab = "new_post";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  segmentChanged(event){
    console.log(event._value);
    if(event._value == "reviews"){
      this.footerIsHidden = true;
    }else{
      this.footerIsHidden = false;
    }
  }
  getProfilImageFromGallry(){
    
  }
  gotoInviteContactlist(){
    this.app.getRootNav().push(InviteTeammatesPage);
  }
  invite_to_street7(){
    this.app.getRootNav().push(InviteToStreet7Page);
  }
  
  gotoSettingspage(){
    this.app.getRootNav().push(SettingsPage);    
  }
  gotoEditprofilepage(){
    this.app.getRootNav().push(EditProfilePage);    
    
  }
  goto_open_post(event){
    this.app.getRootNav().push(OpenPostPage);
  }
}
