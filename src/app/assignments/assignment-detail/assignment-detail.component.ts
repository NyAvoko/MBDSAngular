import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {
onClickEdit() {
this.router.navigate(['/assignment', this.assignmentTransmis?.id, 'edit'],
{queryParams:{nom:this.assignmentTransmis?.nom}, fragment: 'edition'});
}
  assignmentTransmis: Assignment | undefined;

  constructor(private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAssignment();
  }


  getAssignment() {
    const id = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id).subscribe(assignment => this.assignmentTransmis = assignment);
  }
  onAssignmentRendu() {
    //on a cliqué sur le check box, on change le statut de l'assignment
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;
      this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message =>console.log(message));
      this.router.navigate(['/home']);
    }
  }
  onDelete() {
    //on va directement utiliser le service
    if (this.assignmentTransmis) {
      this.assignmentsService.deleteAssignment(this.assignmentTransmis)
      .subscribe(message =>console.log(message));
        // on va cacher la vue de detail en mettant assignmentTransmis a undefined
        //this.assignmentTransmis = undefined;
        this.router.navigate(['/home']);
    }
  }

}
