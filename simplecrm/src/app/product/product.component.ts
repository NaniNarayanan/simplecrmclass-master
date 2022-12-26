import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  photoID=0;
  productID=0;

  constructor(private actR:ActivatedRoute) {
    this.actR.params.subscribe((params)=>{
      const i=params;
      this.productID=i['productID'];
      this.photoID=i['photoID'];

    });
  }

  ngOnInit(): void {
  }

}
