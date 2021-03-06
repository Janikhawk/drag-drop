import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RequestCreateComponent} from './main/components/request-create/request-create.component';
import { RequestListComponent } from './main/components/request-list/request-list.component';
import { DragAndDropComponent } from './main/components/drag-and-drop/drag-and-drop.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardActions, MatCardModule} from '@angular/material/card';
import { MainComponent } from './main/main.component';
import { ApiService } from './main/components/api/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DragDirective} from "./dragDrop.directive";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    RequestCreateComponent,
    RequestListComponent,
    DragAndDropComponent,
    MainComponent,
    DragDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
