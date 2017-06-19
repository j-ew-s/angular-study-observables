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

        
        var dates = [new Date(2017, 7, 9),
        new Date(2017, 7, 10),
        new Date(2017, 7, 11)];

        Observable.fromArray(dates)
            .map(date => {
                console.log("Getting start : " + date);
                return [1, 2, 3];
            })
            .subscribe(x => console.log(x));

    }


}