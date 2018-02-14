import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	emitter: any
	constructor() { }

	ngOnInit() {

		const observable = Observable.interval(1000)
		const observer = {
			next: function (value: any) {
				value.timestamp = (new Date(value.timestamp))
				console.log(value)
			}
		}

		observable.map(function (value) {
			return 'Number ' + value
		})
			.throttleTime(1900)
			.timestamp()
			.concat()
			.subscribe(observer)
	}

}
