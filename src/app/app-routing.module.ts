import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCreateComponent } from './main/components/request-create/request-create.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: 'list',
    component: MainComponent,
   },
  {
    path: 'create',
    component: RequestCreateComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
