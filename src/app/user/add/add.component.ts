import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  email:string = '';
  password:string ='';
  name:string = '';

  constructor(private userservice:UserService ) { }

  ngOnInit(): void {
  }

  list = [];

  addInfo(){
    let user:User = {
      name: this.name,
      email: this.email,
      password: this.password,
      id: null,
    }
    this.userservice.createUser(user).subscribe((response)=>{
      this.list.push(response);
    })
    console.log(user);
  }
}
