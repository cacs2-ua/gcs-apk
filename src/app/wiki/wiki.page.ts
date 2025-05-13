import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { ActivatedRoute } from '@angular/router';
import { People } from '../models/people';

@Component({
  selector: 'app-wiki',
  standalone: false,
  templateUrl: './wiki.page.html',
  styleUrls: ['./wiki.page.scss'],
})
export class WikiPage implements OnInit {
  
  readonly categoriesMockup: string = "./assets/data/categories.json";

  categories: Category[] = [];
  selectedCategory: string = "";
 constructor() { }


  ngOnInit() {
    this.getData();
  }

  selectCategory(name: string){
    this.selectedCategory = name;
  }

  getData() {
    fetch(this.categoriesMockup)
      .then(res => res.json())
      .then(json => {
        this.categories = json;
      });
  }

  
}
