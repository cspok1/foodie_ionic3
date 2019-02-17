import { Injectable } from '@angular/core';
import firebase from 'firebase';


/*
  Generated class for the SavepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SavepProvider {
public savedRestaurantsListRef: firebase.database.Reference
public savedRestaurantRef: firebase.database.Reference
public savedRecipeRef: firebase.database.Reference
public mealId;

  constructor() {
    console.log('Hello SavepProvider Provider');
    firebase.auth().onAuthStateChanged(user => {
    	if (user) {
    		this.savedRestaurantsListRef = firebase
    		.database()
    		.ref(`/userProfile/${user.uid}/savedRestaurantsList`);
    		
    		this.savedRecipeRef = firebase
    		.database()
    		.ref(`/userProfile/${user.uid}/savedRecipesList`)
    	}
    });
  }
getSavedRestaurantsList(): firebase.database.Reference {
	return this.savedRestaurantsListRef;
}

getSavedRestaurantsDetail(restaurantId): firebase.database.Reference {
  return this.savedRestaurantsListRef.child(restaurantId);
}

deleteSavedRestaurant(restaurantId) {
 	this.savedRestaurantsListRef.ref.child(`/${restaurantId}`).remove();
}

getSavedRecipesList(): firebase.database.Reference {
	return this.savedRecipeRef;
}

getSavedRecipesDetail(recipeId) {
   this.mealId = this.savedRecipeRef.child(`/${recipeId}/idMeal`);
}

deleteSavedRecipe(recipeId) {
 	this.savedRecipeRef.ref.child(`/${recipeId}`).remove();
}

}
