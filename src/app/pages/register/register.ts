import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  nombre = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    if (!this.nombre || !this.email || !this.password || !this.confirmPassword) {
      alert('Por favor completa todos los campos.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    this.auth.registrar(nuevoUsuario);
    alert('Registro exitoso. Bienvenido ' + this.nombre + '!');
    this.router.navigate(['/catalogo']);
  }
}


