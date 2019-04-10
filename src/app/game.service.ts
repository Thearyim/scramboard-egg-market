import { Injectable } from '@angular/core';
import { Game } from "./game.model";
import { GAMES } from "./mock-games";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class GameService {

  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.games = database.list("games");
  }

  getGames() {
    return this.games;
  }

  addGame(newGame: Game){
    this.games.push(newGame);
  }

  getGameById(gameId: string){
    return this.database.object("games/" + gameId);
  }

  updateGame(localUpdatedGame){
    let gameEntryInFirebase = this.getGameById(localUpdatedGame.$key);
    gameEntryInFirebase.update({title: localUpdatedGame.title,
                                author: localUpdatedGame.author,
                                description: localUpdatedGame.description});
  }

  deleteGame(localGameToDelete){
    let gameEntryInFirebase = this.getGameById(localGameToDelete.$key);
    gameEntryInFirebase.remove();
  }

}
