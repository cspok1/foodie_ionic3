import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavepProvider } from '../../providers/savep/savep';
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the SavedrestaurantdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-savedrestaurantdetails',
  templateUrl: 'savedrestaurantdetails.html',
})
export class SavedrestaurantdetailsPage {
selectedRestaurant: any = {};
address;
  constructor(public navCtrl: NavController, public navParams: NavParams, public savepProvider: SavepProvider, private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedrestaurantdetailsPage');
    this.savepProvider
    		.getSavedRestaurantsDetail(this.navParams.get("restaurantId"))
			.on("value", restaurantSnapshot => {
				this.selectedRestaurant = restaurantSnapshot.val();
				this.selectedRestaurant.id = restaurantSnapshot.key;
				this.address = this.selectedRestaurant.location.address;
			});
			console.log(this.selectedRestaurant);


		};

browser(){
  	this.iab.create('https://www.google.com/maps/search/?api=1&query='+ this.selectedRestaurant.name ,'_blank',{location:'yes'});
  }

  
  }


