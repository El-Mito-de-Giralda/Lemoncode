import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, enableProdMode } from '@angular/core';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MenuComponent } from './app/layout/menu/menu.component';


bootstrapApplication(AppComponent, {providers: [provideHttpClient(),
    importProvidersFrom(RouterModule.forRoot(routes), HttpClientModule), provideAnimations()],}
)
  .catch((err) => console.error(err));
