import { Component, OnInit } from '@angular/core';
import { FormularioService, Formulario } from '../services/formulario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  question = 1;
  showInter = 0;
  showOptions = 0;
  showInput = 0;
  Q2_1A:boolean; Q2_1B:boolean; Q2_1C:boolean; Q2_1D:boolean; Q2_1E:boolean; 

  formulario: Formulario = {
    Q1: '',
    Q2: '',
    Q2_1:[],
  };

  formularioId = null;

  constructor(private router: Router, private formularioService: FormularioService){
    console.log(this.showOptions);
  }

  ngOnInit() {
  }

  public setQuestion(q){
    this.question = q;
  }

  public setInter(i){
    if (i == this.showInter){
      this.showInter = 0;
    }
    else{
    this.showInter = i;
    }
  }
 
 
  public async saveFormulario(){
    this.checkboxTraslate();
    this.formularioService.addFormulario(this.formulario).then(ref => {
      this.router.navigate(['/form-list'])
    })
  }


 public checkboxTraslate(){
  if (this.Q2_1A == true) { this.formulario.Q2_1.push('Tomar banho') };
  if (this.Q2_1B == true) { this.formulario.Q2_1.push('Higiene pessoal: usar o banheiro, limpar-se ou arrumar as roupas') };
  if (this.Q2_1C == true) { this.formulario.Q2_1.push('Vestir-se') };
  if (this.Q2_1D == true) { this.formulario.Q2_1.push('Alimentar-se ') };
  if (this.Q2_1E == true) { this.formulario.Q2_1.push('Transferência: Levantar-se e andar') };
  
 }

}
