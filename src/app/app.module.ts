import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { MainModule } from './components/main/main.module';
// import { LoginComponent } from './components/login/login.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { MyWalletComponent } from './components/my-wallet/my-wallet.component';
// import { MyOrdersComponent } from './components/my-orders/my-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // SignupComponent,
    // MyWalletComponent,
    // MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
