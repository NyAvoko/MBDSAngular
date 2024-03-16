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
import { RouterLink } from '@angular/router';

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
    RouterLink,
  ],
})
export class AssignmentsComponent implements OnInit {
  titre = 'Liste des assignments';
  ajoutActive = false;
  assignments: Assignment[] = [];

  //ice on injecte le service
  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit() {
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
