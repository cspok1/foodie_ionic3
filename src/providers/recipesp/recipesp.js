var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the RecipespProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RecipespProvider = /** @class */ (function () {
    function RecipespProvider(http) {
        this.http = http;
        console.log('Hello RecipespProvider Provider');
    }
    RecipespProvider.prototype.getCategories = function () {
        return this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    };
    RecipespProvider.prototype.getArea = function () {
        return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    };
    RecipespProvider.prototype.getCategoryMeal = function () {
        return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.strCategory);
    };
    RecipespProvider.prototype.getRegionMeal = function () {
        return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + this.strArea);
    };
    RecipespProvider.prototype.getMealDetails = function () {
        return this.http.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.idMeal);
    };
    RecipespProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], RecipespProvider);
    return RecipespProvider;
}());
export { RecipespProvider };
//# sourceMappingURL=recipesp.js.map