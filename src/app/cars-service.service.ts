import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars = [
    { reg: '3198', model: '2000', name: 'GLI' },
    { reg: '3200', model: '2011', name: 'FREED' },
    { reg: '3201', model: '1990', name: 'Ferrari' },
    { reg: '3204', model: '1999', name: 'BMW' },
    { reg: '3217', model: '1998', name: 'Silverado' },
    { reg: '3222', model: '1995', name: 'Ford' },
    { reg: '3223', model: '1985', name: 'Mehran ' },
    { reg: '3225', model: '1970', name: 'VXR' },
    { reg: '3227', model: '1979', name: 'SWIFT' },
    { reg: '3238', model: '2004', name: 'Lamborgini' },
    { reg: '3240', model: '2005', name: 'VITZ' },
    { reg: '3251', model: '2008', name: 'PRADO' },
    { reg: '3279', model: '2013', name: 'LAND CRUISER' },
    { reg: '3280', model: '2015', name: 'MERCEDES BENS' },
    { reg: '3281', model: '2006', name: 'HONDA CIVIC' },
    { reg: '3282', model: '2004', name: 'XLI' },
    { reg: '3343', model: '2001', name: 'suzuki' }
  ];

  constructor() {}
  get getcars() {
    return this.cars;
  }
  getAllcars() {
    return this.cars;
  }

  AddCars(register: string, mode: string, nam: string) {
    this.cars.push({ reg: register, model: mode, name: nam });
  }

  AddCarsByObj(carObj) {
    this.cars.push(carObj);
  }

  /*AddCars(register: string , model: string , name: string) {
    this.cars.push({ reg: this.register , model, name
    });
  }*/

  deleteCars(reg: string) {
    this.cars = this.cars.filter(e => {
      return e.reg !== reg;
    });
  }
}
