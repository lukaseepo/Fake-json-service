import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';




const routes:Routes=[
    {
        path: "",
        component: ListComponent,
    },
    {
        path: "detail/:id",
        component: DetailComponent,
    },
    {
        path: "add",
        component: AddComponent,
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class UserRoutingModule{}