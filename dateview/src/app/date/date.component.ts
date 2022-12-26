import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  constructor() {}
  date=formatDate(new Date(), 'MM/dd/yyyy', 'en');
  onClick(){
    alert("Todays DATE:"+this.date)
  }
  ngOnInit(): void {
      
  }
}
