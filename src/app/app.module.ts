import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { RutaInfoComponent } from './components/ruta-info/ruta-info.component';
import { RutasTransmetroComponent } from './components/rutas-transmetro/rutas-transmetro.component';
import { RutasTransurbanoComponent } from './components/rutas-transurbano/rutas-transurbano.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    UsersProfileComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    RutasComponent,
    RutaInfoComponent,
    RutasTransmetroComponent,
    RutasTransurbanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
