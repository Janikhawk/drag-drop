import { Component, Input, OnInit } from '@angular/core';

export interface Request {
  person: Person,
  car: Car,
  requestDate: Date,
  status: Status
}

export interface Status {
  valueEn: string

}
export interface Car {
  model: CarModel,
  number: string
}

export interface CarModel {
  valueEn: string

}

export interface Person {
  firstName: string,
  lastName: string,
  block: Block,
  roomNumber: string
}

export interface Block {
  number: string
}


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  displayedColumns = ['person', 'block', 'roomNumber', 'car', 'status'];
  // dataSource = ELEMENT_DATA;

  // data is the response from backend
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
