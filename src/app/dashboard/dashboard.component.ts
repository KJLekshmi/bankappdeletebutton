import { Component } from '@angular/core';
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

  constructor(private ds:DataService){}

  deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt

    const result=this.ds.deposit(acno,psw,amnt)
    if (result){
      alert(`${amnt}Credited to your account and the balance is ${result}`)
    }
    else{
      alert('Incorrect password or username')
    }
  }

  withdraw(){
    var acno=this.acnu
    var psw=this.pswd
    var amnt=this.amont

    const result=this.ds.withdraw(acno,psw,amnt)
    if (result){
      alert(`${amnt}Debited from your account and the balance is ${result}`)
    }
    else{
      alert('Incorrect password or username')
    }

  }
}
