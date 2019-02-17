import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedrestaurantdetailsPage } from './savedrestaurantdetails';

@NgModule({
  declarations: [
    SavedrestaurantdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedrestaurantdetailsPage),
  ],
})
export class SavedrestaurantdetailsPageModule {}
