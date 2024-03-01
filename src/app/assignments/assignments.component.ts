import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RenduDirective} from '../shared/rendu.directive';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Assignment } from './assignment.model';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AssignmentDetailComponent } from "./assignment-detail/assignment-detail.component";
import {MatListModule} from '@angular/material/list';

@Component({
    selector: 'app-assignments',
    standalone: true,
    providers: [provideNativeDateAdapter()],
    templateUrl: './assignments.component.html',
    styleUrl: './assignments.component.css',
    imports: [
        CommonModule,
        RenduDirective,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatFormFieldModule,
        AssignmentDetailComponent,
        MatListModule
    ]
})

export class AssignmentsComponent implements OnInit {
  titre ="Liste des assignments";
  ajoutActive = false;

  //champs de formulaire
  nomAssignment = '';
  dateDeRendu = undefined;

  onSubmit(event: any) {
    if(this.nomAssignment == '' || this.dateDeRendu === undefined) {
      return;
    }
  //on crée un nouvel assignment
  let nouvelAssignment = new Assignment();
  nouvelAssignment.nom = this.nomAssignment;
  nouvelAssignment.dateRendu = this.dateDeRendu;
  nouvelAssignment.rendu = false;

  // on le rajoute au tableau d'assignment
  this.assignments.push(nouvelAssignment);
    
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
