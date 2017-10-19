(function () { var app = angular.module('mainApp', []);

    /*Controller with application modules status*/
    app.controller("appController", ['$scope', 'showHideService' , function($scope, showHideService) {

        this.getShowLogin = function() {
            return showHideService.getShowLogin()
        };

        this.getShowMain = function() {
            return showHideService.getShowMain()
        };

    }]);
})();
