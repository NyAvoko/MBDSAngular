import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Assignment } from '../assignment.model';
import {provideNativeDateAdapter} from '@angular/material/core';
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
  @Output() 
  nouvelAssignment = new EventEmitter<Assignment>();
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
  //this.assignments.push(nouvelAssignment);
  this.nouvelAssignment.emit(nouvelAssignment);
  }

}
