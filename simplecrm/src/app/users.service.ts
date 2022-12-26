import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  
  
  getusers(){
    const head=new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'123456'
    });
    
    const par=new HttpParams().set('pageSize','10').set('pageNum','100');
    return this.http.get('https://jsonplaceholder.typicode.com/users',{headers:head,params:par});
  }
  addUser(body: any){
   return this.http.post('https://jsonplaceholder.typicode.com/user',body)
  }
}
