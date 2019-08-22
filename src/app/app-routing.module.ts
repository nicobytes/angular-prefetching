import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PreloadingStrategyService } from './services/preloading-strategy.service';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    pathMatch: 'full',
  },
  {
    path: 'form',
    loadChildren: () =>  import('./form/form.module').then(m => m.FormModule),
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
