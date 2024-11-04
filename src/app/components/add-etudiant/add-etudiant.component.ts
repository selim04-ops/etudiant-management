import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent {
  etudiant = { nomEtudiant: '', prenomEtudiant: '',cinEtudiant: 0, dateNaissance: '' }; // Adjust based on your Universite model

  constructor(private etudiantService: EtudiantService, private router: Router) {}

  addUniversite(): void {
    this.etudiantService.addEtudiant(this.etudiant).subscribe(() => {
      this.router.navigate(['/etudiant-list']);
    });
  }
}
