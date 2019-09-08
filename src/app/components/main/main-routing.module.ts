import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from './main.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { MyWalletComponent } from '../my-wallet/my-wallet.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

const childRoutes: Routes = [
    {
        path: '',
        redirectTo: '/main/my-orders',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'my-orders',
        component: MyOrdersComponent
    },
    {
        path: 'my-wallet',
        component: MyWalletComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }

    
]

@NgModule({
    imports: [
        RouterModule.forChild(childRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule {}