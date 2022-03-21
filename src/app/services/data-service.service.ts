import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService  {


  listItems: any[] = [];

  item: any=  {
    id: 5,
    name: 'Nike',
    description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
    price: '$200'
  }


  constructor(private httpClient: HttpClient) { }


  getItems() {
    return this.httpClient.get<any[]>("api/items/");
   }

   addItems(): Observable<any> {
    return this.httpClient.post<any>("api/items/", this.item);
   }  


}
