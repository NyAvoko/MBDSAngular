import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AssignmentsService } from '../../shared/assignments.service';

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

  constructor(private assignmentsService: AssignmentsService) { }
  onAssignmentRendu() {
    //on a cliqué sur le check box, on change le statut de l'assignment
    if (this.assignmentTransmis){
      this.assignmentTransmis.rendu = true;
      this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe(message => {
        console.log(message);
      });
    }
  }
  onDeleteAssignment() {
   //this.deleteAssignment.emit();
   this.assignmentsService.deleteAssignment(this.assignmentTransmis!).subscribe(message => {
    console.log(message);
   })
  }

}
