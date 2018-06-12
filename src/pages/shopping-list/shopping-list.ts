import { ShoppingItem } from './../../model/shopping-item/shopping-item';
import { AddShoppingPage } from './../add-shopping/add-shopping';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireList,AngularFireDatabase}  from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  items$: Observable<ShoppingItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase) {


  this.items$ = this.database.list('shopping-list');
  this.itemdata = this.items$.valueChanges();
  console.log(this.itemdata);
  }
  navigateToAddShoppingPage(){
    this.navCtrl.push(AddShoppingPage);
  }


}
