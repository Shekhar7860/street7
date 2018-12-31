import { Component } from '@angular/core';
import { ViewChild } from '@angular/core'
import { HomePage } from '../home/home';
import { InboxPage } from '../inbox/inbox';
import { NewPostPage } from '../new-post/new-post';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';
import { NavController, Nav , Tabs } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  @ViewChild('mTabsMain') tabRef: Tabs;


  tab1Root = HomePage;
  tab2Root = InboxPage;
  tab3Root = NewPostPage;
  tab4Root = NotificationsPage;
  tab5Root = ProfilePage;
  constructor(public navCtrl: NavController) {

  }
  gotoNewPostPage(){
    this.navCtrl.push(NewPostPage);
  }
}
