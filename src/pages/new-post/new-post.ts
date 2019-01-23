import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'; 
import { GlobalsProvider } from '../../providers/globals/globals';
import { RestProvider } from "../../providers/rest/rest";
import { FileChooser } from '@ionic-native/file-chooser';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
/**
 * Generated class for the NewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */                               

@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {
videoId: any;
postData : any = {}                
flag_upload = true;
flag_play = true;
  form:any;
image1 : any = 'https://source.unsplash.com/160x150';
image2 : any = 'https://source.unsplash.com/160x150';
image3 : any = 'https://source.unsplash.com/160x150';
image4 : any = 'https://source.unsplash.com/160x150';
image5 : any = 'https://source.unsplash.com/160x150';
image6 : any = 'https://source.unsplash.com/160x150';
upload_images:any=[];
loggedinuserdata : any;
 show_image:any=[
    {
      'id': 0,
      'url':'https://source.unsplash.com/160x150'
    },
    {
      'id': 1,
      'url':'https://source.unsplash.com/160x150'
    },
    {
      'id': 2,
      'url':'https://source.unsplash.com/160x150'
    },
    {
      'id': 3,
      'url':'https://source.unsplash.com/160x150'
    },
    {
      'id': 4,
      'url':'https://source.unsplash.com/160x150'
    },
    {
      'id': 5,
      'url':'https://source.unsplash.com/160x150'
    },
  ];

const options: CameraOptions = {
  quality: 100,
  PictureSourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}                                                                                                                                                                                     
  public posts = [
   
      'https://source.unsplash.com/160x150',
     
    'https://source.unsplash.com/160x150',
     
   
      'https://source.unsplash.com/160x150',
    
       'https://source.unsplash.com/160x150',
     
                               
     'https://source.unsplash.com/160x150',
    
     'https://source.unsplash.com/160x150',
                    
  ];
  postData = { post_title:'', post_description:'' };
  public co_creators = [
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
    },
    {
      id: 6,
      img: 'https://source.unsplash.com/120x120',
      user_name: 'linus_torvalds'
    },
    {
      id: 7,
      img: 'https://source.unsplash.com/120x120',
      user_name: 'linus_torvalds'
    },
    {
      id: 8,
      img: 'https://source.unsplash.com/120x120',
      user_name: 'linus_torvalds'
    },
    {
      id: 9,
      img: 'https://source.unsplash.com/120x120',
      user_name: 'linus_torvalds'
    },
    {
      id: 10,
      img: 'https://source.unsplash.com/120x120',
      user_name: 'linus_torvalds'
    }
    
  ];                                       
  public categories = [
    {
      id: 1,
      img: 'https://source.unsplash.com/100x60',
      category_name: 'For You'
    },
    {
      id: 2,
      img: 'https://source.unsplash.com/100x60',
      category_name: 'Style'
    },
    {
      id: 3,
      img: 'https://source.unsplash.com/100x60',
      category_name: 'Fitness'
    },
    {
      id: 4,
      img: 'https://source.unsplash.com/100x60',
      category_name: 'Beautfy'
    },
    {
      id: 5,
      img: 'https://source.unsplash.com/100x60',
      category_name: 'Property'
    }
  ];                             
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public actionSheetCtrl:ActionSheetController,  public globals: GlobalsProvider, public rest_call: RestProvider, public streamingMedia: StreamingMedia, public fileChooser: FileChooser, private mediaCapture: MediaCapture, public transfer : FileTransfer) {
   this.loggedinuserdata = window.localStorage.getItem('userData');

  }                         

  ionViewDidLoad() {
  
   console.log('userdata' , this.loggedinuserdata)
      this.form = new FormData();
     
     var userData = JSON.parse(this.loggedinuserdata);
     console.log('userid', userData.user_id)
     this.form.append('post_user_id', userData.user_id);
     this.form.append('post_category', 'style');
     this.form.append('post_title', 'title');
      this.form.append('post_description', 'description');
      this.form.append("insert",1)
    console.log('ionViewDidLoad NewPostPage');
    this.rest_call.getCategory().then((result) => {
    console.log(result);
    this.categories = result['data'];
    }, (err) => {
      console.log(err);
      this.globals.presentToast(JSON.stringify(err));
    });
  }


  createNewPost(){

  }
                                                         

  selectphoto(id:number,no:number) {
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
                     this.show_image[no].url = 'data:image/jpeg;base64,'+imageData;
               
                      this.upload_images.push(this.show_image[no].url);
                  
              }, (err) => {
              console.log(err);
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
                this.show_image[no].url = 'data:image/jpeg;base64,'+imageData;
               
                      this.upload_images.push(this.show_image[no].url);
           }, (err) => {
           console.log(err);
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

  gotoPreviousStat(){
    this.navCtrl.pop();
  }

    takePhotoVideo () {
 let actionSheet = this.actionSheetCtrl.create({
       title: 'Choose Option',
       buttons: [
         {
           text: 'Photo',
           role: 'destructive',
           handler: () => {
            this.takePhoto()
           }               
         },
         {  
           text: 'Video',
           handler: () => {
          this.presentActionSheet()
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

 
                    
selectedCategory(val){
  console.log(val)
}

  public presentActionSheet() {
let actionSheet = this.actionSheetCtrl.create({
title: 'Select Video Source',
buttons: [
{
text: 'Load from Gallery',
handler: () => {
this.getVideo();
}},
{
text: 'Use Camera',
handler: () => {
this.capturevideo();
}},
{
text: 'Cancel',
role: 'cancel'
}
]});
actionSheet.present();
}


removeimage(id:number,index:number){
    this.show_image[index].id=0;
    this.show_image[index].url="assets/imgs/c.png";
    let new_index=0;
    for(let i= 0;i<=this.upload_images.length;i++){
        if(this.upload_images.index==index){
          new_index=i;
        }
    }
    if(this.upload_images.length>0){
        this.upload_images.splice(new_index,1);
    }
  }

getVideo() {
this.fileChooser.open()
.then(uri => {
this.videoId = uri;
this.flag_play = false;
this.flag_upload = false;
})
.catch(e => console.log(e));
}


capturevideo() {
let options: CaptureVideoOptions = { limit: 1 };
this.mediaCapture.captureVideo(options)
.then((videodata: MediaFile[]) => {
var i, path, len;
for (i = 0, len = videodata.length; i < len; i += 1) {
path = videodata[i].fullPath;
// do something interesting with the file
}
this.videoId = path;
this.flag_play = false;
this.flag_upload = false;
});
}
                      
 share() {
  this.globals.showLoader('Please Wait...');
  setTimeout(() => {
  console.log(this.postData);                
  console.log('images', this.upload_images)
   for(let i=0; i<this.upload_images.length; i++){
        if(typeof this.upload_images[i].image=='object'){
          this.form.append('post_media',this.upload_images[i].image);
        }
     }
     this.rest_call.createPost(  this.form).then((result) => {
  if(result){
   console.log('myresult', result);
    if(result.status == 'success' )
    {
      this.globals.loading.dismiss();
       
    }
    else
    {
     this.globals.presentToast("An error occured");
    }
                     
       
  }

    }, (err) => {
    console.log('err', err);
     this.globals.loading.dismiss();
     // this.loading.dismiss();
      this.globals.presentToast("Network Error");
    });
        }, 2500);
  
  }

  share2 () {
const fileTransfer: FileTransferObject = this.transfer.create();
 for(let i=0; i<this.upload_images.length; i++){
  {
    var filename = 'post_media';
    var myparams = {
     post_user_id :  52,
     post_category  : 'style',
    post_title :  'title',
     post_description : 'description',
     insert : 1
    }
  let options: FileUploadOptions = {
    fileKey: filename,
    fileName: filename,
    chunkedMode: false,
    mimeType: "image/jpeg",
    headers: {},
    params : myparams
  }
 
   
   fileTransfer.upload(this.upload_images[i].image, 'http://demo.aarvitechnolabs.com/street7-api/api/post_update.php', options)
    .then((data) => {
    console.log(JSON.stringify(data) +" Uploaded Successfully");
  }, (err) => {   
    console.log(err);
  });
}
  }
  }

  b64toBlob(b64Data:any, contentType:any) {
         contentType = contentType || '';
         let   sliceSize = 512*10;
         var byteCharacters = atob(b64Data);
         var byteArrays = [];
         for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
         var slice = byteCharacters.slice(offset, offset + sliceSize);
         var byteNumbers = new Array(slice.length);
         for (var i = 0; i < slice.length; i++) {
             byteNumbers[i] = slice.charCodeAt(i);
         }
         var byteArray = new Uint8Array(byteNumbers);
         byteArrays.push(byteArray);
         }
         var blob = new Blob(byteArrays, {type: contentType});
         console.log(JSON.stringify(blob));
    //blob.style.height = "300px";
    //blob.style.width = "300px";
         return blob;
  }
}
