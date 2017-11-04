angular.module('mainApp')
    .service('studentProfileService', function () {
        this.source_data = 0;

        this.setSourceData = function (param) {
            this.source_data = param;
        };

        this.getStudentId = function () {
            return this.source_data["studentId"]
        };
        this.getStudentName = function () {
            return this.source_data["name"]
        };
        this.getStudentGrade = function () {
            return this.source_data["grade"]
        };
        this.getStudentAge = function () {
            return this.source_data["age"]
        };
        this.getStudentCreatedAt = function () {
            return this.source_data["createdAt"]
        };
        this.getStudentNacionality = function () {
            return this.source_data["nacionality"]
        };
        this.getStudentDiarys = function () {
            return this.source_data["diarys"]
        };
        this.getStudentObs = function () {
            return this.source_data["obs"]
        };
        this.getStudentEatingObs = function () {
            return this.source_data["eatingObs"]
        };
    });