import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
	Alert,
	AlertController,
	Loading,
	LoadingController
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { EmailValidator } from "../../validators/email";
import { HomePage } from "../home/home";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html',
})
export class SignupPage {
	public signupForm: FormGroup;
	public loading: Loading;
	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
		public alertCtrl: AlertController, formBuilder: FormBuilder, public authProvider: AuthProvider) {
		this.signupForm = formBuilder.group({
			email: [
				"",
				Validators.compose([Validators.required, EmailValidator.isValid])
			],
			password: [
				"",
				Validators.compose([Validators.minLength(6), Validators.required])
			],
			name: [
				"",
				Validators.compose([Validators.required, Validators.pattern('^[0-9a-zA-Z ]+$')])
			],
			address: [
				"",
			],
			phone: [
				"",
				Validators.compose([Validators.required])//, Validators.pattern('^(/\+?6?01)[0|1|2|3|4|6|7|8|9]\-*[0-9]{7,8}$')])
			]
		});
	}

	signupUser(): void {
		if (!this.signupForm.valid) {
			console.log(
				`Need to complete the form, current value: ${this.signupForm.value}`
			);
		} else {
			const email: string = this.signupForm.value.email;
			const password: string = this.signupForm.value.password;
			const name: string = this.signupForm.value.name;
			const address: string = this.signupForm.value.address;
			const phone: number = this.signupForm.value.phone;
			this.authProvider.signupUser(email, password, name, address, phone).then(
				user => {
					this.loading.dismiss().then(() => {
						this.navCtrl.setRoot(HomePage);
					});
				},
				error => {
					this.loading.dismiss().then(() => {
						const alert: Alert = this.alertCtrl.create({
							message: error.message,
							buttons: [{ text: "Ok", role: "cancel" }]
						});
						alert.present();
					});
				}
			);
			this.loading = this.loadingCtrl.create();
			this.loading.present();
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SignupPage');
	}

}
