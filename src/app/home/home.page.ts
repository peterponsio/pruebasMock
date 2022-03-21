import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fakeList: any[] = [];

  constructor(private data:DataServiceService) {}

  ionViewWillEnter() {

    this.data.getItems().subscribe(res=>{
      console.log(res);
      this.fakeList = res;
    })
   
  }

  onClickAdd(){
    this.data.addItems().subscribe(res =>{
      console.log(res);

      res != null ?  this.fakeList = [res,...this.fakeList] : this.fakeList;
      
     
    });
    
  }

}
