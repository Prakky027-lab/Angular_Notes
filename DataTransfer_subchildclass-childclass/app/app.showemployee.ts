import { Component,Input} from "@angular/core";
@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})
export class ShowEmployeeComponent{
    @Input()
    inchildShow:string;
}