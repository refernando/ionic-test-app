import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimalComponent } from './animal.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [AnimalComponent],
  exports: [AnimalComponent],
})
export class AnimalComponentModule {}
