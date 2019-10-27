import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'cars-list',
    children: [
      {
        path: '',
        loadChildren:
        './cars-list/cars-list.module#CarsListPageModule'
      },
      {
        path: ':reg',
        loadChildren: './cars/cars.module#CarsPageModule'
      }
    ]
  },
  { path: 'add-car', loadChildren: './add-car/add-car.module#AddCarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
