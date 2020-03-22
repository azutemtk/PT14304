import { Component, OnInit } from '@angular/core';
import { News } from '../News';
import { NewsService } from '../services/news.service'
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news : News[];
  constructor(
    private newService: NewsService,
  ) { }

  ngOnInit() {
    this.getNewsFromApi();
  }

  getNewsFromApi(){
    this.newService.getNewFromApi().subscribe(data =>{
      console.log(data);
      this.news = data;
  });
}

}
