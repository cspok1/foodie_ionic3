import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipespProvider } from '../../providers/recipesp/recipesp';
import { MealdetailsPage } from '../mealdetails/mealdetails';

/**
 * Generated class for the RegionmealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regionmeal',
  templateUrl: 'regionmeal.html',
})
export class RegionmealPage {
selectedRegion;
regionmeals = [];
Ameals;
  constructor(public navCtrl: NavController, public navParams: NavParams, public recipespProv: RecipespProvider) {
  	this.selectedRegion = this.navParams.get('region');
  	this.recipespProv.strArea = this.selectedRegion.strArea;
  	 	console.log(this.selectedRegion.strArea);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegionmealPage');
    this.byRegion();
  }

  byRegion(){
  	this.recipespProv.getRegionMeal().subscribe(data=> {
 	this.regionmeals.push(data);
 	this.Ameals = this.regionmeals[0].meals;
 	})
  }

  openMealdetails(meal){
	this.navCtrl.push(MealdetailsPage,{meal : meal});
  }

}
