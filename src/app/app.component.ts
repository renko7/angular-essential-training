import { Component } from '@angular/core';

// takes in meta-data with known properties to make class an angular component
// W3 standard says to have a prefix for all custom DOM properties
@Component({
    selector: 'mw-app',
    templateUrl: './app.component.html',
    styles: [`
        h1 {
            color: red;
        }
        h2 {
            color: orange;
        }`,`
        .description {
            color: yellow;
        }
    `]
})
export class AppComponent{}