import { Component, OnInit } from '@angular/core';
import { Game } from "../game.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, description: string){
    let newGame: Game = new Game(title, author, description);
    console.log(newGame);
  }

}
