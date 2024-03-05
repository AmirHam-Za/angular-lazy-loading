import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }, 
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 
  
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
