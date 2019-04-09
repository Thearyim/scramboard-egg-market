import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Game } from '../game.model';
import { GameService } from "../game.service";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
  providers: [GameService]
})
export class GameDetailComponent implements OnInit {
  gameId: number = null;
  gameToDisplay: Game;

  constructor(private route: ActivatedRoute, private location: Location,private gameService: GameService) { }

  ngOnInit() {
    console.log(this.route.params);
    this.route.params.forEach((urlParameters) => {
      console.log(urlParameters);
      this.gameId = parseInt(urlParameters['id']);
    });
    this.gameToDisplay = this.gameService.getGameById(this.gameId);
  }

}
