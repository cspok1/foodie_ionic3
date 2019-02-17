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
import { RecipespProvider } from '../../providers/recipesp/recipesp';
import { MealdetailsPage } from '../mealdetails/mealdetails';
/**
 * Generated class for the RegionmealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegionmealPage = /** @class */ (function () {
    function RegionmealPage(navCtrl, navParams, recipespProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipespProv = recipespProv;
        this.regionmeals = [];
        this.selectedRegion = this.navParams.get('region');
        this.recipespProv.strArea = this.selectedRegion.strArea;
        console.log(this.selectedRegion.strArea);
    }
    RegionmealPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegionmealPage');
        this.byRegion();
    };
    RegionmealPage.prototype.byRegion = function () {
        var _this = this;
        this.recipespProv.getRegionMeal().subscribe(function (data) {
            _this.regionmeals.push(data);
            _this.Ameals = _this.regionmeals[0].meals;
        });
    };
    RegionmealPage.prototype.openMealdetails = function (meal) {
        this.navCtrl.push(MealdetailsPage, { meal: meal });
    };
    RegionmealPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-regionmeal',
            templateUrl: 'regionmeal.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, RecipespProvider])
    ], RegionmealPage);
    return RegionmealPage;
}());
export { RegionmealPage };
//# sourceMappingURL=regionmeal.js.map