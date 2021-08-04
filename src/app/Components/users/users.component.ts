import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from 'src/app/Services/first-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private myService:FirstServiceService) { }
  users:any;
  ngOnInit(): void {
     this.myService.getAllUsers().subscribe(
       (res)=>{
         this.users = res;
       },
       (err)=>{
         console.log(err);
       }
     )
  }

  

}
// this.MyService.GetAllUsers().subscribe(
//   (res)=>{this.users = res;},
//   (err)=>{console.log(err);}
//   );