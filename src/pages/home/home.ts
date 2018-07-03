import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject  } from 'angularfire2/database';
import { AboutPage } from '../about/about';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  
  constructor(public navCtrl: NavController,public db:AngularFireDatabase) {
  
    
  }
add(name,info){
  
    this.db.list("items").push({
      name:name,
      text:info
    })
   this.navCtrl.push(AboutPage)
  
    
  }
}
