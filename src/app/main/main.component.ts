import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './components/api/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  listData;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // подписка на дату, получение данных с сервера
    this.apiService.getList().subscribe( data => {
      this.listData = data;
    });
  }

  // переход на карточку создания
  navigateToCreate() {
    this.router.navigate(['create']).then(() => {
      console.log('WENT');
    }, (error) => console.log(error));
  }

}
