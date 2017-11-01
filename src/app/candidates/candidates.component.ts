import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  allowNewCandidate= false;
  candidateStatus= 'Inactive';
  candidateName = '';
  candidateCreated = false;
  constructor() {
    setTimeout(()  => {
      this.allowNewCandidate = true;
    }, 1000);
  }

  ngOnInit() {
  }

  onCreateCandidate() {
    this.candidateCreated = true;
    this.candidateStatus = `Candidat is created, candidate name is ${this.candidateName}`;
  }
}
