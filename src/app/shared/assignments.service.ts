import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
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
  
  constructor() { }

  getAssignments():Observable<Assignment[]>{
    return of(this.assignments);
  }
  addAssignment(assignment:Assignment):Observable<string> {
    this.assignments.push(assignment);
    return of("Assignment ajouter");
  }

  updateAssignment(assignment:Assignment):Observable<string> {
      return of("Assignment modifié");
  }
  deleteAssignment(assignment:Assignment):Observable<string> {
      return of("Assignment supprimé");
  }
}
