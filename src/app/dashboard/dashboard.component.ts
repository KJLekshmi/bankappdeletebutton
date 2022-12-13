import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  [x: string]: any;
  acno=''
  psw=''
  amnt=''

  acnu=''
  pswd=''
  amont=''

  user=''

  constructor(private ds:DataService,private fb:FormBuilder){
    // access username
    this.user=this.ds.currentname
    
  }
  depositForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]})


  withdrawForm=this.fb.group({acnu:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amont:['',[Validators.required,Validators.pattern('[0-9]+')]]})
  
  deposit(){
    var acno=this.depositForm.value.acno
    var psw=this.depositForm.value.psw
    var amnt=this.depositForm.value.amnt

    if(this.depositForm.valid){
    const result=this.ds.deposit(acno,psw,amnt)
    if (result){
      alert(`${amnt}Credited to your account and the balance is ${result}`)
    }
    else{
      alert('Incorrect password or username')
    }
   
   }
   else{
    alert('invalid')
   }
  }


  withdraw(){
    var acno=this.withdrawForm.value.acnu
    var psw=this.withdrawForm.value.pswd
    var amnt=this.withdrawForm.value.amont

    const result=this.ds.withdraw(acno,psw,amnt)
    if (result){
      alert(`${amnt}Debited from your account and the balance is ${result}`)
    }
    else{
      alert('Incorrect password or username')
    }

  }
}
