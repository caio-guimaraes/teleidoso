import { Component, OnInit, OnChanges } from '@angular/core';
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
  
  //Variaveis para checkbox
  I2_1A:boolean; I2_1B:boolean; I2_1C:boolean; I2_1D:boolean; I2_1E:boolean; I2_1F:boolean; I2_1i; 

  //Variaveis para checkbox de intervenção
  IR1_A:boolean; IR1_B:boolean; IR1_C:boolean;
  IR2_A:boolean; IR2_B:boolean;
  IR3_A:boolean; IR3_B:boolean; IR3_C:boolean;
  

  formulario: Formulario = {
    cuidador: '',
    // Variaveis relacionadas a parte I
    I1: '',
    I2: '',
    I2_1:[],
    I2_2: '',
    IR1: [],
    I3: '',
    I4: '',
    I5: '',
    I5_1:'',
    I6: '',
    IR2: [],
    I7: '',
    IR3: [],
    
    // Variaveis relacionadas a parte II
    II1: '',
    II2: '',
    II3: '',
    II4: '',
    II5: '',
    II6:[],
    II7: '',
    II8: '',
    IIR1:[],
  
    // Variaveis relacionadas a parte III
    III1: '',
    III1_1: [],
    III2:'',
    III2_1: '',
    IIIR1: [],
    III3: '',
    III3_1: [],
    IIIR2: [],
    III4: '',
    III4_1: '',
    IIIR3: [],
    III5: '',
    III6: '',
    IIIR4: [],
    III7: '',
    III7_1: '',
    IIIR5: [],
    III8:'',
    III9:'',
    III9_1:'',
    III9_2: '',
    IIIR6: [],
    III10: '',
    IIIR7: [],
    III11:'',
    III11_1: '',
    IIIR8:[],
    III12: '',
    III12_1: [],
    III12_2: '',
    III13: '',
    IIIR9: [],
    
    // Variaveis relacionadas a parte IV
    IV1: '',
    IV1_1: '',
    IV2: '',
    IV3: '',
    IV3_1: '',
    IV4: '',
    IV4_1: '',
    IVR1: [],
    IV5: '',
    IVR2: [],
  
    // Variaveis relacionadas a parte V
    V1: '',
    V2: '',
    V2_1: '',
    VR1: [],
    V3: '',
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
    if (this.showInter == 1){
      this.showInter = 0;
    }
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
  if (this.I2_1A) { this.formulario.I2_1.push('Tomar banho') };
  if (this.I2_1B) { this.formulario.I2_1.push('Higiene pessoal: usar o banheiro, limpar-se ou arrumar as roupas') };
  if (this.I2_1C) { this.formulario.I2_1.push('Vestir-se') };
  if (this.I2_1D) { this.formulario.I2_1.push('Alimentar-se ') };
  if (this.I2_1E) { this.formulario.I2_1.push('Transferência: Levantar-se e andar') };
  if (this.I2_1F) { this.formulario.I2_1.push(this.I2_1i)};

  /* Checkbox Intervenção 1R1 - I2 */
  if (this.IR1_A) { this.formulario.IR1.push('Verificar a necessidade de dispositivos de adaptação para higiene pessoal, vestir-se, arrumar-se, usar o vaso sanitário e alimentar-se.') };
  if (this.IR1_B) { this.formulario.IR1.push('Encorajar o idoso a realizar atividades normais da vida diária de acordo como seu nível de capacidade.')};
  if (this.IR1_C) { this.formulario.IR1.push('Incentivar o cuidador a encorajar a independência do idoso e a interferir apenas quando o paciente não conseguir executar algo')};

  /* Checkbox Intervenção IR2 - I6 */
  if (this.IR2_A) { this.formulario.IR2.push("Ensinar ao cuidador os planos médicos e de enfermagem para o cuidado")};
  if (this.IR2_B) { this.formulario.IR2.push("Determinar as expectativas comportamentais adequadas ao estado cognitivo do idoso")};

  /* Checkbox Intervenção 1R3 - I7 */
  if (this.IR3_A) { this.formulario.IR3.push('Avaliar o nível de conhecimento do cuidador ') };
  if (this.IR3_B) { this.formulario.IR3.push('Orientar sobre a patologia – Explicar que o Alzheimer é predominante nos idosos, o cuidador deve ser orientado que a perda das funções cognitivas como a memória, atenção, linguagem e orientação são esperadas. Deve-se mencionar também que não há cura, mas há tratamento para a doença, o tratamento farmacológico e o não farmacológico que deve ser  composto por atividades de estimulação cognitiva, física e social visando a manutenção\ preservação dessas habilidades.  ')};
  if (this.IR3_C) { this.formulario.IR3.push('Esclarecer dúvidas de acordo com a demanda')};


 }

}
