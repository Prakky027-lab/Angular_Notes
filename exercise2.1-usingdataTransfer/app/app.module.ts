import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddEmployeeComponent }  from './app.addEmployee';
import {FormsModule} from '@angular/forms';
import { ShowEmployeeComponent } from './app.showEmployee';

@NgModule({
    imports: [
        BrowserModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent, ShowEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }