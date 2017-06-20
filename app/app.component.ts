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

        var observable = Observable.empty();
        observable.subscribe(x => console.log(x));

        observable = Observable.range(1, 5);
        observable.subscribe(x => console.log(x));

        observable = Observable.of(1, 5);
        observable.subscribe(x => console.log(x));

        observable = Observable.of([1,2,3,4,5]);
        observable.subscribe(x => console.log(x));
    }


}