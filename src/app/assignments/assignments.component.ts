import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RenduDirective} from '../shared/rendu.directive';
import { MatButtonModule } from '@angular/material/button';
import { Assignment } from './assignment.model';

import { AssignmentDetailComponent } from "./assignment-detail/assignment-detail.component";
import {MatListModule} from '@angular/material/list';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';

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
        MatButtonModule
    ]
})

export class AssignmentsComponent implements OnInit {
  titre ="Liste des assignments";
  ajoutActive = false;
  formeVisible = false;


  // memorisation de l'assignement cliqué
  assignmentSelectionne:Assignment | undefined;

  

  assignmentClicke(a:Assignment) {
    console.log("assignment clique : "+ a.nom);

    this.assignmentSelectionne = a;
  }
  
  onAddAssignmentBtnClick() {
    this.formeVisible = true;
  }

  ajoutAssignment(event:Assignment) {
    this.assignments.push(event);
    this.formeVisible = false;
  }

  onDeleteAssignment() {
    if (this.assignmentSelectionne) {
      const index = this.assignments.indexOf(this.assignmentSelectionne);
      this.assignments.splice(index, 1);

      //pour faire disparaitre la vue de detail
      this.assignmentSelectionne = undefined;
    }
  }

  assignments:Assignment[] = [
    {
      nom: "TP1 sur WebComponents, un lecteur audio  amélioré",
      dateRendu: new Date('2024-02-29'),
      rendu: true
    },
    {
      nom:"Devoir sql3 Serge Miranda",
      dateRendu: new Date('2024-02-25'),
      rendu: false
    },
    {
      nom:"Devoir C# Mr Naina",
      dateRendu: new Date('2024-02-29'),
      rendu: false
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 3000);
  }
}
