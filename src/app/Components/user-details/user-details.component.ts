import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstServiceService } from 'src/app/Services/first-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
   id:number = 0;
   user:any;
  constructor(private myService:FirstServiceService,mytActivated:ActivatedRoute) {
    this.id = mytActivated.snapshot.params.id;
   }
  
  ngOnInit(): void {
    this.myService.getUserById(this.id).subscribe(
      (res)=>{this.user = res;},
      (err)=>{console.log(err)}
    )
  }

}
