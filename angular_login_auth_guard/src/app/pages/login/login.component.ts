import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ApicallService } from '../../apicall.service';

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
    "EmailId":"haram",
    "Password":"haram"
  };

  object1:any = {
    "name": "Apple MacBook Pro 16",
    "data": {
       "year": 2019,
       "price": 1849.99,
       "CPU model": "Intel Core i9",
       "Hard disk size": "1 TB"
    }
 };

  constructor(private httpClient: HttpClient){}

  onLogin(){
    console.log("Email: ",this.loginObj.Email);
    console.log("Password: ", this.loginObj.Password);
    this.httpClient.post("https://freeapi.miniprojectideas.com/api/User/Login",this.loginObj).subscribe((res:any)=>{
      console.log(res.message);
      if(res.result){
        alert("Welcome");
      }
      else{
        alert("Try Again");
      }
    })

    // this.httpClient.get("https://api.restful-api.dev/objects").subscribe(data => {
    //   console.log(data);
    // })

    // this.httpClient.post("https://api.restful-api.dev/objects",this.object1).subscribe((res:any)=>{
    //   console.log("name: ",res.name);
    //   console.log("data: ",res.data);

    // })
    
  }

}
