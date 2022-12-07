import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   aim="Your Perfect Banking Partner"
   data="Enter Account Number"
   acno=""
   psw=""

  userDetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},
    1001:{acno:1001,username:"anuhul",password:123,balance:0},
    1002:{acno:1002,username:"malu",password:123,balance:0},
    1003:{acno:1003,username:"meenu",password:123,balance:0}
  }

  constructor (private router:Router, private ds:DataService){

  }

  login(){

    var acno=this.acno
    var psw=this.psw

    const result=this.ds.login(acno,psw)
    if(result){
      alert('Login success')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('Invalid username or password')
    }
  }
  // anoChange(event:any){
  //   this.acno=event.target.value

  // }
  // pwdChange(event:any){
  //   this.pwd=event.target.value
  // }
}


