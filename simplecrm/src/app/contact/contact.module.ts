import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';



@NgModule({
  declarations: [
    AddContactComponent,
    EditContactComponent,
    DeleteContactComponent,
    ListContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
