import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import{AddEmployeeComponent} from './app.addemployee';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
@NgModule({            // main method to run
    imports: [
        BrowserModule,HttpClientModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }