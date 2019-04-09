import { Component, OnInit } from '@angular/core';
import { Game } from "../game.model";
import { GameService } from "../game.service"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [GameService]
})
export class AdminComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, description: string){
    let newGame: Game = new Game(title, author, description);
    this.gameService.addGame(newGame);
  }

}
