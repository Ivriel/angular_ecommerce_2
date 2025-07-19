import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router) {}

    loginObj:any = {
      userName:'',
      password:''
    }

    onLogin(){
      if(this.loginObj.userName === "admin" && this.loginObj.password == "334455") {
        this.router.navigateByUrl("products")
      } else {
        alert("Wrong Credentials")
      }
    }
}
