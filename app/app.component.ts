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

     var counter  = 0;

     var ajaxCall = Observable.of('url')
                                .flatMap(() => {
                                    if (++counter < 2)
                                        return Observable.throw(new Error ("Request failed"));
                                    return Observable.of([1,2,3]);
                                });
    ajaxCall.retry(3)
    .subscribe( x => console.log(x), error => console.error(error));

    }
}