import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
  providers: [GameService]
})
export class EditGameComponent implements OnInit {
  @Input() selectedGame;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  beginUpdatingGame(gameToUpdate){
    this.gameService.updateGame(gameToUpdate);
  }

  beginDeletingGame(gameToDelete){
    if(confirm(`Are you sure you want to destroy ${gameToDelete.author}'s career? If you delete this game they won't earn anymore money. How can they support their family now?`)){
      this.gameService.deleteGame(gameToDelete);
    }
  }

}
