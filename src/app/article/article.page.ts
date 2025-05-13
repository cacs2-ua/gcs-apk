import { Component, OnInit } from '@angular/core';
import { People } from '../models/people';
import { ActivatedRoute } from '@angular/router';
import { Planet } from '../models/planet';
import { Species } from '../models/species';
import { Starship } from '../models/starship';
import { WikiService } from '../services/wiki.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
  standalone: false,
})
export class ArticlePage implements OnInit {
  title: string ="";
    id: string="";
    category: string="";
  
    people: People = new People();
    planet: Planet = new Planet();
    species: Species = new Species();
    starship: Starship = new Starship();

  constructor(private route: ActivatedRoute, private srv: WikiService) { }

  ngOnInit() {
  this.category = this.route.snapshot.paramMap.get("cat") ?? '';
  this.id = this.route.snapshot.paramMap.get("id") ?? '';

  this.srv.getArticle(this.category, this.id).subscribe(
    (result: any) => {
      switch (this.category) {
        case 'People':
          this.people = result.result.properties;
          this.title = this.people.name;
          break;
        case 'Planets':
          this.planet = result.result.properties;
          this.title = this.planet.name;
          break;
        case 'Species':
          this.species = result.result.properties;
          this.title = this.species.name;
          break;
        case 'Starships':
          this.starship = result.result.properties;
          this.title = this.starship.name;
          break;
      }
    }
  );
}


  generateURL(cat: string, id: string){
    return "/tabs/wiki/article/" + cat + "/" + id;
  }

}
