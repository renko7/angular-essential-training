import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'

// decorators = piece of code that is applied to class or sometimes method
// ngmodule takes in object with known properties (metadata) to convert the class into an angular module
// ngmodule is the angular ROOT MODULE

@NgModule({
    imports: [
        BrowserModule
    ], // bring in other angular modules
    declarations: [
        AppComponent
    ], // make components, directives, pipes avaiable
    bootstrap: [
        AppComponent
    ] // which component or components will be the entry point
})
export class AppModule {}