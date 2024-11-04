import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../services/etudiant.service';
import { Etudiant } from '../../models/etudiant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {
createNewEtudiant() {
  this.router.navigate(['/add-etudiant']);
}

  etudiants: Etudiant[] = [];

  constructor(private router: Router,private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.loadEtudiants();
  }

  loadEtudiants(): void {
    this.etudiantService.getAllEtudiants().subscribe(
      (data) => this.etudiants = data,
      (error) => console.error('Error fetching etudiants', error)
    );
  }

  deleteEtudiant(id: number): void {
    if (confirm("Are you sure you want to delete this Etudiant?")) {
      this.etudiantService.deleteEtudiant(id).subscribe(
        () => {
          this.loadEtudiants(); // Refresh the list after deletion
        },
        (error) => console.error('Error deleting etudiant', error)
      );
    }
  }
}
