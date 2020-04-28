import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.scss']
})
export class RequestCreateComponent implements OnInit {

  form: FormGroup = this.fb.group({
    firstName: null,
    lastName: null,
    address: null,
    city: null,
    state: null,
    postalCode: null,
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createData() {
    console.log(this.form.value);
    this.apiService.createRequest(this.form.value).subscribe((responseData) => {
      // this.router.navigate(['list']);
    });

  }

  blocks: Block[] = [
    {id: 1, number: 11},
    {id: 2, number: 19},
    {id: 3, number: 20},
    {id: 4, number: 21},
    {id: 5, number: 22},
    {id: 6, number: 23},
    {id: 7, number: 24},
    {id: 8, number: 25},
    {id: 9, number: 26},
    {id: 10, number: 27},
    {id: 11, number: 38},
    {id: 12, number: 39}
  ];

}

// import {Component} from '@angular/core';

export interface Block {
  id: number;
  number: number;
}
