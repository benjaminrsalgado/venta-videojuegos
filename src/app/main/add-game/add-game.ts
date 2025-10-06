import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamesService, Game } from '../../services/games';

@Component({
  selector: 'app-add-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-game.html',
  styleUrls: ['./add-game.scss'],
})
export class AddGame {
  title = '';
  description = '';
  releaseDate = '';
  image = '';
  rating = 0;
  downloads = 0;
  comingSoon = false;
  message = '';

  constructor(private gamesService: GamesService) {}

  onSubmit() {
    const newGame: Game = {
      id: 0, // se asignará automáticamente
      title: this.title,
      description: this.description,
      releaseDate: this.releaseDate,
      image: this.image || 'https://placehold.co/300x200?text=Nuevo+Juego',
      rating: this.rating,
      downloads: this.downloads,
      comingSoon: this.comingSoon,
    };

    this.gamesService.addGame(newGame);
    this.message = '🎮 Juego agregado correctamente!';
    this.clearForm();
  }

  clearForm() {
    this.title = '';
    this.description = '';
    this.releaseDate = '';
    this.image = '';
    this.rating = 0;
    this.downloads = 0;
    this.comingSoon = false;
  }
}
