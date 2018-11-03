import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {IonicStorageModule}from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {ToastService}from './shared/service/toast.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoaderService}from './shared/service/loader.service';
import {AlertService}from './shared/service/alert.service';
import {AngularFireModule}from '@angular/fire';
import {AngularFirestore, AngularFirestoreModule}from '@angular/fire/firestore';
import {Firebase} from '@ionic-native/firebase';
const config ={
    apiKey: "AIzaSyCBitO8_DU75n93tp1NMbpIq-pGLZuPT6Y",
    authDomain: "ng-recipe-book-69bb2.firebaseapp.com",
    databaseURL: "https://ng-recipe-book-69bb2.firebaseio.com",
    projectId: "ng-recipe-book-69bb2",
    storageBucket: "ng-recipe-book-69bb2.appspot.com",
    messagingSenderId: "794132821485"
  };
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  
  
  ],
  providers: [
    StatusBar,
    LoaderService,
    ToastService,
    SplashScreen,
    AlertService,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
