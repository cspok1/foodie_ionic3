import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RnearmepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RnearmepProvider {
lat;
long;
radius;
count;

getAll(){
 	return this.http.get('https://developers.zomato.com/api/v2.1/search?count=20&lat='+this.lat+'&lon='+this.long+'&radius=500&sort=real_distance&order=asc&apikey=26989957fec9214b0161e9166e23e2e1');
 }

 getAllcustom(){
 	return this.http.get('https://developers.zomato.com/api/v2.1/search?count='+this.count+'&lat='+this.lat+'&lon='+this.long+'&radius='+this.radius+'&sort=real_distance&order=asc&apikey=26989957fec9214b0161e9166e23e2e1');
 }


  constructor(public http: HttpClient) {
    console.log('Hello RnearmepProvider Provider');
  }



}
