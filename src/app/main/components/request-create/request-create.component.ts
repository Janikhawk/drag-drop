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
      this.router.navigate(['list']);
    });

  }

}
