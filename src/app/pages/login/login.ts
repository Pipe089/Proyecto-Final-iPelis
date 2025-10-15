import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const ok = this.auth.iniciarSesion(this.email, this.password);

    if (ok) {
      alert('Inicio de sesión exitoso.');
      this.router.navigate(['/catalogo']);
    } else {
      alert('Correo o contraseña incorrectos.');
    }
  }
}





