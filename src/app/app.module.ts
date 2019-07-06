import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home/home.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SettingsModule,
    ProfileModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
