import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';

@Injectable({
    providedIn: 'root',
})

export class UserService{
    constructor(private http: HttpClient){}

    url:string = "http://localhost:3000/users/"

    

    getAllUsers(){
        return this.http.get(this.url)
    }

    getDetails(id){
        return this.http.get(this.url + id)
    }

    createUser(user:User){
        return this.http.post(this.url, user)
    }
    
}