angular.module('mainApp')
    .service('showHideService', function () {
        this.showLogin = true;
        this.showMain = false;
        this.showMenus = false;
        this.showSchoolProfile = false;
        this.showStudentProfile = false;
        this.createDiary = false;


        this.getShowLogin = function () {
            return this.showLogin;
        };

        this.getShowMain = function () {
            return this.showMain;
        };

        this.getShowMenus = function () {
            return this.showMenus;
        };

        this.setShowMenus = function (param) {
            this.showMenus = param;
        };

        this.setShowLogin = function (param) {
            this.showLogin = param;
        };

        this.setShowMain = function (param) {
            return this.showMain = param;
        };

        this.getShowSchoolProfile = function () {
            return this.showSchoolProfile;
        };

        this.setShowSchoolProfile = function (param) {
            return this.showSchoolProfile = param;
        };

        this.getShowStudentProfile = function () {
            return this.showStudentProfile;
        };

        this.setShowStudentProfile = function (param) {
            return this.showStudentProfile = param;
        };

        this.getShowCreateDiary = function () {
            return this.createDiary;
        };

        this.setShowCreateDiary = function (param) {
            this.createDiary = param
        };
        this.setCleanScreen = function () {
            this.showLogin = false;
            this.showMain = false;
            this.showSchoolProfile = false;
            this.showStudentProfile = false;
            this.createDiary = false;
        }
    });
