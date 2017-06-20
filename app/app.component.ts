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
        
        var userObservable = Observable.of({
            userId: 1, userName: 'Gabriel'
        }).delay(1000);

        var twitterObservable = Observable.of([{
            username: 'g_scavvassa', twitte: 'text test'
        }, {
            username: 'g_scavvassa', twitte: 'text test 2'
        }, {
            username: 'g_scavvassa', twitte: 'text test 3'
        }, {
            username: 'g_scavvassa', twitte: 'text test 4'
        }]).delay(5000);

        Observable.forkJoin(userObservable, twitterObservable)
        .map(x => new Object({user: x[0], twitter: x[1]}))
        .subscribe(result => console.log(result))
    }
}