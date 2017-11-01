angular.module('mainApp')
    .service('schoolProfileService', function () {
        this.source_data = 0;

        this.setSourceData = function (param) {
            this.source_data = param;
        };

        this.getSchoolId = function () {
            return this.source_data["getSchoolId"]
        };
        this.getFullName = function () {
            return this.source_data["getFullName"]
        };
        this.getFantasyName = function () {
            return this.source_data["getFantasyName"]
        };
        this.getCreatedAt = function () {
            return this.source_data["getCreatedAt"]
        };
        this.getStreet = function () {
            return this.source_data["getStreet"]
        };
        this.getEmail = function () {
            return this.source_data["getEmail"]
        };
        this.getContact = function () {
            return this.source_data["getContact"]
        };
        this.getDocument = function () {
            return this.source_data["getDocument"]
        };
        this.getOwnerName = function () {
            return this.source_data["getOwnerName"]
        };
        this.getOwnerAttribute = function () {
            return this.source_data["getOwnerAttribute"]
        };
        this.getOwnerContact = function () {
            return this.source_data["getOwnerContact"]
        };

    });
