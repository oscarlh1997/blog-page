import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logging-page',
  templateUrl: './logging-page.component.html',
  styleUrls: ['./logging-page.component.css']
})
export class LoggingPageComponent implements OnInit{

  signupUser : any [] = [];
  signupObject  =  {
    userName: '',
    password: '',
    repeatPassword:'',
    email:''
  }
  @Input() signinObject =  {
    userName: '',
    password: ''
  }
  
  constructor(){}

  ngOnInit(): void {}

  onSignUp()  {
    this.signupUser.push(this.signupObject)
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUser))
  }

  onSignIn()  {

  }

  

  
}
