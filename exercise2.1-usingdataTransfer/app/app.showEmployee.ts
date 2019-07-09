import { Component,Input } from '@angular/core';
import { Identifiers } from '@angular/compiler';

@Component({
    selector: 'show-emp',
    templateUrl: 'app.showemp.html'
})

export class ShowEmployeeComponent {
    @Input()
    empShowAll: any[] ;
}