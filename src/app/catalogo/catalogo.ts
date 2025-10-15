import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class CatalogoComponent {
  usuario: any;
  peliculas = [
    { nombre: 'Scarface', anio: 1983, genero: 'Drama / Crimen', precio: 25000, imagen: 'https://pics.filmaffinity.com/scarface-798722679-mmed.jpg' },
    { nombre: 'Mortal Kombat', anio: 2021, genero: 'Aventura / Ciencia ficción', precio: 27000, imagen: 'https://pics.filmaffinity.com/mortal_kombat-245960455-mmed.jpg' },
    { nombre: 'Super Mario Bros. Movie', anio: 2023, genero: 'Acción / Aventura', precio: 30000, imagen: 'https://pics.filmaffinity.com/the_super_mario_bros_movie-521125124-mmed.jpg' },
    { nombre: 'Five Nights at Freddy', anio: 2023, genero: 'Ciencia ficción / Terror', precio: 28000, imagen: 'https://pics.filmaffinity.com/five_nights_at_freddy_s-328211281-mmed.jpg' }
  ];

  constructor(private auth: AuthService, private router: Router) {
    this.usuario = this.auth.obtenerUsuario();
    if (!this.usuario) this.router.navigate(['/login']);
  }

  logout() {
    this.auth.cerrarSesion();
    this.router.navigate(['/login']);
  }
}

