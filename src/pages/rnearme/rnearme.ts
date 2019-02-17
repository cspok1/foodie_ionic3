import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { RnearmepProvider } from '../../providers/rnearmep/rnearmep';
import { AlertController } from 'ionic-angular';
import { RnearmedetailsPage } from '../rnearmedetails/rnearmedetails';
import { LoadingController } from 'ionic-angular';
import { RnearmesettingsPage } from '../rnearmesettings/rnearmesettings';



/**
 * Generated class for the RnearmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rnearme',
  templateUrl: 'rnearme.html',
})
export class RnearmePage {
restaurantsArray = [];
restaurants;
randomRestaurant;
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, public rnearmeProv : RnearmepProvider, public alertCtrl: AlertController, public loading: LoadingController) {
  }



getLocation(){
	let loader = this.loading.create({
    content: 'Getting restaurants...',
  });

loader.present().then(() => {

	this.geolocation.getCurrentPosition().then((resp) => {
	this.rnearmeProv.lat = resp.coords.latitude
 	this.rnearmeProv.long = resp.coords.longitude

 	this.rnearmeProv.getAll().subscribe(data=> {
 	this.restaurantsArray.push(data)
	console.log(this.restaurantsArray)
	this.restaurants = this.restaurantsArray[0].restaurants;
	console.log(this.restaurants);
	 loader.dismiss();

 	})

 	

 	


}).catch((error) => {
  console.log('Error getting location', error);

});
})
}

shuffle(){
	console.log(this.restaurants);
	var i = (Math.floor(Math.random() * this.restaurants.length));
	this.randomRestaurant = this.restaurants[i];
	this.showRandomRestaurant();
}

showRandomRestaurant() {
    let confirm = this.alertCtrl.create({
      title: 'You should eat at',
      message: this.randomRestaurant.restaurant.name,
      buttons: [
        {
          text: 'More Details',
          handler: () => {
            console.log('More details clicked');
            this.openPage(this.randomRestaurant);
          }
        },
        {
          text: 'Close',
          handler: () => {
            console.log('close clicked');
          }
        }
      ]
    });
    confirm.present();
  }

   openPage(restaurants){
 	console.log(restaurants)
	this.navCtrl.push(RnearmedetailsPage,{restaurant : restaurants});
}

gotoPage(){
 		this.navCtrl.push(RnearmesettingsPage);
 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RnearmePage');
    this.getLocation();
  }

 


}
