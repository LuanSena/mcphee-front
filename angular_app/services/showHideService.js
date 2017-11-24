angular.module('mainApp')
    .service('showHideService', function () {
        this.showLogin = true;
        this.showMain = false;
        this.showMenus = false;
        this.showSchoolProfile = false;
        this.showSchoolList = false;
        this.showStudentProfile = false;
        this.createDiary = false;
        this.showmyStudents = false;

        this.showManagerList = false;
        this.showClassList = false;
        this.showProfList = false;
        this.showStudentList = false;




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

        this.getShowSchoolList = function () {
            return this.showSchoolList;
        };

        this.setShowSchoolList = function (param) {
            return this.showSchoolList = param;
        };



        this.getShowManagerList = function () {
            return this.showManagerList;
        };

        this.setShowManagerList = function (param) {
            return this.showManagerList = param;
        };


        this.getShowClassList = function () {
            return this.showClassList;
        };

        this.setShowClassList = function (param) {
            return this.showClassList = param;
        };

        this.getShowProfList = function () {
            return this.showProfList;
        };

        this.setShowProfList = function (param) {
            return this.showProfList = param;
        };

        this.getShowStudentList = function () {
            return this.showStudentList;
        };

        this.setShowStudentList = function (param) {
            return this.showStudentList = param;
        };


        this.getShowMyStudents = function () {
            return this.showmyStudents;
        };

        this.setShowMyStudents = function (param) {
            return this.showmyStudents = param;
        };

        this.setCleanScreen = function () {
            this.showLogin = false;
            this.showMain = false;
            this.showSchoolProfile = false;
            this.showStudentProfile = false;
            this.createDiary = false;
            this.showSchoolList = false;
            this.showmyStudents = false;
            this.showManagerList = false;
            this.showClassList = false;
            this.showProfList = false;
            this.showStudentList = false;
        }
    });
