import { Component,Input,EventEmitter, Output} from "@angular/core";





@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent{
    empShow:string="Show capgemini";
    @Input()
    inchild:string;
    @Output()
    notify:EventEmitter<string>=new EventEmitter<string>();
    callingparent():any{
        this.notify.emit("from child,data send")

    }


}
