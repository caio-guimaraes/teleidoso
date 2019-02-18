import { Component, OnInit } from '@angular/core';
import { FormularioService, Formulario } from '../services/formulario.service';
import { Router } from '@angular/router';
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../models/paciente/paciente.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  
  lista: Paciente[];
  question = 0;
  showInter = 0;
  showOptions = 0;
  showInput = 0;
  Q2_1A:boolean; Q2_1B:boolean; Q2_1C:boolean; Q2_1D:boolean; Q2_1E:boolean; 
  I1_A:boolean; I1_B:boolean; I1_C:boolean;

  formulario: Formulario = {
    paciente: '',
    Q1: '',
    Q2: '',
    Q2_1:[],
    I1:[],
  };

  formularioId = null;

  constructor(private router: Router, private formularioService: FormularioService, private pacientesList: PacienteService){
    console.log(this.showOptions);
  }

  ngOnInit() {
    this.pacientesList.getAll().subscribe(res => {
      this.lista = res;
    })
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

  /* Checkbox Questao 2.1 */
  if (this.Q2_1A) { this.formulario.Q2_1.push('Tomar banho') };
  if (this.Q2_1B) { this.formulario.Q2_1.push('Higiene pessoal: usar o banheiro, limpar-se ou arrumar as roupas') };
  if (this.Q2_1C) { this.formulario.Q2_1.push('Vestir-se') };
  if (this.Q2_1D) { this.formulario.Q2_1.push('Alimentar-se ') };
  if (this.Q2_1E) { this.formulario.Q2_1.push('Transferência: Levantar-se e andar') };

   /* Checkbox Intervenção 1 */
  if (this.I1_A) { this.formulario.I1.push('Verificar a necessidade de dispositivos de adaptação para higiene pessoal, vestir-se, arrumar-se, usar o vaso sanitário e alimentar-se.') };
  if (this.I1_B) { this.formulario.I1.push('Encorajar o idoso a realizar atividades normais da vida diária de acordo como seu nível de capacidade.')};
  if (this.I1_C) { this.formulario.I1.push('Incentivar o cuidador a encorajar a independência do idoso e a interferir apenas quando o paciente não conseguir executar algo')};
 }

}
