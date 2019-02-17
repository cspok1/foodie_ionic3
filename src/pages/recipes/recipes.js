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
import { CategorymealPage } from '../categorymeal/categorymeal';
import { RegionmealPage } from '../regionmeal/regionmeal';
/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecipesPage = /** @class */ (function () {
    function RecipesPage(navCtrl, navParams, recipespProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipespProv = recipespProv;
        this.categories = [];
        this.regions = [];
    }
    RecipesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecipesPage');
        this.byCategories();
        this.byArea();
    };
    RecipesPage.prototype.byCategories = function () {
        var _this = this;
        this.recipespProv.getCategories().subscribe(function (data) {
            _this.categories.push(data);
            console.log(_this.categories);
            _this.cats = _this.categories[0].categories;
        });
    };
    RecipesPage.prototype.byArea = function () {
        var _this = this;
        this.recipespProv.getArea().subscribe(function (data) {
            _this.regions.push(data);
            console.log(_this.regions);
            _this.regs = _this.regions[0].meals;
        });
    };
    RecipesPage.prototype.openCategoryMeal = function (category) {
        this.navCtrl.push(CategorymealPage, { category: category });
    };
    RecipesPage.prototype.openRegionMeal = function (region) {
        this.navCtrl.push(RegionmealPage, { region: region });
    };
    RecipesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-recipes',
            templateUrl: 'recipes.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, RecipespProvider])
    ], RecipesPage);
    return RecipesPage;
}());
export { RecipesPage };
//# sourceMappingURL=recipes.js.map