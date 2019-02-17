import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SavepProvider } from '../../providers/savep/savep';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';




/**
 * Generated class for the RnearmedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rnearmedetails',
  templateUrl: 'rnearmedetails.html',
})
export class RnearmedetailsPage {
selectedRestaurant;
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, public savepProvider: SavepProvider, public toastCtrl: ToastController) {
  	this.selectedRestaurant = this.navParams.get('restaurant');
  	console.log(this.selectedRestaurant);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RnearmedetailsPage');
  }

browser(){
  	this.iab.create('https://www.google.com/maps/search/?api=1&query='+ this.selectedRestaurant.restaurant.name ,'_blank',{location:'yes'});
  }

 save(){
 	let toast = this.toastCtrl.create({
      message: 'Saved!',
      duration: 2000
    });
 	this.savepProvider.savedRestaurantsListRef.push(this.selectedRestaurant.restaurant);
 	toast.present();

 	
 }

}
