import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

export interface Formulario {
  Q1: String;
  Q2: String;
  Q2_1:String[];
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

  public addFormulario(formulario: Formulario){
    return this.formulariosCollection.add(formulario);
  }

  public getFormularios(){
    return this.formularios;
  }

}
