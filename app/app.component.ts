import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder } from 'angular2/common'

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
})
export class AppComponent {
    constructor(fb: FormBuilder) {

        var obs = Observable.of([1, 2, 3]);//Observable.throw(new Error("Erro!!"));

        obs.subscribe(x => console.log(x),
            erro => console.error(erro),
            () => console.log("Completo"));
    }
}