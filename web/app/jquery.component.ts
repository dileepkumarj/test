import {Component} from 'angular2/core';
import {ElementRef} from 'angular2/core';
import {OnInit} from 'angular2/core';
declare var jQuery:var;
@Component({
	selector:'my-jquery',
	template:'<button>click me</button>'
})
export class jQueryComponent implements OnInit{
	constructor(private elRef:ElementRef){}
		ngOnInit():any{
			jQuery(this.elRef.nativeElement).find('button').on('click',function(){
			alert("clicked me");
			});
		}
	
}