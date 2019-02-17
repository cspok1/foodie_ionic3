import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipespProvider } from '../../providers/recipesp/recipesp';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SavepProvider } from '../../providers/savep/savep';
import { ToastController } from 'ionic-angular';





/**
 * Generated class for the MealdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mealdetails',
  templateUrl: 'mealdetails.html',
})
export class MealdetailsPage {
selectedMeal;
meals = [];
strmeal;
category;
area;
img;
inst;
instr;

ingredientsline1;
ingredientsline2;
ingredientsline3;
ingredientsline4;
ingredientsline5;
ingredientsline6;
ingredientsline7;
ingredientsline8;
ingredientsline9;
ingredientsline10;
ingredientsline11;
ingredientsline12;
ingredientsline13;
ingredientsline14;
ingredientsline15;
ingredientsline16;
ingredientsline17;
ingredientsline18;
ingredientsline19;
ingredientsline20;

instructions;



  constructor(public navCtrl: NavController, public navParams: NavParams, public recipespProv: RecipespProvider, private iab: InAppBrowser, public savepProvider: SavepProvider, public toastCtrl: ToastController) {
  	  	this.selectedMeal = this.navParams.get('meal');
  	  	this.recipespProv.idMeal = this.selectedMeal.idMeal || this.savepProvider.mealId


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealdetailsPage');
    this.mealdetails();
  }

   mealdetails(){
  	this.recipespProv.getMealDetails().subscribe(data=> {
 	console.log(this.selectedMeal);
 	this.meals.push(data);
 	console.log(this.meals[0].meals[0].idMeal);
 	this.strmeal = this.meals[0].meals[0].strMeal;
 	this.category = this.meals[0].meals[0].strCategory;
 	this.area = this.meals[0].meals[0].strArea;
 	this.img = this.meals[0].meals[0].strMealThumb;
 	this.ingredientsline1 = this.meals[0].meals[0].strMeasure1 + " " + this.meals[0].meals[0].strIngredient1;
 	this.ingredientsline2 = this.meals[0].meals[0].strMeasure2 + " " + this.meals[0].meals[0].strIngredient2;
 	this.ingredientsline3 = this.meals[0].meals[0].strMeasure3 + " " + this.meals[0].meals[0].strIngredient3;
 	this.ingredientsline4 = this.meals[0].meals[0].strMeasure4 + " " + this.meals[0].meals[0].strIngredient4;
 	this.ingredientsline5 = this.meals[0].meals[0].strMeasure5 + " " + this.meals[0].meals[0].strIngredient5;
 	this.ingredientsline6 = this.meals[0].meals[0].strMeasure6 + " " + this.meals[0].meals[0].strIngredient6;
 	this.ingredientsline7 = this.meals[0].meals[0].strMeasure7 + " " + this.meals[0].meals[0].strIngredient7;
 	this.ingredientsline8 = this.meals[0].meals[0].strMeasure8 + " " + this.meals[0].meals[0].strIngredient8;
 	this.ingredientsline9 = this.meals[0].meals[0].strMeasure9 + " " + this.meals[0].meals[0].strIngredient9;
 	this.ingredientsline10 = this.meals[0].meals[0].strMeasure10 + " " + this.meals[0].meals[0].strIngredient10;
 	this.ingredientsline11 = this.meals[0].meals[0].strMeasure11 + " " + this.meals[0].meals[0].strIngredient11;
 	this.ingredientsline12 = this.meals[0].meals[0].strMeasure12 + " " + this.meals[0].meals[0].strIngredient12;
 	this.ingredientsline13 = this.meals[0].meals[0].strMeasure13 + " " + this.meals[0].meals[0].strIngredient13;
 	this.ingredientsline14 = this.meals[0].meals[0].strMeasure14 + " " + this.meals[0].meals[0].strIngredient14;
 	this.ingredientsline15 = this.meals[0].meals[0].strMeasure15 + " " + this.meals[0].meals[0].strIngredient15;
 	this.ingredientsline16 = this.meals[0].meals[0].strMeasure16 + " " + this.meals[0].meals[0].strIngredient16;
 	this.ingredientsline17 = this.meals[0].meals[0].strMeasure17 + " " + this.meals[0].meals[0].strIngredient17;
 	this.ingredientsline18 = this.meals[0].meals[0].strMeasure18 + " " + this.meals[0].meals[0].strIngredient18;
 	this.ingredientsline19 = this.meals[0].meals[0].strMeasure19 + " " + this.meals[0].meals[0].strIngredient19;
 	this.ingredientsline20 = this.meals[0].meals[0].strMeasure20 + " " + this.meals[0].meals[0].strIngredient20;
 	
 	this.instructions = this.meals[0].meals[0].strInstructions;
 	this.instr = this.instructions.split(".");
 	})
  }

  browser(){
  	this.iab.create(this.meals[0].meals[0].strYoutube ,'_blank',{location:'yes'});
  }


  save(){
 	let toast = this.toastCtrl.create({
      message: 'Saved!',
      duration: 2000
    });
 	this.savepProvider.savedRecipeRef.push(this.selectedMeal);
 	console.log(this.selectedMeal);
 	toast.present();

 	
 }

}
