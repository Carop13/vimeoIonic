import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VimeoProvider } from "../../providers/vimeo/vimeo";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  categories;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private vimeoProvider: VimeoProvider) {
  }

  ionViewWillEnter(){
    this.vimeoProvider.getCategory()
      .subscribe(categories => {
        console.log('categories', categories)
        this.categories = categories;
        //this.weather = weather.current_observation;
      })
  }

}
