import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

export interface Formulario {
  paciente: String;
  Q1: String;
  Q2: String;
  Q2_1:String[];
  I1: String[];
}

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private formulariosCollection: AngularFirestoreCollection <Formulario>;
  private formularios: Observable<Formulario[]>;

  constructor(db: AngularFirestore) {
    this.formulariosCollection = db.collection<Formulario>('formularios');
    this.formularios = this.formulariosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });
      })
    );
   }

  public async addFormulario(formulario: Formulario){
    let id = await this.formulariosCollection.ref.doc().id;
    formulario['key'] = id;
    return this.formulariosCollection.doc(id).set(formulario);
  }

  public getFormularios(){
    return this.formularios;
  }

  public getFormulario(id): Observable<any>{
    return this.formulariosCollection.doc<Formulario>(id).valueChanges();
  }

  updateFormulario(form: Formulario, id: string){
    return this.formulariosCollection.doc(id).update(form);
  }

  public remove(id){
    return this.formulariosCollection.doc(id).delete;
  }

}
