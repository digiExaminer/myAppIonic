import { AngularFireDatabaseModule, AngularFireDatabase,AngularFireList  } from 'angularfire2/database';
import { ShoppingItem } from './../../model/shopping-item/shopping-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  shoppingItem={} as ShoppingItem;
  shoppingItemRef$: AngularFireList<ShoppingItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private database : AngularFireDatabase) {
    this.shoppingItemRef$=database.list('shopping-list');
  }
  addShoppingItem(shoppingItem: ShoppingItem){
    this.shoppingItemRef$.push({
      itemName:this.shoppingItem.itemName,
      itemNumber:Number(this.shoppingItem.itemNumber)
    })  .then(() => console.log('done!'))
    .catch(error => console.log(error));
    this.shoppingItem= {} as ShoppingItem;
    this.navCtrl.pop();
  }


}
