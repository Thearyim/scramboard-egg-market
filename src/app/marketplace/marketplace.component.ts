import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { Router } from '@angular/router';
import { GameService } from "../game.service";
import { FirebaseListObservable } from "angularfire2/database"

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [GameService]
})
export class MarketplaceComponent implements OnInit {
  games: FirebaseListObservable<any[]>;

  goToDetailPage(clickedGame: Game){
    // this.router.navigate(["games", clickedGame.id]);
  }

  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

}
