import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppAngularMaterialModule } from './app-angular-material.module';
import { AppAngularFlexLayoutModule } from './app-angular-flex-layout.module';
import { AppComponent } from './app.component';
import { ModeModule } from './mode/mode.module';
import { RegisterModule } from './register/register.module';
import { AppRoutingModule } from './app-routing.module';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppAngularMaterialModule,
    AppAngularFlexLayoutModule,
    ModeModule,
    RegisterModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
