import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipespProvider } from '../../providers/recipesp/recipesp';
import { MealdetailsPage } from '../mealdetails/mealdetails';



/**
 * Generated class for the CategorymealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorymeal',
  templateUrl: 'categorymeal.html',
})
export class CategorymealPage {
selectedCategory;
categorymeals = [];
meals;
  constructor(public navCtrl: NavController, public navParams: NavParams, public recipespProv: RecipespProvider) {
  	this.selectedCategory = this.navParams.get('category');
  	console.log(this.selectedCategory.strCategory);
  	this.recipespProv.strCategory = this.selectedCategory.strCategory;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorymealPage');
    this.byCategories();
  }

   byCategories(){
  	this.recipespProv.getCategoryMeal().subscribe(data=> {
 	this.categorymeals.push(data);
 	console.log(this.categorymeals);
 	this.meals = this.categorymeals[0].meals;
 	})
  }

  openMealdetails(meal){
	this.navCtrl.push(MealdetailsPage,{meal : meal});
  }

}
