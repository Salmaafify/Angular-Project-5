import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { FirstServiceService } from './Services/first-service.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes:Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserDetailsComponent},
  {path:'**',component:ErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FirstServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
