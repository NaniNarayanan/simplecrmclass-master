import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highpipe'
})
export class HighpipePipe implements PipeTransform {
  constructor(private samit:DomSanitizer){}

  transform(value:string,city:string): any {
    // return 'Adyar:'+citycode;
  //   if(citycode===6000020)
  //   {
  //     return 'This is Adyar';
  //   }
  //   else{
  //     return 'This is not Adyar';
  //   }
  // 
    // if(city==="chennai")
    // {
    //   return city+ citycode;
    // }
    // else
    // {
    //   return "Different City";
    // }
  return this.samit.bypassSecurityTrustHtml('<div style="color:red">'+city+'</div>');
  }

}