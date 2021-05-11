import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    AddComponent
  ],
  imports: [
    UserRoutingModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
  ],
  exports:[
      ListComponent,
      DetailComponent,
      AddComponent
  ]
})


export class UserModule { }
