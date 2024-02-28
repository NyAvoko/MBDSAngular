import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  titre ="Mon application sur les Assignments!"
  assignments = [
    {
      nom: "TP1 sur WebComponents, un lecteur audio  amélioré",
      daterendu: '2024-02-29',
      rendu: true
    },
    {
      nom:"Devoir sql3 Serge Miranda",
      daterendu: '2024-02-25',
      rendu: false
    },
    {
      nom:"Devoir C# Mr Naina",
      daterendu: '2024-02-29',
      rendu: false
    }
  ];
}
