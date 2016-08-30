System.register(['angular2/core', './jquery.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, jquery_component_1, core_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (jquery_component_1_1) {
                jquery_component_1 = jquery_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(elRef) {
                    this.elRef = elRef;
                    this.valuedata = 'Mydata';
                    this.datalist = [
                        { name: 'dileep', id: 1 },
                        { name: 'ajay', id: 2 },
                        { name: 'jithander', id: 3 },
                        { name: 'raju', id: 4 }
                    ];
                    this.power = '';
                }
                AppComponent.prototype.ClickHere = function () {
                    console.log('This value is : ' + this.power);
                };
                AppComponent.prototype.ngOnInit = function () {
                    jQuery(this.elRef.nativeElement).find('#id').on('click', function () {
                        alert("clicked me");
                    });
                    jQuery("#id").animate({ 'left': '500px' });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './views/home.html',
                        directives: [jquery_component_1.jQueryComponent]
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=main.component.js.map