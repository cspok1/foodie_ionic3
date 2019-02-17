import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipespProvider } from '../../providers/recipesp/recipesp';
import { CategorymealPage } from '../categorymeal/categorymeal';
import { RegionmealPage } from '../regionmeal/regionmeal';
import { RecipesearchresultPage } from '../recipesearchresult/recipesearchresult';

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
	categories = [];
	cats;
	regions = [];
	regs;
	recipes = 'categories'

  constructor(public navCtrl: NavController, public navParams: NavParams, public recipespProv: RecipespProvider) {
  }

  onSearch(event){
  	console.log(event.target.value);
  	this.recipespProv.query = event.target.value
  	this.recipespProv.getSearchResults().subscribe(data=> {
 	console.log(data);
 	this.navCtrl.push(RecipesearchresultPage,{data : data});
 	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
    this.byCategories();
    this.byArea();
  }

  byCategories(){
  	this.recipespProv.getCategories().subscribe(data=> {
 	this.categories.push(data);
 	console.log(this.categories);
 	this.cats = this.categories[0].categories;

 	})
  }

  byArea(){
  	this.recipespProv.getArea().subscribe(data=> {
 	this.regions.push(data);
 	console.log(this.regions);
 	this.regs = this.regions[0].meals;

 	})
  }

  openCategoryMeal(category){
	this.navCtrl.push(CategorymealPage,{category : category});
  }

  openRegionMeal(region){
	this.navCtrl.push(RegionmealPage,{region : region});
  }

}
