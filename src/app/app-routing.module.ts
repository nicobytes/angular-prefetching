import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PreloadingStrategyService } from './services/preloading-strategy.service';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./dashboard/dashboard.module').then(m => m.DashboardModule);
    },
    pathMatch: 'full',
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    relativeLinkResolution: 'legacy',
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
