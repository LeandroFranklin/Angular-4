import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { ProcessoComponent } from './processo/processo.component';
import { TentativasComponent } from './tentativas/tentativas.component';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    ProcessoComponent,
    TentativasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
