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
        var observable = Observable.interval(1000);
        observable
            .flatMap(x => {
                console.log("Chamando o server para pegar ultimas informações");
                return Observable.of([1, 2, 3]);
            })
            .subscribe(news => console.log(news));
    }
}