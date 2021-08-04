import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  constructor(private myClient:HttpClient) {}
   url = "https://jsonplaceholder.typicode.com/users";
   getAllUsers() {
     return this.myClient.get(this.url);
  }
  getUserById(id:number){
    return this.myClient.get(`${this.url}/${id}`);
  }

}

