import { Component, OnInit } from '@angular/core';

import { CarsService } from './../cars-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.page.html',
  styleUrls: ['./cars-list.page.scss'],
})
export class CarsListPage implements OnInit {

  constructor(
    private router: Router,
    private carslistservice: CarsService
    ) { }

    cars = [];

  ngOnInit() {
  // this.students = this.studentsListService.getStudents;
  this.cars = this.carslistservice.getAllcars();
  }

  addpage() {
    this.router.navigateByUrl('add-car');
  }

  changeUrl(user) {
    const reg = user.reg;
    const url = `cars-list/${reg}`;

    this.router.navigateByUrl(url);

    // or

    // this.router.navigate([url]);
  }

}

