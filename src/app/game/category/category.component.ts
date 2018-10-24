import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = [{type: 'movies', id: 0}, {type: 'trivia', id: 1}, {type: 'US State', id: 2}];
  constructor() { }

  ngOnInit() {
  }

  categoryClicked = (id) => {
    console.log(id);
  }
}
