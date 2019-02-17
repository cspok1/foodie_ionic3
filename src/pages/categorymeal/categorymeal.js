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
 * Generated class for the CategorymealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategorymealPage = /** @class */ (function () {
    function CategorymealPage(navCtrl, navParams, recipespProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipespProv = recipespProv;
        this.categorymeals = [];
        this.selectedCategory = this.navParams.get('category');
        console.log(this.selectedCategory.strCategory);
        this.recipespProv.strCategory = this.selectedCategory.strCategory;
    }
    CategorymealPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategorymealPage');
        this.byCategories();
    };
    CategorymealPage.prototype.byCategories = function () {
        var _this = this;
        this.recipespProv.getCategoryMeal().subscribe(function (data) {
            _this.categorymeals.push(data);
            console.log(_this.categorymeals);
            _this.meals = _this.categorymeals[0].meals;
        });
    };
    CategorymealPage.prototype.openMealdetails = function (meal) {
        this.navCtrl.push(MealdetailsPage, { meal: meal });
    };
    CategorymealPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-categorymeal',
            templateUrl: 'categorymeal.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, RecipespProvider])
    ], CategorymealPage);
    return CategorymealPage;
}());
export { CategorymealPage };
//# sourceMappingURL=categorymeal.js.map