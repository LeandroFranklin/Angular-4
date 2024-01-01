import { Component } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {

  public instrucao: string = "Traduza a frase";
  public frases: Frase[] = FRASES;
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase; 

  constructor(){
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.frases)
  }

  public atualizarResposta(resposta:Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  public verificarResposta(){
    console.log("Verificar resposta: ", this.resposta)
  }

}
