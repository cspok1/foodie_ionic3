import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
Alert,
AlertController
} from "ionic-angular";
import { ProfileProvider } from "../../providers/profile/profile";
import { AuthProvider } from "../../providers/auth/auth";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
public userProfile: any;
public address: string;
public phonenum : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
public alertCtrl: AlertController,
public authProvider: AuthProvider,
public profileProvider: ProfileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
    	this.userProfile = userProfileSnapshot.val();
    	this.address = userProfileSnapshot.val().address;
    	this.phonenum = userProfileSnapshot.val().phonenum;
    });
}

logOut(): void {
	this.authProvider.logoutUser().then(() => {
		this.navCtrl.setRoot("LoginPage");
	});
}
 
 updateName(): void {
 	const alert: Alert = this.alertCtrl.create({
 		message: "Your first name & last name",
 		inputs: [
 		{
 			name: "name",
 			placeholder: "Your name",
 			value: this.userProfile.name
 		}
 		],
 		buttons: [
 		{ text: "Cancel" },
 		{
 			text: "Save",
 			handler: data => {
 				this.profileProvider.updateName(data.name);
 			}
 		}
 		]
 	});
 	alert.present();
 } 

	updatePhonenum(): void {
 	const alert: Alert = this.alertCtrl.create({
 		message: "Your phone number",
 		inputs: [
 		{
 			name: "phonenum",
 			placeholder: "Your phone number",
 			value: this.userProfile.phone,
 			type: "number"

 		}
 		],
 		buttons: [
 		{ text: "Cancel" },
 		{
 			text: "Save",
 			handler: data => {
 				this.profileProvider.updatePhonenum(data.phone);
 			}
 		}
 		]
 	});
 	alert.present();
 }

 updateAddress(): void {
 	const alert: Alert = this.alertCtrl.create({
 		message: "Your delivery address",
 		inputs: [
 		{
 			name: "address",
 			placeholder: "Your address",
 			value: this.userProfile.address
 		}
 		],
 		buttons: [
 		{ text: "Cancel" },
 		{
 			text: "Save",
 			handler: data => {
 				this.profileProvider.updateAddress(data.address);
 			}
 		}
 		]
 	});
 	alert.present();
 }

updateEmail(): void {
	let alert: Alert = this.alertCtrl.create({
		inputs: [{ name: 'newEmail', placeholder: 'Your new email' },
		{ name: 'password', placeholder: 'Your password', type: 'password' }],
		buttons: [
		{ text: 'Cancel' },
		{ text: 'Save',
		handler: data => {
			this.profileProvider
			.updateEmail(data.newEmail, data.password)
			.then(() => { console.log('Email Changed Successfully'); })
			.catch(error => { console.log('ERROR: ' + error.message); });
		}}]
	});
	alert.present();
}

updatePassword(): void {
	let alert: Alert = this.alertCtrl.create({
		inputs: [
		{ name: 'newPassword', placeholder: 'New password', type: 'password' },
		{ name: 'oldPassword', placeholder: 'Old password', type: 'password' }],
		buttons: [
		{ text: 'Cancel' },
		{ text: 'Save',
		handler: data => {
			this.profileProvider.updatePassword(
				data.newPassword,
				data.oldPassword
				);
		}
	}
	]
});
alert.present();
}


}
