import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { HomePage } from './home.page';
import { ModalCalendarioPageModule } from './modal-calendario/modal-calendario.module';
import { ModalCalendarioPage } from './modal-calendario/modal-calendario';
import { ModalDiaPageModule } from './modal-dia/modal-dia.module';
import { ModalDiaPage } from './modal-dia/modal-dia';
import { MenuPageModule } from './menu/menu.module';
import { MenuPage } from './menu/menu';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    // SocialSharing,
    ModalCalendarioPageModule,
    ModalDiaPageModule,
    MenuPageModule
  ],
  declarations: [HomePage],
  providers: [
    SocialSharing,
    GooglePlus
  ],
  entryComponents: [
    ModalCalendarioPage,
    ModalDiaPage,
    MenuPage
  ]
})
export class HomePageModule {}
