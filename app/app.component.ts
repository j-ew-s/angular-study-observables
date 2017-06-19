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
    form: ControlGroup;



    constructor(fb: FormBuilder) {

        this.form = fb.group({
            search: []
        });

        var search = this.form.find('search');
        search.valueChanges.debounceTime(400)
                            .map(str => (<string>str).replace(' ', '-'))
                            .subscribe(x => console.log(x));

        var dates = [new Date(2017, 7, 9),
                    new Date(2017, 7, 10),
                    new Date(2017, 7, 11)];

        Observable.fromArray(dates)
                    .map(date => {
                        console.log("Getting start : " + dates);
                        return [1, 2, 3];
                    })
                    .subscribe(x => console.log(x));


    }
}