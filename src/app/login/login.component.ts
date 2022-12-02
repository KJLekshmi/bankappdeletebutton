import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   aim="Your Perfect Banking Partner"
   data="Enter Account Number"
   acno=""
   pwd=""

  userDetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},
    1001:{acno:1001,username:"anuhul",password:123,balance:0},
    1002:{acno:1002,username:"malu",password:123,balance:0},
    1003:{acno:1003,username:"meenu",password:123,balance:0}
  }
  login(a:any,b:any){
    this.acno=a.value
    this.pwd=b.value
    
    var acno=this.acno
    var psw=this.pwd
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]['password']){
        alert('Login Success')
      }
      else{
        alert('incorrect password')
      }

    }
    else{
      alert('Incorrect Username')
    }
    // alert('login clicked')
  }
  // login(){
  //   var acno=this.acno
  //   var psw=this.pwd
  //   var userDetails=this.userDetails
  //   if(acno in userDetails){
  //     if(psw==userDetails[acno]['password']){
  //       alert('Login Success')
  //     }
  //     else{
  //       alert('incorrect password')
  //     }

  //   }
  //   else{
  //     alert('Incorrect Username')
  //   }
  //   // alert('login clicked')
  // }
//   acnoChange(event:any){
//     this.acno=event.target.value

//   }
//   pwdChange(event:any){
//     this.pwd=event.target.value
//   }
}


