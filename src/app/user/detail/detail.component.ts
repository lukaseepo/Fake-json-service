import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  id = this.router.snapshot.params.id;

  constructor( private http: UserService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetail();
  }

  list = [];

  getDetail(){
    this.http.getDetails(this.id).subscribe((item:any) =>{
      this.list.push(item);
    })
  }
  

}
