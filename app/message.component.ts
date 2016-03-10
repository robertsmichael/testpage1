import {Component} from 'angular2/core';
import {appHeader} from './dev/header/appHeader';

@Component({
    selector: 'ol-message',
    template: `<div class="container">
                   <h1>Welcome to the {{year}} Olympics Quiz</h1>
               </div>`
})
export class MessageComponent {

    year: number = 2012;

}