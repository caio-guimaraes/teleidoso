import { Component, OnInit } from '@angular/core'
import { Paciente } from '../models/paciente/paciente.model';
import { Observable } from 'rxjs';
import { PacienteService } from '../services/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.page.html',
  styleUrls: ['./pacientes-list.page.scss'],
})
export class PacientesListPage implements OnInit {

  // lista: Observable<Paciente[]>
  lista: Paciente[];
  
  constructor(private router: Router, private pacientesList: PacienteService) {
    // this.lista = this.pacientesList.getAll().valueChanges();
    // console.log(this.lista);
   }

  ngOnInit() {
    this.pacientesList.getAll().subscribe(res => {
      this.lista = res;
    })
  }

  public goToCadastroPacientes(){
    this.router.navigate(['/cadastro-pacientes']);
  }

  public visualizar(id){
    this.router.navigate(['/paciente-details', id]);
  }

  public goToFormsList(){
    this.router.navigate(['/form-list']);
  }

}
