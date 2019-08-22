import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
