import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenPostPage } from './open-post';

@NgModule({
  declarations: [
    OpenPostPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenPostPage),
  ],
})
export class OpenPostPageModule {}
