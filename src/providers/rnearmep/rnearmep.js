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
  Generated class for the RnearmepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RnearmepProvider = /** @class */ (function () {
    function RnearmepProvider(http) {
        this.http = http;
        console.log('Hello RnearmepProvider Provider');
    }
    RnearmepProvider.prototype.getAll = function () {
        return this.http.get('https://developers.zomato.com/api/v2.1/search?count=20&lat=' + this.lat + '&lon=' + this.long + '&radius=500&sort=real_distance&order=asc&apikey=26989957fec9214b0161e9166e23e2e1');
    };
    RnearmepProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], RnearmepProvider);
    return RnearmepProvider;
}());
export { RnearmepProvider };
//# sourceMappingURL=rnearmep.js.map