import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails:any
  currentname=''
  currentacno=''

  constructor() { 
    this.getDetails()
  }

  saveDetails(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.currentname){
      localStorage.setItem("currentname",JSON.stringify(this.currentname))
    }
    if(this.currentacno){
      localStorage.setItem("currentacno",JSON.stringify(this.currentacno))
    }
  }

  getDetails(){
    if (localStorage.getItem('database')){
      this.userDetails=JSON.parse(localStorage.getItem('database') || '')
    }
    if (localStorage.getItem('currentname')){
      this.currentname=JSON.parse(localStorage.getItem('currentname') || '')
    }
    if (localStorage.getItem('currentacno')){
      this.currentacno=JSON.parse(localStorage.getItem('currentacno') || '')
    }
  }
  // userDetails: any = {
  //   1000: { acno: 1000, username: "anu", password: 123, balance: 0,transaction:[] },
  //   1001: { acno: 1001, username: "anuhul", password: 123, balance: 0,transaction:[] },
  //   1002: { acno: 1002, username: "malu", password: 123, balance: 0,transaction:[] },
  //   1003: { acno: 1003, username: "meenu", password: 123, balance: 0,transaction:[] }
  // }
  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { acno, username: uname, password: psw, balance: 0 ,transaction:[]}
      this.saveDetails()
      return true
    }
  }
  login(acno: any, psw: any) {
    var userDetails=this.userDetails
    // var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]['password']) {
        //acnumbr
        this.currentacno=acno

        // store username
        this.currentname=userDetails[acno]['username']
        this.saveDetails()
        return true
      }
      else {
        return false
      }

    }
    else {
      return false
    }

  }

  deposit(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]['password']) {
        userDetails[acno]['balance'] += amnt
        userDetails[acno]['transaction'].push({type:'CREDIT',amount:amnt})
        this.saveDetails()
        return userDetails[acno]['balance']
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  withdraw(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails
    var amnt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]['password']) {
        if (amnt <= userDetails[acno]['balance']) {
          userDetails[acno]['balance'] -= amnt
          userDetails[acno]['transaction'].push({type:'DEBIT',amount:amnt})
          this.saveDetails()
          return userDetails[acno]['balance']
        }
        else {
          alert('Insufficient balance')
        }
      }
      else {
        alert('incorrect password')
        return false
      }
    }
    else {
      alert('incorrect account number')
      return false
    }
  }
  gettransaction(acno:any){
    return this.userDetails[acno]['transaction']

  }

}
