import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService, Game } from '../../services/games';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular.html',
  styleUrls: ['./popular.scss'],
})
export class Popular {
  games: Game[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.games = this.gamesService.getPopularGames();
  }
}
