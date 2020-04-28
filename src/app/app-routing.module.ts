import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCreateComponent } from './main/components/request-create/request-create.component';
import { MainComponent } from './main/main.component';
import { DragAndDropComponent } from "./main/components/drag-and-drop/drag-and-drop.component";

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
    path: 'check',
    component: DragAndDropComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
