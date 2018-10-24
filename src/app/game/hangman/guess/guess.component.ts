import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guess = (form: NgForm) => {
    console.log(form);
  }

}
