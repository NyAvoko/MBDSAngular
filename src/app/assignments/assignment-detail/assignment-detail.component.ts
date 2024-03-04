import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
  @Input()
  assignmentTransmis!: Assignment | undefined;

  @Output()
  deleteAssignment = new EventEmitter();

  onAssignmentRendu() {
    //on a cliqué sur le check box, on change le statut de l'assignment
    if (this.assignmentTransmis){
      this.assignmentTransmis.rendu = true;
    }
  }
  onDeleteAssignment() {
   this.deleteAssignment.emit();
  }

}
