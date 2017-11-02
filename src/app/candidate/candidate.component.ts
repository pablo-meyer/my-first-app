import {Component} from '@angular/core';
@Component({
    selector: 'app-candidate',
    templateUrl: './candidate.component.html',
    styles: [`.online{color:white}`]
})
export class CandidateComponent {
    firstName  = 'Pablo';
    lastName = 'Meyer';
    id = 999;
    status = '';
    fullName() { return this.firstName + ' ' + this.lastName; }

    constructor() {
        this.status = Math.random() > .5 ? 'online' : 'offline';
    }
}
