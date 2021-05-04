import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private http: UserService ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  list = [];


  getUsers(){
    this.http.getAllUsers().subscribe(( result:any ) => {
      this.list = result;
    })
  }


}
