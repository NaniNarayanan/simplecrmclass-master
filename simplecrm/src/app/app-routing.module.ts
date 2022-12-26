import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddloanComponent } from './addloan/addloan.component';
import { LoansComponent } from './loans/loans.component';
import { LoantypesComponent } from './loantypes/loantypes.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { UnsavedGuard } from './unsaved.guard';
import { PaymentsComponent } from './payments/payments.component';
import { ResolveGuard } from './resolve.guard';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
const routes: Routes = [
  {
  //   path:'loantypes',
  //   // component:LoantypesComponent,
  //   children:[{path:'',component:LoantypesComponent
  //   }, {path:'addloan',component:AddloanComponent
  // }, {path:'loans',component:LoansComponent},{path:'add-new-loan',redirectTo:'addloan'}]
  // 
  // path:'product/:productID/photo/:photoID',component:ProductComponent,
  // path:'clients',
  // component:ClientsComponent,
  // path:'search',
  // component:SearchComponent},
  // { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
//   {
//   path:'**',
//   component:PagenotfoundComponent
// },
path:'clients',
component:ClientsComponent,
canActivate:[AdminGuard]
},
{
  path:'addcustomercomponent',
  component:AddcustomerComponent
},
{
  path:'clients',
  component: ClientsComponent,
  canActivate: [AdminGuard, AuthGuard]
  },
  
  {
    path:'search',
    component:SearchComponent,
    canDeactivate:[UnsavedGuard]
  },
  {
    path:'admin',
    component:PaymentsComponent
  },
 
  {
    path:'leads',
    component:LoansComponent,
    resolve:{
      data:ResolveGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
