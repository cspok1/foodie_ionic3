import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RecipespProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipespProvider {
	strCategory;
	strArea;
	idMeal;
	query;

	getCategories(){
 	return this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php');
 }

 getArea(){
 	 	return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
 }

 getCategoryMeal(){
 	return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+this.strCategory);
 }

 getRegionMeal(){
 	 	return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?a='+this.strArea);
 }

 getMealDetails(){
 	 	return this.http.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.idMeal);
 }

 getSearchResults(){
 	return this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+this.query);
 }


  constructor(public http: HttpClient) {
    console.log('Hello RecipespProvider Provider');
  }

}
