import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../cars-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {


  constructor(
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private carslistservice: CarsService) { }

    cars = [];

    singlecar;

  ngOnInit() {
    this.cars = this.carslistservice.getAllcars();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('reg');

      this.singlecar = this.cars.find(obj => {
        return obj.reg.includes(val);
      });
    });

  }
  async deleteCars() {
    console.log('deleteCars', this.singlecar);

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singlecar.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.carslistservice.deleteCars(this.singlecar.reg);
            this.router.navigateByUrl('/home');
          }
        }
      ]
    });

    alert.present();

    // this.everythingstudentService.deleteStudent(this.singleStudent.id);
    // const url = `studentslist`;

    // this.router.navigateByUrl(url);

    // this.studentsListService.deleteAStudent(this.singleStudent.id);
  }
}

// const alert = await this.alertController.create({
//   header: 'Success',
//   // subHeader: 'Subtitle',
//   message: `${this.singleStudent.name} has been removed successfully`,
//   buttons: ['OK']
//   // buttons: [
//   //   {
//   //     text: 'Okay',
//   //     handler: () => {
//   //       console.log('Confirm Okay');
//   //       this.router.navigateByUrl('/studentslist');
//   //     }
//   //   }
//   // ]
// });

// alert.present();

