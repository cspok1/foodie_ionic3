var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { RnearmepProvider } from '../../providers/rnearmep/rnearmep';
import { AlertController } from 'ionic-angular';
import { RnearmedetailsPage } from '../rnearmedetails/rnearmedetails';
/**
 * Generated class for the RnearmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RnearmePage = /** @class */ (function () {
    function RnearmePage(navCtrl, navParams, geolocation, rnearmeProv, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.rnearmeProv = rnearmeProv;
        this.alertCtrl = alertCtrl;
        this.restaurantsArray = [];
    }
    RnearmePage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.rnearmeProv.lat = resp.coords.latitude;
            _this.rnearmeProv.long = resp.coords.longitude;
            _this.rnearmeProv.getAll().subscribe(function (data) {
                _this.restaurantsArray.push(data);
                console.log(_this.restaurantsArray);
                _this.restaurants = _this.restaurantsArray[0].restaurants;
                console.log(_this.restaurants);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    RnearmePage.prototype.shuffle = function () {
        console.log(this.restaurants);
        var i = (Math.floor(Math.random() * this.restaurants.length));
        this.randomRestaurant = this.restaurants[i];
        this.showRandomRestaurant();
    };
    RnearmePage.prototype.showRandomRestaurant = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'You should eat at',
            message: this.randomRestaurant.restaurant.name,
            buttons: [
                {
                    text: 'More Details',
                    handler: function () {
                        console.log('More details clicked');
                        _this.openPage(_this.randomRestaurant);
                    }
                },
                {
                    text: 'Close',
                    handler: function () {
                        console.log('close clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    RnearmePage.prototype.openPage = function (restaurants) {
        console.log(restaurants);
        this.navCtrl.push(RnearmedetailsPage, { restaurant: restaurants });
    };
    RnearmePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RnearmePage');
        this.getLocation();
    };
    RnearmePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-rnearme',
            templateUrl: 'rnearme.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Geolocation, RnearmepProvider, AlertController])
    ], RnearmePage);
    return RnearmePage;
}());
export { RnearmePage };
//# sourceMappingURL=rnearme.js.map