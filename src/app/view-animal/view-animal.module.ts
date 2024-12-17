import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewAnimalPage } from './view-animal.page';

import { IonicModule } from '@ionic/angular';

import { ViewAnimalPageRoutingModule } from './view-animal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAnimalPageRoutingModule,
  ],
  declarations: [ViewAnimalPage],
})
export class ViewAnimalPageModule {}
