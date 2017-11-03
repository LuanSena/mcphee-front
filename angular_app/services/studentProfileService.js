angular.module('mainApp')
    .service('studentProfileService', function () {
        this.source_data = 0;

        this.setSourceData = function (param) {
            this.source_data = param;
        };

        this.getStudentId = function () {
            return this.source_data["getStudentId"]
        };
        this.getStudentName = function () {
            return this.source_data["getStudentName"]
        };
        this.getStudentGrade = function () {
            return this.source_data["getStudentGrade"]
        };
        this.getStudentAge = function () {
            return this.source_data["getStudentAge"]
        };
        this.getStudentCreatedAt = function () {
            return this.source_data["getStudentCreatedAt"]
        };
        this.getStudentNacionality = function () {
            return this.source_data["getStudentNacionality"]
        };
        this.getStudentDiarys = function () {
            return this.source_data["getStudentDiarys"]
        };
        this.getStudentObs = function () {
            return this.source_data["obs"]
        };
        this.getStudentEatingObs = function () {
            return this.source_data["getStudentEatingObs"]
        };
    });
