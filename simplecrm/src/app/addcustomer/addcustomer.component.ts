import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  firstname:string='';
  u:any;
  constructor(private uService:UsersService){}

  postfn(){
    const postbody={
      title:'CSE',
      name:'abcd'
    };
    this.uService.addUser(postbody).subscribe(
      data=>{
        console.log(data);
      },
      (err)=>{console.log("Error");
    })
  }

  ngOnInit(): void {
    this.uService.getusers().subscribe(data=>{this.u=data;},
      (err)=>{
        console.log("unable to get"+err);
      })
  }

}
