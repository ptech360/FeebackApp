import { Component } from '@angular/core';

import { NavController, App } from 'ionic-angular';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  default = {
    "phone":"9806155360",
    "key":"pk123456"
  }
  page: string = "Login";
  user: string = "Consumer";
  loginForm : FormGroup;
  constructor(public navCtrl: NavController, public appCtrl: App, public formBuilder:FormBuilder) {
    this.loginForm = new FormGroup({
      "phone": new FormControl('',[Validators.required, Validators.pattern('[2-9]{2}[0-9]{8}$')]),
      "key": new FormControl('',[Validators.required])
    });
  }
  onSubmit(){
    if(this.default.phone == this.loginForm.value.phone && this.default.key == this.loginForm.value.key)
      this.appCtrl.getRootNav().setRoot(HomePage);
  }

}