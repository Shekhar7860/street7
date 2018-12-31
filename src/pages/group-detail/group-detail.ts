import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GroupDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-group-detail',
  templateUrl: 'group-detail.html',
})
export class GroupDetailPage {
  public stories = [
    {
      id: 1,
      img: 'https://source.unsplash.com/120x120',
      user_name: 'candelibas'
    },
    {
      id: 2,
      img: 'https://source.unsplash.com/120x120',
      user_name: 'maxlynch'
    },
    {
      id: 3,
      img: 'https://source.unsplash.com/120x120',
      user_name: 'ashleyosama'
    },
    {
      id: 4,
      img: 'https://source.unsplash.com/120x120',
      user_name: 'adam_bradley'
    },
    {
      id: 5,
      img: 'https://source.unsplash.com/120x120',
      user_name: 'linus_torvalds'
    },
    {
      id: 6,
      img: 'https://source.unsplash.com/120x120',
      user_name: 'linus_torvalds'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupDetailPage');
  }
}
