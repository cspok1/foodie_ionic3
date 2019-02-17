import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MealdetailsPage } from '../mealdetails/mealdetails';


/**
 * Generated class for the RecipesearchresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipesearchresult',
  templateUrl: 'recipesearchresult.html',
})
export class RecipesearchresultPage {
results;
allmeals = [];
meals;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	  	this.results = this.navParams.get('data');
  	  	this.allmeals.push(this.results.meals);
  	  	this.meals = this.allmeals[0]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesearchresultPage');
    console.log(this.meals);
  }

  openMealdetails(meal){
	this.navCtrl.push(MealdetailsPage,{meal : meal});
  }

}
