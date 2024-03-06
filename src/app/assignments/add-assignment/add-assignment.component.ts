import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Assignment } from '../assignment.model';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AssignmentsService } from '../../shared/assignments.service';
@Component({
  selector: 'app-add-assignment',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
  ],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {

  //champs de formulaire
  nomAssignment = '';
  dateDeRendu = undefined;

  constructor(private assignmentsService: AssignmentsService) { }

  onSubmit(event: any) {
    if (this.nomAssignment == '' || this.dateDeRendu === undefined) {
      return;
    }
    //on crée un nouvel assignment
    let nouvelAssignment = new Assignment();
    //on generale un id aléatoire (plus tard ce sera fait coté serveur par une base de données)
    nouvelAssignment.id = Math.floor(Math.random() * 10000000);
    nouvelAssignment.nom = this.nomAssignment;
    nouvelAssignment.dateRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;

    //on utilise le service pour directement ajouter
    this.assignmentsService.addAssignment(nouvelAssignment)
      .subscribe(reponse => {
        console.log(reponse);
        //on navige pour afficher la liste des assignments
        //en utilisant le router de manière programmatique
        //TODO!!!
      });
  }

}
