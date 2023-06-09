import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies: any[] = [
    {
      naziv: 'The Godfather',
      godina: 1972,
      zanr: 'Crime',
      trajanje: '2h 55m',
      rating: 9.2,
      opis: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
      poster: 'assets/img/TheGodfather.png',
    },
    {
      naziv: 'Interstellar',
      godina: 2014,
      zanr: 'Sci-fi',
      trajanje: '2h 49m',
      rating: 8.6,
      opis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.',
      poster: 'assets/img/interstellar.jpg',
    },
    {
      naziv: 'Gladiator',
      godina: 2000,
      zanr: 'Action',
      trajanje: '2h 35m',
      rating: 8.5,
      opis: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
      poster: 'assets/img/gladiator.jpg',
    },
    {
      naziv: 'The Matrix',
      godina: 1999,
      zanr: 'Action',
      trajanje: '2h 16m',
      rating: 8.7,
      opis: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
      poster: 'assets/img/matrix.jpg',
    },
    {
      naziv: 'Seven',
      godina: 1995,
      zanr: 'Crime',
      trajanje: '2h 7m',
      rating: 8.6,
      opis: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
      poster: 'assets/img/seven.jpg',
    },
    {
      naziv: 'Star Wars',
      godina: 1977,
      zanr: 'Fantasy',
      trajanje: '2h 1m',
      rating: 8.6,
      opis: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empires world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
      poster: 'assets/img/star-wars.webp',
    },
  ];
  imageWidth: number = 130;
  rowWidth: number = 100 / 7;

  showOpis: boolean = false;
  showhide() {
    this.showOpis = !this.showOpis
  }
}
