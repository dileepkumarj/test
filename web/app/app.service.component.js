System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MyServiceData;
    return {
        setters:[],
        execute: function() {
            MyServiceData = (function () {
                function MyServiceData() {
                }
                MyServiceData.prototype.mydata = function () {
                    console.log('data');
                };
                return MyServiceData;
            }());
            exports_1("MyServiceData", MyServiceData);
        }
    }
});
//# sourceMappingURL=app.service.component.js.map