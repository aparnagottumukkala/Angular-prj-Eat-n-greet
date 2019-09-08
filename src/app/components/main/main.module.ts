import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MainRoutingModule } from './main-routing.module';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { MyWalletComponent } from '../my-wallet/my-wallet.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@NgModule({

    imports: [

        CommonModule,
        // FormsModule,
        // ReactiveFormsModule,
        MaterialModule,
        MainRoutingModule,
    ],
    declarations: [
        MainComponent,
        MyOrdersComponent,
        MyWalletComponent,
        LoginComponent,
        SignupComponent
    ],
    exports: [
        CommonModule,
        MainRoutingModule
    ],
})
export class MainModule { }
