import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clientlist=[
    {
    clientID:10,
    firstname:'Raj',
    lastname:'kumar',
  },
  {
    clientID:11,
    firstname:'Manoj',
    lastname:'kumar',
  },
  {
    clientID:12,
    firstname:'Suraj',
    lastname:'kumar',
  },
  {
    clientID:13,
    firstname:'Sanjay',
    lastname:'kumar',
  },
  {
    clientID:14,
    firstname:'Ravi',
    lastname:'kumar',
  },
  {
    clientID:15,
    firstname:'Taj',
    lastname:'kumar',
  },
  {
    clientID:16,
    firstname:'Vel',
    lastname:'kumar',
  },
  {
    clientID:17,
    firstname:'Prem',
    lastname:'kumar',
  },
  {
    clientID:18,
    firstname:'Ramesh',
    lastname:'kumar',
  },
  {
    clientID:19,
    firstname:'Suresh',
    lastname:'kumar',
  },
  {
    clientID:20,
    firstname:'Sandeep',
    lastname:'kumar',
  },
]

}
