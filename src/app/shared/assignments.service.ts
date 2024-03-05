import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [
    {
      nom: "TP1 sur WebComponents, un lecteur audio  amélioré",
      dateRendu: new Date('2024-02-29'),
      rendu: true
    },
    {
      nom: "Devoir sql3 Serge Miranda",
      dateRendu: new Date('2024-02-25'),
      rendu: false
    },
    {
      nom: "Devoir C# Mr Naina",
      dateRendu: new Date('2024-02-29'),
      rendu: false
    }
  ];

  constructor(private logService: LoggingService) { }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }
  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    this.logService.log(assignment.nom, "a ete ajouter");
    return of("Assignment ajouter");
  }

  updateAssignment(assignment: Assignment): Observable<string> {
    this.logService.log(assignment.nom, "a ete modifié");
    return of("Assignment modifié");
  }
  deleteAssignment(assignment: Assignment): Observable<string> {
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    this.logService.log(assignment.nom, "a ete supprimé");
    return of("Assignment supprimé");
  }
}
