import { Component } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {
  public instrucao: string = "Traduza a frase"; //Texto String interpolation

  public resposta: string = "";
  public rodada: number = 0;
  public rodadaFrase: Frase;
  
  public frases: Frase[] = FRASES;

  constructor(){
    this.rodadaFrase = this.frases[this.rodada];
  }

  public atualizarResposta(resposta:Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  public verificarResposta(){

    if(this.rodadaFrase.frasePtBr == this.resposta){

      this.rodada ++;
      this.rodadaFrase = this.frases[this.rodada];

      alert("Tradução está correta");
    }

    else{
      alert("Tradução está errada")
    }

  }

}
