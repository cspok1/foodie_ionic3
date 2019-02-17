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
/**
 * Generated class for the MealdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MealdetailsPage = /** @class */ (function () {
    function MealdetailsPage(navCtrl, navParams, recipespProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipespProv = recipespProv;
        this.meals = [];
        this.selectedMeal = this.navParams.get('meal');
        this.recipespProv.idMeal = this.selectedMeal.idMeal;
    }
    MealdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MealdetailsPage');
        this.mealdetails();
    };
    MealdetailsPage.prototype.mealdetails = function () {
        var _this = this;
        this.recipespProv.getMealDetails().subscribe(function (data) {
            console.log(_this.selectedMeal);
            _this.meals.push(data);
            console.log(_this.meals[0].meals[0].idMeal);
            _this.strmeal = _this.meals[0].meals[0].strMeal;
            _this.category = _this.meals[0].meals[0].strCategory;
            _this.area = _this.meals[0].meals[0].strArea;
            _this.img = _this.meals[0].meals[0].strMealThumb;
            _this.ingredients.line1 = _this.meals[0].meals[0].strMeasure1 + " " + _this.meals[0].meals[0].strIngredient1;
            _this.ingredients.line1 = _this.meals[0].meals[0].strMeasure2 + " " + _this.meals[0].meals[0].strIngredient2;
            _this.ingredients.line1 = _this.meals[0].meals[0].strMeasure3 + " " + _this.meals[0].meals[0].strIngredient3;
            _this.meals[0].meals[0].strMeasure4 + " " + _this.meals[0].meals[0].strIngredient4;
            _this.meals[0].meals[0].strMeasure5 + " " + _this.meals[0].meals[0].strIngredient5;
            _this.meals[0].meals[0].strMeasure6 + " " + _this.meals[0].meals[0].strIngredient6;
            _this.meals[0].meals[0].strMeasure7 + " " + _this.meals[0].meals[0].strIngredient7;
            _this.meals[0].meals[0].strMeasure8 + " " + _this.meals[0].meals[0].strIngredient8;
            _this.meals[0].meals[0].strMeasure9 + " " + _this.meals[0].meals[0].strIngredient9;
            _this.meals[0].meals[0].strMeasure10 + " " + _this.meals[0].meals[0].strIngredient10;
            _this.meals[0].meals[0].strMeasure11 + " " + _this.meals[0].meals[0].strIngredient11;
            _this.meals[0].meals[0].strMeasure12 + " " + _this.meals[0].meals[0].strIngredient12;
            _this.meals[0].meals[0].strMeasure13 + " " + _this.meals[0].meals[0].strIngredient13;
            _this.meals[0].meals[0].strMeasure14 + " " + _this.meals[0].meals[0].strIngredient14;
            _this.meals[0].meals[0].strMeasure15 + " " + _this.meals[0].meals[0].strIngredient15;
            _this.meals[0].meals[0].strMeasure16 + " " + _this.meals[0].meals[0].strIngredient16;
            _this.meals[0].meals[0].strMeasure17 + " " + _this.meals[0].meals[0].strIngredient17;
            _this.meals[0].meals[0].strMeasure18 + " " + _this.meals[0].meals[0].strIngredient18;
            _this.meals[0].meals[0].strMeasure19 + " " + _this.meals[0].meals[0].strIngredient19;
            _this.meals[0].meals[0].strMeasure20 + " " + _this.meals[0].meals[0].strIngredient20;
            _this.instructions = _this.meals[0].meals[0].strInstructions;
        });
    };
    MealdetailsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-mealdetails',
            templateUrl: 'mealdetails.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, RecipespProvider])
    ], MealdetailsPage);
    return MealdetailsPage;
}());
export { MealdetailsPage };
//# sourceMappingURL=mealdetails.js.map