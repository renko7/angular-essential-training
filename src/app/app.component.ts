import { Component } from '@angular/core';

// takes in meta-data with known properties to make class an angular component
// W3 standard says to have a prefix for all custom DOM properties
@Component({
    selector: 'mw-app',
    template: '<h1>My App</h1>'
})
export class AppComponent{}