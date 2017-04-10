import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
// import { StatusBar, Splashscreen } from 'ionic-native';

import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'consumer-home-page',
  templateUrl: 'home.component.html'
})
export class ConsumerHomePage {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProductComponent;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Products', component: ProductComponent }
    ];

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}