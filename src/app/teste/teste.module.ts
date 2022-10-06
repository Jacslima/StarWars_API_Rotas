import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TestePage } from './teste.page';

import { TestePageRoutingModule } from './teste-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestePageRoutingModule
  ],
  declarations: [TestePage]
})
export class TestePageModule {}
