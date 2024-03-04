import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../shared/rendu.directive';
import { MatButtonModule } from '@angular/material/button';
import { Assignment } from './assignment.model';

import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { MatListModule } from '@angular/material/list';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsService } from '../shared/assignments.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-assignments',
  standalone: true,

  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
  imports: [
    CommonModule,
    RenduDirective,
    AssignmentDetailComponent,
    MatListModule,
    AddAssignmentComponent,
    MatButtonModule,
  ],
})
export class AssignmentsComponent implements OnInit {
  titre = 'Liste des assignments';
  ajoutActive = false;
  formeVisible = false;

  // memorisation de l'assignement cliqué
  assignmentSelectionne: Assignment | undefined;

  assignmentClicke(a: Assignment) {
    console.log('assignment clique : ' + a.nom);

    this.assignmentSelectionne = a;
  }

  onAddAssignmentBtnClick() {
    this.formeVisible = true;
  }

  ajoutAssignment(event: Assignment) {
    //this.assignments.push(event);
    this.assignmentsService.addAssignment(event).subscribe((reponse) => {
      console.log(reponse);
      //on ne cache le formulaire que si l'ajout est ok
      // si non on rique de ne pas voir l'assignement ajouté
      this.formeVisible = false;
    });
  
  }

  onDeleteAssignment() {
    if (this.assignmentSelectionne) {
      const index = this.assignments.indexOf(this.assignmentSelectionne);
      this.assignments.splice(index, 1);
      
      //pour faire disparaitre la vue de detail
      this.assignmentSelectionne = undefined;
    }
  }

  assignments: Assignment[] = [];

  //ice on injecte le service
  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit(){
 
    console.log('ngInit assignment , appelée AVANT affichage de composant');
   this.getassignmentFromService(); 
  }

  getassignmentFromService() {
    // on recupère le donnée depuis le service
    this.assignmentsService.getAssignments().subscribe((assignments) => {
      //les donnée arrive ici au bout d'un certain temps
      console.log('donnée arrivé');
      this.assignments = assignments;
    });
    console.log('REQUETE envoiée');
  }
}
