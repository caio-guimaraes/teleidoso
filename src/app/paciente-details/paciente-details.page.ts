import { Component, OnInit } from '@angular/core';
import { Paciente } from '../models/paciente/paciente.model';
import { PacienteService } from '../services/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-paciente-details',
  templateUrl: './paciente-details.page.html',
  styleUrls: ['./paciente-details.page.scss'],
})
export class PacienteDetailsPage implements OnInit {

  paciente: Paciente;
  pacienteKey = null;
  constructor(private pacienteList: PacienteService, private route: ActivatedRoute, private loadingController: LoadingController) { }

  ngOnInit() {
    this.pacienteKey = this.route.snapshot.params['id'];
    if(this.pacienteKey){
      this.loadPaciente();
    }
  }

  async loadPaciente(){
    const loading = await this.loadingController.create({
      message: 'Loading Paciente..'
    });

    await loading.present();

    this.pacienteList.getPaciente(this.pacienteKey).subscribe(res =>{
      loading.dismiss();
      this.paciente = res;
    });
  }

}
