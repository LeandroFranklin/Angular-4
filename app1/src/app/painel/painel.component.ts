import { Component } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {

  public instrucao:string = "Traduza a frase";
  public frases: Frase[] = FRASES;

  constructor(){console.log(this.frases)}

  public atualizarResposta(): void{
    console.log("teste");
  }

}
