import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent 
},
{
    path: 'main', component: MainComponent
},
{
  path: 'main', component: MainComponent, loadChildren: './components/main/main.module#MainModule'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
