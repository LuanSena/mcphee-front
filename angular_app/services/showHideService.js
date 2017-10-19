angular.module('mainApp')
    .service('showHideService', function () {
        this.showLogin = true;
        this.showMain = false;


        this.getShowLogin = function () {
            return this.showLogin;
        };

        this.getShowMain = function () {
            return this.showMain;
        };

        this.setShowLogin = function (param) {
            this.showLogin = param;
        };

        this.setShowMain = function (param) {
            return this.showMain = param;
        }

    });
