import { Component, OnInit } from '@angular/core';
import {FileHandle} from "../../../dragDrop.directive";
import { ApiService } from '../api/api.service';
import { Subscription} from "rxjs";
import {HttpClient, HttpRequest, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  files: FileHandle[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  upload(): void {
    //get image upload file obj;
    const myFormData:FormData = new FormData();
    this.files.forEach(file => {
      myFormData.append("123", file.file.slice(), "123.jpg");
    });
    this.apiService.check(myFormData).subscribe(event=>{
        if (event instanceof HttpResponse) {
          alert('upload complete, old school alert used')
        }
      },
      error=>{
        alert('!failure cause:' + error.toString())
      });
  }

  ngOnInit(): void {
  }
}
