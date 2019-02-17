import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RnearmepProvider } from '../../providers/rnearmep/rnearmep';
import { RnearmesearchPage } from '../rnearmesearch/rnearmesearch';



/**
 * Generated class for the RnearmesettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rnearmesettings',
  templateUrl: 'rnearmesettings.html',
})
export class RnearmesettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public rnearmeProv : RnearmepProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RnearmesettingsPage');
  }

  twom(){
  	this.rnearmeProv.radius = 200;
  }

  fivem(){
  	this.rnearmeProv.radius = 500;
  }

  onekm(){
  	this.rnearmeProv.radius = 1000;
  }

  ten(){
  	this.rnearmeProv.count = 10;
  	console.log(this.rnearmeProv.count);
  }

  twenty(){
  	this.rnearmeProv.count = 20;
  }

  fifty(){
  	this.rnearmeProv.count = 50;
  }

  refresh(){
  	this.navCtrl.push(RnearmesearchPage);
  }

}
