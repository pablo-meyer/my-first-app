import {Component} from '@angular/core';
@Component({
    selector: 'app-candidate',
    templateUrl: './candidate.component.html'
})
export class CandidateComponent {
    firstName: string  = 'Pablo';
    lastName: string = 'Meyer';
    id: number = 999;
    fullName() { return this.firstName + ' ' + this.lastName; }

}
