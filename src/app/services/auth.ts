import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usersKey = 'usuarios';
  private currentKey = 'usuarioActual';

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  registrar(usuario: any) {
    if (!this.isBrowser()) return;

    const usuarios = this.obtenerUsuarios();
    usuarios.push(usuario);

    localStorage.setItem(this.usersKey, JSON.stringify(usuarios));
    localStorage.setItem(this.currentKey, JSON.stringify(usuario));
  }

  iniciarSesion(email: string, password: string): boolean {
    if (!this.isBrowser()) return false;

    const usuarios = this.obtenerUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
      localStorage.setItem(this.currentKey, JSON.stringify(usuario));
      return true;
    }

    return false;
  }

  obtenerUsuarios(): any[] {
    if (!this.isBrowser()) return [];
    const data = localStorage.getItem(this.usersKey);
    return data ? JSON.parse(data) : [];
  }

  obtenerUsuario(): any | null {
    if (!this.isBrowser()) return null;
    const data = localStorage.getItem(this.currentKey);
    return data ? JSON.parse(data) : null;
  }

  cerrarSesion() {
    if (this.isBrowser()) {
      localStorage.removeItem(this.currentKey);
    }
  }

  estaLogueado(): boolean {
    return this.isBrowser() && !!this.obtenerUsuario();
  }
}



