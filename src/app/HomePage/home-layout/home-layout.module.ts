import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { HomeLayoutComponent } from './home-layout.component';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,
    NbLayoutModule
  ]
})
export class HomeLayoutModule { }
