import { NgModule } from '@angular/core';

// decorators = piece of code that is applied to class or sometimes method
// ngmodule takes in object with known properties (metadata) to convert the class into an angular module
// ngmodule is the angular ROOT MODULE

@NgModule({
    imports: [], // bring in other angular modules
    declarations: [], // make components, directives, pipes avaiable
    bootstrap: [] // which component or components will be the entry point
})
export class AppModule {}