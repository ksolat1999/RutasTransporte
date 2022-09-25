import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { RutaInfoComponent } from './components/ruta-info/ruta-info.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'ruta-info', component: RutaInfoComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: '404', component: PagesError404Component },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
