import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  playAsUserClicked = () => {
    this.router.navigate(['register']);
  }

  playAsGuestClicked = () => {
    this.router.navigate(['game']);
  }

}
