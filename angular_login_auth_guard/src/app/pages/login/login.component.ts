import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[]
})
export class LoginComponent {
  loginObj:any = {
    "EmailId":"",
    "Password":""
  };

  http = inject(HttpClient);

  onLogin(){
    debugger;
    console.log("you are inside login function:)");
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res:any) => {
      debugger;
      if(res.result){
        alert("Welcome!! You have logged in successfully");
      }
      else{
        alert("Incorrent Credentials. Please try again.");
      }
    })
  }

}
