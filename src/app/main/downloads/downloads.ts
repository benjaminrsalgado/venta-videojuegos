import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService, Game } from '../../services/games';

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './downloads.html',
  styleUrls: ['./downloads.scss'],
})
export class Downloads {
  games: Game[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.games = this.gamesService.getDownloadedGames();
  }
}

