import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simplecrm';
  successmsg = true;
  showmsg = true;
  contacts = [
    {
      'firstname': 'Nani',
      'lastname': 'Narayanan',
      'contactid': '1804',
    },
    {
      'firstname': 'Mugi',
      'lastname': 'Mugesh',
      'contactid': '1234',
    },
    {
      'firstname': 'Amizh',
      'lastname': 'Amizhthan',
      'contactid': '5678',
    },
    {
      'firstname': 'Cathy',
      'lastname': 'Cathrien',
      'contactid': '2468',
    },
  
  ];
  category='clothing';
  category1='food';
  category2='Accessories';
  salarypa=520000;
  txtcolor='white';
  bgcolor='pink';
  borders='3px solid red';
  stylevar='c3';
  stylevar2='c2';
  role='admin';
  getClassName(){
    return 'c3';
  };
  page_heading="Welcome";
  page_count=10;
  user_object={'firstname':'A','lastname':'B'};
  isUserLoggedIn=true;
  user={
    firstname:"Naga",
    city:"chennai",
    citycode:6000020
  };
}

