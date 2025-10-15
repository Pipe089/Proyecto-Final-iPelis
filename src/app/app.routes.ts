import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { CatalogoComponent} from './catalogo/catalogo';
import { authRedirectGuard } from './guards/auth-redirect-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [authRedirectGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [authRedirectGuard] },
  { path: 'catalogo', component: CatalogoComponent }
];

