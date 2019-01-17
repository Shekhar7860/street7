import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ActionSheetController } from 'ionic-angular';
import { GlobalsProvider } from "../../providers/globals/globals";
import { RestProvider } from "../../providers/rest/rest";
import { Camera, CameraOptions } from '@ionic-native/camera'; 
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */                 
                      
@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})                        
export class EditProfilePage {
 userPic : any = "assets/imgs/frame.png";
  loggedinuserdata : any;
  newPhoto : any ;
  loading: any;
  selectedimage : any;
  parsedData : any;
  userData : any = {};
  photo : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globals: GlobalsProvider, public rest_call: RestProvider, public actionSheetCtrl:ActionSheetController,  private camera: Camera) {
  this.loggedinuserdata = window.localStorage.getItem('userData');
   console.log('userdata' , this.loggedinuserdata);
   this.parsedData = JSON.parse(this.loggedinuserdata)
  }
               
  ionViewDidLoad() {
   this.globals.showLoader('Please Wait...');
    console.log('ionViewDidLoad EditProfilePage');
    this.rest_call.userDetails(this.parsedData.user_id).then((result) => {
    if(result){
	  console.log(result);
	  this.userData = result.data; 
	   this.globals.loading.dismiss();
	 
    }
	  
             
    }, (err) => {
      this.globals.presentToast(JSON.stringify(err));
    });
  }

  getProfilImageFromCameraGallry () {
 let actionSheet = this.actionSheetCtrl.create({
       title: 'Choose Photos',
       buttons: [
         {
           text: 'Camera',
           role: 'destructive',
           handler: () => {
                
             this.camera.getPicture({
             sourceType: this.camera.PictureSourceType.CAMERA,
             destinationType: this.camera.DestinationType.DATA_URL
          }).then((imageData) => {
            this.userPic = 'data:image/jpeg;base64,'+imageData;
            this.newPhoto = imageData;
            this.selectedimage = 'data:image/jpeg;base64,'+imageData;
           let block =   this.selectedimage.split(";");
           let contentType = block[0].split(":")[1];// In this case "image/gif"
           let realData = block[1].split(",")[1];//
           this.photo = this.b64toBlob(realData,contentType);

          }, (err) => {
             this.globals.presentToast(JSON.stringify(err));
        });
           }               
         },
         {
           text: 'Gallery',
           handler: () => {
          this.camera.getPicture({
          sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
          destinationType: this.camera.DestinationType.DATA_URL
       }).then((imageData) => {
         this.newPhoto = imageData;
         this.userPic = 'data:image/jpeg;base64,'+imageData;
         this.selectedimage = 'data:image/jpeg;base64,'+imageData;
         let block =  this.selectedimage.split(";");
         let contentType = block[0].split(":")[1];// In this case "image/gif"
         let realData = block[1].split(",")[1];//
         this.photo =this.b64toBlob(realData,contentType);
       }, (err) => {
          this.globals.presentToast(JSON.stringify(err));
                       
     });
           }
         },
         {
           text: 'Cancel',
           role: 'cancel',
           handler: () => {
             console.log('Cancel clicked');
           }
         }
       ]
     });
     actionSheet.present();
  }

  updateProfile () {
  this.globals.showLoader('Please Wait');
	   console.log(this.userData)
    this.rest_call.user_update(this.userData, 0,  this.selectedimage, 1, 0).then((result) => {
    if(result){
	  console.log(result);
	  this.globals.loading.dismiss();
	  this.globals.presentToast("User Created Successfully");
    this.navCtrl.pop();
    }
	  
      // this.loading.dismiss();
      // this.response = result;
      // this.navCtrl.pop();
    }, (err) => {
		console.log(err);
    //  this.globals.loading.dismiss();
      this.globals.presentToast(JSON.stringify(err));
    });
  }
}
