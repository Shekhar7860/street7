import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupDetailPage } from '../group-detail/group-detail';
import { CreateGroupPage } from '../create-group/create-group';

/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  public groups = [
    {
      group_id: 1,
      group_image: 'https://source.unsplash.com/160x150',
      group_title: 'Group 1'
    },
    {
      group_id: 2,
      group_image: 'https://source.unsplash.com/160x150',
      group_title: 'Style'
    },
    {
      group_id: 3,
      group_image: 'https://source.unsplash.com/160x150',
      group_title: 'Fitness'
    },
    {
      group_id: 4,
      group_image: 'https://source.unsplash.com/160x150',
      group_title: 'Beautfy'
    },
    {
      group_id: 5,
      group_image: 'https://source.unsplash.com/160x150',
      group_title: 'Property'
    },
    {
      group_id: 6,
      group_image: 'https://source.unsplash.com/160x150',
      group_title: 'Property'
    },
    {
      group_id: 6,
      group_image: 'https://source.unsplash.com/160x150',
      group_title: 'Property'
    },
    {
      group_id: 6,
      group_image: 'https://source.unsplash.com/160x150',
      group_title: 'Property'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }
  openGroupDetails(){
    this.navCtrl.push(GroupDetailPage);
  }
  gotoCreateGroup(){
    this.navCtrl.push(CreateGroupPage);
  }
}
