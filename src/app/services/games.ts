import { Injectable } from '@angular/core';

export interface Game {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  image: string;
  rating: number;
  downloads: number;
  comingSoon: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private games: Game[] = [
    {
      id: 1,
      title: 'The Legend of Zelda: Echoes of Time',
      description: 'Una nueva aventura en Hyrule con paisajes 3D y música épica.',
      releaseDate: '2025-05-20',
      image: 'https://placehold.co/300x200?text=Zelda',
      rating: 4.8,
      downloads: 220,
      comingSoon: false,
    },
    {
      id: 2,
      title: 'Mario Kart X',
      description: 'Nuevas pistas, más personajes y caos asegurado.',
      releaseDate: '2025-08-10',
      image: 'https://placehold.co/300x200?text=Mario+Kart',
      rating: 4.5,
      downloads: 180,
      comingSoon: false,
    },
    {
      id: 3,
      title: 'Metroid Nova',
      description: 'Samus regresa con una historia más oscura y gráficos renovados.',
      releaseDate: '2026-01-15',
      image: 'https://placehold.co/300x200?text=Metroid+Nova',
      rating: 4.9,
      downloads: 95,
      comingSoon: true,
    },
  ];

  constructor() {}

  getAllGames(): Game[] {
    return this.games;
  }

  getPopularGames(): Game[] {
    return this.games.filter((g) => g.rating > 4);
  }

  getDownloadedGames(): Game[] {
    return this.games.filter((g) => g.downloads > 100);
  }

  getComingSoonGames(): Game[] {
    return this.games.filter((g) => g.comingSoon);
  }

  addGame(game: Game) {
    const newId = this.games.length + 1;
    this.games.push({ ...game, id: newId });
  }
}
