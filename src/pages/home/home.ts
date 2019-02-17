import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RnearmePage } from '../rnearme/rnearme';
import { RecipesPage } from '../recipes/recipes';
import { SavePage } from '../save/save';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
openrnearme(){
	this.navCtrl.push(RnearmePage);
}

openRecipe(){
	this.navCtrl.push(RecipesPage);
}

goToProfile(): void {
this.navCtrl.push("ProfilePage");
}

openSaved(): void {
	this.navCtrl.push(SavePage);
}
}
