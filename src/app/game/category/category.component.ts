import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import _ from 'lodash';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = [{type: 'movies', id: 0}, {type: 'trivia', id: 1}, {type: 'US State', id: 2}];
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  categoryClicked = (id) => {
    console.log(id);
    console.log(this.gameService);
    const category = _.find(this.categories, {id: id}).type;
    this.gameService.setCategory(category);
    //reset the game, and bring back a new game from backend

  }
}
