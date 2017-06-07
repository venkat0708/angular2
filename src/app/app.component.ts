import { Component } from '@angular/core';
import {Article} from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	articles: Article[]
	constructor(){
	this.articles = [
		new Article('Angular2','http://angular.io',1000),
		new Article('Django','http://djangoproject.com',100),
		new Article('Bootstrap','http://getbootstrap.com',50),
		];
	}
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
	console.log(`Adding article title: ${title.value} and link: ${link.value}`);
	this.articles.push(new Article(title.value,link.value,0));
	title.value = '';
	link.value = '';
	return false;
  }
}
