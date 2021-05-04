import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    UserRoutingModule,
    RouterModule,
    BrowserModule,
  ],
  exports:[
      ListComponent,
      DetailComponent
  ]
})


export class UserModule { }
