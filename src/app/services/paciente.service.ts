import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Paciente } from '../models/paciente/paciente.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { Cuidador } from '../models/cuidador/cuidador.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  // private pacientesListRef = this.db.list<Paciente>('pacientes')
  private pacientesCollection: AngularFirestoreCollection<Paciente>;
  private pacientesList: Observable<Paciente[]>;

  // constructor(private db: AngularFireDatabase) { }
  constructor(private db: AngularFirestore) { 
    this.pacientesCollection = db.collection<Paciente>('pacientes');

    this.pacientesList = this.pacientesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )

  }

  //private pacientesList: Observable<Paciente[]>;

  public getAll(){
    return this.pacientesList;
  }

  public async create(paciente: Paciente){
    let id = await this.pacientesCollection.ref.doc().id;
    paciente['key'] = id;
    return this.pacientesCollection.doc(id).set(paciente);
    // return this.pacientesCollection.add(paciente);
  }

  public getPaciente(id): Observable<any>{
    return this.pacientesCollection.doc<Paciente>(id).valueChanges();
  }

  updatePaciente(paciente: Paciente, id: string){
    return this.pacientesCollection.doc(id).update(paciente);
  }

  public remove(id){
    return this.pacientesCollection.doc(id).delete;
  }

  // public getAll(){
  //   return this.pacientesListRef; 
  // }

  // public create(paciente: Paciente){
  //   return this.pacientesListRef.push(paciente); 
  // }
}
