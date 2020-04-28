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
    return this.http.post('URL', data);
  }

  getList() {
    return this.http.get('URL');
  }
}
