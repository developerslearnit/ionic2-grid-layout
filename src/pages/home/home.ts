import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ICategory } from '../../model/category';
import { CategoryService } from '../../providers/category-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories: ICategory[];
  rows: any;
  constructor(public navCtrl: NavController, private catSerivce: CategoryService) {
    
  }

   ionViewDidLoad() {
    this.catSerivce.getCategories()
      .subscribe(categories => {
        this.categories = categories
        this.rows = Array.from(Array(Math.ceil(categories.length / 3)).keys());
      },
      error => console.log(error));
  }

}
