import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { CarsService } from '../cars-service.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss']
})
export class AddCarPage implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carslistservice: CarsService
  ) {}

  cars = [];
  reg: string;
  model: string;
  name: string;

  ngOnInit() {}

  async AddCars() {
    const obj = {
      reg: this.reg,
      model: this.model,
      name: this.name
    };
    // way 1
    this.carslistservice.AddCarsByObj(obj);

    // way 2
    // this.carslistservice.AddCars(this.reg, this.model, this.name);
    this.router.navigateByUrl('/home');
  }
}
/*async AddCars() {
  const alert = await this.alertController.create({
    header: 'Alert',
    message: `Your CAR ${this.singlecar.name} IS SUCCESFULLY ADDED!`,
    // buttons: ['OK']
    buttons: [
      {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
          this.carslistservice.AddCars(this.singlecar.reg , this.singlecar.model , this.singlecar.name);
          this.router.navigateByUrl('/cars-list');
        }
      }
    ]
  });

  alert.present();

}*/
