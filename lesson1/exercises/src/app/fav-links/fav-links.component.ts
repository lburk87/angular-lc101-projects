import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://keytomylime.com/copycat-taco-bell-quesadilla-sauce/', 'https://hungryhappenings.com/mini-cheesecakes/']

  constructor() { }

  ngOnInit() {
  }

}
