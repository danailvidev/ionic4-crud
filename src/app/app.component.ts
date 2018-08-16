import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAEZQ0A--l8GlUQJ4wo5B4DzHywmJbCLuI',
  authDomain: 'bulletin-1d070.firebaseio.com',
  databaseURL: 'https://bulletin-1d070.firebaseio.com/',
  projectId: 'bulletin-1d070',
  storageBucket: 'YOUR_STORAGE_BUCKET',
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}