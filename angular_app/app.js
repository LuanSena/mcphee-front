(function () { var app = angular.module('mainApp', []);

    /*Controller with application modules status*/
    app.controller("appController", ['$scope', 'showHideService', 'schoolProfileService' , function($scope, showHideService, schoolProfileService) {

        this.getShowLogin = function() {
            return showHideService.getShowLogin()
        };

        this.getShowMain = function() {
            return showHideService.getShowMain()
        };

        this.getShowMenus = function() {
            return showHideService.getShowMenus()
        };

        this.getShowSchoolProfile = function() {
            return showHideService.getShowSchoolProfile()
        };

        this.getShowStudentProfile = function() {
            return showHideService.getShowStudentProfile()
        };

        this.getShowCreateDiary = function() {
            return showHideService.getShowCreateDiary()
        };

    }]);
})();
