import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../models/category';
import { WikiService } from '../services/wiki.service';


@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  @Input() theCategory: Category = new Category();

  @Input() selected: boolean = false;

  @Output() clicked = new EventEmitter<string>();

  articles: any[] = [];
  constructor(private wikiSrv: WikiService) { }

  ngOnInit() {}

  getArticles(category: string){
    this.wikiSrv.getAllArticles(category).subscribe(
      (results: any) => {
        this.articles = results.results;
      }
    )
  }
  click() {
    this.clicked.emit(this.theCategory.name);
    this.getArticles(this.theCategory.name);
    console.log("clicked on " + this.theCategory.name);
  }
  generateURL(cat: string, id: string){
    return "/tabs/wiki/article/" + cat + "/" + id;
  }

}
