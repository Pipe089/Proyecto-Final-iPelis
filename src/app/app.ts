import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  usuario: any = null;

  constructor(public auth: AuthService, private router: Router) {
    // 🔹 Recuperar sesión al iniciar la app
    this.usuario = this.auth.obtenerUsuario();
  }

  logout() {
    this.auth.cerrarSesion();
    this.usuario = null;
    this.router.navigate(['/login']);
  }
}

