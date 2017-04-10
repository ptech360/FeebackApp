import { Component } from '@angular/core';

import { NavController, App } from 'ionic-angular';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ConsumerHomePage } from '../consumer/home/home.component';
import { RetailerHomePage } from '../retailer/home/home.component';
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
  consumerLoginForm : FormGroup;
  retailerLoginForm : FormGroup;
  constructor(public navCtrl: NavController, public appCtrl: App, public formBuilder:FormBuilder) {
    this.consumerLoginForm = new FormGroup({
      "phone": new FormControl('',[Validators.required, Validators.pattern('[2-9]{2}[0-9]{8}$')]),
      "key": new FormControl('',[Validators.required])
    });
    this.retailerLoginForm = new FormGroup({
      "username": new FormControl('',[Validators.required]),
      "password": new FormControl('',[Validators.required])
    });
  }
  consumerSubmit(){
    if(this.default.phone == this.consumerLoginForm.value.phone && this.default.key == this.consumerLoginForm.value.key)
      this.appCtrl.getRootNav().setRoot(ConsumerHomePage);
  }

  
  retailerSubmit(){
    this.appCtrl.getRootNav().setRoot(RetailerHomePage);
  }

}