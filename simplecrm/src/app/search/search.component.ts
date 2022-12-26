import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // constructor(private a:ActivatedRoute) {
  //   this.a.queryParams.subscribe(Params=>{console.log(Params);
  //   });
  //  }
  color='';
  priceTo=0;
  priceFrom=0;
  size='M';

  constructor(private a:ActivatedRoute){
    this.a.queryParams.subscribe(Params=>{
      this.color=Params['color'];
      this.priceTo=Params['priceTo'];
      this.priceFrom=Params['priceFrom'];
      this.size=Params['size'];
    });
  };

  isdir=true;
    
 

  ngOnInit(): void {
  }
  

}
