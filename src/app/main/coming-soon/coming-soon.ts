import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService, Game } from '../../services/games';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coming-soon.html',
  styleUrls: ['./coming-soon.scss'],
})
export class ComingSoon {
  games: Game[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.games = this.gamesService.getComingSoonGames();
  }
}
