import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HighpipePipe } from './highpipe.pipe';
import { LoansComponent } from './loans/loans.component';
import { AddloanComponent } from './addloan/addloan.component';
import { LoantypesComponent } from './loantypes/loantypes.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    HighpipePipe,
    LoansComponent,
    AddloanComponent,
    LoantypesComponent,
    ProductComponent,
    ClientsComponent,
    SearchComponent,
    PagenotfoundComponent,
    AddcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
