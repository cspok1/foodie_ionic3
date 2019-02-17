import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavepProvider } from '../../providers/savep/savep';
import { SavedrestaurantdetailsPage } from '../savedrestaurantdetails/savedrestaurantdetails';
import { MealdetailsPage } from '../mealdetails/mealdetails';




/**
 * Generated class for the SavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public savepProvider: SavepProvider) {
  }

  	public savedRestaurantsList: Array<any>;
  	savedItems = 'restaurants';
  	public meals: Array<any>;



  ionViewDidLoad(restaurantId) {
    console.log('ionViewDidLoad SavePage');
    this.savepProvider.getSavedRestaurantsList().on("value", savedRestaurantsListSnapshot => {
    	this.savedRestaurantsList = [];
    	savedRestaurantsListSnapshot.forEach(snap => {
    		this.savedRestaurantsList.push({
    			id: snap.key,
    			name: snap.val().name,
    			location: snap.val().location.locality_verbose,
  				featured_image: snap.val().featured_image,
  				cuisines: snap.val().cuisines
    		});
    		return false;
    	});
    });
this.savepProvider.getSavedRecipesList().on("value", savedRecipesListSnapshot => {
    	this.meals = [];
    	savedRecipesListSnapshot.forEach(snap => {
    		this.meals.push({
    			id: snap.key,
    			strMeal: snap.val().strMeal,
  				strMealThumb: snap.val().strMealThumb,
  				idMeal: snap.val().idMeal
    		});
    		return false;
    	});
    });
  }

  goToRestaurantDetail(restaurantId):void {
	this.navCtrl.push(SavedrestaurantdetailsPage, { restaurantId: restaurantId });
}

delete(id):void{
	this.savepProvider.deleteSavedRestaurant(id);
}

openMealdetails(meal){
	this.navCtrl.push(MealdetailsPage,{meal : meal});
  }

  deleter(id){
  	this.savepProvider.deleteSavedRecipe(id);
  }

}
