import {Component} from 'angular2/core';
import {jQueryComponent} from './jquery.component';
import {ElementRef} from 'angular2/core';
import {OnInit} from 'angular2/core';
declare var jQuery:var;
@Component({
	selector:'my-app',
	templateUrl:'./views/home.html',
	directives:[jQueryComponent]
})
export class AppComponent{
	valuedata='Mydata';
	public datalist=[
	{name:'dileep',id:1},
	{name:'ajay',id:2},
	{name:'jithander',id:3},
	{name:'raju',id:4}
	];
	constructor(private elRef:ElementRef){}
	public power:string='';
	ClickHere(){
		console.log('This value is : '+this.power);
	}
	ngOnInit():any{
			jQuery(this.elRef.nativeElement).find('#id').on('click',function(){
			alert("clicked me");
			});
			jQuery("#id").animate({'left':'500px'});
		}

}