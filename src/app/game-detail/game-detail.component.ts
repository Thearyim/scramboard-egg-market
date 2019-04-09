import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  gameId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    console.log(this.route.params);
    this.route.params.forEach((urlParameters) => {
      console.log(urlParameters);
      this.gameId = parseInt(urlParameters['id']);
    });
  }

}
