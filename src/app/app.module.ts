import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RnearmePage } from '../pages/rnearme/rnearme';
import { RnearmepProvider } from '../providers/rnearmep/rnearmep';
import { RecipespProvider } from '../providers/recipesp/recipesp';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';
import { RnearmedetailsPage } from '../pages/rnearmedetails/rnearmedetails';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { RecipesPage } from '../pages/recipes/recipes';
import { CategorymealPage } from '../pages/categorymeal/categorymeal';
import { RegionmealPage } from '../pages/regionmeal/regionmeal';
import { MealdetailsPage } from '../pages/mealdetails/mealdetails';
import { RnearmesettingsPage } from '../pages/rnearmesettings/rnearmesettings';
import { RnearmesearchPage } from '../pages/rnearmesearch/rnearmesearch';
import { AuthProvider } from '../providers/auth/auth';
import { ProfileProvider } from '../providers/profile/profile';
import { Camera } from '@ionic-native/camera';
import { SavepProvider } from '../providers/savep/savep';
import { SavePage } from '../pages/save/save';
import { RecipesearchresultPage } from '../pages/recipesearchresult/recipesearchresult';
import { SavedrestaurantdetailsPage } from '../pages/savedrestaurantdetails/savedrestaurantdetails';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RnearmePage,
    RnearmedetailsPage,
    RecipesPage,
    CategorymealPage,
    RegionmealPage,
    MealdetailsPage,
    RnearmesettingsPage,
    RnearmesearchPage,
    SavePage,
    RecipesearchresultPage,
    SavedrestaurantdetailsPage
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RnearmePage,
    RnearmedetailsPage,
    RecipesPage,
    CategorymealPage,
    RegionmealPage,
    MealdetailsPage,
    RnearmesettingsPage,
    RnearmesearchPage,
    SavePage,
    RecipesearchresultPage,
    SavedrestaurantdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RnearmepProvider,
    RecipespProvider,
    Geolocation,
    InAppBrowser,
    AuthProvider,
    ProfileProvider,
    Camera,
    SavepProvider,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}
