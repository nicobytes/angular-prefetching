import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PreloadingStrategyService } from './services/preloading-strategy.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./dashboard/dashboard.module').then(m => m.DashboardModule);
    },
    pathMatch: 'full',
    data: { preload : true }
  },
  {
    path: 'form',
    loadChildren: () => {
      return import('./form/form.module').then(m => m.FormModule);
    },
  },
  {
    path: 'table',
    loadChildren: () => {
      return import('./table/table.module').then(m => m.TableModule);
    },
    data: { preload : true }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: PreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
