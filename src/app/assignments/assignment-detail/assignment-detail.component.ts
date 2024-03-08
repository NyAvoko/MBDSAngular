import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

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
      { queryParams: { nom: this.assignmentTransmis?.nom }, fragment: 'edition' });
  }
  assignmentTransmis: Assignment | undefined;

  constructor(private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }


  ngOnInit() {
    // Recuperation des query params (ce qui suit le ? dans l'url)
    console.log(this.route.snapshot.queryParams);
    // recuperation des fragment (ce qui suit le # dans l'url)
    console.log(this.route.snapshot.fragment);
    //on recupere l'id de l'assignment dans l'URL à l'aide de ActivateRoute
    const id = +this.route.snapshot.params['id'];
    //on utilise le service pour récupérer l'assignment avec cet id
    this.assignmentsService.getAssignment(id)
      .subscribe(assignment => {
        this.assignmentTransmis = assignment;
      });
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
        .subscribe(message => {
          console.log(message);
          //on navige vers la liste des assignments
          this.router.navigate(['/home']);
        });
    }
  }
  onDelete() {
    //on va directement utiliser le service
    if (this.assignmentTransmis) {
      this.assignmentsService.deleteAssignment(this.assignmentTransmis)
        .subscribe(message => {
          console.log(message);
          // on va cacher la vue de detail en mettant assignmentTransmis a undefined
          this.assignmentTransmis = undefined;
          //this.assignmentTransmis = undefined;
          this.router.navigate(['/home']);
        });
    }
  }

  isAdmin(){
    return this.authService.loggedIn;
  }
}
