import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  createRequest(data) {
    return this.http.post('http://localhost:8080/request/', data);
  }

  getList() {
    return this.http.get('http://localhost:8080/request/');
  }

  check(data) {
    return this.http.post('http://localhost:8080/car/save-image', data);
  }
}
