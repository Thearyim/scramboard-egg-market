import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  games: Game[]= [
    new Game("Settlers of Catan", "Some Person", "A great way to destroy friendships", 1),
    new Game("Monopoly", "Some Other Person", "Learn about capitalism", 2),
    new Game("Pictionary", "Some Other Other Person", "See how bad your friends are at drawing", 3),
    new Game("Pandemic", "Some random person", "Something about illness", 4),
    new Game("Candy Land", "Someone", "Rot your teeth", 5)
  ];

  goToDetailPage(clickedGame: Game){
    this.router.navigate(["games", clickedGame.id]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
