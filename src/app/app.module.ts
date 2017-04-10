import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ConsumerHomePage } from '../pages/consumer/home/home.component';
import { ProductComponent } from '../pages/consumer/product/product.component';
import { RetailerHomePage } from '../pages/retailer/home/home.component';
import { Page1 } from '../pages/retailer/pages/page1/page1';
import { Page2 } from '../pages/retailer/pages/page2/page2';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ConsumerHomePage,
    ProductComponent,
    RetailerHomePage,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ConsumerHomePage,
    ProductComponent,
    RetailerHomePage,
    Page1,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
